import { motion } from "framer-motion";
import { Code2, Shield, Anchor, Map, GitBranch } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Rust-Native Generation",
    description: "Generates idiomatic Rust code optimized for the Solana BPF runtime.",
  },
  {
    icon: Shield,
    title: "Solana Program Support",
    description: "Full support for native Solana programs, accounts, and instructions.",
  },
  {
    icon: Anchor,
    title: "Anchor Compatible",
    description: "Generates Anchor framework code with proper macros and validation.",
  },
  {
    icon: Map,
    title: "Public Roadmap",
    description: "Every feature, every milestone — planned and tracked in the open.",
  },
  {
    icon: GitBranch,
    title: "Open-Source Development",
    description: "Vela's core engine and generated programs are fully open-source.",
  },
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
            Built for <span className="text-gradient-solana">Developers</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Every feature designed for builders who ship on Solana.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => (
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
      </div>
    </section>
  );
}
