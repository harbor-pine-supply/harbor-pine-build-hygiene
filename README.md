# Harbor & Pine order-status page

Demo project for Harbor & Pine Supply, a fictional company. Made-up data only.

## Requirements
- PowerShell 7.4 or later (`pwsh`). Windows PowerShell 5.1 isn't supported.
- Node 22 (the version in `.node-version`)

## Check everything
- In a PowerShell 7 terminal: `./build.ps1`
- From bash, CI or an agent: `pwsh -File ./build.ps1`

## Commands
| Command | What it does |
|---|---|
| `./build.ps1` | Pre-flight checks, lint, tests and build. Run it before every pull request. |
| `./build.ps1 deploy -DryRun` | Shows what a deploy would do. Changes nothing. |
| `./build.ps1 deploy` | Tags a restore point, deploys, checks the site is healthy. From main only. |
| `./build.ps1 rollback` | Redeploys the previous restore point. |

From bash, CI or an agent: `pwsh -File ./build.ps1 [command]`. Exit code 0 means it passed.
