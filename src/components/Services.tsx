"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Cpu, BrainCircuit, Rocket, Cloud, Bot,
  Search, Sparkles, Megaphone, Palette, ArrowRight,
} from "lucide-react";
import { services } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";

const iconMap: Record<string, React.ElementType> = {
  Code2, Cpu, BrainCircuit, Rocket, Cloud, Bot,
  Search, Sparkles, Megaphone, Palette,
};

const categories = [
  { label: "All", filter: null },
  { label: "Development", filter: ["Web Development", "Software Development", "MVP Development", "SaaS Development"] },
  { label: "AI & Automation", filter: ["AI Development", "AI Automations"] },
  { label: "Growth", filter: ["SEO", "AIEO", "Digital Marketing", "Graphics & Branding"] },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(0);

  const filtered = categories[activeCategory].filter
    ? services.filter((s) => categories[activeCategory].filter!.includes(s.title))
    : services;

  return (
    <section id="services" className="py-28 lg:py-36 bg-dark-secondary">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-4">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-light tracking-wide leading-tight">
                Our Services
              </h2>
              <p className="text-text-light-muted text-lg mt-3 max-w-xl">
                Driving innovation and building products with intelligent, scalable technology.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all duration-300 self-start lg:self-auto"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12 mt-8">
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  activeCategory === i
                    ? "gradient-bg text-dark-primary"
                    : "border border-card-dark-border text-text-light-muted hover:border-accent/40 hover:text-accent"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {filtered.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link href={`/services/${service.slug}`} className="block group">
                    <div className="flex gap-5 p-6 rounded-2xl border border-card-dark-border bg-card-dark/50 hover:border-accent/40 hover:bg-card-dark transition-all duration-500 h-full">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-dark-primary transition-all duration-300">
                        {Icon && <Icon size={26} />}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-heading text-lg font-bold text-text-light tracking-wide group-hover:text-accent transition-colors duration-300">
                            {service.title}
                          </h3>
                          <ArrowRight
                            size={16}
                            className="text-text-light-muted/0 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300"
                          />
                        </div>
                        <p className="text-text-light-muted text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
