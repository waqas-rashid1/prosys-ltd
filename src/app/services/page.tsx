import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  BrainCircuit,
  Cloud,
  Megaphone,
  Sparkles,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHero from "@/components/ui/PageHero";
import Capabilities from "@/components/Capabilities";
import { ServiceItemListSchema } from "@/components/StructuredData";
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "AI Deployment Services — Strategy, Agents, Governance, Integration & Monitoring",
  description:
    "Explore PROSYS LTD services for safe AI deployment: AI readiness, secure agents, governance, enterprise knowledge systems, integrations, security testing, monitoring, and optimization.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "AI Deployment Services — PROSYS LTD",
    description:
      "Everything companies need to deploy AI safely into operations: strategy, secure agents, governance, knowledge systems, integrations, security testing, and monitoring.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Deployment Services — PROSYS LTD",
    description:
      "Everything companies need to deploy AI safely into operations: strategy, secure agents, governance, knowledge systems, integrations, security testing, and monitoring.",
  },
};

type PillarAccent = "emerald" | "cyan" | "violet" | "amber";

const pillars: {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: typeof Code2;
  image: string;
  accent: PillarAccent;
  slugs: string[];
  proof: { value: string; label: string }[];
  outcomes: string[];
}[] = [
  {
    number: "01",
    title: "Strategy & Governance",
    tagline: "Decide and control before you scale",
    description:
      "Identify the safest, highest-ROI AI use cases, then define what AI can see, decide, change, and escalate before it touches business-critical work.",
    icon: BrainCircuit,
    image: "/images/service-digital.jpg",
    accent: "emerald",
    slugs: [
      "ai-readiness-strategy",
      "ai-governance-control-systems",
    ],
    proof: [
      { value: "1–3w", label: "Readiness sprint" },
      { value: "Risk", label: "Scored per use case" },
      { value: "Audit", label: "Logs & approvals" },
    ],
    outcomes: [
      "A prioritized, costed AI roadmap",
      "Permission, approval, and audit controls",
      "A documented operating model for AI risk",
    ],
  },
  {
    number: "02",
    title: "Build & Knowledge",
    tagline: "Agents and knowledge that operate safely",
    description:
      "Build AI agents that work inside real workflows with oversight, and secure knowledge systems that answer from trusted sources without exposing sensitive data.",
    icon: BrainCircuit,
    image: "/images/service-data.jpg",
    accent: "cyan",
    slugs: [
      "secure-ai-agents-workflow-automation",
      "secure-enterprise-knowledge-systems",
    ],
    proof: [
      { value: "HITL", label: "Approval gates" },
      { value: "RBAC", label: "Role-based access" },
      { value: "Cited", label: "Source-traceable" },
    ],
    outcomes: [
      "Agents with permissions and human approval",
      "Permission-aware enterprise knowledge",
      "Reliable behavior with audit trails",
    ],
  },
  {
    number: "03",
    title: "Integrate & Operate",
    tagline: "Connect, test, and keep AI reliable",
    description:
      "Connect AI to the systems your business already runs on, then test, monitor, and improve it after launch so quality, cost, and safety stay visible.",
    icon: Cloud,
    image: "/images/service-cloud.jpg",
    accent: "violet",
    slugs: [
      "ai-integration-existing-systems",
      "ai-security-monitoring-optimization",
    ],
    proof: [
      { value: "APIs", label: "& webhooks" },
      { value: "Red-team", label: "Before launch" },
      { value: "Monthly", label: "Optimization" },
    ],
    outcomes: [
      "AI connected to CRMs, ERPs, and legacy tools",
      "Prompt-injection and data-leakage testing",
      "Cost, latency, and quality monitoring",
    ],
  },
];

const accentDark: Record<
  PillarAccent,
  { text: string; glow: string; bg: string; border: string; ring: string; hex: string }
> = {
  emerald: {
    text: "text-emerald-300",
    glow: "from-emerald-500/25 via-emerald-500/5 to-transparent",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    ring: "shadow-[0_0_40px_rgba(103,232,249,0.25)]",
    hex: "rgba(103,232,249",
  },
  cyan: {
    text: "text-cyan-300",
    glow: "from-cyan-500/25 via-cyan-500/5 to-transparent",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    ring: "shadow-[0_0_40px_rgba(34,211,238,0.25)]",
    hex: "rgba(34,211,238",
  },
  violet: {
    text: "text-violet-300",
    glow: "from-violet-500/25 via-violet-500/5 to-transparent",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    ring: "shadow-[0_0_40px_rgba(167,139,250,0.25)]",
    hex: "rgba(167,139,250",
  },
  amber: {
    text: "text-amber-300",
    glow: "from-amber-500/25 via-amber-500/5 to-transparent",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    ring: "shadow-[0_0_40px_rgba(251,191,36,0.25)]",
    hex: "rgba(251,191,36",
  },
};

const accentLight: Record<
  PillarAccent,
  { text: string; glow: string; bg: string; border: string; ring: string; hex: string }
> = {
  emerald: {
    text: "text-emerald-700",
    glow: "from-emerald-500/15 via-emerald-500/5 to-transparent",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    ring: "shadow-[0_10px_40px_-15px_rgba(16,185,129,0.35)]",
    hex: "rgba(16,185,129",
  },
  cyan: {
    text: "text-cyan-700",
    glow: "from-cyan-500/15 via-cyan-500/5 to-transparent",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    ring: "shadow-[0_10px_40px_-15px_rgba(8,145,178,0.35)]",
    hex: "rgba(8,145,178",
  },
  violet: {
    text: "text-violet-700",
    glow: "from-violet-500/15 via-violet-500/5 to-transparent",
    bg: "bg-violet-50",
    border: "border-violet-200",
    ring: "shadow-[0_10px_40px_-15px_rgba(124,58,237,0.35)]",
    hex: "rgba(124,58,237",
  },
  amber: {
    text: "text-amber-700",
    glow: "from-amber-500/15 via-amber-500/5 to-transparent",
    bg: "bg-amber-50",
    border: "border-amber-200",
    ring: "shadow-[0_10px_40px_-15px_rgba(217,119,6,0.35)]",
    hex: "rgba(217,119,6",
  },
};

const proofPoints = [
  { value: "6", label: "Core AI services" },
  { value: "3", label: "Delivery pillars" },
  { value: "6–12w", label: "To production pilots" },
  { value: "6", label: "Industries served" },
];

const engagementSteps = [
  {
    num: "01",
    title: "Assess",
    desc: "Map workflows, data, and risk. Score use cases by value and feasibility to find the safest place to start.",
  },
  {
    num: "02",
    title: "Build",
    desc: "Develop agents, automations, and knowledge systems with oversight, controls, and fallback handling.",
  },
  {
    num: "03",
    title: "Govern",
    desc: "Add permissions, approval workflows, audit logs, risk scoring, and escalation before going live.",
  },
  {
    num: "04",
    title: "Integrate",
    desc: "Connect AI to CRMs, ERPs, helpdesks, databases, and legacy tools with proper data flows.",
  },
  {
    num: "05",
    title: "Secure",
    desc: "Red-team for prompt injection, data leakage, and unsafe actions, then implement guardrails.",
  },
  {
    num: "06",
    title: "Improve",
    desc: "Monitor quality, cost, latency, and failures in production, with a monthly optimization plan.",
  },
];

const problemMatches = [
  {
    label: "I don't know where to start with AI",
    route: "AI Readiness & Strategy",
    icon: Sparkles,
  },
  {
    label: "I want AI working inside our workflows",
    route: "Secure AI Agents & Workflow Automation",
    icon: Zap,
  },
  {
    label: "AI needs access to our internal knowledge",
    route: "Secure Enterprise Knowledge Systems",
    icon: Cpu,
  },
  {
    label: "Our AI must be controlled and audited",
    route: "AI Governance & Control Systems",
    icon: Megaphone,
  },
];

export default function ServicesPage() {
  return (
    <>
      <ServiceItemListSchema />
      <Navbar />
      <main id="main-content">
        {/* ═══════════ DARK · Hero ═══════════ */}
        <PageHero
          badge="AI Deployment Services"
          title="Deploy AI safely."
          highlight="From pilots to production."
          description="Six core services that take AI from idea to operations — strategy, secure agents, governance, knowledge systems, integrations, and monitoring."
          bgImage="/images/services-hero.jpg"
          bgImageOpacity={0.3}
          trustSignals={[
            "Permissions, approvals & audit logs",
            "Human-in-the-loop oversight",
            "Integrated with your existing systems",
            "Monitored after launch",
          ]}
          primaryCta={{ label: "Book an AI Readiness Call", href: "/contact" }}
          secondaryCta={{ label: "Explore all 6 services", href: "#pillars" }}
          stats={proofPoints.map((p) => ({ value: p.value, label: p.label }))}
        />

        {/* ═══════════ LIGHT · Pillar Overview ═══════════ */}
        <section className="relative py-14 lg:py-20 bg-light-primary border-b border-card-light-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            {/* Editorial rail */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] text-accent/70 uppercase tracking-[0.35em] font-semibold">
                / The Three Pillars
              </span>
              <span className="h-px flex-1 max-w-[180px] bg-gradient-to-r from-accent/40 to-transparent" />
            </div>

            <ScrollReveal>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-14">
                <div className="max-w-3xl">
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-black text-text-dark leading-[1.02] tracking-tight mb-5">
                    Pick a pillar.{" "}
                    <span className="gradient-text">Or tell us the problem.</span>
                  </h2>
                  <p className="text-base md:text-lg text-text-dark-muted leading-relaxed max-w-2xl">
                    Every engagement fits into one of three disciplined pillars —
                    but we start with your problem, not our service menu.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {pillars.map((p) => {
                    const a = accentLight[p.accent];
                    return (
                      <a
                        key={p.number}
                        href={`#pillar-${p.number}`}
                        className={`group inline-flex items-center gap-2 px-3.5 py-2 rounded-full border ${a.border} ${a.bg} hover:bg-white transition-colors`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-current ${a.text}`} />
                        <span className="text-[11px] text-text-dark font-semibold tracking-wide uppercase">
                          {p.title}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            {/* Pillar overview cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                const a = accentLight[p.accent];
                return (
                  <ScrollReveal key={p.number} delay={i * 0.08}>
                    <a
                      href={`#pillar-${p.number}`}
                      className="group relative block h-full border border-card-light-border bg-white overflow-hidden hover:border-text-dark/15 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500"
                    >
                      <div
                        className={`absolute -inset-1 bg-gradient-to-br ${a.glow} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none`}
                        aria-hidden="true"
                      />

                      <div className="relative p-6 lg:p-7">
                        <div className="flex items-center justify-between mb-6">
                          <span className={`font-mono text-[10px] tracking-[0.25em] uppercase ${a.text}`}>
                            PILLAR · {p.number}
                          </span>
                          <ArrowUpRight
                            size={18}
                            className="text-text-dark-muted/40 group-hover:text-text-dark group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                          />
                        </div>

                        <div className="flex items-start gap-4 mb-4">
                          <div className={`relative w-12 h-12 ${a.bg} border ${a.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                            <Icon size={20} className={a.text} strokeWidth={1.8} />
                          </div>
                          <div>
                            <p className={`text-[10px] uppercase tracking-[0.25em] ${a.text} font-bold mb-1.5`}>
                              {p.tagline}
                            </p>
                            <h3 className="font-heading text-2xl lg:text-[1.75rem] font-black text-text-dark leading-tight tracking-tight">
                              {p.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-sm text-text-dark-muted leading-relaxed mb-5">
                          {p.description}
                        </p>

                        <div className="grid grid-cols-3 gap-3 mb-5 pt-5 border-t border-card-light-border">
                          {p.proof.map((pp) => (
                            <div key={pp.label}>
                              <div className="font-heading text-lg lg:text-xl font-black text-text-dark leading-none mb-1 tracking-tight">
                                {pp.value}
                              </div>
                              <div className="text-[9.5px] text-text-dark-muted/70 uppercase tracking-[0.15em] font-semibold leading-tight">
                                {pp.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-1.5 mb-5">
                          {p.outcomes.map((o) => (
                            <div key={o} className="flex items-start gap-2 text-[12.5px] text-text-dark-muted leading-snug">
                              <CheckCircle2
                                size={11}
                                className={`${a.text} mt-[3px] flex-shrink-0`}
                                strokeWidth={2.4}
                              />
                              <span>{o}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-card-light-border">
                          <span className="text-[11px] text-text-dark-muted font-semibold tracking-wide">
                            {p.slugs.length} deep capabilities
                          </span>
                          <span className={`inline-flex items-center gap-1.5 text-[11px] ${a.text} font-semibold uppercase tracking-widest group-hover:gap-2 transition-all`}>
                            Explore
                            <ArrowRight size={12} />
                          </span>
                        </div>
                      </div>
                    </a>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════ DARK · Capabilities (How We Deliver) ═══════════ */}
        <Capabilities />

        {/* ═══════════ Pillar Deep-Dive Sections · alternating LIGHT / DARK ═══════════ */}
        <div id="pillars">
          {pillars.map((pillar, gi) => {
            const Icon = pillar.icon;
            const isDark = gi % 2 === 1;
            const a = isDark ? accentDark[pillar.accent] : accentLight[pillar.accent];
            const services = pillar.slugs
              .map((slug) => servicesData.find((s) => s.slug === slug))
              .filter((s): s is (typeof servicesData)[number] => Boolean(s));

            return (
              <section
                key={pillar.number}
                id={`pillar-${pillar.number}`}
                className={`relative scroll-mt-24 py-20 lg:py-24 overflow-hidden border-b ${ isDark ? "bg-dark-primary grain-overlay border-card-dark-border" : "bg-light-primary border-card-light-border" }`}
              >
                {/* Ambient glow — green on dark, pillar-accent on light */}
                {isDark && (
                  <>
                    <div
                      className="absolute inset-0 pointer-events-none opacity-60"
                      style={{
                        background: `radial-gradient(ellipse 900px 500px at 75% 10%, rgba(6,182,212,0.18) 0%, transparent 60%)`,
                      }}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none opacity-[0.03]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                      }}
                      aria-hidden="true"
                    />
                  </>
                )}
                {!isDark && (
                  <div
                    className="absolute inset-0 pointer-events-none opacity-60"
                    style={{
                      background: `radial-gradient(ellipse 800px 400px at 25% 0%, ${a.hex},0.08) 0%, transparent 60%)`,
                    }}
                    aria-hidden="true"
                  />
                )}

                <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
                  {/* Editorial rail */}
                  <ScrollReveal>
                    <div className="flex items-center gap-3 mb-6">
                      <span className={`font-mono text-[10px] ${a.text} tracking-[0.3em] uppercase font-semibold`}>
                        / Pillar · {pillar.number}
                      </span>
                      <span className={`h-px flex-1 max-w-[200px] bg-gradient-to-r from-current to-transparent ${a.text} opacity-40`} />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-12 lg:mb-14 items-end">
                      <div className="lg:col-span-8">
                        <div className="flex items-start gap-5 md:gap-7 mb-6">
                          <div
                            className={`relative w-16 h-16 lg:w-[72px] lg:h-[72px] ${a.bg} border ${a.border} ${a.ring} flex items-center justify-center flex-shrink-0`}
                          >
                            <Icon size={28} className={a.text} strokeWidth={1.6} />
                          </div>
                          <div>
                            <p className={`text-[11px] uppercase tracking-[0.25em] font-bold mb-2 ${a.text}`}>
                              {pillar.tagline}
                            </p>
                            <h2
                              className={`font-heading text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-black leading-[1.02] tracking-tight ${ isDark ? "text-white" : "text-text-dark" }`}
                            >
                              {pillar.title}
                            </h2>
                          </div>
                        </div>

                        <p
                          className={`text-base md:text-lg leading-relaxed max-w-2xl ${ isDark ? "text-text-light-muted" : "text-text-dark-muted" }`}
                        >
                          {pillar.description}
                        </p>
                      </div>

                      <div className="lg:col-span-4 flex flex-col gap-4">
                        {/* Cinematic image */}
                        <div
                          className={`relative h-44 lg:h-48 overflow-hidden border ${ isDark ? "border-card-dark-border" : "border-card-light-border" }`}
                        >
                          <Image
                            src={pillar.image}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 33vw, 100vw"
                          />
                          <div
                            className={`absolute inset-0 ${ isDark ? "bg-gradient-to-t from-dark-primary via-dark-primary/50 to-dark-primary/10" : "bg-gradient-to-t from-white/95 via-white/40 to-transparent" }`}
                          />
                          <div className="absolute bottom-4 left-5 right-5">
                            <p
                              className={`font-heading text-3xl font-black leading-tight tracking-tight ${ isDark ? "text-white" : "text-text-dark" }`}
                            >
                              {services.length}
                              <span className="text-lg ml-1 font-bold">capabilities</span>
                            </p>
                            <p
                              className={`text-[11px] uppercase tracking-widest font-semibold mt-0.5 ${ isDark ? "text-white/50" : "text-text-dark-muted" }`}
                            >
                              Under this pillar
                            </p>
                          </div>
                        </div>

                        {/* Proof stats */}
                        <div
                          className={`grid grid-cols-3 gap-px overflow-hidden border ${ isDark ? "bg-card-dark-border border-card-dark-border" : "bg-card-light-border border-card-light-border" }`}
                        >
                          {pillar.proof.map((pp) => (
                            <div
                              key={pp.label}
                              className={`p-3.5 ${isDark ? "bg-card-dark/60" : "bg-white"}`}
                            >
                              <div
                                className={`font-heading text-xl font-black leading-none mb-1 tracking-tight ${ isDark ? "text-white" : "text-text-dark" }`}
                              >
                                {pp.value}
                              </div>
                              <div
                                className={`text-[9px] uppercase tracking-[0.15em] font-semibold leading-tight ${ isDark ? "text-white/45" : "text-text-dark-muted/70" }`}
                              >
                                {pp.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Service cards — individually rounded, gapped, filled */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                    {services.map((s, i) => (
                      <ScrollReveal key={s.slug} delay={i * 0.04}>
                        <Link
                          href={`/services/${s.slug}`}
                          className={`group relative flex flex-col h-full p-6 lg:p-7 border overflow-hidden transition-all duration-300 ${ isDark ? "bg-card-dark border-card-dark-border hover:bg-dark-secondary hover:border-white/20" : "bg-white border-card-light-border hover:border-text-dark/15 hover:shadow-lg hover:-translate-y-0.5" }`}
                        >
                          <span
                            className={`absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-current to-transparent ${a.text} group-hover:w-full transition-all duration-700`}
                          />

                          <div className="flex items-center justify-between mb-5">
                            <span className={`text-[10px] font-mono tracking-[0.2em] uppercase ${a.text} opacity-70`}>
                              /{String(i + 1).padStart(2, "0")}
                            </span>
                            <ArrowUpRight
                              size={16}
                              className={`${ isDark ? "text-white/25 group-hover:text-white" : "text-text-dark-muted/40 group-hover:text-text-dark" } group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300`}
                            />
                          </div>

                          <h3
                            className={`font-heading text-lg lg:text-xl font-bold mb-2 leading-tight tracking-tight ${ isDark ? "text-white" : "text-text-dark" }`}
                          >
                            {s.title}
                          </h3>
                          <p
                            className={`text-sm leading-relaxed mb-5 ${ isDark ? "text-text-light-muted" : "text-text-dark-muted" }`}
                          >
                            {s.tagline}
                          </p>

                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {s.techStack.slice(0, 3).map((t) => (
                              <span
                                key={t}
                                className={`px-2 py-0.5 text-[10px] font-medium rounded-md border ${ isDark ? "border-card-dark-border bg-dark-primary/60 text-white/60" : "border-card-light-border bg-light-primary text-text-dark-muted" }`}
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          <div
                            className={`mt-auto pt-4 flex items-center justify-between border-t ${ isDark ? "border-white/10" : "border-card-light-border" }`}
                          >
                            <span className={`text-[11px] ${a.text} font-semibold uppercase tracking-widest`}>
                              View details
                            </span>
                            <ArrowRight
                              size={12}
                              className={`${a.text} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300`}
                            />
                          </div>
                        </Link>
                      </ScrollReveal>
                    ))}

                    {/* Pillar-CTA filler card — fills the dead grid slot and drives conversion */}
                    <ScrollReveal delay={services.length * 0.04}>
                      <Link
                        href="/contact"
                        className={`group relative flex flex-col h-full p-6 lg:p-7 border overflow-hidden transition-all duration-300 ${
                          isDark
                            ? `${a.bg} ${a.border} hover:bg-card-dark hover:border-white/20`
                            : `${a.bg} ${a.border} hover:bg-white hover:shadow-lg hover:-translate-y-0.5`
                        }`}
                      >
                        <div
                          className={`absolute -inset-1 bg-gradient-to-br ${a.glow} opacity-70 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none`}
                          aria-hidden="true"
                        />

                        <div className="relative flex flex-col h-full">
                          <div className="flex items-center justify-between mb-5">
                            <span className={`text-[10px] font-mono tracking-[0.2em] uppercase ${a.text} opacity-80 font-semibold`}>
                              TALK TO US
                            </span>
                            <div
                              className={`w-8 h-8 rounded-md flex items-center justify-center ${ isDark ? "bg-white/5 border border-white/10" : "bg-white border border-card-light-border" } group-hover:bg-accent group-hover:border-accent transition-all duration-300`}
                            >
                              <ArrowUpRight
                                size={14}
                                className={`${a.text} group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300`}
                              />
                            </div>
                          </div>

                          <div className="relative w-12 h-12 bg-white/10 border border-white/10 flex items-center justify-center mb-5 backdrop-blur-sm">
                            <Sparkles size={18} className={a.text} />
                          </div>

                          <h3
                            className={`font-heading text-lg lg:text-xl font-bold mb-2 leading-tight tracking-tight ${ isDark ? "text-white" : "text-text-dark" }`}
                          >
                            Not sure where to start?
                          </h3>
                          <p
                            className={`text-sm leading-relaxed mb-5 ${ isDark ? "text-text-light-muted" : "text-text-dark-muted" }`}
                          >
                            30-minute working session with the{" "}
                            <span className={`font-semibold ${a.text}`}>{pillar.title}</span> engagement lead. Diagnostic-first — no service pitch, no obligation.
                          </p>

                          <div
                            className={`mt-auto pt-4 flex items-center justify-between border-t ${ isDark ? "border-white/10" : "border-card-light-border/80" }`}
                          >
                            <span className={`text-[11px] ${a.text} font-semibold uppercase tracking-widest`}>
                              Book a call
                            </span>
                            <ArrowRight
                              size={12}
                              className={`${a.text} group-hover:translate-x-1 transition-transform duration-300`}
                            />
                          </div>
                        </div>
                      </Link>
                    </ScrollReveal>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* ═══════════ LIGHT · Engagement Model ═══════════ */}
        <section className="relative py-14 lg:py-20 bg-light-primary overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 1200px 600px at 50% 0%, rgba(6,182,212,0.08) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] text-accent/70 uppercase tracking-[0.35em] font-semibold">
                / Engagement Model
              </span>
              <span className="h-px flex-1 max-w-[180px] bg-gradient-to-r from-accent/40 to-transparent" />
            </div>

            <ScrollReveal>
              <div className="max-w-4xl mb-14 lg:mb-16">
                <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-black text-text-dark leading-[1.02] tracking-tight mb-5">
                  Transparent process.{" "}
                  <span className="gradient-text">No black boxes.</span>
                </h2>
                <p className="text-base md:text-lg text-text-dark-muted leading-relaxed max-w-2xl">
                  Six defined stages, reviewable deliverables at every iteration, and a named engagement lead as your single point of accountability — from first call through post-launch operations.
                </p>
              </div>
            </ScrollReveal>

            {/* 6-step timeline — each step is its own rounded card */}
            <div className="relative mb-16 lg:mb-20">
              <div
                aria-hidden="true"
                className="hidden lg:block absolute top-[2.5rem] left-[4%] right-[4%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
                {engagementSteps.map((s, i) => (
                  <ScrollReveal key={s.num} delay={i * 0.06}>
                    <div className="group relative h-full bg-white border border-card-light-border p-5 hover:border-accent/30 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className="relative w-10 h-10 rounded-full bg-white border border-accent/30 flex items-center justify-center font-mono text-[11px] font-bold text-accent shadow-sm">
                          {s.num}
                        </div>
                        {i < engagementSteps.length - 1 && (
                          <ArrowRight size={12} className="text-text-dark-muted/30 hidden lg:block" />
                        )}
                      </div>
                      <h3 className="font-heading text-sm lg:text-base font-bold text-text-dark mb-1.5 tracking-tight leading-tight">
                        {s.title}
                      </h3>
                      <p className="text-[12px] text-text-dark-muted leading-snug">
                        {s.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Problem match block */}
            <ScrollReveal>
              <div className="relative border border-card-light-border bg-white overflow-hidden shadow-sm">
                <div
                  className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 lg:p-12">
                  <div className="lg:col-span-5">
                    <p className="text-[11px] text-accent uppercase tracking-[0.25em] font-semibold mb-4">
                      Not sure which service fits?
                    </p>
                    <h3 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-black text-text-dark leading-[1.05] tracking-tight mb-5">
                      Describe the problem.{" "}
                      <span className="gradient-text">We&apos;ll pick the stack.</span>
                    </h3>
                    <p className="text-text-dark-muted text-sm md:text-base leading-relaxed mb-7">
                      Engagement leads review every inbound. The diagnosis comes before the prescription — and includes an honest assessment of whether your problem requires us at all.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/contact"
                        className="group inline-flex items-center justify-center gap-2 font-semibold rounded-md bg-dark-primary text-white hover:bg-accent px-6 py-3.5 text-xs uppercase tracking-widest transition-all duration-300"
                      >
                        Get a proposal
                        <ArrowRight
                          size={13}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                      <Link
                        href="/work"
                        className="inline-flex items-center justify-center gap-2 font-medium rounded-md border border-text-dark/15 text-text-dark hover:border-accent hover:text-accent px-6 py-3.5 text-xs uppercase tracking-widest transition-all duration-300"
                      >
                        See case studies
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {problemMatches.map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <div
                            key={item.label}
                            className="group flex items-start gap-4 bg-white border border-card-light-border p-5 hover:border-accent/30 hover:shadow-md transition-all duration-300"
                          >
                            <div className="w-10 h-10 rounded-md bg-accent/10 border border-accent/20 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                              <ItemIcon size={16} />
                            </div>
                            <div className="flex-grow">
                              <p className="text-sm font-semibold text-text-dark mb-1 leading-tight">
                                &ldquo;{item.label}&rdquo;
                              </p>
                              <p className="text-xs text-text-dark-muted flex items-start gap-1.5 leading-snug">
                                <CheckCircle2 size={11} className="text-accent flex-shrink-0 mt-0.5" />
                                <span>{item.route}</span>
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
