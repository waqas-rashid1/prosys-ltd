// Maps tech stack names (as used in services-data) to logo SVG paths.
// Only names that have a matching asset in /public/logos/ return a logo.
// Components should gracefully handle missing logos (show name only).

const map: Record<string, string> = {
  // Frontend
  "React": "/logos/react.svg",
  "React Native": "/logos/react.svg",
  "Next.js": "/logos/nextjs.svg",
  "TypeScript": "/logos/typescript.svg",
  "TailwindCSS": "/logos/tailwindcss.svg",
  "Tailwind": "/logos/tailwindcss.svg",
  "Framer Motion": "/logos/framer-motion.svg",
  "Figma": "/logos/figma.svg",

  // Backend
  "Node.js": "/logos/nodejs.svg",
  "Node": "/logos/nodejs.svg",
  "Python": "/logos/python.svg",
  "FastAPI": "/logos/fastapi.svg",
  "GraphQL": "/logos/graphql.svg",
  "Prisma": "/logos/prisma.svg",

  // Databases
  "PostgreSQL": "/logos/postgresql.svg",
  "Postgres": "/logos/postgresql.svg",
  "MongoDB": "/logos/mongodb.svg",
  "Redis": "/logos/redis.svg",
  "Supabase": "/logos/supabase.svg",
  "Pinecone": "/logos/pinecone.svg",
  "ChromaDB": "/logos/chromadb.svg",

  // AI
  "OpenAI": "/logos/openai.svg",
  "LangChain": "/logos/langchain.svg",
  "Hugging Face": "/logos/huggingface.svg",
  "HuggingFace": "/logos/huggingface.svg",
  "GPT-4": "/logos/openai.svg",
  "GPT-4o": "/logos/openai.svg",

  // Cloud & DevOps
  "AWS": "/logos/aws.svg",
  "Google Cloud": "/logos/google-cloud.svg",
  "GCP": "/logos/google-cloud.svg",
  "Vercel": "/logos/vercel.svg",
  "Docker": "/logos/docker.svg",
  "Kubernetes": "/logos/docker.svg",
  "GitHub Actions": "/logos/github-actions.svg",
  "Terraform": "/logos/terraform.svg",

  // CMS & Tools
  "Sanity": "/logos/sanity.svg",
  "Sanity CMS": "/logos/sanity.svg",
  "Stripe": "/logos/stripe.svg",
  "n8n": "/logos/n8n.svg",
  "Airtable": "/logos/airtable.svg",
};

export function getTechLogo(name: string): string | null {
  if (map[name]) return map[name];
  const normalized = name.trim();
  if (map[normalized]) return map[normalized];
  const lower = normalized.toLowerCase();
  const key = Object.keys(map).find((k) => k.toLowerCase() === lower);
  return key ? map[key] : null;
}
