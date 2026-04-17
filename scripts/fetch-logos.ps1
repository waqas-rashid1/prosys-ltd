# Fetch missing tech logos from Simple Icons CDN.
# Usage: powershell -ExecutionPolicy Bypass -File scripts/fetch-logos.ps1

$ErrorActionPreference = "Continue"
$outDir = Join-Path $PSScriptRoot "..\public\logos"
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

# Mapping: local filename (without .svg) => simpleicons slug
# https://simpleicons.org  |  CDN: https://cdn.simpleicons.org/<slug>
$logos = @(
    # Cloud / DevOps / Infra
    @{ name = "kubernetes"; slug = "kubernetes" },
    @{ name = "azure"; slug = "microsoftazure" },
    @{ name = "datadog"; slug = "datadog" },
    @{ name = "pagerduty"; slug = "pagerduty" },
    @{ name = "servicenow"; slug = "servicenow" },
    @{ name = "ansible"; slug = "ansible" },
    @{ name = "grafana"; slug = "grafana" },
    @{ name = "hashicorp"; slug = "hashicorp" },
    @{ name = "vault"; slug = "vault" },
    @{ name = "kafka"; slug = "apachekafka" },
    @{ name = "airflow"; slug = "apacheairflow" },
    @{ name = "snowflake"; slug = "snowflake" },
    @{ name = "databricks"; slug = "databricks" },
    @{ name = "spark"; slug = "apachespark" },
    @{ name = "dbt"; slug = "dbt" },
    @{ name = "mqtt"; slug = "mqtt" },

    # AI / ML
    @{ name = "claude"; slug = "anthropic" },
    @{ name = "tensorflow"; slug = "tensorflow" },
    @{ name = "scikit-learn"; slug = "scikitlearn" },
    @{ name = "perplexity"; slug = "perplexity" },
    @{ name = "gemini"; slug = "googlegemini" },

    # Productivity / Collab
    @{ name = "jira"; slug = "jira" },
    @{ name = "confluence"; slug = "confluence" },
    @{ name = "notion"; slug = "notion" },
    @{ name = "linear"; slug = "linear" },
    @{ name = "slack"; slug = "slack" },
    @{ name = "github"; slug = "github" },
    @{ name = "miro"; slug = "miro" },
    @{ name = "lucidchart"; slug = "lucidchart" },
    @{ name = "zapier"; slug = "zapier" },
    @{ name = "trello"; slug = "trello" },

    # Design
    @{ name = "illustrator"; slug = "adobeillustrator" },
    @{ name = "photoshop"; slug = "adobephotoshop" },
    @{ name = "after-effects"; slug = "adobeaftereffects" },
    @{ name = "canva"; slug = "canva" },
    @{ name = "lottie"; slug = "lottiefiles" },
    @{ name = "framer"; slug = "framer" },
    @{ name = "webflow"; slug = "webflow" },

    # Marketing / Analytics / SEO
    @{ name = "google-analytics"; slug = "googleanalytics" },
    @{ name = "google-search-console"; slug = "googlesearchconsole" },
    @{ name = "google-ads"; slug = "googleads" },
    @{ name = "meta"; slug = "meta" },
    @{ name = "linkedin"; slug = "linkedin" },
    @{ name = "mailchimp"; slug = "mailchimp" },
    @{ name = "hotjar"; slug = "hotjar" },
    @{ name = "ahrefs"; slug = "ahrefs" },
    @{ name = "semrush"; slug = "semrush" },

    # E-commerce / CMS
    @{ name = "shopify"; slug = "shopify" },
    @{ name = "contentful"; slug = "contentful" },
    @{ name = "algolia"; slug = "algolia" },
    @{ name = "klaviyo"; slug = "klaviyo" },

    # Business tools
    @{ name = "retool"; slug = "retool" },
    @{ name = "quickbooks"; slug = "quickbooks" },
    @{ name = "xero"; slug = "xero" },
    @{ name = "workday"; slug = "workday" },
    @{ name = "greenhouse"; slug = "greenhouse" },
    @{ name = "tableau"; slug = "tableau" },
    @{ name = "power-bi"; slug = "powerbi" },
    @{ name = "salesforce"; slug = "salesforce" },
    @{ name = "twilio"; slug = "twilio" },
    @{ name = "dialogflow"; slug = "dialogflow" },

    # Enterprise / Security
    @{ name = "vmware"; slug = "vmware" },
    @{ name = "cisco"; slug = "cisco" },
    @{ name = "dell"; slug = "dell" },
    @{ name = "fortinet"; slug = "fortinet" },
    @{ name = "crowdstrike"; slug = "crowdstrike" },
    @{ name = "splunk"; slug = "splunk" },
    @{ name = "okta"; slug = "okta" },
    @{ name = "paloalto"; slug = "paloaltonetworks" },

    # Languages / Runtimes / Tech
    @{ name = "rust"; slug = "rust" },
    @{ name = "webassembly"; slug = "webassembly" },
    @{ name = "solidity"; slug = "solidity" },
    @{ name = "unity"; slug = "unity" },
    @{ name = "apple"; slug = "apple" }
)

$succeeded = 0
$skipped = 0
$failed = 0

foreach ($logo in $logos) {
    $name = $logo.name
    $slug = $logo.slug
    $outFile = Join-Path $outDir ($name + ".svg")

    if (Test-Path $outFile) {
        Write-Host ("SKIP  {0} - already exists" -f $name) -ForegroundColor DarkGray
        $skipped++
        continue
    }

    $url = "https://cdn.simpleicons.org/" + $slug
    try {
        Invoke-WebRequest -Uri $url -OutFile $outFile -UseBasicParsing -TimeoutSec 15 -ErrorAction Stop
        $size = (Get-Item $outFile).Length
        if ($size -lt 100) {
            Remove-Item $outFile -Force
            Write-Host ("FAIL  {0} -> {1} (empty response)" -f $name, $slug) -ForegroundColor Red
            $failed++
        } else {
            Write-Host ("OK    {0}.svg ({1} bytes)" -f $name, $size) -ForegroundColor Green
            $succeeded++
        }
    } catch {
        Write-Host ("FAIL  {0} -> {1} ({2})" -f $name, $slug, $_.Exception.Message) -ForegroundColor Red
        $failed++
    }
}

Write-Host ""
Write-Host ("Summary: {0} downloaded, {1} already present, {2} failed." -f $succeeded, $skipped, $failed) -ForegroundColor Cyan
