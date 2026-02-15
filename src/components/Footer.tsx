import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-solana opacity-40" />

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3 text-center sm:text-left">
            <span className="text-xl font-bold text-gradient-solana">VELA</span>
            <span className="text-xs text-muted-foreground">© 2026 Built for Solana</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">
              Created by{" "}
              <a
                href="https://x.com/leeks_io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-glow-green transition-colors font-medium"
              >
                Leeks
              </a>
              {" "}for Web3
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-muted-foreground">
            <a
              href="https://github.com/solana-labs/solana"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              Solana Labs
            </a>
            <a href="#journal" className="hover:text-foreground transition-colors">
              Documentation
            </a>
            <a
              href="https://x.com/leeks_io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <Twitter className="w-4 h-4" />
              @leeks_io
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
