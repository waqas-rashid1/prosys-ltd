"use client";

import Link from "next/link";
import {
  Landmark, HeartPulse, ShoppingCart, GraduationCap, Briefcase, ArrowRight, ArrowUpRight,
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
    title: "FinTech",
    description: "Payments, lending, and trading platforms engineered for bank-grade scrutiny. KYC workflows, immutable audit trails, and the regulatory infrastructure that survives a Big Four review.",
    metric: { value: "PCI-DSS Scope", label: "Tokenization, segmentation, audit-ready logging" },
    tags: ["Payments", "KYC/AML", "Trading", "Lending"],
    image: "/images/industry-fintech.jpg",
  },
  {
    slug: "healthtech",
    icon: HeartPulse,
    title: "HealthTech",
    description: "Telehealth video, patient portals, and clinical tooling. HIPAA-eligible architecture with BAA-ready cloud, encrypted PHI in transit and at rest, and full audit trails — engineered to pass enterprise security review.",
    metric: { value: "HIPAA Architecture", label: "BAA-ready infrastructure with PHI controls" },
    tags: ["Telehealth", "EHR", "HIPAA", "Clinical"],
    image: "/images/industry-health.jpg",
  },
  {
    slug: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce & D2C",
    description: "Headless storefronts, inventory synchronization, and recommendation engines. We migrate brands off slow Shopify themes onto performance-optimized platforms — measured in conversion lift and Core Web Vitals.",
    metric: { value: "Conversion-first", label: "Every build is tuned for LTV & CVR" },
    tags: ["Headless", "Shopify", "CRO", "Omnichannel"],
    image: "/images/industry-ecom.jpg",
  },
  {
    slug: "edtech",
    icon: GraduationCap,
    title: "EdTech",
    description: "LMS platforms, AI tutors, and assessment engines. Engineered for the operational edge cases real institutions face: high-concurrency assessment windows, accessibility requirements, and SIS integrations.",
    metric: { value: "Scalable LMS", label: "Multi-tenant, role-based, gamified" },
    tags: ["LMS", "AI Tutors", "Assessments", "Gamification"],
    image: "/images/case-automation.jpg",
  },
  {
    slug: "saas-startups",
    icon: Briefcase,
    title: "Startups & SaaS",
    description: "Multi-tenant SaaS platforms engineered for scale. Row-level isolation, SSO, billing infrastructure, and the audit trails enterprise procurement teams actually ask about.",
    metric: { value: "Multi-Tenant", label: "Row-level isolation, SSO, audit trails" },
    tags: ["Multi-tenant", "Billing", "SSO", "Growth"],
    image: "/images/case-saas.jpg",
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
                Regulated workloads. <br className="hidden md:inline" /><span className="gradient-text">Production-grade outcomes.</span>
              </h2>
              <p className="text-base md:text-lg text-text-dark-muted leading-relaxed">
                FinTech, HealthTech, EdTech, E-Commerce, SaaS. The compliance posture, integration surface, and risk profile are different in each. We translate regulatory requirements into architecture — controls in code, not in slide decks.
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
                    The portfolio covers regulated workloads beyond what is shown here. Share the engagement profile and the team will route the conversation to the right practice lead.
                  </p>

                  {/* Sectors-not-listed strip — passive label, not clickable
                      tag pills, so it doesn't look like there are dedicated
                      pages behind these names. */}
                  <div className="mt-auto mb-5">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-text-dark-muted/70 font-semibold">
                      Also: FinOps · InsurTech · Logistics · Public sector
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
