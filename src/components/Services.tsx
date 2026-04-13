"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const serviceCategories = [
  {
    title: "Development",
    items: [
      { label: "Web Development", slug: "web-development" },
      { label: "Software Development", slug: "software-development" },
      { label: "MVP Development", slug: "mvp-development" },
      { label: "SaaS Development", slug: "saas-development" },
    ],
  },
  {
    title: "AI & Data",
    items: [
      { label: "AI Development", slug: "ai-development" },
      { label: "AI Automations", slug: "ai-automations" },
    ],
  },
  {
    title: "Growth & Marketing",
    items: [
      { label: "SEO", slug: "seo" },
      { label: "AIEO", slug: "aieo" },
      { label: "Digital Marketing", slug: "digital-marketing" },
      { label: "Graphics & Branding", slug: "graphics-branding" },
    ],
  },
  {
    title: "Consulting",
    items: [
      { label: "Technical Strategy", slug: "" },
      { label: "Architecture Review", slug: "" },
      { label: "Digital Transformation", slug: "" },
    ],
  },
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-28 lg:py-36 bg-light-primary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark tracking-wide leading-tight">
              Our services
            </h2>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-text-dark/10 text-text-dark text-sm font-medium hover:border-accent hover:text-accent transition-all duration-300 self-start md:self-auto"
            >
              View all services
            </Link>
          </div>
        </ScrollReveal>

        {/* Desktop: 4-column card grid (tkxel style) */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-5">
          {serviceCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.1}>
              <div className="group rounded-2xl border border-card-light-border bg-white overflow-hidden hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-500 h-full flex flex-col">
                {/* Abstract shape area */}
                <div className="relative h-52 bg-light-primary flex items-center justify-center overflow-hidden">
                  {i === 0 && (
                    <div className="w-24 h-24 bg-accent rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-[2px] group-hover:scale-110 group-hover:blur-[4px] transition-all duration-700" />
                  )}
                  {i === 1 && (
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full border-[12px] border-accent/80 blur-[1px] group-hover:scale-110 group-hover:blur-[3px] transition-all duration-700" />
                    </div>
                  )}
                  {i === 2 && (
                    <div className="grid grid-cols-2 gap-2 group-hover:scale-110 transition-transform duration-700">
                      <div className="w-12 h-12 rounded-full bg-accent blur-[2px] group-hover:blur-[4px] transition-all duration-700" />
                      <div className="w-12 h-12 rounded-full bg-accent blur-[2px] group-hover:blur-[4px] transition-all duration-700" />
                      <div className="w-12 h-12 rounded-full bg-accent blur-[2px] group-hover:blur-[4px] transition-all duration-700" />
                      <div className="w-12 h-12 rounded-full bg-accent blur-[2px] group-hover:blur-[4px] transition-all duration-700" />
                    </div>
                  )}
                  {i === 3 && (
                    <div className="relative w-24 h-24 group-hover:scale-110 transition-transform duration-700">
                      <div className="absolute inset-0 bg-accent rounded-full blur-[2px] group-hover:blur-[4px] transition-all duration-700" style={{ clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 50%, 0% 75%, 0% 25%)" }} />
                    </div>
                  )}
                </div>

                {/* Title */}
                <div className="p-6 flex-grow">
                  <h3 className="font-heading text-xl font-bold text-text-dark tracking-wide mb-4">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.slug ? `/services/${item.slug}` : "/services"}
                        className="px-3.5 py-1.5 rounded-lg border border-card-light-border text-text-dark-muted text-xs font-medium hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: accordion cards (tkxel mobile style) */}
        <div className="lg:hidden space-y-4">
          {serviceCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.08}>
              <div className="rounded-2xl border border-card-light-border bg-white overflow-hidden">
                <button
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 cursor-pointer"
                >
                  <h3 className="font-heading text-lg font-bold text-text-dark tracking-wide">
                    {cat.title}
                  </h3>
                  {expandedIndex === i ? (
                    <Minus size={18} className="text-accent" />
                  ) : (
                    <Plus size={18} className="text-text-dark-muted" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {expandedIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 flex flex-wrap gap-2">
                        {cat.items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.slug ? `/services/${item.slug}` : "/services"}
                            className="px-3.5 py-1.5 rounded-lg border border-card-light-border text-text-dark-muted text-xs font-medium hover:border-accent hover:text-accent transition-all duration-300"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
