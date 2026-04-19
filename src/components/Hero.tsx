"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    eyebrow: "Enterprise Product Engineering",
    title: "Architecting scalable systems for",
    highlight: "complex environments.",
    description:
      "Enterprise-grade software for mid-market teams and funded startups — shipping production-ready platforms in weeks, not quarters.",
  },
  {
    eyebrow: "AI & Automation",
    title: "Production AI that drives",
    highlight: "measurable outcomes.",
    description:
      "Custom AI systems, LLM integrations, and intelligent automation — engineered for reliability, cost efficiency, and real business impact.",
  },
  {
    eyebrow: "Digital Growth Engineering",
    title: "Visibility on every engine —",
    highlight: "including AI.",
    description:
      "Technical SEO, AIEO, and full-funnel growth systems that compound organic reach across Google, ChatGPT, Gemini, and Perplexity.",
  },
];

const proofPoints = [
  { value: "50+", label: "Projects Shipped" },
  { value: "12+", label: "Countries Served" },
  { value: "4-8", label: "Weeks to MVP" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setIsAutoPlaying(false);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  }, []);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const slide = slides[current];

  return (
    <section className="relative h-dvh min-h-[640px] flex items-center overflow-hidden bg-dark-primary">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="auto" src="/videos/hero.mp4" className="absolute inset-0 w-full h-full object-cover opacity-75" />
        <div className="absolute inset-0 bg-dark-primary/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-primary via-dark-primary/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-transparent to-dark-primary/40" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] pointer-events-none opacity-70" style={{ background: "radial-gradient(circle, rgba(12,108,54,0.18) 0%, transparent 60%)" }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] pointer-events-none opacity-60" style={{ background: "radial-gradient(circle, rgba(52,211,153,0.1) 0%, transparent 70%)" }} />
      </div>

      <button onClick={prev} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-white/10 bg-black/20 glass-effect flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300 cursor-pointer" aria-label="Previous slide">
        <ChevronLeft size={20} />
      </button>
      <button onClick={() => { next(); setIsAutoPlaying(false); }} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-white/10 bg-black/20 glass-effect flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300 cursor-pointer" aria-label="Next slide">
        <ChevronRight size={20} />
      </button>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 w-full pt-24 pb-24 lg:pt-28 lg:pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-4xl"
          >
            <p className="text-[11px] text-accent-light uppercase tracking-[0.25em] font-semibold mb-4">
              {slide.eyebrow}
            </p>

            <h1 className="font-heading text-[2.25rem] leading-[1.05] sm:text-5xl md:text-[3.5rem] lg:text-6xl xl:text-[4.25rem] font-black mb-5 text-white tracking-tight">
              {slide.title}{" "}
              <span className="gradient-text">{slide.highlight}</span>
            </h1>

            <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-white/60 mb-7 leading-relaxed">
              {slide.description}
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-semibold rounded-md bg-white text-dark-primary hover:bg-accent hover:text-white px-7 py-3.5 text-xs uppercase tracking-widest transition-all duration-300"
              >
                Book a Consultation
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center font-medium rounded-md border border-white/25 text-white hover:border-white/60 px-7 py-3.5 text-xs uppercase tracking-widest transition-all duration-300"
              >
                See Our Work
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap gap-x-10 md:gap-x-14 gap-y-3 pt-6 border-t border-white/10 max-w-3xl"
        >
          {proofPoints.map((p) => (
            <div key={p.label}>
              <div className="font-heading text-xl md:text-2xl font-bold text-white mb-0.5">{p.value}</div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest">{p.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="absolute bottom-6 left-6 lg:left-12 xl:left-16 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-[2px] transition-all duration-500 cursor-pointer ${
                i === current ? "w-10 bg-accent-light" : "w-5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 right-8 flex flex-col items-center gap-1.5 text-white/30 z-10"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
