"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const serviceCategories = [
  {
    title: "Digital",
    items: [
      { label: "Digital Consulting & Strategy", slug: "digital-consulting" },
      { label: "Digital Commerce", slug: "digital-commerce" },
      { label: "Business Applications", slug: "business-applications" },
      { label: "Web Development", slug: "web-development" },
      { label: "Software Development", slug: "software-development" },
    ],
  },
  {
    title: "Data & Analytics",
    items: [
      { label: "Data Modernization", slug: "data-modernization" },
      { label: "Advanced Analytics", slug: "advanced-analytics" },
      { label: "Connected Intelligence", slug: "connected-intelligence" },
      { label: "Generative AI", slug: "generative-ai" },
      { label: "AI Development", slug: "ai-development" },
    ],
  },
  {
    title: "Cloud",
    items: [
      { label: "Cloud Operations & Migration", slug: "cloud-operations" },
      { label: "Cloud App Development", slug: "cloud-app-development" },
      { label: "Managed Services", slug: "managed-services" },
      { label: "SaaS Development", slug: "saas-development" },
    ],
  },
  {
    title: "Business Process Services",
    items: [
      { label: "Digital Marketing", slug: "digital-marketing" },
      { label: "Staff Augmentation", slug: "staff-augmentation" },
      { label: "SEO", slug: "seo" },
      { label: "AIEO", slug: "aieo" },
      { label: "Graphics & Branding", slug: "graphics-branding" },
    ],
  },
];

function AbstractShape({ index, hovered }: { index: number; hovered: boolean }) {
  const scale = hovered ? "scale-90" : "scale-100";
  const blur = hovered ? "blur-[6px]" : "blur-[2px]";
  const base = "transition-all duration-700 ease-out";

  if (index === 0) {
    return (
      <div className={`${base} ${scale}`}>
        <div className={`w-28 h-28 bg-accent ${blur}`} style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }} />
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className={`${base} ${scale}`}>
        <div className={`w-28 h-28 rounded-full border-[14px] border-accent/80 ${blur}`} />
      </div>
    );
  }
  if (index === 2) {
    return (
      <div className={`grid grid-cols-2 gap-2.5 ${base} ${scale}`}>
        {[0, 1, 2, 3].map((j) => (
          <div key={j} className={`w-12 h-12 rounded-full bg-accent ${blur}`} />
        ))}
      </div>
    );
  }
  return (
    <div className={`${base} ${scale}`}>
      <div className={`w-28 h-28 bg-accent ${blur}`} style={{ clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 55%, 0% 80%, 0% 20%)" }} />
    </div>
  );
}

function ServiceCard({ cat, index }: { cat: typeof serviceCategories[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group rounded-2xl border border-card-light-border bg-white overflow-hidden hover:shadow-xl hover:shadow-black/[0.04] transition-all duration-500 h-full flex flex-col cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-48 bg-light-primary flex items-center justify-center overflow-hidden">
        <AbstractShape index={index} hovered={hovered} />
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-heading text-xl font-bold text-text-dark">
          {cat.title}
        </h3>

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <Link
                    key={item.label}
                    href={`/services/${item.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 py-1.5 text-sm text-text-dark-muted hover:text-accent transition-colors"
                  >
                    {item.label}
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-50" />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-28 lg:py-36 bg-light-primary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
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

        {/* Desktop: 4-column cards */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-5">
          {serviceCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.1}>
              <ServiceCard cat={cat} index={i} />
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: accordion */}
        <div className="lg:hidden space-y-4">
          {serviceCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.08}>
              <div className="rounded-2xl border border-card-light-border bg-white overflow-hidden">
                <button
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 cursor-pointer"
                >
                  <h3 className="font-heading text-lg font-bold text-text-dark">{cat.title}</h3>
                  {expandedIndex === i ? <Minus size={18} className="text-accent" /> : <Plus size={18} className="text-text-dark-muted" />}
                </button>
                <AnimatePresence initial={false}>
                  {expandedIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 space-y-2">
                        {cat.items.map((item) => (
                          <Link
                            key={item.label}
                            href={`/services/${item.slug}`}
                            className="flex items-center gap-2 py-2 text-sm text-text-dark-muted hover:text-accent transition-colors"
                          >
                            {item.label}
                            <ArrowRight size={11} />
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
