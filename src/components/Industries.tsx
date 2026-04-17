"use client";

import Link from "next/link";
import {
  Landmark, HeartPulse, ShoppingCart, GraduationCap, Building2, Briefcase, ArrowRight, ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";

type Industry = {
  icon: React.ElementType;
  title: string;
  description: string;
  metric: { value: string; label: string };
  tags: string[];
  image: string;
};

const industries: Industry[] = [
  {
    icon: Landmark,
    title: "FinTech",
    description: "Secure, compliant platforms for payments, lending, trading, and financial analytics with bank-grade security.",
    metric: { value: "$2B+", label: "Processed through platforms we built" },
    tags: ["Payments", "KYC/AML", "Trading", "Lending"],
    image: "/images/case-saas.jpg",
  },
  {
    icon: HeartPulse,
    title: "HealthTech",
    description: "HIPAA-compliant applications for telehealth, patient management, clinical workflows, and health data analytics.",
    metric: { value: "500K+", label: "Patients served through our systems" },
    tags: ["Telehealth", "EHR", "HIPAA", "Clinical"],
    image: "/images/case-health.jpg",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & D2C",
    description: "Headless commerce, inventory systems, AI-powered recommendations, and omnichannel experiences that drive revenue.",
    metric: { value: "3×", label: "Avg. conversion uplift" },
    tags: ["Headless", "Shopify", "CRO", "Omnichannel"],
    image: "/images/case-web.jpg",
  },
  {
    icon: GraduationCap,
    title: "EdTech",
    description: "Learning management systems, AI tutors, assessment platforms, and interactive content delivery for modern education.",
    metric: { value: "100K+", label: "Students using our platforms" },
    tags: ["LMS", "AI Tutors", "Assessments", "Gamification"],
    image: "/images/case-automation.jpg",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Property listing platforms, CRM systems, virtual tours, and AI-powered valuation tools for the real estate industry.",
    metric: { value: "$500M+", label: "Property value transacted" },
    tags: ["Listings", "CRM", "Virtual Tours", "Valuation"],
    image: "/images/services-hero.jpg",
  },
  {
    icon: Briefcase,
    title: "Startups & SaaS",
    description: "From zero-to-one MVPs to scale-ready SaaS platforms — we are the technical co-founder startups wish they had.",
    metric: { value: "15+", label: "Funded startups launched" },
    tags: ["MVP", "Multi-tenant", "Billing", "Growth"],
    image: "/images/service-cloud.jpg",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-32 lg:py-44 bg-light-secondary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-60" style={{ background: "radial-gradient(ellipse 900px 500px at 50% 0%, rgba(12,108,54,0.04) 0%, transparent 65%)" }} />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <p className="text-[11px] text-accent uppercase tracking-[0.25em] font-semibold mb-4">
                Industries
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-text-dark leading-[1.05] tracking-tight mb-5">
                Built for industries <br className="hidden md:inline" /><span className="gradient-text">that demand precision.</span>
              </h2>
              <p className="text-base md:text-lg text-text-dark-muted leading-relaxed">
                Deep domain expertise across regulated and high-stakes sectors — where compliance, performance, and reliability aren&apos;t optional.
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
                <Link href="/industries" className="group block bg-white h-full relative overflow-hidden">
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
                  <div className="p-7 flex flex-col h-[260px]">
                    <h3 className="font-heading text-xl font-bold text-text-dark mb-3 group-hover:text-accent transition-colors duration-300">
                      {industry.title}
                    </h3>
                    <p className="text-text-dark-muted text-sm leading-relaxed mb-5">
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

                    <div className="flex items-center justify-between pt-4 border-t border-card-light-border">
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
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom callout */}
        <ScrollReveal delay={0.3}>
          <div className="mt-14 flex flex-col md:flex-row items-center justify-between gap-5 p-7 md:p-9 bg-dark-primary rounded-md border border-card-dark-border relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-50" style={{ background: "radial-gradient(circle at 100% 50%, rgba(12,108,54,0.3) 0%, transparent 60%)" }} />
            <div className="relative">
              <p className="text-[11px] text-accent-light uppercase tracking-[0.25em] font-semibold mb-2">Don&apos;t see your industry?</p>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">
                We adapt fast — and ship faster.
              </h3>
            </div>
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 bg-white text-dark-primary hover:bg-accent hover:text-white font-semibold px-6 py-3.5 rounded-md text-xs uppercase tracking-widest transition-all duration-300"
            >
              Discuss Your Sector
              <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
