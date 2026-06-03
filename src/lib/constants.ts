export const siteConfig = {
  name: "PROSYS LTD",
  tagline: "Deploy AI safely into real business operations.",
  description:
    "PROSYS LTD helps companies deploy AI safely into real business operations with secure agents, governed workflows, enterprise knowledge systems, integrations, and production monitoring.",
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
  { label: "Industries", href: "/industries" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Careers", href: "/careers" },
];

export const services = [
  {
    icon: "Lightbulb",
    slug: "ai-readiness-strategy",
    title: "AI Readiness & Strategy",
    description:
      "Identify the safest, highest-ROI AI opportunities before you build. We map workflows, data, risk, feasibility, and success metrics so your AI roadmap is grounded in business value rather than tool hype.",
  },
  {
    icon: "Bot",
    slug: "secure-ai-agents-workflow-automation",
    title: "Secure AI Agents & Workflow Automation",
    description:
      "Build AI agents that operate inside real business processes with oversight. Agents that summarize, classify, route, draft, recommend, and trigger actions with permissions, approvals, and human-in-the-loop controls.",
  },
  {
    icon: "ShieldCheck",
    slug: "ai-governance-control-systems",
    title: "AI Governance & Control Systems",
    description:
      "Define what AI can see, decide, change, and escalate. Governance layers for AI adoption: access control, audit logs, approval workflows, risk scoring, policy enforcement, kill switches, and operational ownership.",
  },
  {
    icon: "Database",
    slug: "secure-enterprise-knowledge-systems",
    title: "Secure Enterprise Knowledge Systems",
    description:
      "Give teams AI access to internal knowledge without exposing sensitive data. Permission-aware search, RAG systems, knowledge assistants, document pipelines, citation logic, and retrieval evaluation for private data.",
  },
  {
    icon: "Network",
    slug: "ai-integration-existing-systems",
    title: "AI Integration with Existing Systems",
    description:
      "Connect AI to the tools your business already runs on. We integrate AI into CRMs, ERPs, helpdesks, databases, communication tools, document stores, internal portals, and legacy systems.",
  },
  {
    icon: "Server",
    slug: "ai-security-monitoring-optimization",
    title: "AI Security, Monitoring & Optimization",
    description:
      "Test, monitor, and improve AI after launch. We harden AI against unsafe behavior, monitor quality and cost, track failures, review outputs, improve prompts and retrieval, and keep systems reliable in production.",
  },
];

export const stats = [
  { value: 50, suffix: "+", label: "Engagements delivered" },
  { value: 15, suffix: "+", label: "Engineers & specialists" },
  { value: 6, suffix: "", label: "Core AI services" },
  { value: 24, suffix: "h", label: "Response time" },
];

export const heroProofPoints = [
  { value: "50+", label: "Engagements delivered" },
  { value: "15+", label: "Engineers & specialists" },
  { value: "6\u201312 wks", label: "To production pilots" },
];

export const caseStudies = [
  {
    slug: "ai-analytics-saas-fintech",
    category: "AI Analytics",
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
    category: "Production Pilot",
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
    slug: "enterprise-knowledge-document-review",
    category: "Knowledge System",
    title: "Secure Knowledge & Document Review System",
    client: "Professional Services Firm",
    clientRegion: "United Arab Emirates",
    year: "2024",
    image: "/images/case-web.jpg",
    description:
      "A permission-aware AI knowledge and document-review system with source citations and access controls — so expert teams find and use trusted information without exposing privileged data.",
    tags: ["Secure RAG", "Permission-aware", "Citations", "Next.js"],
    metric: "15+ hours/week saved",
    challenge:
      "Knowledge was scattered across documents, drives, and matter folders. A naive chatbot risked surfacing privileged content to users who were not authorized to see it, so the team kept searching manually.",
    approach:
      "Built a secure RAG knowledge assistant with clean document ingestion, permission-aware retrieval, source citations on every answer, retrieval-quality evaluation, and a monitoring dashboard.",
    outcome:
      "Experts now retrieve cited answers in seconds while access boundaries stay intact, saving an estimated 15+ hours per week across the team — with every answer traceable to a trusted source.",
    timeline: "8 weeks",
    teamSize: "2 engineers + 1 knowledge specialist",
  },
];

export const insights = [
  {
    category: "Production AI",
    title: "Why AI Pilots Fail Before They Reach Operations",
    excerpt:
      "Most AI pilots work in a demo and break in production — disconnected from real workflows, ungoverned, and unmeasured. The discipline required to close that gap, drawn from delivered engagements.",
    date: "Mar 28, 2026",
  },
  {
    category: "AI Governance",
    title: "Secure AI Agents: Permissions, Approvals, Audit Logs, and Kill Switches",
    excerpt:
      "Agents become valuable when they can use tools and act inside workflows — and risky for the same reason. The control layer required before an agent touches business-critical work.",
    date: "Mar 15, 2026",
  },
  {
    category: "Knowledge Systems",
    title: "How to Build an Enterprise AI Knowledge System Without Leaking Data",
    excerpt:
      "Enterprise knowledge systems are not document chatbots. Permission-aware retrieval, citations, access controls, and retrieval evaluation — what it takes to let AI answer from trusted sources safely.",
    date: "Feb 22, 2026",
  },
];

export const industries = [
  {
    slug: "fintech",
    icon: "Landmark",
    title: "FinTech & Financial Services",
    image: "/images/industry-fintech.jpg",
    description:
      "AI workflows that respect access boundaries, preserve auditability, and avoid uncontrolled decision-making — for onboarding, document review, fraud operations, support, internal knowledge, and reporting support.",
    compliance: ["Permission-aware data access", "Audit-ready logging", "KYC/AML workflow support", "Designed for regulated environments"],
    capabilities: ["KYC document workflow support", "Customer support triage", "Fraud operations assistant", "Audit & policy search"],
    tech: ["Secure RAG", "Audit logs", "Approval workflows", "PostgreSQL", "AWS"],
  },
  {
    slug: "healthtech",
    icon: "HeartPulse",
    title: "HealthTech & Healthcare Operations",
    image: "/images/industry-health.jpg",
    description:
      "AI systems for sensitive healthcare workflows with careful data handling, clear human oversight, and traceable outputs — patient intake, scheduling support, documentation assistance, and PHI-aware knowledge access.",
    compliance: ["PHI-aware architecture", "Human-in-the-loop oversight", "Traceable, cited outputs", "Designed for regulated environments"],
    capabilities: ["Patient intake assistant", "Scheduling workflow automation", "Clinical operations search", "Documentation support"],
    tech: ["Permission-aware retrieval", "Secure RAG", "Audit logs", "FHIR-aware pipelines"],
  },
  {
    slug: "saas-ai",
    icon: "Briefcase",
    title: "SaaS & AI Product Companies",
    image: "/images/case-saas.jpg",
    description:
      "Production AI infrastructure for teams adding AI to products — reliable, observable features with secure knowledge layers, governance controls, and real-world quality monitoring after launch.",
    compliance: ["Evaluation & monitoring", "Model routing & fallback", "Cost governance", "Customer-grade reliability"],
    capabilities: ["AI product feature architecture", "Customer-facing assistants", "Model routing & fallback", "Evaluation dashboards"],
    tech: ["LLM orchestration", "Vector search", "Observability", "Next.js"],
  },
  {
    slug: "logistics",
    icon: "Truck",
    title: "Logistics, Supply Chain & Manufacturing",
    image: "/images/industry-ecom.jpg",
    description:
      "AI for operational workflows, exception handling, and legacy systems — connecting AI to the processes that manage inventory, dispatch, vendors, documents, approvals, and operational reporting.",
    compliance: ["Legacy system integration", "Event-driven workflows", "Operational audit trails", "Human approval gates"],
    capabilities: ["Dispatch & exception management", "Vendor communication workflows", "Inventory reporting assistant", "Document processing"],
    tech: ["Integration architecture", "APIs & webhooks", "ERP connectors", "Secure RAG"],
  },
  {
    slug: "bpo",
    icon: "Headset",
    title: "BPO & Customer Operations",
    image: "/images/service-bps.jpg",
    description:
      "Safe AI systems for agents, supervisors, and operations leaders — improving response quality, reducing manual review, accelerating onboarding, and monitoring service performance.",
    compliance: ["Agent-assist guardrails", "QA & compliance monitoring", "Output review loops", "Human escalation paths"],
    capabilities: ["Agent-assist workflows", "Ticket triage", "QA automation", "Knowledge assistants"],
    tech: ["Secure AI agents", "Knowledge systems", "Monitoring", "Helpdesk integrations"],
  },
  {
    slug: "professional-services",
    icon: "Scale",
    title: "Professional Services & Legal",
    image: "/images/case-web.jpg",
    description:
      "Secure AI knowledge and document workflows for expert teams — research, document review, internal knowledge, and client delivery with permissions, citations, and human review at the center.",
    compliance: ["Confidentiality controls", "Source citations", "Permission-aware retrieval", "Human-reviewed drafting"],
    capabilities: ["Matter & project knowledge search", "Contract & document review", "Internal research assistant", "Policy & precedent search"],
    tech: ["Secure RAG", "Permission-aware search", "Citation logic", "Audit logs"],
  },
];

export const approach = [
  {
    step: "01",
    title: "Assess",
    description:
      "We identify high-value AI opportunities, map business workflows, review data readiness, estimate ROI, and define risk boundaries — producing a prioritized implementation roadmap.",
  },
  {
    step: "02",
    title: "Build",
    description:
      "We design and implement the AI workflow, agent, knowledge system, or automation needed to solve the defined problem — system prompts, tool logic, retrieval, and a working pilot or release.",
  },
  {
    step: "03",
    title: "Govern",
    description:
      "We add the control layer required for safe operation: role-based access, human approval gates, audit logs, escalation paths, risk scoring, and a kill switch or rollback process.",
  },
  {
    step: "04",
    title: "Integrate",
    description:
      "We connect AI to the systems where work already happens — CRM, ERP, helpdesk, database, and document integrations, with authentication, permissions, and data flow documentation.",
  },
  {
    step: "05",
    title: "Secure",
    description:
      "We test for risky behavior before users see the system: prompt injection testing, data leakage checks, agent action abuse testing, hallucination review, and guardrail implementation.",
  },
  {
    step: "06",
    title: "Improve",
    description:
      "We monitor real-world behavior and improve over time — quality dashboards, cost and latency monitoring, failure tracking, usage analytics, feedback loops, and a monthly improvement roadmap.",
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
    question: "What does PROSYS LTD do?",
    answer:
      "PROSYS LTD helps companies deploy AI safely into real business operations. We work across AI readiness strategy, secure AI agents, workflow automation, AI governance, enterprise knowledge systems, system integrations, security testing, monitoring, and optimization.",
  },
  {
    question: "How are you different from a typical AI agency?",
    answer:
      "Many AI agencies focus on demos, chatbots, or isolated automations. We focus on production deployment: connecting AI to real workflows, adding controls, integrating with existing systems, testing for risk, and monitoring performance after launch.",
  },
  {
    question: "Do you only build AI agents?",
    answer:
      "No. Agents are one part of the work. We also help with AI strategy, governance, secure knowledge systems, integrations, monitoring, red-team testing, cost optimization, and production support.",
  },
  {
    question: "What does \u201cdeploy AI safely\u201d mean?",
    answer:
      "It means AI is designed with the controls required for real operations: role-based access, approval workflows, audit logs, data boundaries, escalation paths, failure handling, monitoring, and human oversight where risk requires it.",
  },
  {
    question: "Can you help us decide where to use AI?",
    answer:
      "Yes. AI Readiness and Strategy engagements are designed for that. We map workflows, assess data readiness, identify high-value use cases, evaluate risk, and create a prioritized roadmap.",
  },
  {
    question: "Can you work with our existing tools?",
    answer:
      "Yes. We integrate AI with CRMs, ERPs, helpdesks, databases, data warehouses, document systems, Slack, Teams, internal portals, and legacy applications where APIs or practical integration paths are available.",
  },
  {
    question: "Do you work with sensitive or regulated data?",
    answer:
      "We design systems for environments where data access, privacy, permissions, and auditability matter. Any regulated-data engagement starts with a data handling and risk review. Formal compliance claims are validated based on the specific client environment and required controls.",
  },
  {
    question: "Do you provide AI security testing?",
    answer:
      "Yes. We test AI systems for prompt injection, data leakage, unsafe actions, hallucination risk, tool misuse, and guardrail weaknesses. We can also provide remediation recommendations and implementation support.",
  },
  {
    question: "Can you monitor AI systems after launch?",
    answer:
      "Yes. We provide ongoing monitoring and optimization for quality, cost, latency, failures, user feedback, escalation rates, and retrieval performance.",
  },
  {
    question: "Who owns the code and IP?",
    answer:
      "Unless agreed otherwise in the contract, the client owns the custom code and deliverables created specifically for their engagement after payment. PROSYS LTD may retain ownership of general frameworks, methods, templates, and reusable internal tooling not unique to the client.",
  },
  {
    question: "How long does an engagement take?",
    answer:
      "AI readiness work can often be completed in one to three weeks depending on scope. Production builds commonly take six to twelve weeks for a focused pilot or first release. Larger integration and governance programs may be phased over multiple months.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Most engagements are scoped as fixed-scope projects or monthly retainers. Strategy and readiness work is usually packaged as a short sprint. Build and integration work is estimated after discovery. Monitoring and optimization can be handled as an ongoing monthly engagement.",
  },
  {
    question: "Will you sign an NDA?",
    answer:
      "Yes. NDA review can be handled before detailed technical or business information is shared.",
  },
  {
    question: "Can you work with our internal engineering team?",
    answer:
      "Yes. We can operate as an implementation partner, architecture partner, governance partner, or extension of your engineering team. We document decisions and hand off systems so internal teams can maintain and extend them.",
  },
  {
    question: "What should we prepare before the first call?",
    answer:
      "Bring the workflow you want to improve, the tools involved, the data sources, who uses the process, what decisions or actions AI may influence, and what would make the project successful.",
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
    { label: "AI Readiness & Strategy", href: "/services/ai-readiness-strategy" },
    { label: "AI Governance & Control Systems", href: "/services/ai-governance-control-systems" },
  ],
  aiAndAutomation: [
    { label: "Secure AI Agents & Workflow Automation", href: "/services/secure-ai-agents-workflow-automation" },
    { label: "Secure Enterprise Knowledge Systems", href: "/services/secure-enterprise-knowledge-systems" },
  ],
  cloudAndPlatform: [
    { label: "AI Integration with Existing Systems", href: "/services/ai-integration-existing-systems" },
    { label: "AI Security, Monitoring & Optimization", href: "/services/ai-security-monitoring-optimization" },
  ],
  growthAndMarketing: [
    { label: "FinTech & Financial Services", href: "/industries/fintech" },
    { label: "HealthTech & Healthcare Operations", href: "/industries/healthtech" },
    { label: "SaaS & AI Product Companies", href: "/industries/saas-ai" },
    { label: "Logistics, Supply Chain & Manufacturing", href: "/industries/logistics" },
    { label: "BPO & Customer Operations", href: "/industries/bpo" },
    { label: "Professional Services & Legal", href: "/industries/professional-services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "FAQ", href: "/faq" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Insights & Blog", href: "/blog" },
    { label: "Webinars", href: "/webinars" },
    { label: "Industries", href: "/industries" },
    { label: "All Services", href: "/services" },
    { label: "FAQ", href: "/faq" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};
