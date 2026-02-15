import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Terminal, FileText, ArrowRight } from "lucide-react";
import TerminalWindow from "./TerminalWindow";
import velaAvatar from "@/assets/vela-avatar.png";

export default function HeroSection() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20" />

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-glow-purple/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-glow-green/8 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/40 text-xs text-muted-foreground mb-6 sm:mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-glow-green animate-pulse" />
            Built by Leeks · For Solana Developers
          </motion.div>

          {/* Vela character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto mb-6 w-28 h-28 sm:w-40 sm:h-40"
          >
            <motion.div
              className="absolute -inset-3 rounded-full bg-gradient-solana-subtle blur-xl"
              animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src={velaAvatar}
              alt="Vela — Solana AI Agent"
              className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-full object-cover object-top border-2 border-border shadow-2xl glow-combined"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-glow-green"
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter mb-4 sm:mb-6">
            Meet <span className="text-gradient-solana italic">Vela</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed px-2">
            Your AI-powered{" "}
            <span className="text-foreground font-semibold underline underline-offset-4 decoration-glow-green/50">
              Solana development companion
            </span>
            . She assists, interprets, educates, and evolves alongside the Solana ecosystem.
          </p>

          <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            Generate Rust programs, debug Anchor code, learn Solana concepts step by step — all powered by official Rust & Solana documentation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4 sm:px-0 mb-12">
            <Link
              to="/chat"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105 shadow-lg dark:bg-glow-green dark:text-background bg-foreground text-background"
            >
              <Terminal className="w-4 h-4" />
              Start Coding
            </Link>
            <Link
              to="/docs"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-border bg-card/80 text-foreground font-medium text-sm transition-all hover:bg-muted"
            >
              <FileText className="w-4 h-4" />
              Read Documentation
            </Link>
          </div>

          {/* Navigation Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
          >
            <Link
              to="/about"
              className="group flex items-center justify-between px-5 py-4 rounded-xl border border-border bg-card/60 hover:bg-card hover:border-glow-purple/40 transition-all hover:-translate-y-1"
            >
              <span className="text-sm font-medium text-foreground">About Vela</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-glow-purple transition-colors" />
            </Link>
            <Link
              to="/docs"
              className="group flex items-center justify-between px-5 py-4 rounded-xl border border-border bg-card/60 hover:bg-card hover:border-glow-green/40 transition-all hover:-translate-y-1"
            >
              <span className="text-sm font-medium text-foreground">Documentation</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-glow-green transition-colors" />
            </Link>
            <Link
              to="/integrations"
              className="group flex items-center justify-between px-5 py-4 rounded-xl border border-border bg-card/60 hover:bg-card hover:border-glow-purple/40 transition-all hover:-translate-y-1"
            >
              <span className="text-sm font-medium text-foreground">Integrations</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-glow-purple transition-colors" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center px-2 sm:px-0"
        >
          <TerminalWindow />
        </motion.div>
      </div>
    </section>
  );
}
