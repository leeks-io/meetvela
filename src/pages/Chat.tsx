import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Copy, Check, Home, Terminal, Download, FileText, FileDown } from "lucide-react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import ThemeToggle from "@/components/ThemeToggle";

type Message = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/vela-chat`;

const HELLO_PROGRAM = `use solana_program::{
    account_info::AccountInfo,
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    pubkey::Pubkey,
};

entrypoint!(process_instruction);

pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {
    msg!("Hello, Solana! 🚀");
    msg!("Program ID: {}", program_id);
    Ok(())
}`;

const STARTER_COMMANDS = [
  { label: "explain ownership", icon: "🦀" },
  { label: "what are traits?", icon: "⚙️" },
  { label: "write a Solana token program", icon: "🪙" },
  { label: "explain Solana PDAs", icon: "🔑" },
];

async function streamChat({
  messages,
  onDelta,
  onDone,
  onError,
}: {
  messages: Message[];
  onDelta: (text: string) => void;
  onDone: () => void;
  onError: (error: string) => void;
}) {
  const resp = await fetch(CHAT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({ messages }),
  });

  if (!resp.ok) {
    const data = await resp.json().catch(() => ({}));
    onError(data.error || `Error ${resp.status}`);
    return;
  }

  if (!resp.body) {
    onError("No response stream");
    return;
  }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let textBuffer = "";
  let streamDone = false;

  while (!streamDone) {
    const { done, value } = await reader.read();
    if (done) break;
    textBuffer += decoder.decode(value, { stream: true });

    let newlineIndex: number;
    while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
      let line = textBuffer.slice(0, newlineIndex);
      textBuffer = textBuffer.slice(newlineIndex + 1);
      if (line.endsWith("\r")) line = line.slice(0, -1);
      if (line.startsWith(":") || line.trim() === "") continue;
      if (!line.startsWith("data: ")) continue;
      const jsonStr = line.slice(6).trim();
      if (jsonStr === "[DONE]") { streamDone = true; break; }
      try {
        const parsed = JSON.parse(jsonStr);
        const content = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (content) onDelta(content);
      } catch {
        textBuffer = line + "\n" + textBuffer;
        break;
      }
    }
  }

  if (textBuffer.trim()) {
    for (let raw of textBuffer.split("\n")) {
      if (!raw) continue;
      if (raw.endsWith("\r")) raw = raw.slice(0, -1);
      if (raw.startsWith(":") || raw.trim() === "") continue;
      if (!raw.startsWith("data: ")) continue;
      const jsonStr = raw.slice(6).trim();
      if (jsonStr === "[DONE]") continue;
      try {
        const parsed = JSON.parse(jsonStr);
        const content = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (content) onDelta(content);
      } catch { /* ignore */ }
    }
  }

  onDone();
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Failed to copy");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1 rounded hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
      title="Copy"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-glow-green" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}

function downloadAsTxt(content: string, filename: string) {
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

async function downloadAsPdf(content: string, filename: string) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF();
  const lines = doc.splitTextToSize(content, 180);
  let y = 15;
  doc.setFontSize(10);
  doc.setFont("courier", "normal");
  for (const line of lines) {
    if (y > 280) { doc.addPage(); y = 15; }
    doc.text(line, 15, y);
    y += 5;
  }
  doc.save(filename);
}

function ExportButton({ messages }: { messages: Message[] }) {
  const [open, setOpen] = useState(false);

  const getContent = () => {
    return messages.map((m) => `[${m.role.toUpperCase()}]\n${m.content}`).join("\n\n---\n\n");
  };

  if (messages.length === 0) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
        title="Export conversation"
      >
        <Download className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Export</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute top-8 right-0 z-50 bg-card border border-border rounded-lg shadow-xl py-1 min-w-[140px]">
            <button
              onClick={() => { downloadAsTxt(getContent(), "vela-session.txt"); setOpen(false); }}
              className="w-full flex items-center gap-2 px-3 py-2 text-xs text-foreground hover:bg-muted/50 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-muted-foreground" /> Save as .txt
            </button>
            <button
              onClick={() => { downloadAsPdf(getContent(), "vela-session.pdf"); setOpen(false); }}
              className="w-full flex items-center gap-2 px-3 py-2 text-xs text-foreground hover:bg-muted/50 transition-colors"
            >
              <FileDown className="w-3.5 h-3.5 text-muted-foreground" /> Save as .pdf
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const send = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || isLoading) return;

    const userMsg: Message = { role: "user", content };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    let assistantSoFar = "";
    const upsertAssistant = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) =>
            i === prev.length - 1 ? { ...m, content: assistantSoFar } : m
          );
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      await streamChat({
        messages: [...messages, userMsg],
        onDelta: (chunk) => upsertAssistant(chunk),
        onDone: () => setIsLoading(false),
        onError: (error) => {
          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: `⚠️ ${error}` },
          ]);
          setIsLoading(false);
        },
      });
    } catch (e) {
      console.error(e);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Failed to connect to Vela. Please try again." },
      ]);
      setIsLoading(false);
    }
  };

  const isEmpty = messages.length === 0;

  return (
    <div className="h-screen flex flex-col bg-background font-mono">
      {/* Terminal title bar */}
      <header className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 border-b border-border bg-muted/30">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-amber-500/60" />
          <div className="w-3 h-3 rounded-full bg-glow-green/60" />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-1 ml-1 sm:ml-2">
          <Link
            to="/"
            className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md text-xs text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <Link
            to="/chat"
            className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded-md text-xs text-foreground bg-muted/50"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Terminal</span>
          </Link>
        </nav>

        <div className="flex-1 text-center">
          <span className="text-xs text-muted-foreground hidden md:inline">
            vela@solana:~/workspace
          </span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <ExportButton messages={messages} />
          <ThemeToggle />
          <span className="w-2 h-2 rounded-full bg-glow-green animate-pulse" />
        </div>
      </header>

      {/* Terminal output area */}
      <div className="flex-1 overflow-y-auto bg-background">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-4">
          {isEmpty ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="pt-[4vh] sm:pt-[8vh] space-y-4"
            >
              {/* Boot sequence */}
              <div className="text-muted-foreground text-xs space-y-1">
                <p className="text-glow-green">$ vela --init</p>
                <p>Loading Rust analyzer... <span className="text-glow-green">done</span></p>
                <p>Loading Solana SDK... <span className="text-glow-green">done</span></p>
                <p>Loading knowledge base... <span className="text-glow-green">done</span></p>
                <p className="text-glow-purple">Vela v1.0.0 — Hey dev 👋 Ask me anything about Rust & Solana</p>
              </div>

              {/* Hello Solana program */}
              <div className="rounded-lg border border-border/50 bg-card/50 overflow-hidden">
                <div className="flex items-center justify-between px-3 py-1.5 border-b border-border/50 bg-muted/30">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-destructive/60" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/60" />
                    <div className="w-2 h-2 rounded-full bg-glow-green/60" />
                    <span className="ml-1 text-[10px] text-muted-foreground">hello_solana/src/lib.rs</span>
                  </div>
                  <CopyButton text={HELLO_PROGRAM} />
                </div>
                <pre className="p-3 text-[11px] sm:text-xs font-mono leading-relaxed text-foreground/80 overflow-x-auto">
                  <code>{HELLO_PROGRAM}</code>
                </pre>
              </div>

              <p className="text-xs text-muted-foreground">Hey dev, ask Vela anything about Rust or Solana:</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-lg">
                {STARTER_COMMANDS.map((q) => (
                  <button
                    key={q.label}
                    onClick={() => send(q.label)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/50 bg-card/50 hover:bg-muted/50 hover:border-glow-purple/30 transition-all text-left text-xs group"
                  >
                    <span className="text-glow-green">$</span>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {q.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <div className="space-y-3 text-sm">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.15 }}
                >
                  {msg.role === "user" ? (
                    <div className="flex items-start gap-2">
                      <span className="text-glow-green shrink-0 select-none">❯</span>
                      <span className="text-foreground break-words">{msg.content}</span>
                    </div>
                  ) : (
                    <div className="group relative pl-3 sm:pl-4 border-l-2 border-glow-purple/30 ml-1 mt-1 mb-2">
                      <div className="absolute top-0 right-0 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <CopyButton text={msg.content} />
                      </div>
                      <div className="prose prose-sm dark:prose-invert max-w-none text-foreground/90 [&_pre]:bg-muted [&_pre]:rounded-lg [&_pre]:p-3 [&_pre]:text-xs [&_pre]:relative [&_code]:text-glow-green [&_code]:text-xs [&_p]:mb-2 [&_p:last-child]:mb-0 [&_h1]:text-base [&_h2]:text-sm [&_h3]:text-sm [&_li]:text-xs break-words">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                <div className="flex items-center gap-2 pl-4 border-l-2 border-glow-purple/30 ml-1 text-muted-foreground">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  <span className="text-xs animate-pulse">processing...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </div>

      {/* Terminal input */}
      <div className="border-t border-border bg-muted/20">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-3">
          <div className="flex items-center gap-2">
            <span className="text-glow-green text-xs sm:text-sm shrink-0 select-none">
              <span className="hidden sm:inline">vela@solana:~$</span>
              <span className="sm:hidden">$</span>
            </span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="ask Vela any Rust or Solana question..."
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none caret-glow-green"
              disabled={isLoading}
            />
            <button
              onClick={() => send()}
              disabled={isLoading || !input.trim()}
              className="text-muted-foreground hover:text-glow-green transition-colors disabled:opacity-30"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
