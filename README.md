# AI Procedures & Standards Example

This repository contains AI procedures (`.ai_procedures/`) and standards (`.ai_standards/`) for feature, PR, release, and API lifecycles. It uses **beads** (the `bd` CLI) for task and issue tracking.

## Requirements

- **beads (bd)** – Required for task/issue tracking. Issues live in `.beads/` and sync with git.

  **Install (choose one):**
  - **npm:** `npm install -g @beads/bd`
  - **Homebrew:** `brew install beads`
  - **Go:** `go install github.com/steveyegge/beads/cmd/bd@latest`
  - **Script (macOS/Linux):** `curl -fsSL https://raw.githubusercontent.com/steveyegge/beads/main/scripts/install.sh | bash`

  After installing, run `bd onboard` in this repo to get started. See [AGENTS.md](./AGENTS.md) for workflow and [.beads/README.md](./.beads/README.md) for more on beads.

## Quick start

1. Clone the repo.
2. Install beads (see above) and run `bd onboard`.
3. Use `bd ready` to see available work, `bd show <id>` for details, and `bd sync` before `git push`.

## Structure

- **`.ai_procedures/`** – Executable procedures (feature, PR, release, API lifecycles, etc.).
- **`.ai_standards/`** – Standards and checklists (SDLC, security, data, IaC, testing, code review).
- **`.beads/`** – Beads config and issue data (task tracking).
- **`AGENTS.md`** – Agent instructions and bd workflow.

## Links

- [Beads (bd)](https://github.com/steveyegge/beads) – Issue tracker for AI agents
- [AGENTS.md](./AGENTS.md) – Task tracking and “landing the plane” workflow
