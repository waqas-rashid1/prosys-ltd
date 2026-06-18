"use client";

import Link from "next/link";
import {
  Landmark, HeartPulse, Cpu, Truck, Headphones, Scale, ArrowRight, ArrowUpRight,
} from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import SpotlightCard from "./ui/SpotlightCard";
import SectionHeading from "./ui/SectionHeading";
import SectionRail from "./ui/SectionRail";

type Industry = {
  slug: string;
  icon: React.ElementType;
  title: string;
  description: string;
  metric: { value: string; label: string };
  tags: string[];
  image: string;
};

const industries: Industry[] = [
  {
    slug: "fintech",
    icon: Landmark,
    title: "FinTech & Financial Services",
    description: "AI for fraud and risk signals, document and KYC processing, and customer support — deployed with the permissions, audit logs, and data boundaries financial operations require.",
    metric: { value: "Audit-ready", label: "Permissions, logs & data boundaries" },
    tags: ["Risk & fraud", "KYC docs", "Support", "Governance"],
    image: "/images/industry-fintech.jpg",
  },
  {
    slug: "healthtech",
    icon: HeartPulse,
    title: "HealthTech & Healthcare Operations",
    description: "AI for patient operations, documentation, and back-office workflows — designed with access controls, audit trails, and a data handling review before any sensitive data is touched.",
    metric: { value: "Access-controlled", label: "Reviewed data handling & audit trails" },
    tags: ["Patient ops", "Documentation", "Back-office", "Secure"],
    image: "/images/industry-health.jpg",
  },
  {
    slug: "saas-ai",
    icon: Cpu,
    title: "SaaS & AI Product Companies",
    description: "Production-grade AI features inside your product — agents, RAG, and automations with evaluation, guardrails, and monitoring so AI capabilities ship reliably and stay affordable.",
    metric: { value: "Production AI", label: "Evaluated, guardrailed & monitored" },
    tags: ["Agents", "RAG", "Guardrails", "Monitoring"],
    image: "/images/case-saas.jpg",
  },
  {
    slug: "logistics",
    icon: Truck,
    title: "Logistics, Supply Chain & Manufacturing",
    description: "AI for operations automation, document processing, and exception handling — integrated with the ERPs, databases, and legacy systems that run the supply chain.",
    metric: { value: "Integrated", label: "Connected to ERP & legacy systems" },
    tags: ["Automation", "Docs", "Exceptions", "Integration"],
    image: "/images/industry-ecom.jpg",
  },
  {
    slug: "bpo",
    icon: Headphones,
    title: "BPO & Customer Operations",
    description: "AI for ticket triage, response drafting, and quality monitoring — with human-in-the-loop approvals and escalation so customer operations move faster without losing control.",
    metric: { value: "Human-in-loop", label: "Triage, drafting & escalation" },
    tags: ["Triage", "Drafting", "QA", "Escalation"],
    image: "/images/service-bps.jpg",
  },
  {
    slug: "professional-services",
    icon: Scale,
    title: "Professional Services & Legal",
    description: "Secure knowledge and document-review systems with permission-aware retrieval and citations — so teams find and use trusted information without exposing privileged data.",
    metric: { value: "Permission-aware", label: "Cited, secure knowledge & review" },
    tags: ["Knowledge", "Doc review", "Citations", "Secure"],
    image: "/images/case-web.jpg",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-14 lg:py-20 bg-light-secondary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-60" style={{ background: "radial-gradient(ellipse 900px 500px at 50% 0%, rgba(6,182,212,0.04) 0%, transparent 65%)" }} />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title={
            <>
              Built for your sector. <br className="hidden md:inline" />
              <span className="gradient-text">Deployed with controls.</span>
            </>
          }
          description="FinTech, HealthTech, SaaS, logistics, BPO, and professional services. The workflows, data sensitivity, and risk profile differ in each — so we deploy AI with the permissions, integrations, and oversight that fit how your operations actually run."
          aside={
            <Link
              href="/industries"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-text-dark/10 text-text-dark text-sm font-medium transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent/5 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              Explore industries
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          }
        />

        {/* Premium industry grid — separated cards with image headers + hover lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <ScrollReveal key={industry.title} delay={i * 0.06}>
                <SpotlightCard
                  variant="light"
                  className="group h-full border border-card-light-border bg-white overflow-hidden shadow-[0_1px_3px_rgba(15,23,42,0.05)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_28px_55px_-22px_rgba(6,182,212,0.45)]"
                >
                  <Link href={`/industries/${industry.slug}`} className="flex flex-col h-full">
                    {/* Image header */}
                    <div className="relative h-44 overflow-hidden bg-dark-primary [transform:translateZ(0)]">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.12]"
                        style={{ backgroundImage: `url(${industry.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/70 to-dark-primary/25" />
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      {/* Floating icon */}
                      <div className="absolute top-5 left-5 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-accent group-hover:border-accent group-hover:scale-110 transition-all duration-500">
                        <Icon size={20} />
                      </div>

                      {/* External-link indicator */}
                      <div className="absolute top-5 right-5 w-9 h-9 bg-white/5 border border-white/10 flex items-center justify-center text-white/60 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <ArrowUpRight size={14} />
                      </div>

                      {/* Metric overlay at bottom */}
                      <div className="absolute bottom-4 left-5 right-5">
                        <p className="font-heading text-2xl font-black text-white leading-none mb-0.5 tracking-tight">
                          {industry.metric.value}
                        </p>
                        <p className="text-[10px] text-white/60 uppercase tracking-widest leading-snug">
                          {industry.metric.label}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 flex flex-col flex-1">
                      <h3 className="font-heading text-xl font-bold text-text-dark mb-3 group-hover:text-accent transition-colors duration-300">
                        {industry.title}
                      </h3>
                      <p className="text-text-dark-muted text-sm leading-relaxed mb-6">
                        {industry.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-auto mb-5">
                        {industry.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-[10px] font-medium text-text-dark-muted bg-light-primary border border-card-light-border group-hover:border-accent/20 group-hover:text-accent transition-colors duration-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-5 border-t border-card-light-border">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
                          Explore sector
                        </span>
                        <ArrowRight
                          size={14}
                          className="text-accent transition-all duration-300 group-hover:translate-x-1"
                        />
                      </div>
                    </div>

                    {/* Animated top border */}
                    <div className="absolute top-0 left-0 h-[3px] w-0 bg-accent group-hover:w-full transition-all duration-700 z-20" />
                  </Link>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Full-width CTA banner — replaces the awkward in-grid tile */}
        <ScrollReveal delay={0.15}>
          <div className="group relative mt-6 overflow-hidden border border-card-dark-border bg-gradient-to-br from-dark-primary to-dark-secondary">
            <div
              className="absolute inset-0 opacity-70 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 700px 320px at 85% 0%, rgba(6,182,212,0.18) 0%, transparent 65%)" }}
              aria-hidden="true"
            />
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 p-8 lg:p-10">
              <div className="max-w-2xl">
                <SectionRail label="Beyond the list" theme="dark" />
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                  Sector not listed?
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-5">
                  We deploy AI safely across operations beyond what is shown here. Share your workflow and the team will route the conversation to the right specialist.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["InsurTech", "Real estate", "EdTech", "Public sector"].map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 text-[11px] font-medium text-white/70 bg-white/5 border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md px-7 py-4 bg-accent text-white text-sm font-semibold whitespace-nowrap shadow-lg shadow-accent/20 hover:bg-accent-hover hover:scale-[1.03] transition-all duration-300 shrink-0 self-start lg:self-auto"
              >
                Open a conversation
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
