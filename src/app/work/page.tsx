import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PageHero from "@/components/ui/PageHero";
import DarkSectionFx from "@/components/ui/DarkSectionFx";
import { caseStudies } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Work",
  description: "PROSYS LTD engagements — AI systems deployed into operations: secure agents, workflow automation, enterprise knowledge systems, and production pilots.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Our Work — PROSYS LTD",
    description: "PROSYS LTD engagements — AI systems deployed into operations: secure agents, workflow automation, enterprise knowledge systems, and production pilots.",
    url: "/work",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work — PROSYS LTD",
    description: "PROSYS LTD engagements — AI systems deployed into operations: secure agents, workflow automation, enterprise knowledge systems, and production pilots.",
  },
};

// Additional (summary-only) engagements we can show alongside full case studies.
const additionalProjects = [
  {
    category: "AI Governance",
    title: "AI Control & Approval Layer",
    client: "FinTech, Saudi Arabia",
    year: "2025",
    description: "Access control, approval workflows, audit logging, and risk scoring wrapped around an internal AI assistant so it could be used safely on regulated data.",
    tags: ["RBAC", "Audit logs", "Approvals", "Risk scoring"],
    metric: "Audit-ready",
    image: "/images/service-digital.jpg",
  },
  {
    category: "Knowledge System",
    title: "Legal Document Review Assistant",
    client: "Legal tech, UK",
    year: "2025",
    description: "A permission-aware AI assistant that reviews contracts, extracts clauses, and flags risks with source citations — saving lawyers 15+ hours per week.",
    tags: ["Secure RAG", "LangChain", "Citations", "FastAPI"],
    metric: "15hrs/week saved",
    image: "/images/service-data.jpg",
  },
  {
    category: "Workflow Automation",
    title: "AI Support Triage Agent",
    client: "D2C brand, Germany",
    year: "2025",
    description: "A human-in-the-loop support agent that triages tickets and drafts responses across email and chat — cutting first-response time while every action stays reviewed.",
    tags: ["AI agents", "HITL", "Helpdesk API", "Slack"],
    metric: "Faster first response",
    image: "/images/service-cloud.jpg",
  },
  {
    category: "AI Integration",
    title: "HR Assistant in Existing Systems",
    client: "HR SaaS, Pakistan",
    year: "2024",
    description: "Connected an AI assistant to an existing HR platform so payroll, leave, and policy questions are answered from live systems with scoped, permission-aware authentication.",
    tags: ["Integration", "Scoped auth", "RAG", "AWS"],
    metric: "Live in 6 weeks",
    image: "/images/service-bps.jpg",
  },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          badge="Portfolio"
          title="Engagements,"
          highlight="documented."
          description="A selection of AI deployments delivered for funded startups, scale-ups, and mid-market teams — agents, automations, and knowledge systems measured by outcome, not output."
          bgImage="/images/case-saas.jpg"
          bgImageOpacity={0.22}
          trustSignals={["Production AI deployments", "Measurable outcomes", "NDA on request"]}
          primaryCta={{ label: "Browse case studies", href: "#case-studies" }}
          secondaryCta={{ label: "Start an engagement", href: "/contact" }}
          stats={[
            { value: "6", label: "Core AI services" },
            { value: "6", label: "Industries served" },
            { value: "HITL", label: "Oversight by design" },
            { value: "6–12 wk", label: "Avg. to production" },
          ]}
        />

        {/* Featured detailed case studies */}
        <section id="case-studies" className="py-14 lg:py-20 bg-light-primary scroll-mt-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex items-end justify-between mb-10">
                <div>
                  <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-3">In-depth Case Studies</p>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark">Engagement <span className="gradient-text">deep-dives.</span></h2>
                </div>
                <p className="text-sm text-text-dark-muted hidden md:block">{caseStudies.length} deep-dives</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((p, i) => (
                <ScrollReveal key={p.slug} delay={i * 0.06}>
                  <Link href={`/work/${p.slug}`} className="group block h-full">
                    <div className="bg-white border border-card-light-border overflow-hidden hover:shadow-xl hover:shadow-black/[0.04] hover:border-accent/30 transition-all duration-500 h-full flex flex-col">
                      <div className="relative h-52 overflow-hidden">
                        <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="50vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-2.5 py-1 text-[10px] font-semibold bg-accent text-white uppercase tracking-wider">{p.category}</span>
                        </div>
                        <ArrowUpRight size={16} className="absolute top-4 right-4 text-white/50 group-hover:text-white transition-colors" />
                      </div>
                      <div className="p-7 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 mb-3 text-[11px] text-text-dark-muted">
                          <span className="flex items-center gap-1"><MapPin size={10} />{p.clientRegion}</span>
                          <span className="flex items-center gap-1"><Calendar size={10} />{p.year}</span>
                          <span>{p.client}</span>
                        </div>
                        <h3 className="font-heading text-xl font-bold text-text-dark mb-3 group-hover:text-accent transition-colors">{p.title}</h3>
                        <p className="text-text-dark-muted text-sm leading-relaxed mb-5 flex-grow">{p.description}</p>
                        <div className="flex items-center justify-between pt-4 border-t border-card-light-border">
                          <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            <span className="text-sm font-semibold text-accent">{p.metric}</span>
                          </div>
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:gap-2.5 transition-all">
                            View Case Study <ArrowRight size={12} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Additional engagements (summary cards) */}
        <section className="py-14 lg:py-20 bg-white border-t border-card-light-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex items-end justify-between mb-10">
                <div>
                  <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-3">More Engagements</p>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark">Selected highlights</h2>
                </div>
                <Link href="/contact" className="text-sm font-semibold text-accent hover:gap-2.5 inline-flex items-center gap-2 transition-all">
                  Request full case pack <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-card-light-border border border-card-light-border">
              {additionalProjects.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 0.05}>
                  <div className="bg-white p-6 h-full">
                    <p className="text-[10px] uppercase tracking-widest text-accent font-semibold mb-2">{p.category}</p>
                    <h3 className="font-heading text-base font-bold text-text-dark mb-3 leading-snug">{p.title}</h3>
                    <p className="text-text-dark-muted text-xs leading-relaxed mb-4">{p.description}</p>
                    <div className="pt-4 border-t border-card-light-border text-[11px] text-text-dark-muted flex items-center justify-between">
                      <span>{p.client} · {p.year}</span>
                      <span className="font-semibold text-accent">{p.metric}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <p className="text-center text-sm text-text-dark-muted mt-10">
              50+ projects delivered · Some under NDA. Request a full case pack via <Link href="/contact" className="text-accent font-semibold hover:underline">our contact form</Link>.
            </p>
          </div>
        </section>

        {/* CTA (fixed self-reference) */}
        <section className="relative py-14 lg:py-20 bg-dark-primary overflow-hidden">
          <DarkSectionFx variant="default" />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-4">Considering an engagement?</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-6 leading-tight">
                Open a conversation with the <span className="gradient-text">engagement lead.</span>
              </h2>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 font-medium rounded-md gradient-bg text-white hover:shadow-lg hover:shadow-accent/20 px-8 py-3.5 text-sm uppercase tracking-widest transition-all duration-300">
                  Discuss a Project <ArrowRight size={14} />
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center gap-2 font-medium rounded-md border border-white/20 text-white/70 hover:text-white hover:border-white/40 px-8 py-3.5 text-sm uppercase tracking-widest transition-all duration-300">
                  Browse Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
