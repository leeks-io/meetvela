import { motion } from "framer-motion";
import TerminalWindow from "./TerminalWindow";
import { ArrowRight, Github, BookOpen } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-purple/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-glow-green/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
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

            <h1 className="text-7xl md:text-8xl font-extrabold tracking-tighter mb-4">
              <span className="text-gradient-solana">VELA</span>
            </h1>

            <p className="text-xl md:text-2xl font-medium text-foreground/80 mb-3">
              The Autonomous Solana AI Agent
            </p>

            <p className="text-base text-muted-foreground max-w-md mb-10 leading-relaxed">
              Interpreting prompts. Writing Rust. Building on Solana.
              A humanoid AI that writes, learns, and ships Solana programs — publicly.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#demo"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all shimmer"
                style={{ background: "linear-gradient(135deg, hsl(271 91% 65%), hsl(160 100% 52%))", color: "hsl(220 20% 5%)" }}
              >
                Try Vela
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#github"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/50 text-foreground font-medium text-sm transition-all hover:border-glow-purple/50 hover:bg-muted/60"
              >
                <Github className="w-4 h-4" />
                View GitHub
              </a>
              <a
                href="#journal"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/50 text-foreground font-medium text-sm transition-all hover:border-glow-green/50 hover:bg-muted/60"
              >
                <BookOpen className="w-4 h-4" />
                Follow the Journal
              </a>
            </div>
          </motion.div>

          {/* Right: Terminal */}
          <div className="flex justify-center lg:justify-end">
            <TerminalWindow />
          </div>
        </div>
      </div>
    </section>
  );
}
