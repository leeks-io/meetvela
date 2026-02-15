import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Globe, Shield } from "lucide-react";

const entries = [
  {
    id: "day-1",
    label: "Day One: Initializing",
    title: "Vela: Day One with Rust",
    entryNum: "001",
    body: "Today marks the activation of the **Vela Engine**. Unlike standard LLMs, Vela is purpose-built to navigate the strict safety constraints of the Rust programming language within the Solana Sealevel runtime.",
    cards: [
      {
        icon: Globe,
        title: "Logic Synthesis",
        desc: "Vela translates abstract natural language intent into low-level, high-performance BPF instructions.",
      },
      {
        icon: Shield,
        title: "Safety First",
        desc: "Automated audit checks for re-entrancy, overflow, and account ownership validation.",
      },
    ],
    footer:
      "Our journey begins with simplicity. We aren't just writing code; we are teaching the AI to understand the *why* behind every borrow-checker error.",
  },
  {
    id: "day-2",
    label: "Day Two: Memory Safety",
    title: "Understanding Ownership",
    entryNum: "002",
    body: "Rust's ownership model is the backbone of memory safety. Today Vela learned to navigate borrowing, lifetimes, and the borrow checker — essential for writing safe Solana programs.",
    cards: [
      {
        icon: Shield,
        title: "Borrow Checker",
        desc: "Vela now handles complex borrowing patterns and provides clear explanations of lifetime errors.",
      },
      {
        icon: Globe,
        title: "Zero-Copy Design",
        desc: "Generating account data structures that minimize serialization overhead on-chain.",
      },
    ],
    footer: "Every error from the borrow checker is a lesson. Vela doesn't just fix errors — she understands them.",
  },
  {
    id: "day-3",
    label: "Day Three: Parallelism",
    title: "Concurrent Execution on Sealevel",
    entryNum: "003",
    body: "Solana's Sealevel runtime enables parallel transaction execution. Today Vela explored how to structure programs that maximize throughput by avoiding account conflicts.",
    cards: [
      {
        icon: Globe,
        title: "Account Partitioning",
        desc: "Designing programs that shard state across multiple accounts for parallel processing.",
      },
      {
        icon: Shield,
        title: "Lock-Free Patterns",
        desc: "Using PDAs and account seeds to enable conflict-free concurrent access.",
      },
    ],
    footer: "Parallelism is Solana's superpower. Vela architectures programs to exploit it from day one.",
  },
  {
    id: "day-4",
    label: "Day Four: TEE Integration",
    title: "Trusted Execution Environments",
    entryNum: "004",
    body: "Exploring the intersection of on-chain programs and Trusted Execution Environments for confidential compute on Solana.",
    cards: [
      {
        icon: Shield,
        title: "Confidential Compute",
        desc: "Processing sensitive data inside TEE enclaves while posting proofs on-chain.",
      },
      {
        icon: Globe,
        title: "Attestation Flow",
        desc: "Verifying TEE attestation reports within Solana programs for trustless off-chain compute.",
      },
    ],
    footer: "The future of on-chain AI requires privacy. TEEs bridge the gap between transparency and confidentiality.",
  },
];

export default function JournalSection() {
  const [activeEntry, setActiveEntry] = useState(0);
  const entry = entries[activeEntry];

  return (
    <section id="journal" className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[240px_1fr] gap-12 max-w-5xl mx-auto"
        >
          {/* Sidebar */}
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
              Documentation Log
            </p>
            <div className="space-y-1">
              {entries.map((e, i) => (
                <button
                  key={e.id}
                  onClick={() => setActiveEntry(i)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all ${
                    i === activeEntry
                      ? "bg-muted border-l-2 border-glow-green text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {e.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main content */}
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-xs font-mono text-glow-green tracking-widest mb-3">
              ENTRY #{entry.entryNum}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {entry.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {entry.body}
            </p>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {entry.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-glow-purple/40"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <card.icon className="w-4 h-4 text-glow-green" />
                    <h3 className="font-semibold text-foreground text-sm">{card.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed italic">
              {entry.footer}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
