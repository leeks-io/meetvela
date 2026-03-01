

# VELA — Autonomous Anchor Safety & Audit Agent

**Live Demo / Frontend:** [https://meetvela.vercel.app](https://meetvela.vercel.app)

VELA is an intelligent security assistant for Solana developers. It automatically audits Anchor programs, identifies potential vulnerabilities, and provides actionable guidance to prevent hacks before code goes live. By making security accessible and automated, VELA helps developers build safer dApps and strengthens the Solana ecosystem.

---

## About the Prototype

The first version of VELA was built using **Lovable.dev**, combining AI assistance with on-chain integration. It leverages:

* **Official Solana SDK** for native program interactions
* **Anchor Framework** for secure account validation
* **Rust Documentation** for type-safe, high-performance development
* **GPT-4o / Claude** for intelligent code reasoning

This ensures VELA provides **accurate, reliable, and developer-friendly guidance** while remaining fully decentralized and open-source.

---

## What’s Public vs Private

To maintain security while being transparent:

* **Public:**

  * Frontend UI
  * CLI interface scaffold (`vela-check`)
  * Example projects and safe test programs
  * Documentation and tutorials

* **Private:**

  * Core vulnerability detection logic
  * Sensitive heuristics and anti-pattern detection
  * Real-world security datasets

This way, auditors and developers can **review the structure and workflow**, but **attack vectors are not exposed**.

---

## Main Pages

* **Frontend Demo:** [meetvela.vercel.app](https://meetvela.vercel.app) — interact with VELA in your browser
* **CLI Tool:** Run local audits safely with example projects
* **Open Source Repository:** Public code for learning, contribution, and auditing

---

## Open Source Philosophy

VELA is fully open source and encourages community adoption while protecting sensitive logic. Contributions, pull requests, and issue reports are welcome.

**Disclaimer:** VELA is a developer productivity and security tool. It provides guidance to improve smart contract safety but does not replace professional audits. Users remain responsible for their own program deployments.

---

## Roadmap

1. **Protocol Analysis Engine** — Parse Anchor IDLs and build a security graph
2. **Vulnerability Detection** — Implement core safety rules for critical vulnerabilities
3. **CLI Tooling** — Enable local audits and CI/CD integration
4. **Ecosystem Launch** — Open-source repository, documentation, and community engagement

---

## Safety Notes for Public Release

* All sensitive audit logic is **kept private**
* No secrets, keys, or private configuration are included
* Example programs are **safe and sanitized**
* License: MIT / Apache 2.0 (open-source, educational use)
* Contributions are welcome, but sensitive logic remains restricted

---

This README is now **auditor-friendly, public-safe, and professional**.

