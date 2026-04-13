"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const serviceCategories = [
  {
    title: "Development",
    description: "End-to-end engineering for web, mobile, SaaS, and enterprise platforms.",
    items: [
      { label: "Web Development", slug: "web-development" },
      { label: "Software Development", slug: "software-development" },
      { label: "MVP Development", slug: "mvp-development" },
      { label: "SaaS Development", slug: "saas-development" },
    ],
    accentFrom: "from-accent",
    accentTo: "to-cyan-400",
    blobStyle: { width: 120, height: 120, borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" },
  },
  {
    title: "AI & Data",
    description: "Custom models, LLM integrations, and intelligent automation systems.",
    items: [
      { label: "AI Development", slug: "ai-development" },
      { label: "AI Automations", slug: "ai-automations" },
    ],
    accentFrom: "from-cyan-400",
    accentTo: "to-accent",
    blobStyle: { width: 100, height: 100, borderRadius: "50%" },
  },
  {
    title: "Growth & Marketing",
    description: "Data-driven SEO, AIEO, digital marketing, and brand design.",
    items: [
      { label: "SEO", slug: "seo" },
      { label: "AIEO", slug: "aieo" },
      { label: "Digital Marketing", slug: "digital-marketing" },
      { label: "Graphics & Branding", slug: "graphics-branding" },
    ],
    accentFrom: "from-emerald-400",
    accentTo: "to-accent",
    blobStyle: { width: 90, height: 130, borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
  },
  {
    title: "Consulting",
    description: "Technical strategy, architecture review, and digital transformation advisory.",
    items: [
      { label: "All Services", slug: "" },
    ],
    accentFrom: "from-teal-300",
    accentTo: "to-cyan-500",
    blobStyle: { width: 110, height: 80, borderRadius: "40% 60% 50% 50% / 60% 40% 60% 40%" },
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 lg:py-36 bg-light-primary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark tracking-wide leading-tight">
              Our Services
            </h2>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-text-dark/10 text-text-dark text-sm font-medium hover:border-accent hover:text-accent transition-all duration-300 self-start md:self-auto"
            >
              View all services <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.1}>
              <div className="group rounded-2xl border border-card-light-border bg-white p-7 hover:shadow-2xl hover:shadow-accent/[0.07] hover:border-accent/20 transition-all duration-500 h-full flex flex-col">
                {/* Abstract gradient visual */}
                <div className="relative h-44 mb-6 rounded-xl bg-light-primary overflow-hidden flex items-center justify-center">
                  <div
                    className={`absolute bg-gradient-to-br ${cat.accentFrom} ${cat.accentTo} opacity-30 blur-3xl group-hover:opacity-50 group-hover:scale-110 transition-all duration-700`}
                    style={cat.blobStyle}
                  />
                  <div
                    className={`absolute bg-gradient-to-tr ${cat.accentTo} ${cat.accentFrom} opacity-20 blur-2xl group-hover:scale-125 transition-transform duration-700`}
                    style={{
                      width: cat.blobStyle.width * 0.5,
                      height: cat.blobStyle.height * 0.5,
                      borderRadius: "50%",
                      transform: "translate(20px, -15px)",
                    }}
                  />
                </div>

                <h3 className="font-heading text-xl font-bold text-text-dark tracking-wide mb-2">
                  {cat.title}
                </h3>
                <p className="text-text-dark-muted text-sm leading-relaxed mb-5">
                  {cat.description}
                </p>

                {/* Sub-service pill tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.items.map((item) => (
                    <Link
                      key={item.slug || "all"}
                      href={item.slug ? `/services/${item.slug}` : "/services"}
                      className="px-3.5 py-1.5 rounded-lg border border-card-light-border text-text-dark-muted text-xs font-medium hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
