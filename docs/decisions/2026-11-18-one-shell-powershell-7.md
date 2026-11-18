# Decision: one shell, PowerShell 7 (2026-11-18)

## Decision
Scripts and docs in this project use PowerShell 7 (`pwsh`), version 7.4 or later.

## Why
- We work on Windows and deploy through GitHub Actions; PowerShell 7 runs the same on both.
- Windows PowerShell 5.1 has no `&&` and writes UTF-16 with `>`: mixing the two broke files.

## Instead of
- bash in WSL: a good choice for Linux-first teams.

## Consequences
- `#Requires -Version 7.4` in every script; CLAUDE.md tells the agent.
