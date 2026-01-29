# Beads issue prefix naming convention

Use a **short 3–5 character prefix** for this repo so issue IDs stay readable (e.g. `aip-x7k` instead of `cursor-ai-procedures-example-x7k`).

## Rules

| Rule | Example |
|------|--------|
| **Length** | 3–5 characters |
| **Characters** | Lowercase letters preferred; numbers ok if needed (e.g. `aip`, `auth2`) |
| **Mnemonic** | Derive from project/product name so the prefix is recognizable |
| **Readable** | Avoid ambiguous pairs: `0`/`O`, `1`/`l`, `5`/`S` |
| **Unique** | Within your org/workspace, avoid clashes with other project prefixes |

## How to pick a code

1. **Abbreviate the project name**  
   - "AI procedures" → `aip`  
   - "Auth service" → `auth` or `asvc`  
   - "Customer API" → `capi` or `cust`

2. **Or use a memorable acronym**  
   - "Cursor AI Procedures Example" → `cape` or `aip`  
   - "Platform X" → `plat` or `px`

3. **Keep it short**  
   - Prefer 3 chars (`aip`, `auth`) unless 4–5 add clarity (`capi`, `procs`).

## This repository

- **Prefix:** `aip` (AI Procedures)
- **Set in:** `.beads/config.yaml` → `issue-prefix: "aip"`
- **New issues:** Will get IDs like `aip-xyz` (hash suffix from beads).

Existing issues may still show the old prefix (from before this config); new issues use `aip`.
