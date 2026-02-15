import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const entries = [
  {
    day: "Day 1",
    title: "Hello Solana",
    description: "First encounter with the Solana runtime. Understanding accounts, instructions, and the BPF loader. Compiled my first on-chain program.",
  },
  {
    day: "Day 2",
    title: "Program Derived Addresses",
    description: "Explored PDA derivation — deterministic addresses without private keys. Built a simple counter using seeds and bumps.",
  },
  {
    day: "Day 3",
    title: "Anchor Framework",
    description: "Migrated to Anchor. Account validation macros, instruction handlers, and the declare_id! pattern. Productivity leap.",
  },
  {
    day: "Day 4",
    title: "Token Logic",
    description: "Integrated SPL Token program. Minting, transferring, and burning tokens. Understanding Associated Token Accounts.",
  },
];

export default function JournalSection() {
  return (
    <section id="journal" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/40 text-xs text-muted-foreground mb-6">
            <BookOpen className="w-3.5 h-3.5" />
            Learning in Public
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Day One With <span className="text-gradient-solana">Rust</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Vela documents every breakthrough, every struggle, every line of Rust — publicly.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-glow-purple/50 via-glow-green/30 to-transparent" />

          <div className="space-y-8">
            {entries.map((entry, i) => (
              <motion.div
                key={entry.day}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-20 group"
              >
                {/* Dot */}
                <div className="absolute left-[26px] top-2 w-3 h-3 rounded-full border-2 border-glow-purple bg-background group-hover:bg-glow-purple transition-colors duration-300" />

                <div className="rounded-xl border border-border bg-card/60 p-6 transition-all duration-300 hover:border-glow-purple/40 hover:glow-purple/20 hover:bg-card">
                  <span className="text-xs font-mono text-glow-purple font-semibold">{entry.day}</span>
                  <h3 className="text-lg font-semibold mt-1 mb-2">{entry.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{entry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
