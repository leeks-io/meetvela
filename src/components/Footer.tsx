import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-solana opacity-40" />

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-gradient-solana">VELA</span>
            <span className="text-xs font-mono text-muted-foreground border border-border rounded px-2 py-0.5">
              v0.1
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            Building the future of Solana development.
          </p>
        </div>
      </div>
    </footer>
  );
}
