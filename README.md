VELA — Autonomous Anchor Safety & Audit Agent

Live  / Frontend: [https://meetvela.vercel.app](https://meetvela.vercel.app)

VELA is a Rust-powered autonomous agent that helps Solana developers securely build Anchor programs. It scans programs for common vulnerabilities, provides actionable feedback, and prevents costly exploits before deployment.

---

Prototype Overview

The first version of VELA was **built with Lovable.dev**, leveraging AI-assisted development and on-chain integration. It combines knowledge from:

Official Solana SDK — to interact with Solana programs natively
Anchor Framework — for program structure and account validation
Rust Documentation — ensuring type-safe, high-performance code
GPT-4o / Claude — for AI-driven code reasoning and logic guidance

This combination allows VELA to provide accurate, intelligent security guidance** to developers while remaining fully decentralized and open-source.

---

Technical Architecture

Backend: Rust-native autonomous agent performing static analysis and vulnerability detection on Anchor programs
Frontend: React + TypeScript, Vite, Tailwind CSS, and shadcn-ui for fast, accessible UI
Integration: CLI tool (`vela-check`) for local audits and CI/CD pipelines
Deployment: Frontend hosted at Vercel, Rust agent open-sourced for transparency

---

Building and Running VELA

Prerequisites

Install Rust and Cargo:

```bash
$ curl https://sh.rustup.rs -sSf | sh
$ source $HOME/.cargo/env
$ rustup component add rustfmt
$ rustup update
```

For Ubuntu:

```bash
$ sudo apt-get update
$ sudo apt-get install libssl-dev libudev-dev pkg-config zlib1g-dev llvm clang cmake make libprotobuf-dev protobuf-compiler
```

Clone the repository:

```bash
$ git clone <YOUR_GIT_URL>
$ cd vela
```

Build the Rust agent:

```bash
$ cargo build --release
```

---

Running Tests

```bash
$ cargo test
```

---

Using the CLI

```bash
$ cargo run -- vela-check <ANCHOR_PROJECT_PATH>
```

---

Frontend Setup

```bash
$ nvm install --lts
$ nvm use --lts
$ npm install
$ npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to interact with VELA.

---

Deployment & Custom Domains

VELA frontend can be deployed via Vercel or Lovable:

Lovable:** [Connect & Publish](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID)
Custom Domains:** Settings → Domains → Connect Domain

---

Open Source Philosophy

VELA is fully open source, designed for transparency, community adoption, and collaboration across the Solana ecosystem. Pull requests, issues, and discussions are welcome.


Roadmap

1. Protocol Analysis Engine — Parse Anchor IDLs and build security graphs
2. Vulnerability Detection — Implement core safety rules for critical vulnerabilities
3. CLI Tooling — Enable local audits and CI/CD integration
4. Ecosystem Launch — Open-source repository, documentation, and community engagement

Disclaimer

VELA is an educational and developer productivity tool. Users remain responsible for deploying secure smart contracts.
