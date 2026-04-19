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
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "All Services — Product Engineering, AI, Cloud & Growth",
  description:
    "Explore PROSYS LTD's four service pillars: Product Engineering, AI & Automation, Cloud & Platform, and Growth & Marketing. 29 deep capabilities, one delivery standard.",
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
    title: "Product Engineering",
    tagline: "Ship production-ready software",
    description:
      "Web, SaaS, and custom platforms engineered to scale — built by senior teams with delivery-first discipline.",
    icon: Code2,
    image: "/images/service-digital.jpg",
    accent: "emerald",
    slugs: [
      "web-development",
      "software-development",
      "saas-development",
      "mvp-development",
      "business-applications",
      "digital-commerce",
      "digital-consulting",
    ],
    proof: [
      { value: "40+", label: "Products Shipped" },
      { value: "<1s", label: "Median Load" },
      { value: "4–8w", label: "MVP Window" },
    ],
    outcomes: [
      "Investor-ready MVPs in 4–8 weeks",
      "SOC2-aligned SaaS platforms",
      "Legacy modernization without downtime",
    ],
  },
  {
    number: "02",
    title: "AI & Automation",
    tagline: "Outcomes, not demos",
    description:
      "Applied AI, LLM systems, and intelligent automation engineered for reliability and measurable ROI.",
    icon: BrainCircuit,
    image: "/images/service-data.jpg",
    accent: "cyan",
    slugs: [
      "ai-development",
      "generative-ai",
      "ai-automations",
      "advanced-analytics",
      "data-modernization",
      "connected-intelligence",
      "data-management",
      "emerging-technologies",
    ],
    proof: [
      { value: "80%", label: "Avg. Time Saved" },
      { value: "15+", label: "AI Systems Live" },
      { value: "100%", label: "Evaluated Models" },
    ],
    outcomes: [
      "Production LLM agents with audit trails",
      "RAG systems on proprietary knowledge",
      "Workflow automation with human-in-the-loop",
    ],
  },
  {
    number: "03",
    title: "Cloud & Platform",
    tagline: "Infrastructure that scales",
    description:
      "Cloud-native architecture, migrations, and managed operations on AWS, GCP, and Azure with SRE discipline.",
    icon: Cloud,
    image: "/images/service-cloud.jpg",
    accent: "violet",
    slugs: [
      "cloud-operations",
      "cloud-app-development",
      "managed-services",
      "security",
      "digital-infrastructure",
    ],
    proof: [
      { value: "99.95%", label: "Uptime Achieved" },
      { value: "-45%", label: "Avg. Cost Saved" },
      { value: "IaC", label: "Everything" },
    ],
    outcomes: [
      "Zero-downtime cloud migrations",
      "SOC2-aligned infrastructure",
      "24/7 observability & incident response",
    ],
  },
  {
    number: "04",
    title: "Growth & Marketing",
    tagline: "Compounding pipeline",
    description:
      "Technical SEO, AIEO, and full-funnel growth systems that drive qualified traffic and conversions.",
    icon: Megaphone,
    image: "/images/service-bps.jpg",
    accent: "amber",
    slugs: [
      "seo",
      "aieo",
      "digital-marketing",
      "graphics-branding",
      "contact-center",
      "finance-accounting",
      "staff-augmentation",
      "legal-process-outsourcing",
      "recruitment-outsourcing",
    ],
    proof: [
      { value: "3–5×", label: "Organic Lift" },
      { value: "6m", label: "To Rank" },
      { value: "LLM", label: "Citations" },
    ],
    outcomes: [
      "First-page Google + LLM visibility",
      "AIEO-optimized content systems",
      "Full-funnel attribution & CRO",
    ],
  },
];

const accentMap: Record<
  PillarAccent,
  {
    text: string;
    glow: string;
    bg: string;
    border: string;
    ring: string;
    hex: string;
  }
> = {
  emerald: {
    text: "text-emerald-300",
    glow: "from-emerald-500/25 via-emerald-500/5 to-transparent",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    ring: "shadow-[0_0_40px_rgba(52,211,153,0.25)]",
    hex: "rgba(52,211,153",
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

const proofPoints = [
  { value: "29", label: "Capabilities" },
  { value: "4", label: "Pillars" },
  { value: "50+", label: "Projects" },
  { value: "12+", label: "Countries" },
];

const engagementSteps = [
  {
    num: "01",
    title: "Discovery call",
    desc: "30-minute consult with a senior engineer. We diagnose the problem, not sell a service.",
  },
  {
    num: "02",
    title: "Scoped proposal",
    desc: "Fixed scope, fixed price, clear timeline. No hidden costs, no change-order games.",
  },
  {
    num: "03",
    title: "Kickoff & plan",
    desc: "Architecture review, sprint plan, and success metrics agreed before a line of code ships.",
  },
  {
    num: "04",
    title: "Sprint delivery",
    desc: "Two-week cadence with weekly demos, transparent velocity tracking, and reviewable PRs.",
  },
  {
    num: "05",
    title: "Launch & harden",
    desc: "QA, perf tuning, security review, and go-live with rollback plans and on-call cover.",
  },
  {
    num: "06",
    title: "Evolve & grow",
    desc: "Ongoing support, observability, and feature evolution — scoped monthly, not indefinitely.",
  },
];

const problemMatches = [
  {
    label: "I need to ship a product fast",
    route: "MVP Development → Product Engineering",
    icon: Zap,
  },
  {
    label: "I want to add AI to our product",
    route: "AI Development → Generative AI / RAG",
    icon: Sparkles,
  },
  {
    label: "My infrastructure doesn't scale",
    route: "Cloud Operations → Managed Services",
    icon: Cpu,
  },
  {
    label: "I need qualified pipeline",
    route: "SEO + AIEO → Digital Marketing",
    icon: Megaphone,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-dark-primary">
        {/* ───────────────────────── Hero ───────────────────────── */}
        <PageHero
          badge="Capabilities"
          title="Four pillars."
          highlight="One delivery standard."
          description="From strategy and product engineering to AI, cloud, and growth — PROSYS delivers 29 deep capabilities under a single delivery discipline."
          bgImage="/images/services-hero.jpg"
          bgImageOpacity={0.3}
          trustSignals={[
            "Senior engineers only",
            "Fixed-scope, fixed-price",
            "SOC2-aligned",
            "24-hour response SLA",
          ]}
          primaryCta={{ label: "Book a consultation", href: "/contact" }}
          secondaryCta={{ label: "Explore all 29", href: "#pillars" }}
          stats={proofPoints.map((p) => ({ value: p.value, label: p.label }))}
        />

        {/* ───────────────────────── Pillar Overview (replaces both old strips) ───────────────────────── */}
        <section className="relative py-20 lg:py-24 bg-dark-primary border-b border-card-dark-border overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              background:
                "radial-gradient(ellipse 1000px 400px at 50% 0%, rgba(12,108,54,0.15) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
            {/* Editorial rail */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] text-accent-light/60 uppercase tracking-[0.35em] font-semibold">
                / The Four Pillars
              </span>
              <span className="h-px flex-1 max-w-[180px] bg-gradient-to-r from-accent-light/40 to-transparent" />
            </div>

            <ScrollReveal>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-14">
                <div className="max-w-3xl">
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-black text-white leading-[1.02] tracking-tight mb-5">
                    Pick a pillar.{" "}
                    <span className="gradient-text">Or tell us the problem.</span>
                  </h2>
                  <p className="text-base md:text-lg text-text-light-muted leading-relaxed max-w-2xl">
                    Every engagement fits into one of four disciplined pillars —
                    but we start with your problem, not our service menu.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {pillars.map((p) => {
                    const a = accentMap[p.accent];
                    return (
                      <a
                        key={p.number}
                        href={`#pillar-${p.number}`}
                        className={`group inline-flex items-center gap-2 px-3.5 py-2 rounded-full border ${a.border} ${a.bg} hover:bg-white/10 transition-colors`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-current ${a.text}`} />
                        <span className="text-[11px] text-white/80 font-semibold tracking-wide uppercase">
                          {p.title}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            {/* Pillar cards grid — rich, unified */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                const a = accentMap[p.accent];
                return (
                  <ScrollReveal key={p.number} delay={i * 0.08}>
                    <a
                      href={`#pillar-${p.number}`}
                      className="group relative block h-full rounded-xl border border-card-dark-border bg-card-dark/60 backdrop-blur-sm overflow-hidden hover:border-white/20 transition-all duration-500"
                    >
                      {/* Ambient accent glow on hover */}
                      <div
                        className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${a.glow} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none`}
                        aria-hidden="true"
                      />

                      <div className="relative p-6 lg:p-7">
                        {/* Top row: number + icon + arrow */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <span className={`font-mono text-[10px] tracking-[0.25em] uppercase ${a.text}`}>
                              PILLAR · {p.number}
                            </span>
                          </div>
                          <ArrowUpRight
                            size={18}
                            className="text-white/30 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                          />
                        </div>

                        {/* Icon + title */}
                        <div className="flex items-start gap-4 mb-4">
                          <div
                            className={`relative w-12 h-12 rounded-lg ${a.bg} border ${a.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}
                          >
                            <Icon size={20} className={a.text} strokeWidth={1.8} />
                          </div>
                          <div>
                            <p className={`text-[10px] uppercase tracking-[0.25em] ${a.text} font-bold mb-1.5`}>
                              {p.tagline}
                            </p>
                            <h3 className="font-heading text-2xl lg:text-[1.75rem] font-black text-white leading-tight tracking-tight">
                              {p.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-sm text-text-light-muted leading-relaxed mb-5">
                          {p.description}
                        </p>

                        {/* Proof stats */}
                        <div className="grid grid-cols-3 gap-3 mb-5 pt-5 border-t border-white/10">
                          {p.proof.map((pp) => (
                            <div key={pp.label}>
                              <div className="font-heading text-lg lg:text-xl font-black text-white leading-none mb-1 tracking-tight">
                                {pp.value}
                              </div>
                              <div className="text-[9.5px] text-white/45 uppercase tracking-[0.15em] font-semibold leading-tight">
                                {pp.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Outcomes */}
                        <div className="space-y-1.5 mb-5">
                          {p.outcomes.map((o) => (
                            <div
                              key={o}
                              className="flex items-start gap-2 text-[12.5px] text-white/70 leading-snug"
                            >
                              <CheckCircle2
                                size={11}
                                className={`${a.text} mt-[3px] flex-shrink-0`}
                                strokeWidth={2.4}
                              />
                              <span>{o}</span>
                            </div>
                          ))}
                        </div>

                        {/* Footer row */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <span className="text-[11px] text-white/50 font-semibold tracking-wide">
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

        {/* ───────────────────────── How We Deliver (Capabilities) ───────────────────────── */}
        <Capabilities />

        {/* ───────────────────────── Pillar Deep-Dive Sections ───────────────────────── */}
        <div id="pillars">
          {pillars.map((pillar, gi) => {
            const Icon = pillar.icon;
            const a = accentMap[pillar.accent];
            const services = pillar.slugs
              .map((slug) => servicesData.find((s) => s.slug === slug))
              .filter((s): s is (typeof servicesData)[number] => Boolean(s));

            return (
              <section
                key={pillar.number}
                id={`pillar-${pillar.number}`}
                className={`relative scroll-mt-24 py-20 lg:py-24 overflow-hidden grain-overlay ${
                  gi % 2 === 0 ? "bg-dark-primary" : "bg-dark-secondary"
                } border-b border-card-dark-border`}
              >
                {/* Accent ambient layer */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-60"
                  style={{
                    background: `radial-gradient(ellipse 900px 500px at ${gi % 2 === 0 ? "75%" : "25%"} 10%, ${a.hex},0.10) 0%, transparent 60%)`,
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

                <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
                  {/* Pillar Header — editorial */}
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
                            className={`relative w-16 h-16 lg:w-[72px] lg:h-[72px] rounded-xl ${a.bg} border ${a.border} ${a.ring} flex items-center justify-center flex-shrink-0`}
                          >
                            <Icon size={28} className={a.text} strokeWidth={1.6} />
                          </div>
                          <div>
                            <p className={`text-[11px] uppercase tracking-[0.25em] font-bold mb-2 ${a.text}`}>
                              {pillar.tagline}
                            </p>
                            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-black text-white leading-[1.02] tracking-tight">
                              {pillar.title}
                            </h2>
                          </div>
                        </div>

                        <p className="text-base md:text-lg text-text-light-muted leading-relaxed max-w-2xl">
                          {pillar.description}
                        </p>
                      </div>

                      {/* Right column — cinematic image + stats */}
                      <div className="lg:col-span-4 flex flex-col gap-4">
                        <div className="relative h-44 lg:h-48 overflow-hidden rounded-xl border border-card-dark-border">
                          <Image
                            src={pillar.image}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 33vw, 100vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/50 to-dark-primary/10" />
                          <div className="absolute bottom-4 left-5 right-5">
                            <p className="font-heading text-3xl font-black text-white leading-tight tracking-tight">
                              {services.length}
                              <span className="text-lg ml-1">capabilities</span>
                            </p>
                            <p className="text-[11px] uppercase tracking-widest text-white/50 font-semibold mt-0.5">
                              Under this pillar
                            </p>
                          </div>
                        </div>

                        {/* Pillar proof stats */}
                        <div className="grid grid-cols-3 gap-px bg-card-dark-border rounded-lg overflow-hidden border border-card-dark-border">
                          {pillar.proof.map((pp) => (
                            <div key={pp.label} className="bg-card-dark/60 p-3.5">
                              <div className="font-heading text-xl font-black text-white leading-none mb-1 tracking-tight">
                                {pp.value}
                              </div>
                              <div className="text-[9px] text-white/45 uppercase tracking-[0.15em] font-semibold leading-tight">
                                {pp.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Service Cards Grid — redesigned */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-card-dark-border border border-card-dark-border rounded-lg overflow-hidden">
                    {services.map((s, i) => (
                      <ScrollReveal key={s.slug} delay={i * 0.04}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="group relative block h-full p-6 lg:p-7 bg-card-dark hover:bg-dark-secondary transition-colors duration-300 overflow-hidden"
                        >
                          {/* Animated top accent */}
                          <span
                            className={`absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-current to-transparent ${a.text} group-hover:w-full transition-all duration-700`}
                          />

                          {/* Header row */}
                          <div className="flex items-center justify-between mb-5">
                            <span
                              className={`text-[10px] font-mono tracking-[0.2em] uppercase ${a.text} opacity-70`}
                            >
                              /{String(i + 1).padStart(2, "0")}
                            </span>
                            <ArrowUpRight
                              size={16}
                              className="text-white/25 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                            />
                          </div>

                          <h3 className="font-heading text-lg lg:text-xl font-bold text-white mb-2 leading-tight tracking-tight group-hover:text-white transition-colors">
                            {s.title}
                          </h3>
                          <p className="text-sm text-text-light-muted leading-relaxed mb-5">
                            {s.tagline}
                          </p>

                          {/* Tech chips */}
                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {s.techStack.slice(0, 3).map((t) => (
                              <span
                                key={t}
                                className={`px-2 py-0.5 text-[10px] font-medium rounded-sm border border-card-dark-border bg-dark-primary/60 text-white/60`}
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          {/* Learn more link */}
                          <div className="pt-4 border-t border-white/5 flex items-center justify-between">
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
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* ───────────────────────── Engagement Model (Process + Problem Match combined) ───────────────────────── */}
        <section className="relative py-24 lg:py-28 bg-dark-primary overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              background:
                "radial-gradient(ellipse 1200px 600px at 50% 0%, rgba(12,108,54,0.18) 0%, transparent 60%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(var(--accent-light) 1px, transparent 1px), linear-gradient(90deg, var(--accent-light) 1px, transparent 1px)",
              backgroundSize: "90px 90px",
            }}
            aria-hidden="true"
          />

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] text-accent-light/60 uppercase tracking-[0.35em] font-semibold">
                / Engagement Model
              </span>
              <span className="h-px flex-1 max-w-[180px] bg-gradient-to-r from-accent-light/40 to-transparent" />
            </div>

            <ScrollReveal>
              <div className="max-w-4xl mb-14 lg:mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/25 bg-accent/10 mb-5">
                  <Sparkles size={12} className="text-accent-light" />
                  <span className="text-[11px] text-accent-light tracking-widest uppercase font-semibold">
                    How it works
                  </span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-black text-white leading-[1.02] tracking-tight mb-5">
                  Transparent process.{" "}
                  <span className="gradient-text">No black boxes.</span>
                </h2>
                <p className="text-base md:text-lg text-text-light-muted leading-relaxed max-w-2xl">
                  Six clear stages, reviewable work at every sprint, and a senior
                  engineer as your single point of contact — from first call to
                  post-launch growth.
                </p>
              </div>
            </ScrollReveal>

            {/* Timeline of 6 steps — horizontal with connector */}
            <div className="relative mb-16 lg:mb-20">
              {/* Connector */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute top-6 left-[4%] right-[4%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
              />

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-card-dark-border border border-card-dark-border rounded-lg overflow-hidden">
                {engagementSteps.map((s, i) => (
                  <ScrollReveal key={s.num} delay={i * 0.06}>
                    <div className="group relative bg-card-dark/70 hover:bg-dark-secondary p-5 h-full transition-colors duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className="relative w-10 h-10 rounded-full bg-dark-primary border border-accent/30 flex items-center justify-center font-mono text-[11px] font-bold text-accent-light">
                          {s.num}
                        </div>
                        {i < engagementSteps.length - 1 && (
                          <ArrowRight
                            size={12}
                            className="text-white/20 hidden lg:block"
                          />
                        )}
                      </div>
                      <h3 className="font-heading text-sm lg:text-base font-bold text-white mb-1.5 tracking-tight leading-tight">
                        {s.title}
                      </h3>
                      <p className="text-[12px] text-text-light-muted leading-snug">
                        {s.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Problem-match block */}
            <ScrollReveal>
              <div className="relative rounded-xl border border-card-dark-border bg-card-dark/60 backdrop-blur-sm overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(52,211,153,0.3) 0%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 lg:p-12">
                  <div className="lg:col-span-5">
                    <p className="text-[11px] text-accent-light uppercase tracking-[0.25em] font-semibold mb-4">
                      Not sure which service fits?
                    </p>
                    <h3 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-black text-white leading-[1.05] tracking-tight mb-5">
                      Describe the problem.{" "}
                      <span className="gradient-text">We&apos;ll pick the stack.</span>
                    </h3>
                    <p className="text-text-light-muted text-sm md:text-base leading-relaxed mb-7">
                      Senior engineers review every inbound. We diagnose before we
                      prescribe — and we&apos;ll tell you if you don&apos;t need us.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/contact"
                        className="group inline-flex items-center justify-center gap-2 font-semibold rounded-md bg-white text-dark-primary hover:bg-accent hover:text-white px-6 py-3.5 text-xs uppercase tracking-widest transition-all duration-300"
                      >
                        Get a proposal
                        <ArrowRight
                          size={13}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                      <Link
                        href="/work"
                        className="inline-flex items-center justify-center gap-2 font-medium rounded-md border border-white/20 text-white hover:border-white/50 hover:bg-white/5 px-6 py-3.5 text-xs uppercase tracking-widest transition-all duration-300"
                      >
                        See case studies
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <div className="grid grid-cols-1 gap-px bg-card-dark-border rounded-lg overflow-hidden border border-card-dark-border">
                      {problemMatches.map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <div
                            key={item.label}
                            className="group flex items-start gap-4 bg-card-dark hover:bg-dark-secondary p-5 transition-colors duration-300"
                          >
                            <div className="w-10 h-10 rounded-md bg-accent/10 border border-accent/20 text-accent-light flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                              <ItemIcon size={16} />
                            </div>
                            <div className="flex-grow">
                              <p className="text-sm font-semibold text-white mb-1">
                                &ldquo;{item.label}&rdquo;
                              </p>
                              <p className="text-xs text-text-light-muted flex items-center gap-1.5">
                                <CheckCircle2 size={11} className="text-accent-light flex-shrink-0" />
                                {item.route}
                              </p>
                            </div>
                            <ArrowRight
                              size={14}
                              className="text-white/20 group-hover:text-accent-light group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1"
                            />
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
