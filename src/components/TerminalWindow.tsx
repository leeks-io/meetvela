import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { text: "$ vela generate", type: "command" as const },
  { text: '> Prompt: "Create a Solana program that stores user messages"', type: "prompt" as const },
  { text: "", type: "blank" as const },
  { text: "use anchor_lang::prelude::*;", type: "code" as const },
  { text: "", type: "blank" as const },
  { text: "declare_id!(\"Ve1a...ProgRAM\");", type: "code" as const },
  { text: "", type: "blank" as const },
  { text: "#[program]", type: "attribute" as const },
  { text: "pub mod message_store {", type: "code" as const },
  { text: "    use super::*;", type: "code" as const },
  { text: "", type: "blank" as const },
  { text: "    pub fn store_message(", type: "code" as const },
  { text: "        ctx: Context<StoreMessage>,", type: "code" as const },
  { text: '        content: String,', type: "code" as const },
  { text: "    ) -> Result<()> {", type: "code" as const },
  { text: "        let msg = &mut ctx.accounts.message;", type: "code" as const },
  { text: "        msg.author = ctx.accounts.author.key();", type: "code" as const },
  { text: "        msg.content = content;", type: "code" as const },
  { text: "        msg.timestamp = Clock::get()?.unix_timestamp;", type: "code" as const },
  { text: "        Ok(())", type: "code" as const },
  { text: "    }", type: "code" as const },
  { text: "}", type: "code" as const },
  { text: "", type: "blank" as const },
  { text: "✓ Program generated successfully", type: "success" as const },
  { text: "✓ Anchor tests included", type: "success" as const },
];

const getColor = (type: string) => {
  switch (type) {
    case "command": return "text-glow-green";
    case "prompt": return "text-muted-foreground";
    case "attribute": return "text-glow-purple";
    case "success": return "text-glow-green";
    case "code": return "text-foreground/90";
    default: return "text-foreground";
  }
};

export default function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= lines.length) {
          // Reset after pause
          setTimeout(() => setVisibleLines(0), 3000);
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 120);
    return () => clearInterval(timer);
  }, [visibleLines === 0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative w-full max-w-xl"
    >
      {/* Glow behind */}
      <div className="absolute -inset-4 bg-gradient-solana-subtle rounded-2xl blur-2xl animate-pulse-glow" />

      <div className="relative rounded-xl border border-border bg-card overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-glow-green/60" />
          <span className="ml-2 text-xs text-muted-foreground font-mono">vela-terminal</span>
        </div>

        {/* Code area */}
        <div className="p-4 font-mono text-sm leading-relaxed h-[380px] overflow-hidden">
          {lines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              className={getColor(line.type)}
            >
              {line.text || "\u00A0"}
            </motion.div>
          ))}
          {visibleLines < lines.length && (
            <span className="inline-block w-2 h-4 bg-glow-green animate-pulse" />
          )}
        </div>
      </div>
    </motion.div>
  );
}
