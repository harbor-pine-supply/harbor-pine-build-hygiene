# Plan: order-status page (2026-11-18)

## Goal
A static order-status page for Harbor & Pine stores, deployed with one command.

## Steps
1. One shell and one check command (done)
2. Encoding and line endings settled (done)
3. Folder layout and naming
4. A smart build script: pre-flight checks, short output, dry run, deploy, rollback

## Done when
`./build.ps1 deploy` publishes the page, and `./build.ps1 rollback` restores the last version.
