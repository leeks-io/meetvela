import { motion } from "framer-motion";
import { Github, Twitter, Box, Brain, ArrowLeftRight, BookOpen } from "lucide-react";

const integrations = [
  { icon: Box, label: "Solana SDK" },
  { icon: Brain, label: "GPT-4o / Claude" },
  { icon: ArrowLeftRight, label: "Anchor Framework" },
  { icon: BookOpen, label: "Rust Documentation" },
];

const references = [
  {
    icon: Github,
    label: "Solana Labs",
    href: "https://github.com/solana-labs/solana",
  },
  {
    icon: Twitter,
    label: "@leeks_io",
    href: "https://x.com/leeks_io",
  },
];

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            AI & <span className="text-gradient-solana">On-Chain</span> Integration
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-10 text-sm">
            Powered by official Rust and Solana documentation for accurate guidance.
          </p>

          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto mb-10">
            {integrations.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full border border-border bg-card/60 text-sm text-foreground hover:border-glow-purple/40 hover:bg-muted transition-all cursor-default"
              >
                <item.icon className="w-4 h-4 text-glow-green" />
                {item.label}
              </motion.div>
            ))}
          </div>

          {/* Reference links */}
          <div className="flex flex-wrap justify-center gap-4">
            {references.map((ref, i) => (
              <motion.a
                key={ref.label}
                href={ref.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card/40 text-sm text-muted-foreground hover:text-foreground hover:border-glow-green/40 transition-all"
              >
                <ref.icon className="w-4 h-4" />
                {ref.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
