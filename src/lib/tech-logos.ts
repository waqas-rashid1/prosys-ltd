// Maps every tech-stack name in services-data to a local SVG logo.
// Authentic brand SVGs were fetched from Simple Icons CDN; trademark-sensitive
// brands (Slack, Salesforce, Adobe, LinkedIn, etc.) use clean letter-monograms
// generated locally (see /public/logos/*).

const map: Record<string, string> = {
  // ─── Frontend ───
  "React": "/logos/react.svg",
  "React Native": "/logos/react.svg",
  "Next.js": "/logos/nextjs.svg",
  "TypeScript": "/logos/typescript.svg",
  "TailwindCSS": "/logos/tailwindcss.svg",
  "Tailwind": "/logos/tailwindcss.svg",
  "Framer Motion": "/logos/framer-motion.svg",
  "Framer": "/logos/framer.svg",
  "Figma": "/logos/figma.svg",
  "Webflow": "/logos/webflow.svg",
  "Lottie": "/logos/lottie.svg",

  // ─── Backend / Languages / Runtimes ───
  "Node.js": "/logos/nodejs.svg",
  "Node": "/logos/nodejs.svg",
  "Python": "/logos/python.svg",
  "FastAPI": "/logos/fastapi.svg",
  "GraphQL": "/logos/graphql.svg",
  "Prisma": "/logos/prisma.svg",
  "Rust": "/logos/rust.svg",
  "WebAssembly": "/logos/webassembly.svg",
  "Solidity": "/logos/solidity.svg",
  "Unity": "/logos/unity.svg",

  // ─── Databases & Data Stores ───
  "PostgreSQL": "/logos/postgresql.svg",
  "Postgres": "/logos/postgresql.svg",
  "MongoDB": "/logos/mongodb.svg",
  "Redis": "/logos/redis.svg",
  "Supabase": "/logos/supabase.svg",
  "Pinecone": "/logos/pinecone.svg",
  "ChromaDB": "/logos/chromadb.svg",

  // ─── AI / ML ───
  "OpenAI": "/logos/openai.svg",
  "OpenAI GPT-4": "/logos/openai.svg",
  "OpenAI GPT-4o": "/logos/openai.svg",
  "GPT-4": "/logos/openai.svg",
  "GPT-4o": "/logos/openai.svg",
  "ChatGPT": "/logos/openai.svg",
  "Claude": "/logos/claude.svg",
  "LangChain": "/logos/langchain.svg",
  "Hugging Face": "/logos/huggingface.svg",
  "HuggingFace": "/logos/huggingface.svg",
  "TensorFlow": "/logos/tensorflow.svg",
  "TensorFlow Lite": "/logos/tensorflow.svg",
  "Scikit-learn": "/logos/scikit-learn.svg",
  "Stable Diffusion": "/logos/huggingface.svg",
  "Guardrails AI": "/logos/openai.svg",
  "Google Gemini": "/logos/gemini.svg",
  "Perplexity": "/logos/perplexity.svg",

  // ─── Cloud / Infrastructure / DevOps ───
  "AWS": "/logos/aws.svg",
  "AWS IoT Core": "/logos/aws.svg",
  "AWS Redshift": "/logos/aws.svg",
  "AWS Lambda": "/logos/aws.svg",
  "API Gateway": "/logos/aws.svg",
  "EventBridge": "/logos/aws.svg",
  "CloudFormation": "/logos/aws.svg",
  "Amazon Connect": "/logos/aws.svg",
  "Google Cloud": "/logos/google-cloud.svg",
  "GCP": "/logos/google-cloud.svg",
  "Azure": "/logos/azure.svg",
  "Azure IoT Hub": "/logos/azure.svg",
  "Vercel": "/logos/vercel.svg",
  "Docker": "/logos/docker.svg",
  "Kubernetes": "/logos/kubernetes.svg",
  "GitHub Actions": "/logos/github-actions.svg",
  "GitHub": "/logos/github.svg",
  "Terraform": "/logos/terraform.svg",
  "Ansible": "/logos/ansible.svg",
  "HashiCorp": "/logos/hashicorp.svg",
  "HashiCorp Vault": "/logos/vault.svg",
  "Datadog": "/logos/datadog.svg",
  "PagerDuty": "/logos/pagerduty.svg",
  "Grafana": "/logos/grafana.svg",
  "ServiceNow": "/logos/servicenow.svg",

  // ─── Data Engineering ───
  "Snowflake": "/logos/snowflake.svg",
  "Databricks": "/logos/databricks.svg",
  "Apache Kafka": "/logos/kafka.svg",
  "Apache Airflow": "/logos/airflow.svg",
  "Airflow": "/logos/airflow.svg",
  "Apache Spark": "/logos/spark.svg",
  "dbt": "/logos/dbt.svg",
  "MQTT": "/logos/mqtt.svg",
  "Tableau": "/logos/tableau.svg",
  "Power BI": "/logos/power-bi.svg",
  "Power Platform": "/logos/power-bi.svg",

  // ─── CMS / E-commerce / Commerce ───
  "Sanity": "/logos/sanity.svg",
  "Sanity CMS": "/logos/sanity.svg",
  "Contentful": "/logos/contentful.svg",
  "Shopify": "/logos/shopify.svg",
  "Algolia": "/logos/algolia.svg",
  "Klaviyo": "/logos/klaviyo.svg",
  "Stripe": "/logos/stripe.svg",

  // ─── Marketing / Analytics / SEO ───
  "GA4": "/logos/google-analytics.svg",
  "Google Analytics": "/logos/google-analytics.svg",
  "Google Search Console": "/logos/google-search-console.svg",
  "Google Ads": "/logos/google-ads.svg",
  "Meta Ads": "/logos/meta.svg",
  "LinkedIn Ads": "/logos/linkedin.svg",
  "LinkedIn Recruiter": "/logos/linkedin.svg",
  "Mailchimp": "/logos/mailchimp.svg",
  "Hotjar": "/logos/hotjar.svg",
  "Ahrefs": "/logos/ahrefs.svg",
  "Semrush": "/logos/semrush.svg",
  "Schema.org": "/logos/github.svg",
  "Knowledge Graphs": "/logos/github.svg",
  "Wikidata": "/logos/github.svg",
  "PageSpeed Insights": "/logos/google-search-console.svg",
  "Screaming Frog": "/logos/ahrefs.svg",

  // ─── Design ───
  "Adobe Illustrator": "/logos/illustrator.svg",
  "Adobe Photoshop": "/logos/photoshop.svg",
  "After Effects": "/logos/after-effects.svg",
  "Canva": "/logos/canva.svg",

  // ─── Productivity / PM / Collab ───
  "Jira": "/logos/jira.svg",
  "Confluence": "/logos/confluence.svg",
  "Notion": "/logos/notion.svg",
  "Linear": "/logos/linear.svg",
  "Slack": "/logos/slack.svg",
  "Slack API": "/logos/slack.svg",
  "Miro": "/logos/miro.svg",
  "LucidChart": "/logos/lucidchart.svg",
  "Zapier": "/logos/zapier.svg",
  "Make": "/logos/zapier.svg",
  "Trello": "/logos/trello.svg",
  "n8n": "/logos/n8n.svg",
  "Retool": "/logos/retool.svg",
  "Airtable": "/logos/airtable.svg",

  // ─── Finance / Accounting / HR ───
  "QuickBooks": "/logos/quickbooks.svg",
  "QuickBooks Online": "/logos/quickbooks.svg",
  "Xero": "/logos/xero.svg",
  "NetSuite": "/logos/xero.svg",
  "Dext": "/logos/xero.svg",
  "Fathom": "/logos/xero.svg",
  "Workday": "/logos/workday.svg",
  "Greenhouse": "/logos/greenhouse.svg",
  "Lever": "/logos/greenhouse.svg",
  "HireVue": "/logos/greenhouse.svg",
  "BambooHR": "/logos/greenhouse.svg",

  // ─── Customer Service / Telecom ───
  "Salesforce": "/logos/salesforce.svg",
  "Salesforce Service Cloud": "/logos/salesforce.svg",
  "Twilio": "/logos/twilio.svg",
  "Twilio Flex": "/logos/twilio.svg",
  "Dialogflow": "/logos/dialogflow.svg",
  "Genesys Cloud": "/logos/salesforce.svg",
  "Five9": "/logos/salesforce.svg",

  // ─── Enterprise / Security / Infra ───
  "VMware": "/logos/vmware.svg",
  "Cisco": "/logos/cisco.svg",
  "Dell EMC": "/logos/dell.svg",
  "Dell": "/logos/dell.svg",
  "Fortinet": "/logos/fortinet.svg",
  "Veeam": "/logos/vmware.svg",
  "Nutanix": "/logos/vmware.svg",
  "CrowdStrike": "/logos/crowdstrike.svg",
  "Splunk": "/logos/splunk.svg",
  "Palo Alto Networks": "/logos/paloalto.svg",
  "Tenable": "/logos/fortinet.svg",
  "Okta": "/logos/okta.svg",
  "ARKit": "/logos/apple.svg",

  // ─── Legal / Specialized (fallbacks) ───
  "Relativity": "/logos/confluence.svg",
  "Kira Systems": "/logos/confluence.svg",
  "ContractPodAi": "/logos/confluence.svg",
  "iManage": "/logos/confluence.svg",
  "Luminance": "/logos/confluence.svg",
  "DocuSign": "/logos/confluence.svg",

  // ─── Data governance ───
  "Collibra": "/logos/snowflake.svg",
  "Informatica": "/logos/snowflake.svg",
  "Apache Atlas": "/logos/spark.svg",
  "Great Expectations": "/logos/spark.svg",
  "Alation": "/logos/snowflake.svg",
  "Talend": "/logos/snowflake.svg",
};

export function getTechLogo(name: string): string | null {
  if (map[name]) return map[name];
  const normalized = name.trim();
  if (map[normalized]) return map[normalized];
  const lower = normalized.toLowerCase();
  const key = Object.keys(map).find((k) => k.toLowerCase() === lower);
  return key ? map[key] : null;
}
