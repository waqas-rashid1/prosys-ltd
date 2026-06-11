"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import SpotlightCard from "./ui/SpotlightCard";

const serviceCategories = [
  {
    number: "01",
    title: "Strategy & Governance",
    subtitle: "Decide and control before you scale",
    description: "Find the safest, highest-ROI AI use cases, then define what AI can see, decide, change, and escalate — with permissions, approvals, audit logs, and a clear operating model.",
    items: [
      { label: "AI Readiness & Strategy", slug: "ai-readiness-strategy" },
      { label: "AI Governance & Control Systems", slug: "ai-governance-control-systems" },
    ],
  },
  {
    number: "02",
    title: "Build & Knowledge",
    subtitle: "Agents and knowledge that operate safely",
    description: "AI agents that work inside real workflows with human oversight, and secure knowledge systems that answer from trusted sources with citations — without leaking sensitive data.",
    items: [
      { label: "Secure AI Agents & Workflow Automation", slug: "secure-ai-agents-workflow-automation" },
      { label: "Secure Enterprise Knowledge Systems", slug: "secure-enterprise-knowledge-systems" },
    ],
  },
  {
    number: "03",
    title: "Integrate & Operate",
    subtitle: "Connect, test, and keep AI reliable",
    description: "Connect AI to the CRMs, ERPs, and legacy tools your business runs on, then test for prompt injection and data leakage and monitor cost, quality, and failures after launch.",
    items: [
      { label: "AI Integration with Existing Systems", slug: "ai-integration-existing-systems" },
      { label: "AI Security, Monitoring & Optimization", slug: "ai-security-monitoring-optimization" },
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
    <SpotlightCard
      variant="light"
      className="group border border-card-light-border bg-white overflow-hidden flex flex-col cursor-pointer self-start"
    >
    <motion.div
      className="relative flex flex-col"
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
    </SpotlightCard>
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
                Six services. <br />One safe path to production.
              </h2>
              <p className="text-base md:text-lg text-text-dark-muted leading-relaxed">
                Everything you need to deploy AI safely into operations — strategy, secure agents, governance, knowledge systems, integrations, and monitoring. One team, one set of controls, one accountable point of contact.
              </p>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-md border border-text-dark/10 text-text-dark text-sm font-medium transition-all duration-300 self-start md:self-auto shrink-0 hover:border-accent hover:text-accent hover:bg-accent/5 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              View all 6 services
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Desktop: 3-column cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-5 items-start">
          {serviceCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.1} className="self-start">
              <ServiceCard cat={cat} index={i} />
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: accordion */}
        <div className="lg:hidden space-y-4">
          {serviceCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.08}>
              <div className="border border-card-light-border bg-white overflow-hidden">
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
