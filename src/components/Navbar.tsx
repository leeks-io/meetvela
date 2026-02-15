import { Link } from "react-router-dom";
import { Terminal } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Origins", href: "#origins" },
  { label: "Rust Engine", href: "#engine" },
  { label: "Documentation", href: "#journal" },
  { label: "Integrations", href: "#integrations" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold tracking-wide">
            <span className="text-foreground">VEL</span>
            <span className="text-gradient-solana italic">A</span>
          </span>
        </Link>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/chat"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card hover:bg-muted text-sm font-medium text-foreground transition-colors"
          >
            <Terminal className="w-4 h-4" />
            Launch Terminal
          </Link>
        </div>
      </div>
    </nav>
  );
}
