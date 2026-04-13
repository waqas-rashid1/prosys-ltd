export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  what: string;
  whyUs: string[];
  metrics: { value: string; label: string }[];
  how: { title: string; desc: string }[];
  techStack: string[];
  benefits: string[];
  caseStudy: {
    title: string;
    challenge: string;
    result: string;
    metric: string;
  };
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
    whyUs: [
      "Sub-second page loads with server-side rendering and static generation",
      "SEO-first architecture with structured data and Core Web Vitals optimization",
      "Component-driven design systems that ensure consistency at scale",
      "CMS integration so your team can update content without developers",
    ],
    metrics: [
      { value: "0.8s", label: "Avg. Load Time" },
      { value: "95+", label: "Lighthouse Score" },
      { value: "40+", label: "Sites Delivered" },
      { value: "3x", label: "Avg. Traffic Growth" },
    ],
    how: [
      { title: "Discovery & IA", desc: "We map your content, user flows, and technical requirements into a clear information architecture." },
      { title: "Design & Prototype", desc: "Interactive Figma prototypes with mobile-first responsive design — you approve before we code." },
      { title: "Development", desc: "Component-driven TypeScript development with Next.js, TailwindCSS, and automated testing." },
      { title: "Optimization", desc: "Core Web Vitals tuning, image optimization, lazy loading, and performance benchmarking." },
      { title: "SEO & Launch", desc: "Schema markup, sitemap, meta tags, analytics setup — then deploy to Vercel or your infrastructure." },
      { title: "Support & Growth", desc: "Ongoing maintenance, security updates, feature additions, and performance monitoring." },
    ],
    techStack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Vercel", "Sanity CMS", "Framer Motion", "PostgreSQL"],
    benefits: [
      "Sub-second page loads with SSR/SSG",
      "SEO-optimized from the ground up",
      "Responsive across all devices and browsers",
      "CMS integration for easy content updates",
      "Accessibility compliance (WCAG 2.1 AA)",
      "Performance monitoring and alerting",
    ],
    caseStudy: {
      title: "Enterprise Corporate Website Rebuild",
      challenge: "A manufacturing company needed their legacy WordPress site rebuilt with modern performance standards and multilingual support.",
      result: "Delivered a Next.js site with sub-0.8s load times, 12 language variants, and Sanity CMS — resulting in 300% organic traffic increase in 6 months.",
      metric: "300% traffic increase",
    },
    faq: [
      { q: "How long does a typical website project take?", a: "A standard corporate website takes 3-5 weeks. Complex web applications with custom features take 6-12 weeks depending on scope and integrations required." },
      { q: "Do you provide ongoing maintenance?", a: "Yes. We offer monthly maintenance packages covering security updates, performance monitoring, content changes, and feature enhancements." },
      { q: "Can you migrate our existing website?", a: "Absolutely. We handle full migrations from WordPress, Wix, Squarespace, or custom platforms — preserving SEO equity and redirecting all URLs." },
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
    whyUs: [
      "Architecture-first approach — we design for scale before writing a line of code",
      "Full-stack engineering team with backend, frontend, DevOps, and QA",
      "CI/CD pipelines and automated testing built into every project",
      "Zero-downtime deployments and 99.9% uptime SLAs",
    ],
    metrics: [
      { value: "99.9%", label: "Uptime SLA" },
      { value: "50+", label: "Systems Built" },
      { value: "10M+", label: "Users Served" },
      { value: "24/7", label: "Monitoring" },
    ],
    how: [
      { title: "Business Analysis", desc: "We document your processes, identify pain points, and map requirements to technical specifications." },
      { title: "System Architecture", desc: "Scalable architecture design — monolith, microservices, or event-driven — based on your needs." },
      { title: "API-First Development", desc: "Clean, documented APIs that power your frontend, mobile apps, and third-party integrations." },
      { title: "Database Design", desc: "Optimized schema design, indexing strategy, and data migration planning for production workloads." },
      { title: "Testing & QA", desc: "Unit tests, integration tests, load testing, and security testing before every release." },
      { title: "Deployment & DevOps", desc: "CI/CD pipelines, containerization, infrastructure as code, and staged rollouts." },
    ],
    techStack: ["Node.js", "Python", "PostgreSQL", "Redis", "Docker", "AWS", "Kubernetes", "GraphQL"],
    benefits: [
      "Scalable architecture that grows with your business",
      "Comprehensive automated test coverage",
      "Full API documentation with OpenAPI/Swagger",
      "24/7 monitoring with PagerDuty alerting",
      "Security-first with encryption at rest and in transit",
      "Zero-downtime deployment strategy",
    ],
    caseStudy: {
      title: "Logistics Management Platform",
      challenge: "A logistics company needed to replace 5 disconnected spreadsheets and legacy tools with a unified system handling 10,000+ daily shipments.",
      result: "Built a custom platform with real-time tracking, automated routing, and driver management — reducing operational costs by 40%.",
      metric: "40% cost reduction",
    },
    faq: [
      { q: "Do you work with legacy systems?", a: "Yes. We regularly modernize legacy systems through incremental migration, API wrapping, or full rebuilds — always minimizing business disruption." },
      { q: "How do you handle data security?", a: "Security is built into every layer: encrypted data at rest and in transit, role-based access control, regular security audits, and compliance with relevant standards." },
      { q: "Can you integrate with our existing tools?", a: "Yes — we build integration layers for Salesforce, SAP, HubSpot, Stripe, and any tool with an API. Custom webhooks and event-driven architecture keep everything in sync." },
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
    whyUs: [
      "Production-grade AI, not just demos — robust error handling and fallback systems",
      "Cost-optimized inference with model routing and caching strategies",
      "RAG architecture for knowledge-grounded, hallucination-resistant AI",
      "Fine-tuning capabilities for domain-specific performance",
    ],
    metrics: [
      { value: "15+", label: "AI Projects Live" },
      { value: "95%", label: "Accuracy Rate" },
      { value: "60%", label: "Avg. Cost Savings" },
      { value: "<2s", label: "Response Time" },
    ],
    how: [
      { title: "AI Opportunity Audit", desc: "We assess where AI can deliver real ROI in your business — not just where it's trendy." },
      { title: "Data Pipeline", desc: "Clean, structure, and prepare your data for model training or RAG retrieval systems." },
      { title: "Model Selection", desc: "Choose the right model (GPT-4, Claude, Llama, custom) based on accuracy, cost, and latency requirements." },
      { title: "RAG / Fine-Tuning", desc: "Build retrieval-augmented generation systems or fine-tune models on your proprietary data." },
      { title: "API & Integration", desc: "Production APIs with rate limiting, caching, fallbacks, and seamless integration with your existing stack." },
      { title: "Monitor & Improve", desc: "Continuous evaluation, A/B testing, prompt optimization, and cost monitoring post-launch." },
    ],
    techStack: ["OpenAI GPT-4", "Claude", "LangChain", "Python", "FastAPI", "Pinecone", "Hugging Face", "ChromaDB"],
    benefits: [
      "Production-ready AI with robust error handling",
      "Custom models trained on your proprietary data",
      "Cost-optimized inference pipelines",
      "Hallucination-resistant RAG architectures",
      "Real-time monitoring and evaluation dashboards",
      "Seamless integration with existing systems",
    ],
    caseStudy: {
      title: "AI-Powered Legal Document Analyzer",
      challenge: "A law firm needed to analyze thousands of contracts, extract key clauses, identify risks, and generate summary reports.",
      result: "Built an AI platform using GPT-4 and custom extraction models that saves lawyers 15+ hours per week with 95% accuracy.",
      metric: "15 hrs/week saved",
    },
    faq: [
      { q: "Can you integrate AI into our existing product?", a: "Absolutely. We specialize in adding AI capabilities to existing systems — chatbots, smart search, content generation, data analysis, and more." },
      { q: "How do you manage AI costs?", a: "We optimize from day one: caching frequent queries, model routing (cheaper models for simple tasks), batching requests, and token optimization." },
      { q: "What about data privacy?", a: "We can deploy models on your own infrastructure, use Azure OpenAI for data isolation, or implement strict data processing agreements with third-party providers." },
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
    whyUs: [
      "4-8 week delivery — from blank canvas to live product",
      "Investor-grade code quality and architecture documentation",
      "Scalable foundation that won't need a rewrite at Series A",
      "Post-MVP support: we stay as your technical partner through growth",
    ],
    metrics: [
      { value: "4-8", label: "Weeks to Launch" },
      { value: "25+", label: "MVPs Shipped" },
      { value: "80%", label: "Funded After MVP" },
      { value: "$0", label: "Rewrites Needed" },
    ],
    how: [
      { title: "Rapid Discovery", desc: "A 2-3 hour workshop to define your core hypothesis, target user, and must-have features." },
      { title: "Feature Prioritization", desc: "MoSCoW method to identify the 20% of features that deliver 80% of value." },
      { title: "Design Sprint", desc: "1-week UI/UX sprint producing interactive prototypes for key user flows." },
      { title: "Agile Build", desc: "2-week development sprints with live demos — you see progress in real-time." },
      { title: "User Testing", desc: "Real user feedback sessions, bug fixes, and UX refinements before launch." },
      { title: "Launch & Handoff", desc: "Deployment, analytics setup, investor demo prep, and growth strategy handoff." },
    ],
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "Vercel", "Supabase", "TailwindCSS"],
    benefits: [
      "Launch-ready in 4-8 weeks",
      "Investor-quality code and design",
      "Architecture designed for scale",
      "Full source code ownership",
      "Post-MVP technical support",
      "Pitch deck tech section assistance",
    ],
    caseStudy: {
      title: "HealthTech Patient Portal MVP",
      challenge: "A first-time founder needed an investor-ready telehealth MVP with patient scheduling, video calls, and HIPAA-compliant data handling.",
      result: "Shipped in 6 weeks. The founder raised a $1.2M seed round 3 months after launch, with investors citing the product quality as a key factor.",
      metric: "$1.2M seed raised",
    },
    faq: [
      { q: "What's included in an MVP?", a: "Core user flows, authentication, the key feature set, responsive design, basic analytics, and production deployment. We focus on the minimum viable feature set that proves your hypothesis." },
      { q: "Do we own the code?", a: "100%. You get full source code ownership, a documented codebase, and deployment access. No lock-in, no licensing." },
      { q: "What happens after the MVP?", a: "We can continue as your development partner for post-launch iteration, or hand off to your in-house team with a full onboarding session and documentation." },
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
    whyUs: [
      "True multi-tenant architecture with proper data isolation",
      "Stripe billing integration with trial management and dunning",
      "White-label capable architecture from day one",
      "Admin dashboards with real-time usage analytics",
    ],
    metrics: [
      { value: "15+", label: "SaaS Platforms" },
      { value: "50K+", label: "End Users Served" },
      { value: "99.9%", label: "Uptime" },
      { value: "$0", label: "Billing Errors" },
    ],
    how: [
      { title: "Business Model Analysis", desc: "We map your pricing tiers, feature gates, user roles, and monetization strategy into the technical architecture." },
      { title: "Multi-Tenant Architecture", desc: "Shared database with row-level security, or dedicated databases for regulated industries — your choice." },
      { title: "Billing & Subscriptions", desc: "Stripe integration with trial periods, upgrades/downgrades, prorations, dunning, and revenue analytics." },
      { title: "Dashboard & Admin", desc: "User-facing dashboards and admin panels with real-time data, usage tracking, and tenant management." },
      { title: "API & Integrations", desc: "RESTful or GraphQL APIs for third-party integrations, webhooks, and future mobile app support." },
      { title: "Launch & Scale", desc: "Load testing, security audit, staged rollout, and auto-scaling infrastructure for growth." },
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS", "Docker", "Prisma"],
    benefits: [
      "True multi-tenant architecture",
      "Stripe-powered billing from day one",
      "Admin dashboard with tenant analytics",
      "API-first for third-party integrations",
      "Auto-scaling infrastructure",
      "White-label ready architecture",
    ],
    caseStudy: {
      title: "HR Management SaaS Platform",
      challenge: "An HR startup needed a multi-tenant platform with employee management, payroll integration, leave tracking, and performance reviews for SMBs.",
      result: "Built and launched in 10 weeks. Now serving 50+ companies with 2,000+ active employees. MRR grew 40% month-over-month for the first 6 months.",
      metric: "50+ companies onboarded",
    },
    faq: [
      { q: "Database per tenant or shared database?", a: "We typically recommend shared database with row-level security for cost efficiency, but design per-tenant isolation for regulated industries like healthcare or finance." },
      { q: "How do you handle billing edge cases?", a: "Stripe handles the heavy lifting. We implement trial management, proration, failed payment dunning, plan switching, and usage-based billing with proper webhook handling." },
      { q: "Can the platform be white-labeled?", a: "Yes — we architect for white-labeling from day one: custom domains, theming, branding, and email templates per tenant." },
    ],
  },
  {
    slug: "ai-automations",
    title: "AI Automations",
    tagline: "Automate workflows and save hours daily",
    description:
      "Intelligent workflow automation with AI agents, custom GPTs, and integration platforms that eliminate repetitive work and scale your operations.",
    icon: "Bot",
    what: "We build automation systems that combine AI intelligence with workflow orchestration. From customer support bots to data processing pipelines to multi-step AI agents — we automate the work that's eating your team's time.",
    whyUs: [
      "AI-powered decision-making, not just simple if/then rules",
      "Visual workflow builders your non-technical team can modify",
      "Error handling and human-in-the-loop fallback for edge cases",
      "Monitoring dashboards showing ROI and time saved per automation",
    ],
    metrics: [
      { value: "80%", label: "Avg. Time Saved" },
      { value: "24/7", label: "Always Running" },
      { value: "100+", label: "Workflows Built" },
      { value: "0", label: "Errors Missed" },
    ],
    how: [
      { title: "Workflow Audit", desc: "Map your current manual processes and identify the highest-ROI automation opportunities." },
      { title: "Agent Design", desc: "Design AI agent behavior, decision trees, prompt chains, and fallback logic." },
      { title: "Platform Setup", desc: "Configure n8n, Make, or custom orchestration connecting all your tools and data sources." },
      { title: "AI Integration", desc: "Plug in GPT-4, Claude, or custom models for intelligent classification, extraction, and generation." },
      { title: "Testing", desc: "Run against real data with edge cases. Build error handling and human escalation paths." },
      { title: "Deploy & Train", desc: "Go live with monitoring dashboards and train your team to manage automations independently." },
    ],
    techStack: ["n8n", "OpenAI GPT-4", "LangChain", "Make", "Zapier", "Slack API", "Python", "Airtable"],
    benefits: [
      "80%+ reduction in manual repetitive work",
      "24/7 operation without human supervision",
      "Robust error handling and escalation paths",
      "Easy to modify without developer help",
      "ROI tracking and performance dashboards",
      "Integration with 500+ tools and platforms",
    ],
    caseStudy: {
      title: "E-Commerce Order Processing Automation",
      challenge: "A D2C brand was manually processing 200+ orders daily, syncing inventory across 3 channels, and handling customer support tickets.",
      result: "Built an AI automation suite that handles order processing, inventory sync, and first-line support — reducing manual work by 80% and response time from hours to minutes.",
      metric: "80% manual work eliminated",
    },
    faq: [
      { q: "What kind of tasks can be automated?", a: "Email triage, data entry, report generation, customer support, social media, lead qualification, invoice processing, inventory management — almost any repetitive workflow." },
      { q: "Do we need technical staff to maintain automations?", a: "No. We build with visual interfaces and documentation so non-technical team members can manage, modify, and extend automations." },
      { q: "How do you handle errors in automations?", a: "Every automation includes error detection, retry logic, human escalation alerts, and audit logging. Nothing fails silently." },
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
    whyUs: [
      "Engineering-led SEO — we fix root causes, not symptoms",
      "Core Web Vitals obsessed — we optimize what Google actually measures",
      "Schema markup specialists — rich results and knowledge panels",
      "Transparent reporting with actual metrics, not vanity numbers",
    ],
    metrics: [
      { value: "3x", label: "Avg. Traffic Growth" },
      { value: "95+", label: "Lighthouse Scores" },
      { value: "Top 3", label: "Avg. SERP Position" },
      { value: "200%", label: "Avg. Lead Increase" },
    ],
    how: [
      { title: "Technical Audit", desc: "Comprehensive crawl analysis, indexation review, Core Web Vitals assessment, and competitor benchmarking." },
      { title: "Architecture Strategy", desc: "URL structure optimization, internal linking strategy, and content hierarchy mapping." },
      { title: "On-Page Optimization", desc: "Title tags, meta descriptions, heading structure, content optimization, and image alt text across all pages." },
      { title: "Schema Markup", desc: "Structured data implementation for Organization, Service, FAQ, Article, and Review schemas." },
      { title: "Content Strategy", desc: "Keyword mapping, topic clusters, content calendar, and editorial guidelines for ongoing growth." },
      { title: "Monthly Reporting", desc: "Transparent monthly reports with traffic data, ranking changes, backlink growth, and actionable recommendations." },
    ],
    techStack: ["Google Search Console", "Ahrefs", "Screaming Frog", "PageSpeed Insights", "Schema.org", "GA4", "Semrush", "Next.js"],
    benefits: [
      "Measurable organic traffic growth",
      "Improved Core Web Vitals scores",
      "Rich results and featured snippets",
      "Transparent monthly reporting",
      "No black-hat techniques — sustainable growth only",
      "Compound growth that builds over time",
    ],
    caseStudy: {
      title: "SaaS Company Organic Growth",
      challenge: "A B2B SaaS startup had zero organic traffic and was fully dependent on paid ads for customer acquisition.",
      result: "Implemented technical SEO, content strategy, and schema markup. Organic traffic grew 340% in 6 months, becoming the #1 acquisition channel.",
      metric: "340% organic growth",
    },
    faq: [
      { q: "How long until we see results?", a: "Technical fixes show impact in 2-4 weeks. Content-driven growth typically shows meaningful results in 3-6 months, compounding over time." },
      { q: "Do you do link building?", a: "We focus on earning links through quality content, digital PR, and technical excellence — not paid link schemes that risk Google penalties." },
      { q: "Do you guarantee first page rankings?", a: "No one can honestly guarantee rankings — Google's algorithm considers hundreds of factors. We guarantee rigorous, data-driven execution that consistently delivers measurable traffic growth." },
    ],
  },
  {
    slug: "aieo",
    title: "AIEO",
    tagline: "Rank on AI search engines — the next frontier",
    description:
      "AI Engine Optimization — we structure your digital presence to be discoverable and recommended by ChatGPT, Gemini, Perplexity, and AI-powered search.",
    icon: "Sparkles",
    what: "AIEO is the practice of structuring your brand's digital footprint so AI assistants cite, recommend, and surface your business when users ask relevant questions. This is the next evolution of search, and we're among the first to offer dedicated AIEO services.",
    whyUs: [
      "Pioneer AIEO practitioners — we've studied how every major LLM retrieves and cites information",
      "Proprietary audit framework for measuring AI search visibility",
      "Complements traditional SEO — not a replacement, but the next layer",
      "Entity-first approach: build your brand as a knowledge entity AI can reference",
    ],
    metrics: [
      { value: "5+", label: "AI Engines Covered" },
      { value: "80%", label: "Mention Rate Lift" },
      { value: "#1", label: "AIEO Agency in PK" },
      { value: "100%", label: "Clients Retained" },
    ],
    how: [
      { title: "AI Visibility Audit", desc: "Test your brand's current presence across ChatGPT, Gemini, Perplexity, Claude, and Copilot." },
      { title: "Entity Optimization", desc: "Build your brand's entity profile across knowledge graphs, Wikipedia, Crunchbase, and structured data." },
      { title: "Content Restructuring", desc: "Reformat existing content for AI-friendly extraction — Q&A format, clear definitions, structured claims." },
      { title: "Citation Building", desc: "Get your brand cited in authoritative sources that LLMs index and reference." },
      { title: "Schema Enhancement", desc: "Advanced structured data that helps AI models understand your services, expertise, and authority." },
      { title: "Ongoing Monitoring", desc: "Track your brand's mentions and recommendations across AI platforms with monthly reporting." },
    ],
    techStack: ["ChatGPT", "Google Gemini", "Perplexity", "Claude", "Schema.org", "Knowledge Graphs", "Wikidata", "Ahrefs"],
    benefits: [
      "Appear in AI-generated answers and recommendations",
      "First-mover advantage in AI search optimization",
      "Complementary to traditional SEO — amplifies both",
      "Brand authority building across AI ecosystems",
      "Measurable improvement in AI search mentions",
      "Future-proof your digital marketing strategy",
    ],
    caseStudy: {
      title: "B2B SaaS AI Search Visibility",
      challenge: "A project management SaaS was invisible on AI search engines — competitors were being recommended instead when users asked 'best project management tools.'",
      result: "After 3 months of AIEO work, the brand appeared in ChatGPT and Gemini responses for 12 target queries, driving a new acquisition channel.",
      metric: "12 AI search queries ranked",
    },
    faq: [
      { q: "Is AIEO different from SEO?", a: "Yes. SEO optimizes for search engine crawlers and ranking algorithms. AIEO optimizes for how AI models retrieve, understand, and cite your content when generating answers for users." },
      { q: "Which AI engines do you optimize for?", a: "ChatGPT (OpenAI), Google Gemini, Perplexity, Claude (Anthropic), and Microsoft Copilot. Each has different data sources and citation patterns." },
      { q: "How do you measure AIEO results?", a: "We run structured queries across all major AI platforms weekly, tracking whether your brand is mentioned, recommended, or cited — and in what context." },
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
    whyUs: [
      "ROI-focused — every campaign is measured by revenue generated, not vanity metrics",
      "Full-funnel capability — awareness, consideration, conversion, and retention",
      "Creative in-house — ad copy, design, video, and landing pages all under one roof",
      "Weekly optimization cycles — not set-and-forget campaign management",
    ],
    metrics: [
      { value: "420%", label: "Avg. ROAS" },
      { value: "50%", label: "Avg. CAC Reduction" },
      { value: "$2M+", label: "Ad Spend Managed" },
      { value: "3x", label: "Avg. Lead Growth" },
    ],
    how: [
      { title: "Market Research", desc: "Competitor analysis, audience research, keyword mapping, and channel opportunity assessment." },
      { title: "Strategy & Budget", desc: "Channel mix strategy, budget allocation, KPI definition, and campaign architecture planning." },
      { title: "Creative Development", desc: "Ad copy, banner designs, video scripts, and landing page design — all A/B test-ready." },
      { title: "Campaign Launch", desc: "Pixel setup, conversion tracking, audience targeting, and bid strategy implementation across all channels." },
      { title: "Optimization", desc: "Weekly A/B testing, audience refinement, creative rotation, and bid adjustments based on performance data." },
      { title: "Reporting & Scale", desc: "Weekly performance dashboards, monthly strategy reviews, and scaling playbooks for winning campaigns." },
    ],
    techStack: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Mailchimp", "GA4", "Hotjar", "Semrush", "Canva"],
    benefits: [
      "Measurable ROI on every dollar spent",
      "Multi-channel attribution tracking",
      "In-house creative production",
      "Weekly optimization and A/B testing",
      "Transparent reporting with real metrics",
      "Scalable campaign frameworks",
    ],
    caseStudy: {
      title: "D2C Brand Growth Campaign",
      challenge: "A direct-to-consumer skincare brand needed to scale from $10K to $50K monthly revenue through digital channels.",
      result: "Implemented a full-funnel strategy across Meta, Google, and email. Achieved 420% ROAS and scaled to $65K monthly revenue in 4 months.",
      metric: "420% ROAS achieved",
    },
    faq: [
      { q: "What's your minimum ad budget?", a: "We recommend a minimum of $2,000/month in ad spend for meaningful data and optimization. Our management fee is separate and based on scope." },
      { q: "Do you handle creative too?", a: "Yes — ad copy, banner design, video ads, email templates, and landing page design are all part of our full-service offering." },
      { q: "How do you report results?", a: "Weekly Slack/email updates with key metrics. Monthly detailed reports with channel breakdown, creative performance, and strategic recommendations." },
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
    whyUs: [
      "Full-service design: brand identity, UI/UX, print, and digital — all under one roof",
      "Design systems approach — reusable, consistent assets that scale with your brand",
      "Senior designers with agency and startup experience",
      "Fast turnaround — logo concepts in 5 days, full brand kits in 2-3 weeks",
    ],
    metrics: [
      { value: "30+", label: "Brands Designed" },
      { value: "5 days", label: "Logo Concepts" },
      { value: "100%", label: "Client Satisfaction" },
      { value: "2-3 wk", label: "Full Brand Kit" },
    ],
    how: [
      { title: "Brand Discovery", desc: "Deep-dive into your business, competitors, target audience, and brand personality through a structured workshop." },
      { title: "Visual Exploration", desc: "Moodboards, color palettes, typography selections, and 3 distinct logo concepts for your review." },
      { title: "Design Refinement", desc: "2-3 rounds of revision on the chosen direction until every detail is pixel-perfect." },
      { title: "Brand Guidelines", desc: "Comprehensive document covering logo usage, colors, typography, imagery style, and tone of voice." },
      { title: "Asset Production", desc: "Social media templates, email headers, presentation templates, business cards, and any collateral you need." },
      { title: "Design System", desc: "For digital products: a Figma component library with UI patterns, spacing system, and interaction guidelines." },
    ],
    techStack: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "After Effects", "Lottie", "Framer", "Canva", "Webflow"],
    benefits: [
      "Complete brand identity package",
      "Consistent design across all touchpoints",
      "Reusable Figma design system",
      "Print and digital-ready file formats",
      "Social media template kit included",
      "Pitch deck design capability",
    ],
    caseStudy: {
      title: "FinTech Startup Brand Identity",
      challenge: "A FinTech startup needed a complete brand identity for their Series A fundraise — logo, website design, pitch deck, and social media presence.",
      result: "Delivered full brand kit in 3 weeks. The pitch deck design was cited by investors as 'the most professional we've seen from a pre-Series A company.'",
      metric: "Series A funded",
    },
    faq: [
      { q: "How many logo concepts do we get?", a: "We present 3 initial concepts based on our discovery session, then refine the chosen direction through 2-3 rounds of detailed revision." },
      { q: "Do you design pitch decks?", a: "Yes — investor pitch decks are one of our most requested services. We handle content structure, visual design, data visualization, and presentation coaching." },
      { q: "Can you create motion graphics?", a: "Yes — animated logos, product demos, social media animations, and explainer videos using After Effects and Lottie." },
    ],
  },
];
