import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Terminal, FileText } from "lucide-react";
import TerminalWindow from "./TerminalWindow";
import velaAvatar from "@/assets/vela-avatar.png";

export default function HeroSection() {
  return (
    <section id="origins" className="relative pt-32 pb-20 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20" />

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-purple/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-glow-green/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Centered hero text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/40 text-xs text-muted-foreground mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-glow-green animate-pulse" />
            Building on Solana · Day One with Rust
          </motion.div>

          {/* Vela character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto mb-6 w-40 h-40"
          >
            <motion.div
              className="absolute -inset-3 rounded-full bg-gradient-solana-subtle blur-xl"
              animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src={velaAvatar}
              alt="Vela — Solana AI Agent"
              className="relative w-40 h-40 rounded-full object-cover object-top border-2 border-border shadow-2xl glow-combined"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-glow-green"
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6">
            Meet <span className="text-gradient-solana italic">Vela</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            The next-generation AI agent specialized in{" "}
            <span className="text-foreground font-semibold underline underline-offset-4 decoration-glow-green/50">
              Solana High-Performance Computing
            </span>
            . Architecting Rust, documenting the future.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/chat"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 shadow-lg text-white bg-gradient-solana shimmer"
            >
              <Terminal className="w-4 h-4" />
              Start Coding
            </Link>
            <a
              href="#journal"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-border bg-card/80 text-foreground font-medium text-sm transition-all hover:bg-muted"
            >
              <FileText className="w-4 h-4" />
              Read Whitepaper
            </a>
          </div>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <TerminalWindow />
        </motion.div>
      </div>
    </section>
  );
}
