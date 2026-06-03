"use client";

import Link from "next/link";
import {
  Landmark, HeartPulse, Cpu, Truck, Headphones, Scale, ArrowRight, ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";
import SpotlightCard from "./ui/SpotlightCard";

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
    image: "/images/service-data.jpg",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-14 lg:py-20 bg-light-secondary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-60" style={{ background: "radial-gradient(ellipse 900px 500px at 50% 0%, rgba(6,182,212,0.04) 0%, transparent 65%)" }} />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <p className="text-[11px] text-accent uppercase tracking-[0.25em] font-semibold mb-4">
                Industries
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-text-dark leading-[1.05] tracking-tight mb-5">
                Built for your sector. <br className="hidden md:inline" /><span className="gradient-text">Deployed with controls.</span>
              </h2>
              <p className="text-base md:text-lg text-text-dark-muted leading-relaxed">
                FinTech, HealthTech, SaaS, logistics, BPO, and professional services. The workflows, data sensitivity, and risk profile differ in each — so we deploy AI with the permissions, integrations, and oversight that fit how your operations actually run.
              </p>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-text-dark/10 text-text-dark text-sm font-medium hover:border-accent hover:text-accent transition-all duration-300 self-start md:self-auto shrink-0"
            >
              Explore industries
              <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        {/* Premium industry grid — large image headers + rich content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-card-light-border border border-card-light-border rounded-md overflow-hidden">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <ScrollReveal key={industry.title} delay={i * 0.06}>
                <SpotlightCard variant="light" className="h-full">
                <Link href={`/industries/${industry.slug}`} className="group flex flex-col bg-white h-full relative overflow-hidden">
                  {/* Image header */}
                  <div className="relative h-44 overflow-hidden bg-dark-primary">
                    <motion.div
                      className="absolute inset-0"
                      initial={false}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${industry.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/70 to-dark-primary/30" />
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </motion.div>

                    {/* Floating icon */}
                    <div className="absolute top-5 left-5 w-12 h-12 rounded-md bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-accent group-hover:border-accent group-hover:scale-110 transition-all duration-500">
                      <Icon size={20} />
                    </div>

                    {/* External-link indicator */}
                    <div className="absolute top-5 right-5 w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/60 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
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
                  <div className="p-7 flex flex-col flex-1 min-h-[280px]">
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
                          className="px-2.5 py-1 text-[10px] font-medium text-text-dark-muted bg-light-primary border border-card-light-border rounded-sm group-hover:border-accent/20 group-hover:text-accent transition-colors duration-300"
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
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-700" />
                </Link>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}

          {/* In-grid CTA tile — visually matches the industry cards */}
          <ScrollReveal delay={industries.length * 0.06}>
            <SpotlightCard variant="light" className="h-full">
              <Link
                href="/contact"
                className="group relative flex flex-col h-full bg-white overflow-hidden"
              >
                {/* Header — same h-44 dark image-style block as the other cards */}
                <div className="relative h-44 overflow-hidden bg-dark-primary">
                  <div
                    className="absolute inset-0 opacity-50"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 100%, rgba(6,182,212,0.55) 0%, transparent 70%)",
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage:
                        "linear-gradient(var(--accent-light) 1px, transparent 1px), linear-gradient(90deg, var(--accent-light) 1px, transparent 1px)",
                      backgroundSize: "44px 44px",
                    }}
                    aria-hidden="true"
                  />

                  {/* Floating icon — identical chip to the industry cards */}
                  <div className="absolute top-5 left-5 w-12 h-12 rounded-md bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-accent group-hover:border-accent group-hover:scale-110 transition-all duration-500">
                    <ArrowUpRight size={20} />
                  </div>

                  {/* External-link indicator — matches the other cards */}
                  <div className="absolute top-5 right-5 w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/60 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight size={14} />
                  </div>

                  {/* Metric overlay — same position as the other cards */}
                  <div className="absolute bottom-4 left-5 right-5">
                    <p className="font-heading text-2xl font-black text-white leading-none mb-0.5 tracking-tight">
                      Your sector
                    </p>
                    <p className="text-[10px] text-white/60 uppercase tracking-widest leading-snug">
                      Engagements span beyond the list
                    </p>
                  </div>
                </div>

                {/* Body — matches industry card padding, height, and color tokens */}
                <div className="p-7 flex flex-col flex-1 min-h-[280px]">
                  <h3 className="font-heading text-xl font-bold text-text-dark mb-3 group-hover:text-accent transition-colors duration-300">
                    Sector not listed?
                  </h3>
                  <p className="text-text-dark-muted text-sm leading-relaxed mb-6">
                    We deploy AI safely across operations beyond what is shown here. Share your workflow and the team will route the conversation to the right specialist.
                  </p>

                  {/* Sectors-not-listed strip — passive label, not clickable
                      tag pills, so it doesn't look like there are dedicated
                      pages behind these names. */}
                  <div className="mt-auto mb-5">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-text-dark-muted/70 font-semibold">
                      Also: InsurTech · Real estate · EdTech · Public sector
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-card-light-border">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider">
                      Open a conversation
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-accent transition-all duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>

                {/* Animated top border — same hover treatment */}
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-700" />
              </Link>
            </SpotlightCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
