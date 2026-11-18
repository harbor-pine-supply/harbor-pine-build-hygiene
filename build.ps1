#Requires -Version 7.4
# One command to check everything. It grows in the build-script lessons.
$ErrorActionPreference = "Stop"
node --test
exit $LASTEXITCODE
