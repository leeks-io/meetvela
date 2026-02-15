import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Lock, Box, Cpu, Rocket, FileCode, ChevronRight } from "lucide-react";

const steps = [
  {
    id: "step-1",
    step: 1,
    label: "Hello, Rust!",
    title: "Step 1: Your First Rust Program",
    body: "Every Rust journey starts with 'Hello, world!'. Install Rust using rustup, create a new project with Cargo (Rust's build system and package manager), and write your first program. Cargo handles compiling, running, and managing dependencies.",
    cards: [
      {
        icon: Rocket,
        title: "Getting Started",
        desc: "Install Rust via rustup.rs. Run `cargo new hello_rust` to create a project. Use `cargo run` to compile and execute.",
      },
      {
        icon: FileCode,
        title: "Project Structure",
        desc: "Cargo.toml holds your project config and dependencies. src/main.rs is your entry point. The fn main() function runs first.",
      },
    ],
    code: `// src/main.rs\nfn main() {\n    println!("Hello, Rust!");\n    \n    // Variables are immutable by default\n    let name = "Solana Developer";\n    let mut count = 0; // 'mut' makes it mutable\n    count += 1;\n    \n    println!("Welcome {name}, visit #{count}");\n}`,
  },
  {
    id: "step-2",
    step: 2,
    label: "Types & Functions",
    title: "Step 2: Data Types & Functions",
    body: "Rust is statically typed — every value has a known type at compile time. Learn scalar types (integers, floats, booleans, characters), compound types (tuples, arrays), and how to write functions with explicit return types.",
    cards: [
      {
        icon: Code2,
        title: "Scalar Types",
        desc: "i32, u64, f64, bool, char — Rust has signed/unsigned integers of various sizes, floating-point numbers, booleans, and Unicode characters.",
      },
      {
        icon: Box,
        title: "Functions",
        desc: "Functions use `fn` keyword. Parameters need type annotations. The last expression (without semicolon) is the return value.",
      },
    ],
    code: `fn add(a: i32, b: i32) -> i32 {\n    a + b // no semicolon = return value\n}\n\nfn main() {\n    let result = add(5, 3);\n    println!("5 + 3 = {result}");\n    \n    let tup: (i32, f64, bool) = (42, 6.28, true);\n    let (x, y, z) = tup; // destructuring\n    \n    let arr = [1, 2, 3, 4, 5];\n    println!("First: {}", arr[0]);\n}`,
  },
  {
    id: "step-3",
    step: 3,
    label: "Ownership",
    title: "Step 3: Ownership & Borrowing",
    body: "Ownership is Rust's most unique feature — it enables memory safety without a garbage collector. Each value has one owner. When the owner goes out of scope, the value is dropped. Borrowing lets you reference values without taking ownership.",
    cards: [
      {
        icon: Lock,
        title: "Ownership Rules",
        desc: "Each value has one owner. Values are dropped when the owner leaves scope. Values can be moved or borrowed, never both mutably.",
      },
      {
        icon: Code2,
        title: "References & Borrowing",
        desc: "& creates an immutable reference. &mut creates a mutable reference. You can have many &refs OR one &mut ref — never both at once.",
      },
    ],
    code: `fn main() {\n    let s1 = String::from("hello");\n    let s2 = &s1; // immutable borrow\n    println!("{s1} and {s2}"); // both valid\n\n    let mut s3 = String::from("hello");\n    change(&mut s3); // mutable borrow\n    println!("{s3}"); // prints "hello, world"\n}\n\nfn change(s: &mut String) {\n    s.push_str(", world");\n}`,
  },
  {
    id: "step-4",
    step: 4,
    label: "Structs & Enums",
    title: "Step 4: Structs, Enums & Pattern Matching",
    body: "Structs group related data together. Enums define types with multiple variants. Combined with `match`, you get exhaustive pattern matching — the compiler ensures every case is handled. These are the building blocks of Rust programs.",
    cards: [
      {
        icon: Box,
        title: "Structs & impl",
        desc: "Define data with struct. Add methods with impl blocks. Rust doesn't have classes or inheritance — use composition and traits instead.",
      },
      {
        icon: Code2,
        title: "Enums & match",
        desc: "Enums can hold data in variants. match expressions must cover every variant. Option<T> and Result<T,E> are built-in enums you'll use everywhere.",
      },
    ],
    code: `struct Player {\n    name: String,\n    health: u32,\n}\n\nimpl Player {\n    fn new(name: &str) -> Self {\n        Player { name: name.to_string(), health: 100 }\n    }\n    fn is_alive(&self) -> bool {\n        self.health > 0\n    }\n}\n\nenum Action {\n    Attack(u32),\n    Heal(u32),\n    Flee,\n}\n\nfn perform(action: Action) {\n    match action {\n        Action::Attack(dmg) => println!("Deal {dmg} damage"),\n        Action::Heal(hp) => println!("Heal {hp} HP"),\n        Action::Flee => println!("Run away!"),\n    }\n}`,
  },
  {
    id: "step-5",
    step: 5,
    label: "Error Handling",
    title: "Step 5: Error Handling & the ? Operator",
    body: "Rust has no exceptions. Use Result<T, E> for recoverable errors and panic! for unrecoverable ones. The ? operator propagates errors elegantly. Option<T> handles values that might not exist — eliminating null pointer bugs at compile time.",
    cards: [
      {
        icon: Lock,
        title: "Result<T, E>",
        desc: "Ok(value) for success, Err(error) for failure. The ? operator returns early on Err. Chain operations with .map(), .and_then(), .unwrap_or().",
      },
      {
        icon: Cpu,
        title: "Option<T>",
        desc: "Some(value) or None — no null pointers. Use .unwrap(), .expect(), or pattern match. The ? operator works on Option too.",
      },
    ],
    code: `use std::fs;\nuse std::io;\n\nfn read_config(path: &str) -> Result<String, io::Error> {\n    let content = fs::read_to_string(path)?; // ? propagates error\n    Ok(content.trim().to_string())\n}\n\nfn main() {\n    match read_config("config.toml") {\n        Ok(config) => println!("Config: {config}"),\n        Err(e) => eprintln!("Error: {e}"),\n    }\n    \n    // Option example\n    let numbers = vec![1, 2, 3];\n    let first: Option<&i32> = numbers.first();\n    if let Some(n) = first {\n        println!("First number: {n}");\n    }\n}`,
  },
  {
    id: "step-6",
    step: 6,
    label: "Hello Solana!",
    title: "Step 6: Your First Solana Program",
    body: "Now apply your Rust skills to Solana! Solana programs process instructions, manage accounts, and execute on-chain logic. This 'Hello Solana' program logs a message and reads account data — the foundation of every Solana dApp.",
    cards: [
      {
        icon: Rocket,
        title: "Solana Programs",
        desc: "Programs are deployed to the blockchain and invoked via transactions. They receive accounts, instruction data, and a program ID. Everything is stateless.",
      },
      {
        icon: Cpu,
        title: "Accounts Model",
        desc: "Solana stores all state in accounts. Programs don't own storage — they read/write to accounts passed in. Each account has an owner program.",
      },
    ],
    code: `use solana_program::{\n    account_info::AccountInfo,\n    entrypoint,\n    entrypoint::ProgramResult,\n    msg,\n    pubkey::Pubkey,\n};\n\nentrypoint!(process_instruction);\n\npub fn process_instruction(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    _instruction_data: &[u8],\n) -> ProgramResult {\n    msg!("Hello, Solana! 🚀");\n    msg!("Program ID: {}", program_id);\n    msg!("Number of accounts: {}", accounts.len());\n    \n    Ok(())\n}`,
  },
];

export default function JournalSection() {
  const [activeStep, setActiveStep] = useState(0);
  const entry = steps[activeStep];

  return (
    <section id="journal" className="relative py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Learn <span className="text-gradient-solana">Rust</span> Step by Step
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
              From zero to Solana — master Rust fundamentals and build your first on-chain program.
            </p>
          </div>

          {/* Mobile step selector */}
          <div className="lg:hidden mb-6 overflow-x-auto pb-2">
            <div className="flex gap-2 min-w-max px-1">
              {steps.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setActiveStep(i)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs whitespace-nowrap transition-all ${
                    i === activeStep
                      ? "bg-muted border border-glow-green/40 text-foreground font-medium"
                      : "text-muted-foreground border border-border/50 hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    i === activeStep ? "bg-glow-green/20 text-glow-green" : "bg-muted text-muted-foreground"
                  }`}>
                    {s.step}
                  </span>
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-[220px_1fr] gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Desktop sidebar */}
            <div className="hidden lg:block">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
                Learning Path
              </p>
              <div className="space-y-1">
                {steps.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveStep(i)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all flex items-center gap-3 ${
                      i === activeStep
                        ? "bg-muted border-l-2 border-glow-green text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      i === activeStep ? "bg-glow-green/20 text-glow-green" : "bg-muted text-muted-foreground"
                    }`}>
                      {s.step}
                    </span>
                    {s.label}
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
                STEP {entry.step} OF {steps.length}
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                {entry.title}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
                {entry.body}
              </p>

              {/* Cards */}
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                {entry.cards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-xl border border-border bg-card p-4 md:p-5 transition-colors hover:border-glow-purple/40"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <card.icon className="w-4 h-4 text-glow-green" />
                      <h3 className="font-semibold text-foreground text-sm">{card.title}</h3>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>

              {/* Code example */}
              <div className="rounded-xl border border-border bg-card overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-glow-green/60" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">
                    {entry.step === 6 ? "lib.rs" : "main.rs"}
                  </span>
                </div>
                <pre className="p-4 text-xs md:text-sm font-mono leading-relaxed text-foreground/90 overflow-x-auto">
                  <code>{entry.code}</code>
                </pre>
              </div>

              {/* Next step */}
              {activeStep < steps.length - 1 && (
                <button
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="mt-6 inline-flex items-center gap-2 text-sm text-glow-purple hover:text-foreground transition-colors"
                >
                  Next: {steps[activeStep + 1].label}
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
