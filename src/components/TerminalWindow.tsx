import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  { text: "// Processing Solana Program via Vela Engine...", type: "comment" as const },
  { text: "pub fn process_instruction(", type: "keyword" as const },
  { text: "    program_id: &Pubkey,", type: "code" as const },
  { text: "    accounts: &[AccountInfo],", type: "code" as const },
  { text: "    instruction_data: &[u8],", type: "code" as const },
  { text: ") -> ProgramResult {", type: "keyword" as const },
  { text: "    // Vela is interpreting your intent...", type: "comment" as const },
  { text: "    let account_info_iter = &mut accounts.iter();", type: "code" as const },
  { text: '    msg!("Vela: Initializing Day One on Solana...");', type: "string" as const },
  { text: "    Ok(())", type: "code" as const },
  { text: "}", type: "code" as const },
  { text: "", type: "blank" as const },
  { text: "vela@solana:~$ Compiling Rust logic... ready.", type: "success" as const },
];

const getColor = (type: string) => {
  switch (type) {
    case "comment": return "text-muted-foreground";
    case "keyword": return "text-glow-purple";
    case "string": return "text-glow-green";
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
          setTimeout(() => setVisibleLines(0), 4000);
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 150);
    return () => clearInterval(timer);
  }, [visibleLines === 0]);

  return (
    <div className="relative w-full max-w-3xl">
      {/* Glow behind */}
      <div className="absolute -inset-4 bg-gradient-solana-subtle rounded-2xl blur-2xl animate-pulse-glow" />

      <div className="relative rounded-xl border border-border bg-card overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-amber-500/60" />
          <div className="w-3 h-3 rounded-full bg-glow-green/60" />
          <span className="ml-auto text-xs text-muted-foreground font-mono">
            vela_runtime --version 1.0.0-rust
          </span>
        </div>

        {/* Code area */}
        <div className="p-5 font-mono text-sm leading-relaxed min-h-[280px]">
          {lines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.12 }}
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
    </div>
  );
}
