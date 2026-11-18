# Harbor & Pine order-status page

## Shell
- This project uses PowerShell 7 (`pwsh`). Write scripts as `.ps1`, never `.sh` or `.bat`.
- Use PowerShell 7 syntax. Windows PowerShell 5.1 isn't supported.
- Check everything with `pwsh -File ./build.ps1`. It exits non-zero when anything fails.

## Where things go
- Code in `src/`, tests in `test/`, the page in `site/`. One check: `pwsh -File ./build.ps1`.
- Plans: `docs/plans/YYYY-MM-DD-<topic>.md`, written before the code.
- Decisions: `docs/decisions/YYYY-MM-DD-<topic>.md`: what we decided and why. Don't rewrite an old one; add a new one that replaces it.
- Handoffs: `docs/handoffs/YYYY-MM-DD-<package>.md`, at the end of a session.
- Your working notes: `.scratch/` (ignored, throwaway). Anything worth keeping moves to `docs/`.
- Never put secrets or customer data in any of these.

## Build script
- Run `pwsh -File ./build.ps1` before you say anything is done. Exit code 0 means it passed.
- It prints one line per check. On FAIL, the line says what failed and how to fix it, and the full log is in `.logs/`. Open the log only when you need the detail.
