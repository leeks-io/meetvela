import { motion } from "framer-motion";
import { Code2, Search, Shield, Wrench, BookOpen, MessageSquare, Sparkles } from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Code Generation",
    description: "Write Rust programs for Solana — Anchor-based accounts, instructions, PDAs, and full program scaffolds with best practices.",
  },
  {
    icon: Search,
    title: "Code Interpretation",
    description: "Break down Rust/Anchor code line by line. Explain macros, structs, enums, account layouts, and space calculations.",
  },
  {
    icon: Shield,
    title: "Debugging & Security",
    description: "Detect vulnerabilities, suggest constraints and ownership checks, and highlight PDA mismanagement or realloc abuse.",
  },
  {
    icon: Wrench,
    title: "Optimization & Refactoring",
    description: "Recommend space optimizations, rent efficiency improvements, and conversion to PDA-based Anchor best practices.",
  },
  {
    icon: BookOpen,
    title: "Learning & Documentation",
    description: "Step-by-step Rust tutorials, Solana concepts like PDAs, CPI, token programs, and daily learning journal entries.",
  },
  {
    icon: MessageSquare,
    title: "Interactive Prompts",
    description: "Ask in natural language — Vela generates Rust code with contextual explanations and suggests improvements.",
  },
  {
    icon: Sparkles,
    title: "Experimental Features",
    description: "Interpret advanced Rust logic, predict code execution outcomes, and simulate what-if scenarios for program design.",
  },
];

const limitations = [
  "She cannot deploy programs automatically to Solana devnet/mainnet.",
  "She does not run Rust code in real time.",
  "She does not replace human audit — review outputs before use.",
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            What <span className="text-gradient-solana">Vela</span> Can Do
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A living Rust companion for Solana developers — she assists, interprets, educates, and evolves.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {capabilities.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-xl border border-border bg-card/60 p-6 transition-all duration-300 hover:border-glow-purple/40 hover:-translate-y-1 hover:bg-card"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-solana-subtle flex items-center justify-center mb-4 group-hover:glow-purple transition-shadow duration-300">
                <feature.icon className="w-5 h-5 text-glow-purple" />
              </div>
              <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Limitations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="rounded-xl border border-border bg-card/40 p-6">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Current Limitations
            </h3>
            <ul className="space-y-2">
              {limitations.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
