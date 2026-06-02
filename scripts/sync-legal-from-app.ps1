# Copy legal markdown from the Voktera app repo.
# Usage: .\scripts\sync-legal-from-app.ps1
$AppRoot = if ($env:VOKTERA_APP_ROOT) { $env:VOKTERA_APP_ROOT } else {
  Join-Path (Split-Path $PSScriptRoot -Parent) "..\Personal Dashboard Application Website"
}
$Source = Join-Path $AppRoot "src\content\legal"
$Dest = Join-Path (Split-Path $PSScriptRoot -Parent) "src\content\legal"
$files = @("privacy.md", "terms.md", "cookies.md", "legal-notice.md")
foreach ($f in $files) {
  Copy-Item (Join-Path $Source $f) (Join-Path $Dest $f) -Force
  Write-Host "Copied $f"
}
