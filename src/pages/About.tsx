import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Twitter, ExternalLink, Code2, Search, Shield, Wrench, BookOpen, MessageSquare, Sparkles, ArrowLeft } from "lucide-react";
import velaAvatar from "@/assets/vela-avatar.png";
import leeksAvatar from "@/assets/leeks-avatar.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VelaChat from "@/components/VelaChat";

const capabilities = [
  { icon: Code2, title: "Code Generation", desc: "Write Rust programs for Solana — Anchor accounts, instructions, PDAs, and full scaffolds." },
  { icon: Search, title: "Code Interpretation", desc: "Break down Rust/Anchor code line by line — macros, structs, enums, and space calculations." },
  { icon: Shield, title: "Debugging & Security", desc: "Detect vulnerabilities, suggest ownership checks, bump verification, and PDA constraints." },
  { icon: Wrench, title: "Optimization", desc: "Recommend space optimizations, rent efficiency, and PDA-based Anchor best practices." },
  { icon: BookOpen, title: "Learning & Docs", desc: "Step-by-step Rust tutorials, Solana concepts — PDAs, CPI, token programs, Anchor." },
  { icon: MessageSquare, title: "Interactive Prompts", desc: "Ask in natural language — get Rust code with contextual explanations and improvements." },
  { icon: Sparkles, title: "Experimental", desc: "Interpret advanced Rust logic, predict outcomes, and simulate what-if program design." },
];

const limitations = [
  "Cannot deploy programs automatically to Solana devnet/mainnet.",
  "Does not run Rust code in real time.",
  "Does not replace human audit — review outputs before use.",
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Back */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              About <span className="text-gradient-solana italic">Vela</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              VELA is an AI-powered Solana agent created by <strong className="text-foreground">Leeks</strong>, designed to assist developers, learners, and enthusiasts with Rust-based Solana programming.
            </p>
          </motion.div>

          {/* Vela + Leeks Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl border border-border bg-card/60 p-6 sm:p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={velaAvatar} alt="Vela" className="w-14 h-14 rounded-full object-cover object-top border-2 border-border" />
                <div>
                  <h3 className="text-lg font-bold">Vela</h3>
                  <p className="text-xs text-muted-foreground">Solana AI Agent</p>
                </div>
              </div>
              <blockquote className="text-sm text-muted-foreground italic border-l-2 border-glow-purple/40 pl-4 mb-4">
                "VELA is a living Rust companion for Solana developers: she assists, interprets, educates, and evolves alongside the Solana ecosystem."
              </blockquote>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>• Build, debug, and experiment in a developer-friendly interface</li>
                <li>• Document learning progress publicly</li>
                <li>• Bridge Rust language knowledge and Solana program design</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl border border-border bg-card/60 p-6 sm:p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={leeksAvatar} alt="Leeks" className="w-14 h-14 rounded-full object-cover border-2 border-border grayscale" />
                <div>
                  <h3 className="text-lg font-bold">Leeks</h3>
                  <p className="text-xs text-muted-foreground">Creator · Web3 Builder</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Leeks is the creator of VELA, building tools and agents for the Solana ecosystem. Follow the journey on X for updates, development logs, and open-source contributions.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://x.com/leeks_io" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-muted/40 text-xs text-foreground hover:border-glow-green/40 transition-all">
                  <Twitter className="w-3.5 h-3.5" /> @leeks_io
                </a>
                <a href="https://t.co/58cbcnGmoQ" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-muted/40 text-xs text-foreground hover:border-glow-green/40 transition-all">
                  <ExternalLink className="w-3.5 h-3.5" /> Who is Leeks?
                </a>
                <a href="https://github.com/solana-labs/solana" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-muted/40 text-xs text-foreground hover:border-glow-green/40 transition-all">
                  <Github className="w-3.5 h-3.5" /> Solana Labs
                </a>
              </div>
            </motion.div>
          </div>

          {/* Capabilities */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Capabilities</h2>
            <p className="text-sm text-muted-foreground">What Vela can do for you today.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.4 + i * 0.06 }}
                className="group rounded-xl border border-border bg-card/60 p-5 transition-all duration-300 hover:border-glow-purple/40 hover:-translate-y-1 hover:bg-card"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-solana-subtle flex items-center justify-center mb-3 group-hover:glow-purple transition-shadow duration-300">
                  <cap.icon className="w-4 h-4 text-glow-purple" />
                </div>
                <h4 className="text-sm font-semibold mb-1.5">{cap.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Limitations */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.6 }} className="max-w-2xl mx-auto">
            <div className="rounded-xl border border-border bg-card/40 p-6">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Current Limitations</h4>
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
      </div>
      <Footer />
      <VelaChat />
    </div>
  );
}
