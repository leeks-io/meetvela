import { motion } from "framer-motion";

const nodes = [
  { label: "User Prompt", x: "5%", y: "45%" },
  { label: "VELA", x: "25%", y: "45%", highlight: true },
  { label: "AI Orchestrator", x: "47%", y: "45%" },
  { label: "Rust Generator", x: "69%", y: "45%" },
  { label: "Solana", x: "90%", y: "45%", accent: true },
];

export default function ArchitectureSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            How <span className="text-gradient-solana">Vela</span> Works
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From natural language to deployed Solana programs in seconds.
          </p>
        </motion.div>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative h-40 flex items-center justify-between gap-2">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-[10%] right-[10%] h-px">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="h-full bg-gradient-to-r from-glow-purple/60 via-glow-purple/40 to-glow-green/60 origin-left"
              />
            </div>

            {/* Nodes */}
            {nodes.map((node, i) => (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
                className="relative z-10 flex flex-col items-center"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold border transition-all duration-300 hover:scale-110
                    ${node.highlight
                      ? "bg-gradient-solana text-accent-foreground border-glow-purple/50 glow-purple"
                      : node.accent
                        ? "bg-glow-green/10 border-glow-green/50 text-glow-green"
                        : "bg-card border-border text-foreground/70"
                    }`}
                >
                  {node.label[0]}
                </div>
                <span className="mt-3 text-xs font-medium text-muted-foreground text-center max-w-[80px]">
                  {node.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
