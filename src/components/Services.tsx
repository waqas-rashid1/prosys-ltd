"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
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
      className="group rounded-lg border border-card-light-border bg-white overflow-hidden h-full flex flex-col cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
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
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                  >
                    <Link
                      href={`/services/${item.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 py-1.5 text-sm text-text-dark-muted hover:text-accent transition-colors"
                    >
                      {item.label}
                      <ArrowRight size={11} className="opacity-0 group-hover:opacity-40" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-text-dark/10 text-text-dark text-sm font-medium hover:border-accent hover:text-accent transition-all duration-300 self-start md:self-auto"
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
              <div className="rounded-lg border border-card-light-border bg-white overflow-hidden">
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
