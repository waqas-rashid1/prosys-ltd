export const siteConfig = {
  name: "PROSYS LTD",
  tagline: "We Build What Others Only Plan",
  description:
    "PROSYS LTD is a full-spectrum software development company specializing in AI development, SaaS platforms, MVP engineering, web and mobile applications, and growth-driven digital marketing.",
  url: "https://prosysltd.com",
  email: "hello@prosysltd.com",
  phone: "+923001234567",
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
];

export const services = [
  {
    icon: "Code2",
    slug: "web-development",
    title: "Web Development",
    description:
      "High-performance websites and web applications built with Next.js, React, and modern frameworks — engineered for speed, scalability, and conversion.",
  },
  {
    icon: "Cpu",
    slug: "software-development",
    title: "Software Development",
    description:
      "Enterprise-grade custom software solutions from architecture to deployment. We build systems that handle complexity and scale with your business.",
  },
  {
    icon: "BrainCircuit",
    slug: "ai-development",
    title: "AI Development",
    description:
      "Custom AI/ML models, LLM integrations, intelligent chatbots, and AI-powered automation systems that give your business a competitive edge.",
  },
  {
    icon: "Rocket",
    slug: "mvp-development",
    title: "MVP Development",
    description:
      "Validate your startup idea fast. We design, build, and ship investor-ready MVPs in weeks — not months — with lean, scalable architecture.",
  },
  {
    icon: "Cloud",
    slug: "saas-development",
    title: "SaaS Development",
    description:
      "End-to-end SaaS platform engineering — multi-tenant architecture, billing systems, dashboards, APIs, and infrastructure built for recurring revenue.",
  },
  {
    icon: "Bot",
    slug: "ai-automations",
    title: "AI Automations",
    description:
      "Automate repetitive workflows with AI agents, custom GPTs, n8n/Make integrations, and intelligent process automation that saves hours daily.",
  },
  {
    icon: "Search",
    slug: "seo",
    title: "SEO",
    description:
      "Data-driven on-page and technical SEO that ranks. Site architecture, Core Web Vitals optimization, content strategy, and measurable organic growth.",
  },
  {
    icon: "Sparkles",
    slug: "aieo",
    title: "AIEO",
    description:
      "AI Engine Optimization — we structure your digital presence to rank on ChatGPT, Gemini, Perplexity, and AI-powered search engines. The next frontier of visibility.",
  },
  {
    icon: "Megaphone",
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Full-funnel digital marketing: paid ads, social media strategy, email marketing, content marketing, and analytics-driven campaign optimization.",
  },
  {
    icon: "Palette",
    slug: "graphics-branding",
    title: "Graphics & Branding",
    description:
      "Brand identity design, UI/UX design systems, pitch decks, social media assets, and visual storytelling that makes your brand unforgettable.",
  },
];

export const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Global Clients" },
  { value: 15, suffix: "+", label: "Team Members" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
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
      "Built a multi-tenant SaaS analytics platform with real-time data visualization, custom reporting engine, and AI-driven insights for a US-based fintech startup.",
    tags: ["Next.js", "Python", "OpenAI", "AWS"],
    metric: "10x faster reporting",
    challenge:
      "Legacy SQL reporting stack was producing weekly reports after 2-3 day compute cycles. Team was hand-writing dashboards in Excel for investor updates.",
    approach:
      "Designed a real-time multi-tenant OLAP layer with materialized views in Postgres, an embedded analytics surface in Next.js, and an LLM-powered natural language query layer for self-serve insights.",
    outcome:
      "Reports that took 2-3 days now complete in under 2 seconds. The client raised a $12M Series B with investor dashboards powered by the platform.",
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
      "Designed and shipped an investor-ready MVP in 6 weeks — patient scheduling, telehealth integration, and HIPAA-compliant data handling.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    metric: "Seed round funded",
    challenge:
      "Founder had a 12-week runway before their pilot partnership with a regional clinic. No MVP, no engineering team, and a hard deadline.",
    approach:
      "Embedded a senior full-stack pair with the founder. Shipped in 2-week cycles: scheduling, telehealth video (Twilio), clinician portal, HIPAA-aligned audit trails.",
    outcome:
      "MVP shipped in 6 weeks. The clinic pilot converted to paid in month 2, which unlocked a $1.8M seed round led by a digital health fund.",
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
      "Automated order processing, inventory sync, and customer support with AI agents — reducing manual work by 80% for a D2C brand.",
    tags: ["n8n", "GPT-4", "Shopify API", "Slack"],
    metric: "80% time saved",
    challenge:
      "Operations team of 6 spent 30+ hours/week on order triage, inventory reconciliation across channels, and Tier-1 customer support tickets.",
    approach:
      "Shipped 12 production n8n workflows with GPT-4 classification, Shopify + 3PL integrations, and a guardrailed AI support agent with human escalation.",
    outcome:
      "80% of ops workflow is now automated. The team reallocated 24 hours/week to growth experiments, and CSAT rose 11 points thanks to faster response times.",
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
      "Legacy WordPress site was slow (8s LCP), unrankable for core keywords, and required a developer to change copy. Google was deprioritizing them.",
    approach:
      "Migrated to Next.js App Router with Sanity CMS, English + Arabic locales, structured data, and a programmatic SEO layer for 40+ service pages.",
    outcome:
      "Organic traffic up 300% in 6 months, LCP under 1s, and the marketing team now ships copy changes without engineering.",
    timeline: "8 weeks",
    teamSize: "2 engineers + 1 SEO strategist",
  },
];

export const insights = [
  {
    category: "AI & Innovation",
    title: "Why Every Startup Needs an AI Strategy in 2026",
    excerpt:
      "AI is no longer optional. Discover how early-stage companies are leveraging AI to ship faster, reduce costs, and outperform funded competitors.",
    date: "Mar 28, 2026",
  },
  {
    category: "Development",
    title: "MVP to Scale: The Architecture Decisions That Matter Most",
    excerpt:
      "The technical choices you make at the MVP stage determine whether your product can scale. Here's our framework for building right from day one.",
    date: "Mar 15, 2026",
  },
  {
    category: "SEO & AIEO",
    title: "AIEO: How to Rank Your Brand on AI Search Engines",
    excerpt:
      "Google is no longer the only search engine. Learn how to optimize your digital presence for ChatGPT, Gemini, Perplexity, and AI-powered discovery.",
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
      "Secure, compliant platforms for payments, lending, trading, and financial analytics with bank-grade security standards.",
    compliance: ["PCI DSS aligned", "SOC 2 Type II aware", "KYC/AML ready", "Data residency controls"],
    capabilities: ["Payment rails & wallets", "Lending & credit decisioning", "Trading & brokerage UX", "Analytics & reporting"],
    tech: ["Stripe", "Plaid", "PostgreSQL", "Kafka", "AWS"],
  },
  {
    slug: "healthtech",
    icon: "HeartPulse",
    title: "HealthTech",
    image: "/images/industry-health.jpg",
    description:
      "HIPAA-aligned applications for telehealth, patient management, clinical workflows, and health data analytics.",
    compliance: ["HIPAA aligned", "GDPR aware", "HL7 FHIR interop", "Encrypted PHI at rest & transit"],
    capabilities: ["Telehealth & video", "Patient portals", "Clinical workflow automation", "Claims & billing"],
    tech: ["Twilio", "FHIR", "PostgreSQL", "AWS HIPAA stack"],
  },
  {
    slug: "ecommerce",
    icon: "ShoppingCart",
    title: "E-Commerce & D2C",
    image: "/images/industry-ecom.jpg",
    description:
      "Headless commerce, inventory systems, AI-powered recommendations, and omnichannel experiences that drive revenue.",
    compliance: ["PCI DSS scope minimization", "GDPR/CCPA consent", "Cookie compliance"],
    capabilities: ["Headless storefronts", "Inventory & OMS", "Personalization & CRO", "Loyalty & subscriptions"],
    tech: ["Shopify", "Next.js", "Algolia", "Klaviyo", "Stripe"],
  },
  {
    slug: "edtech",
    icon: "GraduationCap",
    title: "EdTech",
    image: "/images/case-automation.jpg",
    description:
      "Learning management systems, AI tutors, assessment platforms, and interactive content delivery for modern education.",
    compliance: ["FERPA aware", "COPPA for K-12", "WCAG 2.1 AA accessible"],
    capabilities: ["LMS platforms", "AI tutors & grading", "Assessment engines", "Gamified learning"],
    tech: ["Next.js", "LangChain", "OpenAI", "PostgreSQL"],
  },
  {
    slug: "real-estate",
    icon: "Building2",
    title: "Real Estate",
    image: "/images/case-web.jpg",
    description:
      "Property listing platforms, CRM systems, virtual tours, and AI-powered valuation tools for the real estate industry.",
    compliance: ["Fair housing compliance", "RETS/MLS integration", "GDPR-aware lead handling"],
    capabilities: ["Listings & search", "Agent CRM", "Virtual tours", "AVM valuation models"],
    tech: ["Next.js", "Mapbox", "Elasticsearch", "Python ML"],
  },
  {
    slug: "saas-startups",
    icon: "Briefcase",
    title: "Startups & SaaS",
    image: "/images/case-saas.jpg",
    description:
      "From zero-to-one MVPs to scale-ready SaaS platforms — we are the technical co-founder startups wish they had.",
    compliance: ["SOC 2 readiness", "GDPR-aware multi-tenancy", "Row-level security"],
    capabilities: ["MVP engineering", "Multi-tenant architecture", "Billing & subscriptions", "Admin & ops tooling"],
    tech: ["Next.js", "Stripe", "PostgreSQL", "Vercel"],
  },
  {
    slug: "logistics",
    icon: "Truck",
    title: "LogisTech & Supply Chain",
    image: "/images/service-bps.jpg",
    description:
      "Fleet, warehouse, and last-mile platforms with real-time tracking, route optimization, and carrier integrations.",
    compliance: ["GDPR aware", "Customs/trade data handling", "Driver data protection"],
    capabilities: ["Fleet & TMS", "Warehouse management", "Route optimization", "Carrier integrations"],
    tech: ["Kafka", "PostGIS", "Mapbox", "AWS"],
  },
  {
    slug: "media",
    icon: "PlaySquare",
    title: "Media & Entertainment",
    image: "/images/service-digital.jpg",
    description:
      "OTT platforms, content CMS, audience analytics, and AI-powered personalization for modern media brands.",
    compliance: ["DRM integration", "GDPR audience consent", "Age-gating & safety"],
    capabilities: ["OTT & streaming", "Headless CMS", "Recommendations", "Ad & subscription monetization"],
    tech: ["Next.js", "Contentful", "AWS Media Services"],
  },
];

export const approach = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business goals, target users, market landscape, and technical requirements. No cookie-cutter solutions — we build a strategy tailored to your vision.",
  },
  {
    step: "02",
    title: "Architecture & Design",
    description:
      "Our architects design scalable, future-proof systems while our designers craft pixel-perfect interfaces. Every decision is made with growth and performance in mind.",
  },
  {
    step: "03",
    title: "Agile Development",
    description:
      "Two-week sprints with continuous delivery. You see progress in real-time with regular demos, transparent communication, and iterative refinement until perfection.",
  },
  {
    step: "04",
    title: "Launch & Growth",
    description:
      "We don't disappear after deployment. From go-live support to SEO, AIEO, performance monitoring, and feature evolution — we grow with you.",
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
      "PROSYS LTD offers a full spectrum of digital services including web development, software development, AI development, MVP development, SaaS development, AI automations, SEO, AIEO (AI Engine Optimization), digital marketing, and graphics & branding. We are primarily a development-focused company with deep expertise in building scalable, production-ready software.",
  },
  {
    question: "What is AIEO and why does it matter?",
    answer:
      "AIEO stands for AI Engine Optimization — it's the practice of structuring your digital presence to be discoverable and recommended by AI-powered search engines like ChatGPT, Google Gemini, Perplexity, and Claude. As more users rely on AI for answers instead of traditional search, AIEO ensures your brand appears in AI-generated responses. PROSYS LTD is among the first companies to offer dedicated AIEO services.",
  },
  {
    question: "How fast can you build an MVP?",
    answer:
      "We typically deliver investor-ready MVPs in 4-8 weeks depending on complexity. Our lean development process focuses on core features that validate your business hypothesis, with architecture designed to scale when you're ready to grow.",
  },
  {
    question: "Do you work with startups or only enterprise clients?",
    answer:
      "We work with both. Our sweet spot is ambitious startups that need a strong technical partner and mid-market companies looking to modernize or build new digital products. We bring enterprise-level engineering quality to startup-speed delivery.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Our core stack includes React, Next.js, TypeScript, Node.js, Python, PostgreSQL, MongoDB, and AWS. For AI development, we work with OpenAI, LangChain, custom ML models, and automation platforms like n8n. We choose the right tool for each project — never a one-size-fits-all approach.",
  },
  {
    question: "How does your SEO service work?",
    answer:
      "Our SEO service covers technical SEO (site speed, Core Web Vitals, crawlability), on-page optimization (content structure, schema markup, keyword strategy), and off-page authority building. We focus on measurable organic growth with transparent reporting and data-driven decisions.",
  },
  {
    question: "Where is PROSYS LTD based?",
    answer:
      "PROSYS LTD is headquartered in Lahore, Pakistan, with a distributed team serving clients globally across North America, Europe, the Middle East, and Asia-Pacific.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We operate with full transparency. You get a dedicated project manager, access to our project board (Linear/Jira), regular video standups, and async updates via Slack. You're never in the dark about progress, blockers, or timelines.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer three primary pricing models: (1) Fixed-price for well-scoped projects, (2) Monthly retainer for ongoing engagements (common for dedicated teams and product partners), and (3) Time & materials for exploratory/evolving work. Typical MVP budgets start around $25K; enterprise engagements range from $75K to $500K+. Every proposal includes a fixed ceiling, payment milestones, and a change-management process.",
  },
  {
    question: "Who owns the code and IP?",
    answer:
      "You do. Upon final payment, 100% of the intellectual property — source code, design assets, documentation, and deployment infrastructure — is transferred to your organization. We retain no rights beyond the right to list the project as a portfolio reference (and only with your written consent).",
  },
  {
    question: "Will you sign an NDA before we share details?",
    answer:
      "Yes — on request, before any substantive scoping conversation. We use a mutual NDA by default and can work with your template instead. Expect turnaround within 24 hours.",
  },
  {
    question: "How many revision rounds are included?",
    answer:
      "Design work typically includes 2–3 structured revision rounds at each stage (exploration, direction, refinement). Engineering follows continuous-delivery, so changes are handled in-sprint via our change-management workflow. We never nickel-and-dime — if a change is small, it usually ships the same week.",
  },
  {
    question: "Do you provide ongoing support and maintenance after launch?",
    answer:
      "Yes. Post-launch, we offer monthly care plans covering monitoring, bug fixes, dependency updates, security patches, minor features, and performance tuning. SLAs are tiered (standard, priority, enterprise) with defined response times. Many clients stay with us for 2+ years after initial launch.",
  },
  {
    question: "What does your typical engagement look like?",
    answer:
      "Week 1 is Discovery & Scoping — we map goals, constraints, users, and success metrics. Week 2 is Architecture & Design — we draft the system architecture and core UI. From Week 3 onward we run 2-week sprints with demos every Friday, deployable increments to staging, and a live project board you can track at any time. Go-live is followed by a 30-day stabilization window and an ongoing care plan if needed.",
  },
  {
    question: "Can you work in our timezone?",
    answer:
      "Yes. Our delivery model assumes 4+ hours of overlap with your timezone. For North American clients we commonly overlap 9am–1pm PKT ≈ 11pm–3am ET in compressed collaboration windows. Daily async video + written updates fill the rest.",
  },
  {
    question: "Do you work with existing teams or only build from scratch?",
    answer:
      "Both. We frequently embed engineers and designers into existing product teams via a Staff Augmentation model — code reviews, sprint participation, and on-call rotations included. We also build greenfield products end-to-end. The engagement model is flexible.",
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
    { label: "Software Development", href: "/services/software-development" },
    { label: "SaaS Development", href: "/services/saas-development" },
    { label: "MVP Development", href: "/services/mvp-development" },
    { label: "Business Applications", href: "/services/business-applications" },
  ],
  aiAndAutomation: [
    { label: "AI Development", href: "/services/ai-development" },
    { label: "Generative AI", href: "/services/generative-ai" },
    { label: "Advanced Analytics", href: "/services/advanced-analytics" },
    { label: "Data Modernization", href: "/services/data-modernization" },
    { label: "Connected Intelligence", href: "/services/connected-intelligence" },
  ],
  cloudAndPlatform: [
    { label: "Cloud Migration", href: "/services/cloud-operations" },
    { label: "Cloud App Development", href: "/services/cloud-app-development" },
    { label: "Managed Services", href: "/services/managed-services" },
    { label: "Security", href: "/services/security" },
    { label: "Digital Infrastructure", href: "/services/digital-infrastructure" },
  ],
  growthAndMarketing: [
    { label: "SEO", href: "/services/seo" },
    { label: "AIEO", href: "/services/aieo" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Graphics & Branding", href: "/services/graphics-branding" },
    { label: "Digital Commerce", href: "/services/digital-commerce" },
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
