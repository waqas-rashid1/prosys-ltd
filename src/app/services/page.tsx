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
  Target,
  Shield,
  Clock,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHero from "@/components/ui/PageHero";
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "All Services — Product Engineering, AI, Cloud & Growth",
  description:
    "Explore PROSYS LTD's four service pillars: Product Engineering, AI & Automation, Cloud & Platform, and Growth & Marketing. 29 deep capabilities, one delivery standard.",
};

const pillars = [
  {
    number: "01",
    title: "Product Engineering",
    tagline: "Ship production-ready software",
    description:
      "Web, SaaS, and custom platforms engineered to scale — built by senior teams with delivery-first discipline.",
    icon: Code2,
    image: "/images/service-digital.jpg",
    slugs: [
      "web-development",
      "software-development",
      "saas-development",
      "mvp-development",
      "business-applications",
      "digital-commerce",
      "digital-consulting",
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
  },
  {
    number: "03",
    title: "Cloud & Platform",
    tagline: "Infrastructure that scales",
    description:
      "Cloud-native architecture, migrations, and managed operations on AWS, GCP, and Azure with SRE discipline.",
    icon: Cloud,
    image: "/images/service-cloud.jpg",
    slugs: [
      "cloud-operations",
      "cloud-app-development",
      "managed-services",
      "security",
      "digital-infrastructure",
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
  },
];

const deliveryStandards = [
  { icon: Target, label: "Outcome-focused", desc: "Every deliverable tied to business goals." },
  { icon: Shield, label: "ISO / SOC 2 aligned", desc: "Regulated-industry-ready from day one." },
  { icon: Clock, label: "Sprint discipline", desc: "Weekly demos. Transparent pace." },
  { icon: Zap, label: "Production-ready", desc: "Tested, documented, deployed." },
];

const proofPoints = [
  { value: "29", label: "Capabilities" },
  { value: "4", label: "Pillars" },
  { value: "50+", label: "Projects" },
  { value: "12+", label: "Countries" },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Cinematic Hero */}
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

        {/* ───────────────────────── Delivery Standards Strip ───────────────────────── */}
        <section className="bg-white border-b border-card-light-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-card-light-border">
              {deliveryStandards.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 py-6 px-6"
                  >
                    <div className="w-9 h-9 rounded-md bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-bold text-text-dark mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-xs text-text-dark-muted leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───────────────────────── Pillars Quick Index ───────────────────────── */}
        <section className="py-16 lg:py-20 bg-light-primary border-b border-card-light-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-[11px] text-accent uppercase tracking-[0.25em] font-semibold mb-6">
                Jump to
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-card-light-border border border-card-light-border">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <ScrollReveal key={p.number}>
                    <a
                      href={`#pillar-${p.number}`}
                      className="group block bg-white hover:bg-light-primary transition-colors p-6 h-full"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-[11px] font-mono text-text-dark-muted/50">
                          /{p.number}
                        </span>
                        <Icon
                          size={18}
                          className="text-accent mt-px group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <h3 className="font-heading text-base font-bold text-text-dark leading-tight mb-1 group-hover:text-accent transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs text-text-dark-muted">
                        {p.slugs.length} capabilities
                      </p>
                    </a>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───────────────────────── Pillar Sections ───────────────────────── */}
        <div id="pillars">
          {pillars.map((pillar, gi) => {
            const Icon = pillar.icon;
            const isDark = gi % 2 === 1;
            const services = pillar.slugs
              .map((slug) => servicesData.find((s) => s.slug === slug))
              .filter((s): s is (typeof servicesData)[number] => Boolean(s));

            return (
              <section
                key={pillar.number}
                id={`pillar-${pillar.number}`}
                className={`relative scroll-mt-24 py-14 lg:py-20 overflow-hidden ${
                  isDark
                    ? "bg-dark-primary grain-overlay"
                    : "bg-light-primary"
                }`}
              >
                {isDark && (
                  <div
                    className="absolute inset-0 pointer-events-none opacity-60"
                    style={{
                      background:
                        "radial-gradient(ellipse 800px 400px at 70% 20%, rgba(12,108,54,0.12) 0%, transparent 60%)",
                    }}
                  />
                )}

                <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
                  {/* Pillar Header */}
                  <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 items-end">
                      <div className="lg:col-span-8">
                        <div className="flex items-center gap-4 mb-5">
                          <span
                            className={`font-mono text-xs tracking-widest ${
                              isDark
                                ? "text-accent-light/60"
                                : "text-accent/60"
                            }`}
                          >
                            PILLAR / {pillar.number}
                          </span>
                          <span
                            className={`h-px flex-grow ${
                              isDark ? "bg-white/10" : "bg-text-dark/10"
                            }`}
                          />
                        </div>

                        <div className="flex items-start gap-5 md:gap-7 mb-5">
                          <div
                            className={`w-14 h-14 lg:w-16 lg:h-16 rounded-md flex items-center justify-center flex-shrink-0 ${
                              isDark
                                ? "bg-accent/15 border border-accent/25 text-accent-light"
                                : "bg-accent/10 text-accent"
                            }`}
                          >
                            <Icon size={26} />
                          </div>
                          <div>
                            <p
                              className={`text-[11px] uppercase tracking-[0.25em] font-semibold mb-2 ${
                                isDark ? "text-accent-light" : "text-accent"
                              }`}
                            >
                              {pillar.tagline}
                            </p>
                            <h2
                              className={`font-heading text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight ${
                                isDark ? "text-white" : "text-text-dark"
                              }`}
                            >
                              {pillar.title}
                            </h2>
                          </div>
                        </div>

                        <p
                          className={`text-base md:text-lg leading-relaxed max-w-2xl ${
                            isDark
                              ? "text-text-light-muted"
                              : "text-text-dark-muted"
                          }`}
                        >
                          {pillar.description}
                        </p>
                      </div>

                      {/* Cinematic image panel */}
                      <div
                        className={`lg:col-span-4 relative h-48 lg:h-56 overflow-hidden rounded-md border ${
                          isDark
                            ? "border-card-dark-border"
                            : "border-card-light-border"
                        }`}
                      >
                        <Image
                          src={pillar.image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 33vw, 100vw"
                        />
                        <div
                          className={`absolute inset-0 ${
                            isDark
                              ? "bg-gradient-to-t from-dark-primary via-dark-primary/40 to-dark-primary/10"
                              : "bg-gradient-to-t from-white/90 via-white/30 to-transparent"
                          }`}
                        />
                        <div className="absolute bottom-4 left-5 right-5">
                          <p
                            className={`font-heading text-2xl font-black leading-tight tracking-tight ${
                              isDark ? "text-white" : "text-text-dark"
                            }`}
                          >
                            {services.length} capabilities
                          </p>
                          <p
                            className={`text-[11px] uppercase tracking-widest ${
                              isDark
                                ? "text-white/50"
                                : "text-text-dark-muted"
                            }`}
                          >
                            Under this pillar
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Service Cards Grid */}
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border ${
                      isDark
                        ? "bg-card-dark-border border-card-dark-border"
                        : "bg-card-light-border border-card-light-border"
                    }`}
                  >
                    {services.map((s, i) => (
                      <ScrollReveal key={s.slug} delay={i * 0.04}>
                        <Link
                          href={`/services/${s.slug}`}
                          className={`group relative block h-full p-7 transition-all duration-300 ${
                            isDark
                              ? "bg-card-dark hover:bg-dark-secondary"
                              : "bg-white hover:bg-light-primary"
                          }`}
                        >
                          {/* Animated top border */}
                          <span className="absolute top-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-500" />

                          <div className="flex items-start justify-between mb-5">
                            <span
                              className={`text-[11px] font-mono tracking-widest ${
                                isDark
                                  ? "text-accent-light/60"
                                  : "text-text-dark-muted/50"
                              }`}
                            >
                              /{String(i + 1).padStart(2, "0")}
                            </span>
                            <ArrowRight
                              size={14}
                              className={`opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${
                                isDark ? "text-accent-light" : "text-accent"
                              }`}
                            />
                          </div>

                          <h3
                            className={`font-heading text-lg font-bold mb-3 leading-tight transition-colors ${
                              isDark
                                ? "text-white group-hover:text-accent-light"
                                : "text-text-dark group-hover:text-accent"
                            }`}
                          >
                            {s.title}
                          </h3>
                          <p
                            className={`text-sm leading-relaxed mb-5 ${
                              isDark
                                ? "text-text-light-muted"
                                : "text-text-dark-muted"
                            }`}
                          >
                            {s.tagline}
                          </p>

                          {/* Top 3 benefits as mini-chips */}
                          <div className="flex flex-wrap gap-1.5 mt-auto">
                            {s.techStack.slice(0, 3).map((t) => (
                              <span
                                key={t}
                                className={`px-2 py-0.5 text-[10px] font-medium rounded-sm border ${
                                  isDark
                                    ? "border-card-dark-border text-text-light-muted/80 bg-dark-primary/50"
                                    : "border-card-light-border text-text-dark-muted bg-light-primary"
                                }`}
                              >
                                {t}
                              </span>
                            ))}
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

        {/* ───────────────────────── Process Strip ───────────────────────── */}
        <section className="py-14 lg:py-20 bg-dark-secondary border-y border-card-dark-border grain-overlay relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              background:
                "radial-gradient(ellipse 900px 400px at 50% 100%, rgba(12,108,54,0.1) 0%, transparent 70%)",
            }}
          />

          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <ScrollReveal className="lg:col-span-5">
                <p className="text-[11px] text-accent-light uppercase tracking-[0.25em] font-semibold mb-5">
                  How it works
                </p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.05] tracking-tight mb-6">
                  A transparent process. <br className="hidden lg:inline" />
                  <span className="gradient-text">No black boxes.</span>
                </h2>
                <p className="text-text-light-muted text-base md:text-lg leading-relaxed">
                  From the first call to post-launch support, you know exactly what&apos;s happening, when, and why. Every sprint ships reviewable work.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1} className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-card-dark-border border border-card-dark-border">
                  {[
                    "Free consultation & requirements analysis",
                    "Detailed proposal with timeline & budget",
                    "UI/UX design & architecture review",
                    "Agile development with weekly demos",
                    "QA testing & performance optimization",
                    "Launch, training & ongoing support",
                  ].map((step, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-card-dark p-5 group hover:bg-dark-primary transition-colors"
                    >
                      <span className="w-6 h-6 rounded-sm bg-accent/15 text-accent-light flex items-center justify-center text-xs font-bold flex-shrink-0 font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-white/80 text-sm leading-relaxed">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ───────────────────────── Not Sure Which? (Consultative CTA) ───────────────────────── */}
        <section className="py-14 lg:py-20 bg-light-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-6">
                  <p className="text-[11px] text-accent uppercase tracking-[0.25em] font-semibold mb-5">
                    Not sure which service fits?
                  </p>
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-text-dark leading-[1.05] tracking-tight mb-6">
                    Describe the problem. <br />
                    <span className="gradient-text">We&apos;ll pick the right stack.</span>
                  </h2>
                  <p className="text-text-dark-muted text-base md:text-lg leading-relaxed mb-8">
                    Senior engineers review every inbound. Instead of pitching a service, we diagnose the problem and recommend the capability set that actually solves it — backed by a scoped proposal.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-dark-primary text-white hover:bg-accent px-8 py-4 rounded-md text-sm uppercase tracking-widest font-semibold transition-all duration-300"
                    >
                      Get a Proposal
                      <ArrowRight size={14} />
                    </Link>
                    <Link
                      href="/work"
                      className="inline-flex items-center justify-center gap-2 border border-text-dark/15 text-text-dark hover:border-accent hover:text-accent px-8 py-4 rounded-md text-sm uppercase tracking-widest font-medium transition-all duration-300"
                    >
                      See Case Studies
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="grid grid-cols-1 gap-px bg-card-light-border border border-card-light-border rounded-md overflow-hidden">
                    {[
                      { label: "I need to ship a product fast", route: "MVP Development or Product Engineering", icon: Zap },
                      { label: "I want to add AI to our product", route: "AI Development or Generative AI", icon: Sparkles },
                      { label: "My infrastructure doesn't scale", route: "Cloud Operations or Managed Services", icon: Cpu },
                      { label: "I need qualified pipeline", route: "SEO + AIEO + Digital Marketing", icon: Megaphone },
                    ].map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="flex items-start gap-4 bg-white p-5 group hover:bg-light-primary transition-colors"
                        >
                          <div className="w-10 h-10 rounded-md bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                            <ItemIcon size={16} />
                          </div>
                          <div className="flex-grow">
                            <p className="text-sm font-semibold text-text-dark mb-0.5">
                              &ldquo;{item.label}&rdquo;
                            </p>
                            <p className="text-xs text-text-dark-muted flex items-center gap-1.5">
                              <CheckCircle2 size={11} className="text-accent" />
                              {item.route}
                            </p>
                          </div>
                        </div>
                      );
                    })}
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
