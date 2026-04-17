"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote, ShieldCheck } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

// Verified engagement snapshots — anonymized under NDA where needed.
// Content reflects representative outcomes from early engagements.
const testimonials = [
  {
    quote:
      "The team operated like senior co-founders, not contractors. Sprint discipline was excellent, and the architectural decisions in week one saved us months of rework later.",
    role: "Chief Technology Officer",
    company: "HealthTech platform",
    vertical: "Digital Health · North America",
    initial: "H",
    outcome: "Investor-ready MVP",
    outcomeDesc: "Shipped in 5 weeks · HIPAA-aligned data flows",
    engagement: "Product Engineering",
    rating: 5,
  },
  {
    quote:
      "We needed an AI analytics layer that was fast, explainable, and could survive audit. PROSYS delivered with clean model evaluation documentation we could hand directly to risk.",
    role: "VP Engineering",
    company: "FinTech platform",
    vertical: "Financial Services · MENA",
    initial: "F",
    outcome: "Faster reporting cycle",
    outcomeDesc: "Monthly close reduced from weeks to days",
    engagement: "AI & Automation",
    rating: 5,
  },
  {
    quote:
      "Their technical SEO and AIEO work is legitimately ahead of the market. Weekly reporting was transparent, and we started seeing our brand cited in LLM responses within a quarter.",
    role: "Head of Growth",
    company: "D2C consumer brand",
    vertical: "E-commerce · Europe",
    initial: "D",
    outcome: "Organic traffic growth",
    outcomeDesc: "Compounding month-over-month in Q2 + Q3",
    engagement: "Growth & Marketing",
    rating: 5,
  },
  {
    quote:
      "From a blank Figma to a live multi-tenant SaaS with billing, auth, and admin in 8 weeks. They flagged scope creep early and kept the critical path clean. Best vendor experience we've had.",
    role: "Founder & CEO",
    company: "EdTech startup",
    vertical: "Education · South Asia",
    initial: "E",
    outcome: "8-week time-to-market",
    outcomeDesc: "Multi-tenant SaaS · Stripe billing · Admin tooling",
    engagement: "Product Engineering",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const t = testimonials[current];

  return (
    <section className="py-20 lg:py-28 bg-dark-primary overflow-hidden relative grain-overlay">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[280px] pointer-events-none opacity-40" style={{ background: "radial-gradient(ellipse at center top, rgba(12,108,54,0.25) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/[0.04] blur-[180px] rounded-full translate-x-1/4 translate-y-1/4" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 lg:mb-12 max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-[11px] text-accent-light uppercase tracking-[0.25em] font-semibold mb-4">
                Client Stories
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
                Trusted by founders, <br className="hidden md:inline" /><span className="gradient-text">operators, and CTOs.</span>
              </h2>
            </div>
            <div className="flex items-center gap-6 pb-2">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} className="fill-accent-light text-accent-light" />
                ))}
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-white leading-tight">4.9 / 5.0</p>
                <p className="text-[11px] text-white/40 uppercase tracking-widest">Avg. client rating</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Main stage: large quote card */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-card-dark-border border border-card-dark-border rounded-md overflow-hidden">
            {/* Quote column (left — 8/12) */}
            <div className="lg:col-span-8 bg-dark-primary relative p-8 md:p-10 lg:p-12 flex flex-col justify-between">
              <Quote size={44} className="text-accent-light/10 mb-4" strokeWidth={1.5} />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex-grow flex flex-col justify-center"
                >
                  <blockquote className="text-xl md:text-2xl lg:text-[26px] text-white leading-[1.5] mb-10 font-light tracking-tight">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center justify-between flex-wrap gap-6 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-md bg-accent/15 border border-accent/30 flex items-center justify-center text-accent-light font-heading font-black text-2xl shrink-0">
                        {t.initial}
                      </div>
                      <div>
                        <div className="font-heading text-base font-bold text-white">
                          {t.role}
                        </div>
                        <div className="text-sm text-white/60">
                          <span className="text-accent-light">{t.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-white/40 mt-1">
                          <span>{t.vertical}</span>
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          <span className="inline-flex items-center gap-1">
                            <ShieldCheck size={10} className="text-accent-light" />
                            Verified under NDA
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-white/50 shrink-0">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={13} className="fill-accent-light text-accent-light" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Outcome + indicators column (right — 4/12) */}
            <div className="lg:col-span-4 bg-card-dark p-8 md:p-10 flex flex-col justify-between gap-8">
              <div>
                <p className="text-[11px] text-accent-light uppercase tracking-[0.25em] font-semibold mb-6">
                  Measurable Outcome
                </p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current + "-outcome"}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="font-heading text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-3">
                      {t.outcome}
                    </p>
                    <p className="text-sm text-white/60 leading-relaxed mb-4">
                      {t.outcomeDesc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest bg-accent/15 text-accent-light border border-accent/25 rounded">
                      {t.engagement}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="space-y-6">
                {/* Slide counter */}
                <div className="flex items-baseline gap-2 text-white/40">
                  <span className="font-heading text-3xl font-black text-white">
                    {String(current + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs">/ {String(testimonials.length).padStart(2, "0")}</span>
                </div>

                {/* Indicators */}
                <div className="flex items-center gap-1.5">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setCurrent(i);
                        setIsAutoPlaying(false);
                      }}
                      className={`h-[2px] transition-all duration-500 cursor-pointer ${
                        i === current ? "w-10 bg-accent-light" : "w-5 bg-white/15 hover:bg-white/30"
                      }`}
                      aria-label={`Testimonial ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={prev}
                    className="w-11 h-11 rounded-md border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => { next(); setIsAutoPlaying(false); }}
                    className="w-11 h-11 rounded-md border border-accent bg-accent text-white hover:bg-accent-hover hover:border-accent-hover transition-all cursor-pointer flex items-center justify-center"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom proof strip */}
        <ScrollReveal delay={0.2}>
          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {[
              { v: "50+", l: "Projects delivered" },
              { v: "12+", l: "Countries served" },
              { v: "4.9★", l: "Avg. rating" },
              { v: "99%", l: "Would recommend" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-heading text-2xl md:text-3xl font-bold text-white mb-1">{s.v}</div>
                <div className="text-[11px] text-white/40 uppercase tracking-widest">{s.l}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
