# Retry failed logos via alternative CDNs (lobe-icons, svgl), then
# generate clean letter-monogram SVGs for anything still missing.

$ErrorActionPreference = "Continue"
$outDir = Join-Path $PSScriptRoot "..\public\logos"
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

# Alternative sources to try, in priority order
# svgl.app (community brand library) serves raw SVGs
function Try-Download($url, $outFile) {
    try {
        Invoke-WebRequest -Uri $url -OutFile $outFile -UseBasicParsing -TimeoutSec 15 -ErrorAction Stop
        $size = (Get-Item $outFile).Length
        if ($size -lt 120) {
            Remove-Item $outFile -Force
            return $false
        }
        return $true
    } catch {
        return $false
    }
}

# Generate a clean letter-monogram SVG for brands we can't source officially.
# Dark rounded square + bold white letter(s) — premium neutral look.
function New-Monogram($outFile, $letters) {
    $svg = @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
  <rect width="48" height="48" rx="8" fill="#0f172a"/>
  <text x="24" y="30" font-family="Inter, system-ui, sans-serif" font-size="16" font-weight="800" letter-spacing="-0.5" text-anchor="middle" fill="#ffffff">$letters</text>
</svg>
"@
    Set-Content -Path $outFile -Value $svg -Encoding UTF8 -NoNewline
}

# Each entry: local name | svgl slug (or $null) | monogram letters
$missing = @(
    @{ name = "azure";         svgl = "azure";                  letters = "Az" },
    @{ name = "servicenow";    svgl = "servicenow";             letters = "sn" },
    @{ name = "dbt";           svgl = "dbt";                    letters = "dbt" },
    @{ name = "slack";         svgl = "slack";                  letters = "Sl" },
    @{ name = "lucidchart";    svgl = "lucidchart";             letters = "Lc" },
    @{ name = "illustrator";   svgl = "adobe-illustrator";      letters = "Ai" },
    @{ name = "photoshop";     svgl = "adobe-photoshop";        letters = "Ps" },
    @{ name = "after-effects"; svgl = "adobe-after-effects";    letters = "Ae" },
    @{ name = "canva";         svgl = "canva";                  letters = "Ca" },
    @{ name = "linkedin";      svgl = "linkedin";               letters = "in" },
    @{ name = "ahrefs";        svgl = "ahrefs";                 letters = "A" },
    @{ name = "klaviyo";       svgl = "klaviyo";                letters = "Kl" },
    @{ name = "workday";       svgl = "workday";                letters = "Wd" },
    @{ name = "tableau";       svgl = "tableau";                letters = "Ta" },
    @{ name = "power-bi";      svgl = "power-bi";               letters = "PBI" },
    @{ name = "salesforce";    svgl = "salesforce";             letters = "SF" },
    @{ name = "twilio";        svgl = "twilio";                 letters = "Tw" },
    @{ name = "crowdstrike";   svgl = "crowdstrike";            letters = "Cs" }
)

$sourced = 0
$monogrammed = 0

foreach ($entry in $missing) {
    $outFile = Join-Path $outDir ($entry.name + ".svg")
    if (Test-Path $outFile) {
        Write-Host ("SKIP   {0}" -f $entry.name) -ForegroundColor DarkGray
        continue
    }

    $got = $false

    if ($entry.svgl) {
        # Try svgl.app CDN first
        $urls = @(
            "https://svgl.app/library/" + $entry.svgl + ".svg",
            "https://cdn.svgl.app/" + $entry.svgl + ".svg",
            "https://raw.githubusercontent.com/pheralb/svgl/main/static/library/" + $entry.svgl + ".svg"
        )
        foreach ($u in $urls) {
            if (Try-Download $u $outFile) {
                Write-Host ("SVGL   {0}.svg" -f $entry.name) -ForegroundColor Green
                $sourced++
                $got = $true
                break
            }
        }
    }

    if (-not $got) {
        New-Monogram $outFile $entry.letters
        Write-Host ("MONO   {0}.svg (`"{1}`" fallback)" -f $entry.name, $entry.letters) -ForegroundColor Yellow
        $monogrammed++
    }
}

Write-Host ""
Write-Host ("Summary: {0} sourced from alt CDN, {1} monogram fallbacks." -f $sourced, $monogrammed) -ForegroundColor Cyan
