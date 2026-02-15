import { motion } from "framer-motion";
import { ArrowRight, Github, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import velaCasual from "@/assets/vela-casual.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Theme toggle */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

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
              <Link
                to="/chat"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-solana text-accent-foreground font-semibold text-sm transition-all shimmer"
              >
                Chat with Vela
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
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

          {/* Right: Vela Character */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Glow ring behind character */}
              <motion.div
                className="absolute -inset-4 rounded-3xl bg-gradient-solana-subtle blur-2xl"
                animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.03, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.img
                src={velaCasual}
                alt="Vela — Autonomous Solana AI Agent"
                className="relative rounded-2xl shadow-2xl glow-combined max-w-md w-full object-cover"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Sparkle dots */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-glow-green"
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-4 -left-3 w-3 h-3 rounded-full bg-glow-purple"
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
