export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  what: string;
  how: string[];
  techStack: string[];
  benefits: string[];
  faq: { q: string; a: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "High-performance websites that convert",
    description:
      "We build blazing-fast, SEO-optimized websites and web applications using Next.js, React, and modern frameworks. Every site is engineered for performance, accessibility, and conversion.",
    icon: "Code2",
    what: "From corporate websites to complex web applications, we deliver production-ready solutions with sub-second load times, responsive design, and clean architecture. We specialize in Next.js and React — the same stack powering Netflix, Notion, and Vercel.",
    how: [
      "Requirements analysis and information architecture",
      "UI/UX design with interactive prototypes",
      "Component-driven development with TypeScript",
      "Performance optimization and Core Web Vitals tuning",
      "SEO implementation and structured data",
      "Deployment, monitoring, and ongoing support",
    ],
    techStack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Vercel", "Sanity CMS"],
    benefits: [
      "Sub-second page loads with SSR/SSG",
      "SEO-optimized from the ground up",
      "Responsive across all devices",
      "CMS integration for easy content updates",
    ],
    faq: [
      { q: "How long does a typical website take?", a: "A standard corporate website takes 3-5 weeks. Complex web applications with custom features take 6-12 weeks depending on scope." },
      { q: "Do you provide ongoing maintenance?", a: "Yes. We offer monthly maintenance packages covering updates, security patches, performance monitoring, and content changes." },
    ],
  },
  {
    slug: "software-development",
    title: "Software Development",
    tagline: "Enterprise-grade systems built to scale",
    description:
      "Custom software solutions engineered for performance, security, and scalability. From complex business logic to distributed systems, we build software that handles real-world complexity.",
    icon: "Cpu",
    what: "We design and build custom software systems that solve complex business problems — ERPs, CRMs, workflow engines, APIs, microservices, and everything in between. Our architecture-first approach ensures your system scales with your business.",
    how: [
      "Business process analysis and system design",
      "Architecture planning (monolith, microservices, or hybrid)",
      "API-first development with comprehensive documentation",
      "Database design and optimization",
      "CI/CD pipeline setup and automated testing",
      "Staged rollout with zero-downtime deployments",
    ],
    techStack: ["Node.js", "Python", "PostgreSQL", "Redis", "Docker", "AWS"],
    benefits: [
      "Scalable architecture that grows with you",
      "Comprehensive test coverage",
      "Full API documentation",
      "24/7 monitoring and alerting",
    ],
    faq: [
      { q: "Do you work with legacy systems?", a: "Yes. We regularly modernize legacy systems through incremental migration, API wrapping, or full rebuilds — always minimizing business disruption." },
      { q: "How do you handle data security?", a: "Security is built into every layer: encrypted data at rest and in transit, role-based access control, regular security audits, and compliance with relevant standards." },
    ],
  },
  {
    slug: "ai-development",
    title: "AI Development",
    tagline: "Custom AI that gives you an unfair advantage",
    description:
      "Custom AI/ML models, LLM integrations, intelligent chatbots, and AI-powered features that transform how your business operates and competes.",
    icon: "BrainCircuit",
    what: "We build production-grade AI systems — from fine-tuned LLMs and RAG pipelines to computer vision and predictive analytics. Not demos, not prototypes — real AI that works in production with error handling, monitoring, and continuous improvement.",
    how: [
      "AI opportunity assessment and feasibility analysis",
      "Data pipeline design and preparation",
      "Model selection, training, and fine-tuning",
      "RAG architecture for knowledge-grounded AI",
      "API integration and production deployment",
      "Monitoring, evaluation, and continuous improvement",
    ],
    techStack: ["OpenAI", "LangChain", "Python", "FastAPI", "Pinecone", "Hugging Face"],
    benefits: [
      "Production-ready AI, not just demos",
      "Custom models trained on your data",
      "Robust error handling and fallbacks",
      "Cost-optimized inference pipelines",
    ],
    faq: [
      { q: "Can you integrate AI into our existing product?", a: "Absolutely. We specialize in adding AI capabilities to existing systems — chatbots, smart search, content generation, data analysis, and more." },
      { q: "How do you handle AI costs?", a: "We optimize for cost from day one: caching, model routing (using cheaper models for simple tasks), batching, and token optimization." },
    ],
  },
  {
    slug: "mvp-development",
    title: "MVP Development",
    tagline: "Idea to launch in weeks, not months",
    description:
      "We design, build, and ship investor-ready MVPs in 4-8 weeks with lean, scalable architecture that grows with you post-funding.",
    icon: "Rocket",
    what: "Your MVP needs to do three things: validate your hypothesis, impress investors, and be architecturally sound enough to scale. We deliver all three with a lean process that prioritizes speed without cutting corners on quality.",
    how: [
      "Rapid discovery workshop (2-3 hours)",
      "Feature prioritization using MoSCoW method",
      "UI/UX design sprint (1 week)",
      "Agile build in 2-week sprints",
      "User testing and iteration",
      "Launch support and growth handoff",
    ],
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "Vercel"],
    benefits: [
      "Launch-ready in 4-8 weeks",
      "Investor-quality code and design",
      "Architecture designed to scale",
      "Post-MVP support available",
    ],
    faq: [
      { q: "What's included in an MVP?", a: "Core user flows, authentication, key feature set, responsive design, basic analytics, and deployment. We focus on the 20% of features that deliver 80% of value." },
      { q: "Can you help with the pitch deck too?", a: "We can provide technical architecture diagrams, product screenshots, and demo videos that strengthen your pitch — but we don't do pitch deck design." },
    ],
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    tagline: "Multi-tenant platforms built for recurring revenue",
    description:
      "End-to-end SaaS platform engineering — multi-tenant architecture, billing systems, dashboards, APIs, and infrastructure built for scale.",
    icon: "Cloud",
    what: "We build SaaS platforms from zero to launch: multi-tenant data isolation, subscription billing with Stripe, role-based access, admin dashboards, API layers, and the infrastructure to support thousands of concurrent users.",
    how: [
      "SaaS business model analysis and feature scoping",
      "Multi-tenant architecture design",
      "Billing and subscription system (Stripe integration)",
      "Admin dashboard and analytics",
      "API design and third-party integrations",
      "Load testing, security audit, and launch",
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS"],
    benefits: [
      "True multi-tenant architecture",
      "Stripe-powered billing from day one",
      "Admin dashboard included",
      "Built to handle scale",
    ],
    faq: [
      { q: "Database per tenant or shared database?", a: "We typically recommend shared database with row-level security for cost efficiency, but we design per-tenant isolation for regulated industries." },
      { q: "Can you integrate with existing tools?", a: "Yes — Zapier, Slack, HubSpot, Salesforce, and any tool with an API. We build integration layers that are easy to extend." },
    ],
  },
  {
    slug: "ai-automations",
    title: "AI Automations",
    tagline: "Automate workflows. Save hours daily.",
    description:
      "Intelligent workflow automation with AI agents, custom GPTs, and integration platforms that eliminate repetitive work and scale your operations.",
    icon: "Bot",
    what: "We build automation systems that combine AI intelligence with workflow orchestration. From customer support bots to data processing pipelines to multi-step AI agents — we automate the work that's eating your team's time.",
    how: [
      "Workflow audit and automation opportunity mapping",
      "AI agent design and prompt engineering",
      "Integration platform setup (n8n, Make, or custom)",
      "Testing with real data and edge cases",
      "Deployment with monitoring and alerts",
      "Training your team to manage automations",
    ],
    techStack: ["n8n", "OpenAI GPT-4", "LangChain", "Zapier", "Make", "Slack API"],
    benefits: [
      "80%+ reduction in manual work",
      "24/7 operation without human intervention",
      "Error handling and fallback flows",
      "Easy to modify and extend",
    ],
    faq: [
      { q: "What kind of tasks can be automated?", a: "Email processing, data entry, report generation, customer support triage, social media posting, lead qualification, invoice processing — almost any repetitive workflow." },
      { q: "Do we need technical staff to maintain automations?", a: "No. We build automations with visual interfaces and documentation so non-technical team members can manage and modify them." },
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    tagline: "Data-driven organic growth that compounds",
    description:
      "Technical SEO, on-page optimization, content strategy, and Core Web Vitals tuning that delivers measurable, sustainable organic traffic growth.",
    icon: "Search",
    what: "We treat SEO as engineering, not guesswork. Our approach combines technical site optimization, content architecture, structured data implementation, and performance tuning to build organic traffic that compounds month over month.",
    how: [
      "Comprehensive technical SEO audit",
      "Site architecture and internal linking strategy",
      "Core Web Vitals optimization",
      "Schema markup and structured data implementation",
      "Content strategy and keyword mapping",
      "Monthly reporting with actionable insights",
    ],
    techStack: ["Google Search Console", "Ahrefs", "Screaming Frog", "PageSpeed Insights", "Schema.org", "Next.js SEO"],
    benefits: [
      "Measurable organic traffic growth",
      "Improved Core Web Vitals scores",
      "Rich results in Google SERPs",
      "Transparent monthly reporting",
    ],
    faq: [
      { q: "How long until we see results?", a: "Technical fixes show impact in 2-4 weeks. Content-driven growth typically shows meaningful results in 3-6 months, compounding over time." },
      { q: "Do you do link building?", a: "We focus on earning links through quality content, digital PR, and technical excellence — not paid link schemes that risk Google penalties." },
    ],
  },
  {
    slug: "aieo",
    title: "AIEO",
    tagline: "Rank on AI search engines. The next frontier.",
    description:
      "AI Engine Optimization — we structure your digital presence to be discoverable and recommended by ChatGPT, Gemini, Perplexity, and AI-powered search.",
    icon: "Sparkles",
    what: "AIEO (AI Engine Optimization) is the practice of structuring your brand's digital footprint so AI assistants cite, recommend, and surface your business when users ask relevant questions. This is the next evolution of search, and we're among the first to offer dedicated AIEO services.",
    how: [
      "AI search visibility audit across major LLMs",
      "Entity optimization and knowledge graph positioning",
      "Structured data enhancement for AI consumption",
      "Content reformatting for AI-friendly extraction",
      "Citation building across AI-indexed sources",
      "Ongoing monitoring of AI search mentions",
    ],
    techStack: ["ChatGPT", "Google Gemini", "Perplexity", "Claude", "Schema.org", "Knowledge Graphs"],
    benefits: [
      "Appear in AI-generated answers",
      "First-mover advantage in AI search",
      "Complements traditional SEO",
      "Brand authority in AI ecosystems",
    ],
    faq: [
      { q: "Is AIEO different from SEO?", a: "Yes. SEO optimizes for search engine crawlers and ranking algorithms. AIEO optimizes for how AI models retrieve, understand, and cite your content when generating answers." },
      { q: "Which AI engines do you optimize for?", a: "ChatGPT (OpenAI), Google Gemini, Perplexity, Claude (Anthropic), and Microsoft Copilot. Each has different data sources and citation patterns." },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Full-funnel campaigns that drive real ROI",
    description:
      "Paid advertising, social media strategy, email marketing, content marketing, and analytics-driven campaign optimization across all channels.",
    icon: "Megaphone",
    what: "We run full-funnel digital marketing campaigns that drive qualified leads and measurable revenue. From Google Ads and Meta campaigns to email sequences and content strategy — everything is data-driven and ROI-focused.",
    how: [
      "Market research and competitor analysis",
      "Channel strategy and budget allocation",
      "Creative development (copy, visuals, video)",
      "Campaign launch and A/B testing",
      "Conversion tracking and attribution setup",
      "Weekly optimization and monthly reporting",
    ],
    techStack: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Mailchimp", "GA4", "Hotjar"],
    benefits: [
      "Measurable ROI on every dollar spent",
      "Multi-channel attribution tracking",
      "Creative testing and optimization",
      "Transparent weekly reporting",
    ],
    faq: [
      { q: "What's your minimum ad budget?", a: "We recommend a minimum of $2,000/month in ad spend for meaningful data and optimization. Our management fee is separate." },
      { q: "Do you handle creative too?", a: "Yes — ad copy, banner design, video ads, and landing page design are all part of our service." },
    ],
  },
  {
    slug: "graphics-branding",
    title: "Graphics & Branding",
    tagline: "Visual identity that makes you unforgettable",
    description:
      "Brand identity design, UI/UX design systems, pitch decks, social media assets, and visual storytelling that elevates your brand above the noise.",
    icon: "Palette",
    what: "We create complete visual identities and design systems — from logos and brand guidelines to pitch decks and social media kits. Every asset is crafted to be consistent, memorable, and professional across all touchpoints.",
    how: [
      "Brand discovery and competitive analysis",
      "Logo design and visual identity exploration",
      "Brand guidelines document",
      "UI/UX design system creation",
      "Pitch deck and presentation design",
      "Social media template kit",
    ],
    techStack: ["Figma", "Adobe Creative Suite", "Framer", "Webflow", "Lottie", "After Effects"],
    benefits: [
      "Complete brand identity package",
      "Consistent design across all touchpoints",
      "Reusable design system and templates",
      "Print and digital-ready assets",
    ],
    faq: [
      { q: "How many logo concepts do we get?", a: "We present 3 initial concepts based on our discovery session, then refine the chosen direction through 2-3 rounds of revision." },
      { q: "Do you design pitch decks?", a: "Yes — investor pitch decks are one of our most requested services. We handle content structure, visual design, and data visualization." },
    ],
  },
];
