"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const serviceCategories = [
  {
    number: "01",
    title: "Product Engineering",
    subtitle: "Ship production-ready software",
    description: "Web, SaaS, and custom platforms engineered to scale — built by senior teams with delivery-first discipline.",
    items: [
      { label: "Web Development", slug: "web-development" },
      { label: "Software Development", slug: "software-development" },
      { label: "SaaS Development", slug: "saas-development" },
      { label: "MVP Development", slug: "mvp-development" },
      { label: "Business Applications", slug: "business-applications" },
    ],
  },
  {
    number: "02",
    title: "AI & Automation",
    subtitle: "Outcomes, not demos",
    description: "Applied AI, LLM systems, and intelligent automation engineered for reliability and measurable ROI.",
    items: [
      { label: "AI Development", slug: "ai-development" },
      { label: "Generative AI", slug: "generative-ai" },
      { label: "Advanced Analytics", slug: "advanced-analytics" },
      { label: "Data Modernization", slug: "data-modernization" },
      { label: "Connected Intelligence", slug: "connected-intelligence" },
    ],
  },
  {
    number: "03",
    title: "Cloud & Platform",
    subtitle: "Infrastructure that scales",
    description: "Cloud-native architecture, migrations, and managed operations on AWS, GCP, and Azure with SRE discipline.",
    items: [
      { label: "Cloud Operations & Migration", slug: "cloud-operations" },
      { label: "Cloud App Development", slug: "cloud-app-development" },
      { label: "Managed Services", slug: "managed-services" },
      { label: "Security", slug: "security" },
      { label: "Digital Infrastructure", slug: "digital-infrastructure" },
    ],
  },
  {
    number: "04",
    title: "Growth & Marketing",
    subtitle: "Compounding pipeline",
    description: "Technical SEO, AIEO, and full-funnel growth systems that drive qualified traffic and conversions.",
    items: [
      { label: "SEO", slug: "seo" },
      { label: "AIEO (AI Engine Optimization)", slug: "aieo" },
      { label: "Digital Marketing", slug: "digital-marketing" },
      { label: "Graphics & Branding", slug: "graphics-branding" },
      { label: "Digital Commerce", slug: "digital-commerce" },
    ],
  },
];

function AbstractShape({ index, hovered }: { index: number; hovered: boolean }) {
  const shapeVariants = {
    idle: { scale: 1, filter: "blur(0px)", rotate: 0 },
    hover: { scale: 0.88, filter: "blur(4px)", rotate: 3 },
  };
  const springConfig = { type: "spring" as const, stiffness: 120, damping: 20 };

  if (index === 0) {
    return (
      <motion.div animate={hovered ? "hover" : "idle"} variants={shapeVariants} transition={springConfig}>
        <div className="w-32 h-32 bg-accent" style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }} />
      </motion.div>
    );
  }
  if (index === 1) {
    return (
      <motion.div animate={hovered ? "hover" : "idle"} variants={shapeVariants} transition={springConfig}>
        <div className="w-32 h-32 rounded-full border-[16px] border-accent" />
      </motion.div>
    );
  }
  if (index === 2) {
    return (
      <motion.div
        className="grid grid-cols-2 gap-3"
        animate={hovered ? { scale: 0.88, filter: "blur(4px)" } : { scale: 1, filter: "blur(0px)" }}
        transition={springConfig}
      >
        {[0, 1, 2, 3].map((j) => (
          <div key={j} className="w-14 h-14 rounded-full bg-accent" />
        ))}
      </motion.div>
    );
  }
  return (
    <motion.div animate={hovered ? "hover" : "idle"} variants={shapeVariants} transition={springConfig}>
      <div className="w-32 h-32 bg-accent" style={{ clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 55%, 0% 80%, 0% 20%)" }} />
    </motion.div>
  );
}

function ServiceCard({ cat, index }: { cat: typeof serviceCategories[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="group relative rounded-lg border border-card-light-border bg-white overflow-hidden h-full flex flex-col cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6, boxShadow: "0 30px 60px rgba(0,0,0,0.08)" }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      <div className="relative h-44 bg-light-primary flex items-center justify-center overflow-hidden border-b border-card-light-border">
        <AbstractShape index={index} hovered={hovered} />
        <span className="absolute top-4 left-5 text-[11px] font-mono tracking-widest text-text-dark-muted/60">
          /{cat.number}
        </span>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-2">
          {cat.subtitle}
        </p>
        <h3 className="font-heading text-xl font-bold text-text-dark mb-3 leading-tight">
          {cat.title}
        </h3>
        <p className="text-sm text-text-dark-muted leading-relaxed mb-4">
          {cat.description}
        </p>

        <AnimatePresence initial={false}>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-card-light-border space-y-1.5">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                  >
                    <Link
                      href={`/services/${item.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 py-1 text-[13px] text-text-dark-muted hover:text-accent transition-colors"
                    >
                      <span className="h-px w-3 bg-current opacity-40" />
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto pt-4 flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest">
          <span>Explore</span>
          <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-14 lg:py-20 bg-light-primary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <p className="text-[11px] text-accent font-semibold uppercase tracking-[0.25em] mb-4">
                Capabilities
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-text-dark leading-[1.05] tracking-tight mb-5">
                Four pillars. <br />One delivery standard.
              </h2>
              <p className="text-base md:text-lg text-text-dark-muted leading-relaxed">
                We combine strategic engineering, applied AI, cloud-native architecture, and growth systems — delivered by senior teams that own outcomes end-to-end.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-text-dark/10 text-text-dark text-sm font-medium hover:border-accent hover:text-accent transition-all duration-300 self-start md:self-auto shrink-0"
            >
              View all 29 services
              <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>

        {/* Desktop: 4-column cards */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-5 items-start">
          {serviceCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.1} className="h-full">
              <ServiceCard cat={cat} index={i} />
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: accordion */}
        <div className="lg:hidden space-y-4">
          {serviceCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.08}>
              <div className="rounded-lg border border-card-light-border bg-white overflow-hidden">
                <button
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 cursor-pointer"
                  aria-expanded={expandedIndex === i}
                  aria-controls={`service-panel-${i}`}
                >
                  <h3 className="font-heading text-lg font-bold text-text-dark">{cat.title}</h3>
                  {expandedIndex === i ? <Minus size={18} className="text-accent" /> : <Plus size={18} className="text-text-dark-muted" />}
                </button>
                <AnimatePresence initial={false}>
                  {expandedIndex === i && (
                    <motion.div
                      id={`service-panel-${i}`}
                      role="region"
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
