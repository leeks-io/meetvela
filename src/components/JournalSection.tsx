import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Lock, Box, Cpu } from "lucide-react";

const entries = [
  {
    id: "ownership",
    label: "Ownership & Borrowing",
    title: "Ownership: Rust's Core Feature",
    entryNum: "001",
    body: "Ownership is Rust's most unique feature that enables memory safety without a garbage collector. Each value in Rust has a single owner, and when the owner goes out of scope, the value is dropped. This system is enforced at compile time with zero runtime cost.",
    cards: [
      {
        icon: Lock,
        title: "Ownership Rules",
        desc: "Each value has one owner. When the owner goes out of scope, the value is dropped. Values can be moved or borrowed, but not both mutably at the same time.",
      },
      {
        icon: Code2,
        title: "Borrowing & References",
        desc: "References allow you to refer to a value without taking ownership. You can have either one mutable reference or any number of immutable references at a time.",
      },
    ],
    code: `fn main() {\n    let s1 = String::from("hello");\n    let s2 = &s1; // immutable borrow\n    println!("{s1} and {s2}");\n\n    let mut s3 = String::from("hello");\n    let s4 = &mut s3; // mutable borrow\n    s4.push_str(", world");\n}`,
  },
  {
    id: "structs-enums",
    label: "Structs & Enums",
    title: "Structuring Data in Rust",
    entryNum: "002",
    body: "Structs and enums are the building blocks of Rust's type system. Structs let you group related data together, while enums let you define a type by enumerating its possible variants — powerful for modeling state machines and error handling.",
    cards: [
      {
        icon: Box,
        title: "Structs",
        desc: "Structs group named fields together. You can define methods on them using `impl` blocks, enabling object-oriented patterns without inheritance.",
      },
      {
        icon: Code2,
        title: "Enums & Pattern Matching",
        desc: "Enums can hold data in each variant. Combined with `match`, they provide exhaustive pattern matching — the compiler ensures you handle every case.",
      },
    ],
    code: `enum Coin {\n    Penny,\n    Quarter(UsState),\n}\n\nfn value_in_cents(coin: Coin) -> u8 {\n    match coin {\n        Coin::Penny => 1,\n        Coin::Quarter(state) => {\n            println!("Quarter from {state:?}");\n            25\n        }\n    }\n}`,
  },
  {
    id: "traits-generics",
    label: "Traits & Generics",
    title: "Generic Types and Trait Bounds",
    entryNum: "003",
    body: "Generics allow you to write flexible, reusable code. Traits define shared behavior — similar to interfaces. Together, they enable Rust's powerful zero-cost abstractions: write generic code that's as fast as hand-written specialized code.",
    cards: [
      {
        icon: Cpu,
        title: "Generics",
        desc: "Functions, structs, and enums can be parameterized over types. The compiler monomorphizes generics — generating specialized code for each concrete type used.",
      },
      {
        icon: Lock,
        title: "Trait Bounds",
        desc: "Trait bounds constrain generic types to those implementing specific behavior. This enables compile-time polymorphism with zero runtime overhead.",
      },
    ],
    code: `trait Summary {\n    fn summarize(&self) -> String;\n}\n\nfn notify(item: &impl Summary) {\n    println!("Breaking: {}", item.summarize());\n}\n\n// Equivalent with trait bound syntax:\nfn notify<T: Summary>(item: &T) {\n    println!("Breaking: {}", item.summarize());\n}`,
  },
  {
    id: "error-handling",
    label: "Error Handling",
    title: "Result, Option & the ? Operator",
    entryNum: "004",
    body: "Rust has no exceptions. Instead, it uses the Result<T, E> enum for recoverable errors and panic! for unrecoverable ones. The Option<T> type handles nullable values. The ? operator provides ergonomic error propagation.",
    cards: [
      {
        icon: Lock,
        title: "Result<T, E>",
        desc: "Functions that can fail return Result. The Ok variant holds the success value, Err holds the error. The ? operator propagates errors to the caller automatically.",
      },
      {
        icon: Code2,
        title: "Option<T>",
        desc: "Option represents a value that may or may not exist — Some(T) or None. This eliminates null pointer errors at compile time.",
      },
    ],
    code: `use std::fs::File;\nuse std::io::Read;\n\nfn read_username() -> Result<String, io::Error> {\n    let mut s = String::new();\n    File::open("username.txt")?\n        .read_to_string(&mut s)?;\n    Ok(s)\n}`,
  },
  {
    id: "lifetimes",
    label: "Lifetimes",
    title: "Validating References with Lifetimes",
    entryNum: "005",
    body: "Lifetimes are Rust's way of ensuring that references are always valid. Every reference has a lifetime — the scope for which it's valid. Most lifetimes are inferred, but sometimes you need to annotate them to help the compiler understand relationships between references.",
    cards: [
      {
        icon: Cpu,
        title: "Lifetime Annotations",
        desc: "Lifetime parameters (like 'a) describe the relationship between reference lifetimes. They don't change lifetimes — they describe them for the compiler.",
      },
      {
        icon: Lock,
        title: "Lifetime Elision",
        desc: "The compiler applies three rules to infer lifetimes automatically. When it can't, you must annotate explicitly to clarify reference relationships.",
      },
    ],
    code: `// The returned reference lives as long as\n// the shortest-lived input reference\nfn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    if x.len() > y.len() {\n        x\n    } else {\n        y\n    }\n}`,
  },
];

export default function JournalSection() {
  const [activeEntry, setActiveEntry] = useState(0);
  const entry = entries[activeEntry];

  return (
    <section id="journal" className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[240px_1fr] gap-12 max-w-5xl mx-auto"
        >
          {/* Sidebar */}
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
              Rust Handbook
            </p>
            <div className="space-y-1">
              {entries.map((e, i) => (
                <button
                  key={e.id}
                  onClick={() => setActiveEntry(i)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all ${
                    i === activeEntry
                      ? "bg-muted border-l-2 border-glow-green text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {e.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main content */}
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-xs font-mono text-glow-green tracking-widest mb-3">
              CHAPTER #{entry.entryNum}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {entry.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {entry.body}
            </p>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {entry.cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-glow-purple/40"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <card.icon className="w-4 h-4 text-glow-green" />
                    <h3 className="font-semibold text-foreground text-sm">{card.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Code example */}
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-glow-green/60" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">example.rs</span>
              </div>
              <pre className="p-4 text-sm font-mono leading-relaxed text-foreground/90 overflow-x-auto">
                <code>{entry.code}</code>
              </pre>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
