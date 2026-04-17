"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const testimonials = [
  {
    quote:
      "PROSYS delivered our MVP in just 5 weeks — and it was investor-ready from day one. Their team operates like senior co-founders, not contractors. The quality blew our advisors away.",
    name: "Sarah K.",
    role: "CEO & Co-Founder",
    company: "HealthTech Startup",
    location: "Boston, USA",
    initial: "S",
    outcome: "Closed $2.1M seed round",
    rating: 5,
  },
  {
    quote:
      "We needed an AI-powered analytics dashboard built fast and built right. PROSYS delivered ahead of schedule with architecture improvements that saved us months of refactoring down the line.",
    name: "Ahmed R.",
    role: "Chief Technology Officer",
    company: "FinTech Platform",
    location: "Dubai, UAE",
    initial: "A",
    outcome: "10× faster reporting",
    rating: 5,
  },
  {
    quote:
      "Their SEO and AIEO work is genuinely next-level. Within 3 months, our brand started appearing in ChatGPT responses and our organic traffic tripled. This is the future of search.",
    name: "Michael T.",
    role: "Head of Marketing",
    company: "D2C Apparel Brand",
    location: "London, UK",
    initial: "M",
    outcome: "300% traffic growth",
    rating: 5,
  },
  {
    quote:
      "From a blank canvas to a fully functional multi-tenant SaaS with billing, onboarding, and admin — shipped in 8 weeks. The team is world-class and operates with a level of discipline we rarely see.",
    name: "Fatima Z.",
    role: "Founder & CEO",
    company: "EdTech Startup",
    location: "Karachi, Pakistan",
    initial: "F",
    outcome: "8-week time-to-market",
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
    <section className="py-32 lg:py-44 bg-dark-primary overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none opacity-40" style={{ background: "radial-gradient(ellipse at center top, rgba(12,108,54,0.25) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.04] blur-[200px] rounded-full translate-x-1/4 translate-y-1/4" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 max-w-6xl">
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
            <div className="lg:col-span-8 bg-dark-primary relative p-8 md:p-12 lg:p-16 min-h-[480px] flex flex-col justify-between">
              <Quote size={56} className="text-accent-light/10 mb-6" strokeWidth={1.5} />

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
                      <div className="w-14 h-14 rounded-md bg-accent flex items-center justify-center text-white font-heading font-black text-2xl shrink-0">
                        {t.initial}
                      </div>
                      <div>
                        <div className="font-heading text-base font-bold text-white">
                          {t.name}
                        </div>
                        <div className="text-sm text-white/60">
                          {t.role}, <span className="text-accent-light">{t.company}</span>
                        </div>
                        <div className="text-xs text-white/40 mt-0.5">{t.location}</div>
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
            <div className="lg:col-span-4 bg-card-dark p-8 md:p-10 flex flex-col justify-between min-h-[480px]">
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
                    <p className="font-heading text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-4">
                      {t.outcome}
                    </p>
                    <p className="text-sm text-white/50 leading-relaxed">
                      {t.company} — delivered on time, on budget, and beyond spec.
                    </p>
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
          <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
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
