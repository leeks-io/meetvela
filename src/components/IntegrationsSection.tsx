import { motion } from "framer-motion";
import { Twitter, Box, Brain, ArrowLeftRight } from "lucide-react";

const integrations = [
  { icon: Twitter, label: "X Integration" },
  { icon: Box, label: "Solana SDK" },
  { icon: Brain, label: "GPT-4o / Claude" },
  { icon: ArrowLeftRight, label: "Jupiter Swap" },
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            AI & <span className="text-gradient-solana">On-Chain</span> Integration
          </h2>

          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
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
        </motion.div>
      </div>
    </section>
  );
}
