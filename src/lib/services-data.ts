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
    slug: "ai-readiness-strategy",
    title: "AI Readiness & Strategy",
    tagline: "Know where AI creates value before you build",
    description:
      "Identify high-ROI AI use cases, assess data readiness, map workflow risk, and create a practical roadmap for safe AI deployment into real operations.",
    icon: "Lightbulb",
    what:
      "Many companies know they should adopt AI, but not where to start. We help leadership and operations teams separate high-value use cases from distractions, assess data readiness, define risk boundaries, and create a practical roadmap for implementation — so budget goes to AI that can actually reach production.",
    whyUs: [
      "We start with the business outcome and workflow reality, not the AI tool",
      "Use cases scored by value, feasibility, and risk before you commit budget",
      "Honest build-vs-buy and build-vs-delay guidance",
      "A prioritized roadmap your team can act on, not a slide deck",
    ],
    metrics: [
      { value: "1–3 wk", label: "Readiness sprint" },
      { value: "ROI", label: "Use cases scored" },
      { value: "Risk", label: "Mapped per use case" },
      { value: "Roadmap", label: "Prioritized & costed" },
    ],
    how: [
      { title: "Leadership & Workflow Discovery", desc: "We map the workflows, users, dependencies, and outcomes that matter before evaluating any tool." },
      { title: "Tools, Data & Process Review", desc: "Review current systems, data readiness, and where information actually lives." },
      { title: "Use Case Scoring", desc: "Score each opportunity by business value, feasibility, and risk to find the safest high-ROI starting point." },
      { title: "Architecture & Governance Guidance", desc: "Recommend the architecture, controls, and oversight each use case will require." },
      { title: "Roadmap & Next Steps", desc: "Deliver a prioritized roadmap with recommended pilot scope, budget, and timeline." },
    ],
    techStack: ["Workflow mapping", "Data readiness", "Risk assessment", "ROI modeling", "Build-vs-buy", "Roadmapping"],
    benefits: [
      "A clear, prioritized AI roadmap grounded in business value",
      "Use cases separated from distractions",
      "Data readiness assessed before you build",
      "Risk profile defined per use case",
      "Build-vs-buy recommendation",
      "Recommended pilot scope, budget, and timeline",
    ],
    caseStudy: {
      title: "AI Adoption Roadmap for a Mid-Market Operations Team",
      challenge: "An operations-heavy company had a dozen competing AI ideas and pressure to adopt AI, but no way to prioritize what was safe and worth building.",
      result: "A readiness sprint produced a scored use-case shortlist, a workflow map, a data readiness review, and a phased roadmap — focusing the first build on the highest-ROI, lowest-risk workflow.",
      metric: "Roadmap in 3 weeks",
    },
    faq: [
      { q: "What is an AI Readiness Sprint?", a: "A focused one-to-three-week assessment that maps your workflows, reviews data readiness, scores use cases by value and risk, and produces a prioritized implementation roadmap with recommended pilot scope." },
      { q: "Do we have to build with you afterwards?", a: "No. The roadmap is yours. Many clients continue into a Production AI Build with us, but the readiness work is designed to give you clarity and options either way." },
      { q: "What if AI is not the right answer?", a: "We will tell you. Part of the value is identifying where a simpler system would work better, or where a use case should be delayed or avoided." },
    ],
  },
  {
    slug: "secure-ai-agents-workflow-automation",
    title: "Secure AI Agents & Workflow Automation",
    tagline: "AI agents that work inside real workflows",
    description:
      "Build AI agents and workflow automations with permissions, approvals, integrations, audit logs, and human oversight — agents that operate inside real business processes, not just demos.",
    icon: "Bot",
    what:
      "AI agents become valuable when they can work inside actual business processes. We design and build agents that can summarize, classify, research, route, draft, recommend, and trigger actions while staying inside defined permissions, approval paths, and escalation rules. The value comes from tool use and workflow participation — and that is exactly where we design the controls.",
    whyUs: [
      "Agents do more than answer questions — they participate in workflows",
      "Clear boundaries: what they can access, recommend, execute, and escalate",
      "Human-in-the-loop approvals before sensitive actions",
      "Reliability, traceability, and audit logs built in from the start",
    ],
    metrics: [
      { value: "HITL", label: "Approval gates" },
      { value: "RBAC", label: "Role-based access" },
      { value: "Audit", label: "Every action logged" },
      { value: "6–12 wk", label: "To a production pilot" },
    ],
    how: [
      { title: "Agent Workflow Design", desc: "Map the business process, then design where the agent assists, decides, and hands off to a human." },
      { title: "Tool & Action Mapping", desc: "Define the tools the agent can use and the actions it can take, with explicit boundaries." },
      { title: "Permissions & Approvals", desc: "Role-based permissions, human approval gates, and escalation logic for sensitive steps." },
      { title: "Prompt & System Design", desc: "Robust system prompts, tool logic, and fallback behavior for edge cases." },
      { title: "Integration", desc: "Connect the agent to CRM, helpdesk, ERP, database, and communication tools." },
      { title: "Testing & Handoff", desc: "Test against real data and edge cases, then hand off with monitoring and documentation." },
    ],
    techStack: ["LLM orchestration", "Tool use", "Human-in-the-loop", "Audit logs", "n8n", "OpenAI", "LangChain", "Slack API"],
    benefits: [
      "Automation connected to real business systems",
      "Human review before sensitive actions",
      "Role-based permissions and escalation logic",
      "Audit trails for every agent action",
      "Reliable behavior with fallback handling",
      "Documented handoff and monitoring plan",
    ],
    caseStudy: {
      title: "Customer Support Triage and Response Drafting",
      challenge: "A support-heavy team needed AI to accelerate ticket handling without letting an agent send unreviewed responses or take unsafe actions.",
      result: "Delivered a triage-and-draft agent integrated with the helpdesk, with role-based permissions, human approval before send, and full audit logging of every action.",
      metric: "Human-approved by design",
    },
    faq: [
      { q: "Can agents take real actions, not just suggest them?", a: "Yes — within defined boundaries. We design which actions an agent can execute directly and which require a human approval gate, with logging and escalation throughout." },
      { q: "How do you keep agents from doing something unsafe?", a: "Permissions, action limits, approval workflows, audit logs, and escalation rules are designed in from the start, and we test for abuse before launch." },
      { q: "Which tools can agents connect to?", a: "CRMs, helpdesks, ERPs, databases, document stores, and communication platforms like Slack and Teams, wherever a practical integration path exists." },
    ],
  },
  {
    slug: "ai-governance-control-systems",
    title: "AI Governance & Control Systems",
    tagline: "Control what AI can see, decide, and change",
    description:
      "Implement AI governance systems with permissions, approval workflows, audit logs, risk scoring, escalation rules, and operational controls for responsible AI adoption across teams.",
    icon: "ShieldCheck",
    what:
      "As AI systems become more autonomous, companies need a control layer. We design and implement governance systems that make AI adoption visible, auditable, and manageable across teams. Policies matter, but production AI also needs enforceable controls — we translate AI policy into practical workflows, access rules, logs, approvals, and operating procedures teams can actually use.",
    whyUs: [
      "Governance that lives in the system, not just in a policy document",
      "A control layer for agents deployed across departments",
      "Auditability for AI actions and outputs",
      "A practical operating model for who owns AI risk",
    ],
    metrics: [
      { value: "Registry", label: "Agents & tools tracked" },
      { value: "Logs", label: "Audit-ready" },
      { value: "Risk", label: "Scored & escalated" },
      { value: "Kill", label: "Switch & rollback" },
    ],
    how: [
      { title: "Policy-to-System Mapping", desc: "Translate AI use policies into enforceable workflows, access rules, and procedures." },
      { title: "Agent & Tool Registry", desc: "Build a registry of what AI tools and agents exist, what they access, and who owns them." },
      { title: "Permission & Approval Model", desc: "Role-based access control plus approval workflows for sensitive actions." },
      { title: "Audit Logs & Risk Scoring", desc: "Log AI actions and outputs, and score risk for review and escalation." },
      { title: "Escalation & Rollback", desc: "Define escalation paths, a kill switch, and rollback procedures." },
      { title: "Operating Model", desc: "Document the governance model and dashboard requirements teams can run." },
    ],
    techStack: ["Access control", "Approval workflows", "Audit logging", "Risk scoring", "Policy enforcement", "Governance dashboards"],
    benefits: [
      "Visibility into AI adoption across the company",
      "Enforceable permissions and approval workflows",
      "Audit logs for AI actions and outputs",
      "Risk scoring and escalation paths",
      "Kill switch and rollback procedures",
      "A documented operating model for AI ownership",
    ],
    caseStudy: {
      title: "Control Layer for Enterprise AI Agents",
      challenge: "A company deploying AI agents across multiple departments had no shared model for what AI could access, decide, or change — and no audit trail.",
      result: "Implemented an agent registry, permission model, approval workflows, audit logging, risk scoring, and escalation paths, with a kill switch and a documented operating model.",
      metric: "Auditable by design",
    },
    faq: [
      { q: "Is this just a policy document?", a: "No. Policies matter, but we translate them into enforceable controls — access rules, approval workflows, audit logs, risk scoring, and escalation paths that live in the system." },
      { q: "We have shadow AI adoption. Can you help?", a: "Yes. We build an agent and tool registry so you can see what AI exists across teams, what it accesses, and who owns it — then apply a consistent control model." },
      { q: "What is a kill switch in this context?", a: "A defined, tested way to disable or roll back an AI system or agent quickly if it behaves unexpectedly, along with the process for who can trigger it." },
    ],
  },
  {
    slug: "secure-enterprise-knowledge-systems",
    title: "Secure Enterprise Knowledge Systems",
    tagline: "AI access to company knowledge, with permissions",
    description:
      "Build permission-aware AI knowledge systems, secure RAG, enterprise search, document pipelines, citations, and retrieval-quality monitoring for private company data.",
    icon: "Database",
    what:
      "Enterprise knowledge systems are not simple document chatbots. They need permission-aware retrieval, clean document pipelines, source citations, access controls, quality evaluation, and monitoring. We build private knowledge systems that help teams find and use information safely — answering from trusted sources while respecting access boundaries.",
    whyUs: [
      "Permission-aware retrieval so users see only what they are allowed to",
      "Source citations so answers are traceable to trusted documents",
      "Retrieval quality that is measured and improvable, not guessed",
      "Clean ingestion across docs, drives, wikis, tickets, and databases",
    ],
    metrics: [
      { value: "Perm", label: "Permission-aware" },
      { value: "Cited", label: "Source-traceable" },
      { value: "Eval", label: "Retrieval measured" },
      { value: "RAG", label: "Secure architecture" },
    ],
    how: [
      { title: "Document Ingestion", desc: "Build pipelines to ingest content from drives, wikis, tickets, emails, and databases." },
      { title: "Secure RAG Architecture", desc: "Hybrid and vector search with permission-aware retrieval at the core." },
      { title: "Metadata & Access Model", desc: "Taxonomy, metadata, and access controls so users only see permitted content." },
      { title: "Citations & Answers", desc: "Source citation logic so every answer is traceable to trusted documents." },
      { title: "Retrieval Evaluation", desc: "Measure retrieval quality and build feedback collection to improve it." },
      { title: "Admin & Monitoring", desc: "Admin workflows plus a monitoring and analytics dashboard." },
    ],
    techStack: ["Secure RAG", "Vector search", "Hybrid search", "Permission-aware retrieval", "Citations", "Pinecone", "ChromaDB", "LangChain"],
    benefits: [
      "An internal AI assistant with source citations",
      "Permission-aware access to private data",
      "Clean ingestion across scattered knowledge sources",
      "Measurable, improvable retrieval quality",
      "Admin and feedback workflows",
      "Monitoring and analytics dashboard",
    ],
    caseStudy: {
      title: "Internal Knowledge Assistant with Citations",
      challenge: "A team's knowledge was spread across docs, drives, tickets, and databases, and a naive chatbot risked exposing content users were not allowed to see.",
      result: "Built a secure RAG knowledge assistant with permission-aware retrieval, source citations, retrieval evaluation, and a monitoring dashboard — so answers were trustworthy and access-safe.",
      metric: "Permission-aware answers",
    },
    faq: [
      { q: "How is this different from a document chatbot?", a: "It adds permission-aware retrieval, clean ingestion pipelines, source citations, access controls, retrieval-quality evaluation, and monitoring — so it is safe and measurable, not just conversational." },
      { q: "Will users see data they should not?", a: "No. Retrieval is permission-aware, so each user only retrieves and sees the content they are authorized to access." },
      { q: "Can we trust the answers?", a: "Answers include source citations so they are traceable to trusted documents, and we evaluate retrieval quality so it can be measured and improved over time." },
    ],
  },
  {
    slug: "ai-integration-existing-systems",
    title: "AI Integration with Existing Systems",
    tagline: "Connect AI to the systems where work happens",
    description:
      "Integrate AI into CRMs, ERPs, helpdesks, databases, document systems, internal tools, communication platforms, and legacy software — safely and with proper data flows.",
    icon: "Network",
    what:
      "AI creates value when it reaches the systems where work happens. We connect AI workflows to CRMs, ERPs, helpdesks, databases, data warehouses, communication platforms, document stores, payment systems, and legacy applications — with the APIs, webhooks, authentication, and data flows designed properly.",
    whyUs: [
      "AI that reads, writes, and updates business systems safely",
      "Proper API, webhook, authentication, and data-flow design",
      "Legacy system wrappers where no clean API exists",
      "Event-driven workflows that keep work moving",
    ],
    metrics: [
      { value: "APIs", label: "& webhooks" },
      { value: "Auth", label: "& permissions" },
      { value: "Legacy", label: "System wrappers" },
      { value: "Docs", label: "Data flows mapped" },
    ],
    how: [
      { title: "Integration Architecture", desc: "Design how AI connects to each system, what it reads, and what it can write back." },
      { title: "API & Webhook Implementation", desc: "Build the API and webhook layer that connects AI to operational tools." },
      { title: "Auth & Permissions", desc: "Design authentication and authorization so AI access is scoped and safe." },
      { title: "Data Flow Documentation", desc: "Document data flows so the integration is understandable and maintainable." },
      { title: "Legacy Wrappers", desc: "Wrap legacy systems that lack clean APIs so AI can integrate safely." },
      { title: "Operational Handoff", desc: "Hand off with event-driven workflow logic and documentation." },
    ],
    techStack: ["Integration architecture", "APIs & webhooks", "CRM/ERP connectors", "Helpdesk", "Slack/Teams", "PostgreSQL", "Legacy wrappers"],
    benefits: [
      "AI connected to the tools your business already runs on",
      "Safe read/write access to operational systems",
      "Proper authentication and permission handling",
      "Legacy system integration where APIs are limited",
      "Event-driven workflow logic",
      "Documented data flows and operational handoff",
    ],
    caseStudy: {
      title: "AI Assistant Connected to a CRM",
      challenge: "A team's AI pilot was disconnected from operational tools, so it could not read or update the CRM that the business actually ran on.",
      result: "Built an integration layer with API and webhook architecture, scoped authentication, and documented data flows, letting the AI assistant read and update CRM records safely.",
      metric: "Connected to operations",
    },
    faq: [
      { q: "Can AI write back to our systems, not just read?", a: "Yes. We design safe read and write access with scoped authentication and permissions, and add human approval gates where actions are sensitive." },
      { q: "We have legacy software without good APIs. Can you integrate it?", a: "Often, yes. We build legacy system wrappers and event-driven workflow logic so AI can integrate even where clean APIs do not exist." },
      { q: "How do you keep integrations maintainable?", a: "We document the integration architecture and data flows and hand off so your team can understand, operate, and extend what we build." },
    ],
  },
  {
    slug: "ai-security-monitoring-optimization",
    title: "AI Security, Monitoring & Optimization",
    tagline: "Keep AI systems reliable after they go live",
    description:
      "Test and monitor production AI systems for prompt injection, data leakage, hallucinations, unsafe actions, cost, latency, and quality — then improve them over time.",
    icon: "Server",
    what:
      "AI systems need ongoing visibility. We test AI before launch and monitor production behavior after launch — tracking quality and cost, identifying failure modes, and improving the system over time. Model behavior changes with real users, new data, new prompts, and edge cases, so we help teams detect issues early and maintain trust.",
    whyUs: [
      "Red-team testing for prompt injection, data leakage, and tool misuse",
      "Visibility into model cost, latency, failures, and quality",
      "Guardrails and fallback designed against real failure modes",
      "Continuous improvement after launch, not a one-time review",
    ],
    metrics: [
      { value: "Red-team", label: "Before launch" },
      { value: "Cost", label: "& latency tracked" },
      { value: "Quality", label: "Monitored" },
      { value: "Monthly", label: "Improvement plan" },
    ],
    how: [
      { title: "Security Testing", desc: "Prompt injection, data leakage, and agent action abuse testing before users see the system." },
      { title: "Quality Review", desc: "Hallucination and output-quality evaluation against real cases." },
      { title: "Guardrails", desc: "Implement guardrails and fallback behavior against the failure modes found." },
      { title: "Monitoring", desc: "Track cost, latency, failures, and escalation rates in production." },
      { title: "Optimization", desc: "Improve prompts, retrieval, and model routing to control cost and raise quality." },
      { title: "Reporting", desc: "Monthly improvement reporting with a prioritized enhancement roadmap." },
    ],
    techStack: ["Prompt injection testing", "Data leakage testing", "Guardrails", "Cost monitoring", "Model routing", "Evaluation", "Observability"],
    benefits: [
      "Reduced hallucinations, unsafe outputs, and tool misuse",
      "Visibility into model cost, latency, failures, and quality",
      "Guardrails and fallback for real failure modes",
      "Model routing and cost optimization",
      "Failure and escalation tracking",
      "Monthly optimization plan and reporting",
    ],
    caseStudy: {
      title: "AI Red-Team Review and Production Monitoring",
      challenge: "A team was about to launch a live AI system with no testing for prompt injection or data leakage and no visibility into cost or quality after launch.",
      result: "Ran a red-team review, implemented guardrails, and stood up cost, latency, failure, and quality monitoring with a monthly optimization plan to keep the system reliable.",
      metric: "Hardened before launch",
    },
    faq: [
      { q: "What do you test for before launch?", a: "Prompt injection, data leakage, agent action abuse, hallucination risk, tool misuse, and guardrail weaknesses — with remediation recommendations and implementation support." },
      { q: "What do you monitor after launch?", a: "Quality, cost, latency, failures, user feedback, escalation rates, and retrieval performance, with a monthly improvement roadmap." },
      { q: "Can you reduce our LLM costs?", a: "Often, yes — through model routing, caching, prompt and retrieval optimization, and fallback design, while keeping quality visible." },
    ],
  },
];
