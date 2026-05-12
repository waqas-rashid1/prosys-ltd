export const siteConfig = {
  name: "PROSYS LTD",
  tagline: "Engineering for production.",
  description:
    "PROSYS LTD is an engineering practice delivering SaaS platforms, AI systems, cloud infrastructure, and growth programs for funded startups and mid-market enterprises. Production-focused, end-to-end accountable.",
  url: "https://prosysltd.com",
  email: "hello@prosysltd.com",
  // E.164 format for tel: links and WhatsApp deep links.
  phone: "+923348076605",
  // Human-readable variant for display in copy and the contact strip.
  phoneDisplay: "+92 334 807 6605",
  address: "Lahore, Pakistan",
  founded: "2024",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
];

export const services = [
  // Pillar 1 — Product Engineering
  {
    icon: "Code2",
    slug: "web-development",
    title: "Web Development",
    description:
      "Marketing sites and web applications engineered on Next.js, React, and TypeScript. Sub-second load times, WCAG-compliant by default, with editorial workflows your team can operate independently.",
  },
  {
    icon: "Rocket",
    slug: "mvp-development",
    title: "MVP Development",
    description:
      "First production release in 6–12 weeks. Defensible architecture, reviewable code, and a system in operation from day one — engineered to absorb growth without rework.",
  },
  {
    icon: "Cloud",
    slug: "saas-development",
    title: "SaaS Development",
    description:
      "Multi-tenant platforms with Stripe billing, role-based access, and the operational infrastructure enterprise customers expect. Engineered to scale through your first thousand tenants without re-architecture.",
  },
  {
    icon: "Cpu",
    slug: "software-development",
    title: "Custom Software",
    description:
      "Internal tools, B2B portals, and back-office systems designed around operational workflow — not procurement requirements. Measured by adoption, not feature count.",
  },

  // Pillar 2 — AI & Automation
  {
    icon: "BrainCircuit",
    slug: "ai-development",
    title: "AI Development",
    description:
      "LLM integrations, custom models, conversational interfaces, and RAG systems. Evaluation harnesses, cost ceilings, and fallback logic engineered before the system reaches production.",
  },
  {
    icon: "Bot",
    slug: "ai-automations",
    title: "AI Automations",
    description:
      "AI agents and workflow automation built on n8n, Make, and custom orchestration. We replace manual spreadsheet workflows with auditable, observable production systems.",
  },
  {
    icon: "Sparkles",
    slug: "generative-ai",
    title: "Generative AI",
    description:
      "Image, text, and code generation embedded into product workflows. Model selection, prompt architecture, and safety guardrails engineered against the use case — not the latest benchmark.",
  },

  // Pillar 3 — Cloud & Infrastructure
  {
    icon: "CloudCog",
    slug: "cloud-operations",
    title: "Cloud Migration & Ops",
    description:
      "Migrate from legacy infrastructure to AWS or GCP with zero downtime. We've executed the complex modernization patterns — strangler fig, blue-green, dual-write — so the migration is engineering, not exploration.",
  },
  {
    icon: "Settings",
    slug: "managed-services",
    title: "Managed Services",
    description:
      "Monthly retainers covering monitoring, patching, on-call response, and the steady-state engineering work most internal teams under-resource. Tiered SLAs, transparent reporting, predictable spend.",
  },
  {
    icon: "ShieldCheck",
    slug: "security",
    title: "Security",
    description:
      "Security audits, penetration testing, and SOC 2 evidence pipelines. We identify exploitable risk, prioritize by business impact, and engineer the remediation against documented control objectives.",
  },

  // Pillar 4 — Growth & Marketing
  {
    icon: "Search",
    slug: "seo",
    title: "SEO",
    description:
      "Technical SEO, content cluster architecture, and Core Web Vitals optimization. Programs measured by ranking, traffic, and pipeline contribution — not by audit page count.",
  },
  {
    icon: "Sparkles",
    slug: "aieo",
    title: "AIEO",
    description:
      "AI Engine Optimization — engineering brand visibility across ChatGPT, Gemini, Claude, and Perplexity. Structured data, citation architecture, and content formats that AI retrieval systems prioritize.",
  },
  {
    icon: "Megaphone",
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Paid acquisition, lifecycle marketing, content, and analytics — instrumented end-to-end against product data so channel ROI is measured, not estimated.",
  },
  {
    icon: "Palette",
    slug: "graphics-branding",
    title: "Graphics & Branding",
    description:
      "Brand identity, design systems, investor materials, and content assets. Visual work delivered on engineering timelines — production-ready files, system documentation, and Figma libraries your team can extend.",
  },
];

export const stats = [
  { value: 50, suffix: "+", label: "Engagements delivered" },
  { value: 12, suffix: "+", label: "Industries served" },
  { value: 15, suffix: "+", label: "Engineers" },
  { value: 99, suffix: "%", label: "Engagement retention" },
];

export const heroProofPoints = [
  { value: "50+", label: "Engagements delivered" },
  { value: "5", label: "Industry verticals" },
  { value: "Production", label: "in 6\u201312 weeks" },
];

export const caseStudies = [
  {
    slug: "ai-analytics-saas-fintech",
    category: "SaaS Platform",
    title: "AI-Powered Analytics Dashboard",
    client: "Series A FinTech",
    clientRegion: "United States",
    year: "2025",
    image: "/images/case-saas.jpg",
    description:
      "Multi-tenant SaaS analytics platform with real-time data visualization, custom reporting engine, and LLM-powered insight generation — delivered for a Series A FinTech.",
    tags: ["Next.js", "Python", "OpenAI", "AWS"],
    metric: "10x faster reporting",
    challenge:
      "Legacy SQL reporting stack required 2–3 day compute cycles for weekly reports. Investor-facing dashboards were being hand-assembled in Excel, with no real-time view into platform metrics.",
    approach:
      "Designed a real-time multi-tenant OLAP layer with materialized views in Postgres, an embedded analytics surface in Next.js, and an LLM-powered natural language query layer for self-serve insights.",
    outcome:
      "Reports that previously required 2–3 days now complete in under 2 seconds. The client closed a $12M Series B with investor dashboards running directly on the platform.",
    timeline: "12 weeks",
    teamSize: "4 engineers + 1 designer",
  },
  {
    slug: "healthtech-patient-portal-mvp",
    category: "MVP Development",
    title: "HealthTech Patient Portal",
    client: "Pre-seed HealthTech Startup",
    clientRegion: "Canada",
    year: "2025",
    image: "/images/case-health.jpg",
    description:
      "Designed and delivered a production telehealth pilot in 6 weeks — patient scheduling, telehealth integration, and HIPAA-eligible architecture.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    metric: "Seed round funded",
    challenge:
      "Sponsor had a 12-week runway before their pilot partnership with a regional clinic. No production system, no engineering team, and a hard deadline.",
    approach:
      "Embedded a full-stack engineering pair with the sponsor. Delivered on a fixed iteration cadence: scheduling, telehealth video (Twilio), clinician portal, HIPAA-eligible audit trails.",
    outcome:
      "Production pilot live in 6 weeks. The clinic engagement converted to paid in month 2, which unlocked a $1.8M seed round led by a digital health fund.",
    timeline: "6 weeks",
    teamSize: "2 engineers + 1 product",
  },
  {
    slug: "ecommerce-ai-automation",
    category: "AI Automation",
    title: "E-Commerce Workflow Automation",
    client: "D2C Consumer Brand",
    clientRegion: "United Kingdom",
    year: "2025",
    image: "/images/case-automation.jpg",
    description:
      "Order processing, inventory synchronization, and customer support automated through AI agents — reducing manual operational work by 80% for a D2C brand.",
    tags: ["n8n", "GPT-4", "Shopify API", "Slack"],
    metric: "80% time saved",
    challenge:
      "Operations team of six absorbed 30+ hours per week across order triage, inventory reconciliation between channels, and Tier-1 customer support tickets — with no path to scale.",
    approach:
      "Delivered twelve production n8n workflows with GPT-4 classification, Shopify and 3PL integrations, and a guardrailed AI support agent with human escalation paths.",
    outcome:
      "80% of operational workflow is now automated. The team reallocated 24 hours per week to growth initiatives, and CSAT rose by 11 points on faster response times.",
    timeline: "5 weeks",
    teamSize: "1 engineer + 1 ops specialist",
  },
  {
    slug: "enterprise-corporate-website",
    category: "Web Development",
    title: "Enterprise Corporate Website",
    client: "Mid-market B2B Enterprise",
    clientRegion: "United Arab Emirates",
    year: "2024",
    image: "/images/case-web.jpg",
    description:
      "A high-performance, SEO-optimized corporate website with CMS integration, multilingual support, and sub-second load times.",
    tags: ["Next.js", "Sanity", "Vercel", "Tailwind"],
    metric: "300% traffic increase",
    challenge:
      "Legacy WordPress site was slow (8s LCP), unrankable for core keywords, and required engineering involvement for routine copy changes. Google rankings were deteriorating quarter over quarter.",
    approach:
      "Migrated to Next.js App Router with Sanity CMS, English and Arabic locales, structured data, and a programmatic SEO layer covering 40+ service pages.",
    outcome:
      "Organic traffic increased 300% in six months. LCP reduced to under 1 second. The marketing team now publishes copy changes independently of engineering.",
    timeline: "8 weeks",
    teamSize: "2 engineers + 1 SEO strategist",
  },
];

export const insights = [
  {
    category: "AI & Innovation",
    title: "Operational AI: From Proof of Concept to Production Reliability",
    excerpt:
      "Most enterprise AI initiatives stall after the proof of concept. The discipline required to operate AI in production — evaluation harnesses, fallback strategies, cost governance — explained from delivered engagements.",
    date: "Mar 28, 2026",
  },
  {
    category: "Development",
    title: "Architecture Decisions That Determine Whether Your Platform Scales",
    excerpt:
      "Technology choices made during initial build define the cost and feasibility of scaling. A framework for evaluating architecture decisions against three-year operability — drawn from production engagements.",
    date: "Mar 15, 2026",
  },
  {
    category: "SEO & AIEO",
    title: "AIEO: Engineering Brand Visibility Across AI Retrieval Systems",
    excerpt:
      "Search behaviour now spans Google, ChatGPT, Gemini, and Perplexity. Structured data, citation architecture, and content formats that AI retrieval systems prioritize — with measurement methodology.",
    date: "Feb 22, 2026",
  },
];

export const industries = [
  {
    slug: "fintech",
    icon: "Landmark",
    title: "FinTech",
    image: "/images/industry-fintech.jpg",
    description:
      "Payments, lending, and trading platforms engineered for bank-grade scrutiny. KYC workflows, immutable audit trails, and the regulatory infrastructure that survives a Big Four review.",
    compliance: ["PCI-DSS scope minimization", "SOC 2 Type II controls", "KYC/AML workflows", "Data residency controls"],
    capabilities: ["Payment rails & wallets", "Lending & credit decisioning", "Trading & brokerage UX", "Analytics & reporting"],
    tech: ["Stripe", "Plaid", "PostgreSQL", "Kafka", "AWS"],
  },
  {
    slug: "healthtech",
    icon: "HeartPulse",
    title: "HealthTech",
    image: "/images/industry-health.jpg",
    description:
      "Telehealth video, patient portals, and clinical tooling. We engineer HIPAA-eligible architecture — BAA-ready cloud, encrypted PHI in transit and at rest, and full audit trails — built for the workloads regulators actually scrutinize.",
    compliance: ["HIPAA-eligible architecture", "GDPR data subject workflows", "HL7 FHIR interoperability", "Encrypted PHI in transit & at rest"],
    capabilities: ["Telehealth & video", "Patient portals", "Clinical workflow automation", "Claims & billing"],
    tech: ["Twilio", "FHIR", "PostgreSQL", "AWS HIPAA stack"],
  },
  {
    slug: "ecommerce",
    icon: "ShoppingCart",
    title: "E-Commerce & D2C",
    image: "/images/industry-ecom.jpg",
    description:
      "Headless storefronts, inventory synchronization, and recommendation engines. We migrate brands off slow Shopify themes onto performance-optimized platforms — measured in conversion lift and Core Web Vitals.",
    compliance: ["PCI-DSS scope minimization", "GDPR/CCPA consent management", "Cookie compliance"],
    capabilities: ["Headless storefronts", "Inventory & OMS", "Personalization & CRO", "Loyalty & subscriptions"],
    tech: ["Shopify", "Next.js", "Algolia", "Klaviyo", "Stripe"],
  },
  {
    slug: "edtech",
    icon: "GraduationCap",
    title: "EdTech",
    image: "/images/case-automation.jpg",
    description:
      "LMS platforms, AI tutors, and assessment engines. Engineered for the operational edge cases real institutions face: high-concurrency assessment windows, accessibility requirements, and SIS integrations.",
    compliance: ["FERPA-aligned data handling", "COPPA compliance for K-12", "WCAG 2.1 AA accessibility"],
    capabilities: ["LMS platforms", "AI tutors & grading", "Assessment engines", "Gamified learning"],
    tech: ["Next.js", "LangChain", "OpenAI", "PostgreSQL"],
  },
  {
    slug: "saas-startups",
    icon: "Briefcase",
    title: "Startups & SaaS",
    image: "/images/case-saas.jpg",
    description:
      "Multi-tenant SaaS platforms engineered for scale. Row-level isolation, SSO, billing infrastructure, and the audit trails enterprise procurement teams actually ask about.",
    compliance: ["SOC 2 Type II evidence pipeline", "GDPR-compliant multi-tenancy", "Row-level security"],
    capabilities: ["MVP engineering", "Multi-tenant architecture", "Billing & subscriptions", "Admin & ops tooling"],
    tech: ["Next.js", "Stripe", "PostgreSQL", "Vercel"],
  },
];

export const approach = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We map business goals, user needs, and the technical constraints in scope. The output is a written recommendation: scope, exclusions, architecture rationale, and the cost-benefit case behind each decision.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    description:
      "Architecture and UI in parallel. We commit to a stack we can defend in writing, design components against it, and deliver a clickable prototype before development begins.",
  },
  {
    step: "03",
    title: "Iterative Delivery",
    description:
      "Reviewable releases on a fixed cadence. A live staging environment available throughout the engagement. Scope risks are surfaced the moment they emerge — not at the month-end invoice.",
  },
  {
    step: "04",
    title: "Launch & Operations",
    description:
      "We stay on past go-live. Most engagements continue for at least six months post-launch — that's when production behavior surfaces, observability matures, and SEO/AIEO programs start compounding.",
  },
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "TailwindCSS",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Vercel",
  "OpenAI",
  "LangChain",
  "Docker",
  "Figma",
  "n8n",
  "Stripe",
];

export const faq = [
  {
    question: "What services does PROSYS LTD offer?",
    answer:
      "PROSYS LTD delivers a full spectrum of engineering and growth services across four pillars: Product Engineering (web, SaaS, custom platforms), AI & Automation (LLM systems, applied AI, intelligent workflow automation), Cloud & Infrastructure (cloud operations, managed services, security), and Growth & Marketing (technical SEO, AIEO, performance marketing, design). We operate as an embedded engineering practice — engineering-led, production-focused, end-to-end.",
  },
  {
    question: "What is AIEO and why does it matter?",
    answer:
      "AI Engine Optimization (AIEO) is the discipline of engineering brand visibility within AI-powered retrieval systems — ChatGPT, Google Gemini, Claude, and Perplexity. As query volume migrates from traditional search to AI assistants, AIEO determines which brands surface in generated responses. PROSYS LTD operates a dedicated AIEO practice with established methodology, structured data implementation, and citation tracking.",
  },
  {
    question: "What is the typical time to a first production release?",
    answer:
      "First production releases typically go live in 6–12 weeks, depending on regulatory scope, integration surface, and required uptime guarantees. Our engagement model invests in upfront discovery and architecture so the build phase is predictable — not a discovery exercise disguised as an estimate.",
  },
  {
    question: "Do you work with startups or only enterprise clients?",
    answer:
      "We engage with both. Our active portfolio includes funded startups (seed through Series C) and mid-market enterprise teams modernizing or building new platforms. Either way, the engineering bar, the documentation standard, and the operational maturity stay the same.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Our core stack covers React, Next.js, TypeScript, Node.js, Python, PostgreSQL, MongoDB, and AWS. AI engagements use OpenAI, Anthropic, LangChain, and custom model deployments, with automation platforms including n8n and Make. Technology selection is driven by engagement requirements — operability, integration surface, and long-term maintainability.",
  },
  {
    question: "How does your SEO service work?",
    answer:
      "Our SEO practice covers technical SEO (site speed, Core Web Vitals, crawlability, indexation), on-page architecture (content structure, schema markup, internal linking, keyword strategy), and off-page authority development. Programs are measured against organic traffic, ranking position, and pipeline contribution — with transparent monthly reporting.",
  },
  {
    question: "Where is PROSYS LTD based?",
    answer:
      "PROSYS LTD is headquartered in Lahore, Pakistan, with a distributed team serving clients globally across North America, Europe, the Middle East, and Asia-Pacific.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "Every engagement runs against a transparent operating model: a dedicated delivery lead, shared access to the project board (Linear or Jira), regular synchronous reviews, and asynchronous updates in your communication channel. Progress, blockers, and timeline status are visible at all times.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We operate three engagement models: (1) Fixed-price for well-scoped engagements, (2) Monthly retainer for ongoing dedicated-team partnerships, and (3) Time & materials for exploratory or evolving work. Pilot engagements typically begin at $25K; enterprise engagements range from $75K to $500K+. Every proposal includes a fixed ceiling, milestone-based payment terms, and a documented change-management process.",
  },
  {
    question: "Who owns the code and IP?",
    answer:
      "The client. Upon final payment, full intellectual property — source code, design assets, documentation, and deployment infrastructure — is transferred to your organization. PROSYS retains no usage rights, and references to the engagement appear publicly only with your written consent.",
  },
  {
    question: "Will you sign an NDA before we share details?",
    answer:
      "Yes — on request, before any substantive scoping conversation. A mutual NDA template is available, or we engage under your standard form. Turnaround within 24 hours.",
  },
  {
    question: "How many revision rounds are included?",
    answer:
      "Design work includes 2–3 structured revision rounds at each stage (exploration, direction, refinement). Engineering follows continuous delivery — changes are handled within the active iteration via our documented change-management workflow. Material scope changes go through a written impact assessment; minor adjustments typically ship the same week.",
  },
  {
    question: "Do you provide ongoing support and maintenance after launch?",
    answer:
      "Yes. Post-launch operations are covered by monthly retainers across monitoring, dependency and security patching, on-call response, incremental feature work, and performance tuning. SLAs are tiered — standard, priority, enterprise — with defined response and resolution times. Most engagements continue under a managed services agreement for 2+ years.",
  },
  {
    question: "What does your typical engagement look like?",
    answer:
      "Week 1 is Discovery & Scoping — goals, constraints, users, success metrics, and risk profile mapped. Week 2 is Architecture & Design — system architecture, interface design, and integration map approved. From Week 3 onward we deliver on a fixed iteration cadence — reviewable releases to staging at each checkpoint, stakeholder demos with formal approval gates, and a live project board you can audit at any time. Go-live is followed by a 30-day stabilization window and an ongoing operations plan as needed.",
  },
  {
    question: "Can you work in our timezone?",
    answer:
      "Yes. The delivery model is built around 4+ hours of synchronous overlap with your timezone. North American engagements typically run an early-morning collaboration window with the rest of the day covered by structured asynchronous updates. EMEA and APAC engagements run during business-hour overlap.",
  },
  {
    question: "Do you work with existing teams or only build from scratch?",
    answer:
      "Both. We frequently embed engineers and designers into existing product organizations via a Staff Augmentation model — code reviews, iteration participation, and on-call rotations included. We also deliver greenfield platforms end-to-end. The engagement model is shaped to your operating environment.",
  },
];

export const techPartners = [
  "Microsoft",
  "AWS",
  "Google Cloud",
  "Vercel",
  "OpenAI",
  "Stripe",
  "Figma",
  "GitHub",
];

export const footerLinks = {
  productEngineering: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "MVP Development", href: "/services/mvp-development" },
    { label: "SaaS Development", href: "/services/saas-development" },
    { label: "Custom Software", href: "/services/software-development" },
  ],
  aiAndAutomation: [
    { label: "AI Development", href: "/services/ai-development" },
    { label: "AI Automations", href: "/services/ai-automations" },
    { label: "Generative AI", href: "/services/generative-ai" },
  ],
  cloudAndPlatform: [
    { label: "Cloud Migration & Ops", href: "/services/cloud-operations" },
    { label: "Managed Services", href: "/services/managed-services" },
    { label: "Security", href: "/services/security" },
  ],
  growthAndMarketing: [
    { label: "SEO", href: "/services/seo" },
    { label: "AIEO", href: "/services/aieo" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Graphics & Branding", href: "/services/graphics-branding" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/about#leadership" },
    { label: "Our Work", href: "/work" },
    { label: "Case Studies", href: "/work" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Insights & Blog", href: "/blog" },
    { label: "Webinars", href: "/webinars" },
    { label: "Industries", href: "/industries" },
    { label: "FAQ", href: "/faq" },
    { label: "All Services", href: "/services" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};
