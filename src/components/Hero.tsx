"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    badge: "Full-Spectrum Software Development",
    title: "We Build What Others",
    highlight: "Only Plan",
    description:
      "From AI-powered platforms to investor-ready MVPs — we engineer software that scales, converts, and dominates.",
    cta: { label: "Explore Services", href: "/services" },
    ctaSecondary: { label: "Start Your Project", href: "/contact" },
  },
  {
    badge: "AI & Automation",
    title: "AI That Dares",
    highlight: "To Disrupt",
    description:
      "Custom AI models, intelligent automation, and LLM integrations that give your business an unfair advantage.",
    cta: { label: "AI Services", href: "/services/ai-development" },
    ctaSecondary: { label: "See Our Work", href: "/work" },
  },
  {
    badge: "SEO & AIEO Specialists",
    title: "Rank Everywhere",
    highlight: "Even on AI",
    description:
      "We optimize your digital presence for Google, ChatGPT, Gemini, Perplexity — the next frontier of visibility.",
    cta: { label: "Learn About AIEO", href: "/services/aieo" },
    ctaSecondary: { label: "Get in Touch", href: "/contact" },
  },
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

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/videos/hero-poster.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-dark-primary/75" />

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/60 via-transparent to-dark-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-primary/40 to-transparent" />
      </div>

      {/* Subtle animated elements on top of video */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/6 w-[400px] h-[400px] rounded-full bg-cyan-500/[0.03] blur-[130px] animate-pulse-glow [animation-delay:2s]" />
      </div>

      {/* Slide navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-dark-primary/30 glass-effect flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all duration-300 cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => { next(); setIsAutoPlaying(false); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-dark-primary/30 glass-effect flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all duration-300 cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 glass-effect mb-8">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-accent tracking-wide font-medium">
                {slide.badge}
              </span>
            </div>

            <h1 className="font-heading text-[2.75rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-wide mb-6 text-white">
              {slide.title}
              <br />
              <span className="gradient-text">{slide.highlight}</span>
            </h1>

            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
              {slide.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={slide.cta.href}
                className="inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 cursor-pointer gradient-bg text-dark-primary hover:shadow-lg hover:shadow-accent/25 hover:scale-105 px-9 py-4 text-base tracking-wide"
              >
                {slide.cta.label}
                <ArrowRight size={16} />
              </Link>
              <Link
                href={slide.ctaSecondary.href}
                className="inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 cursor-pointer border border-white/25 text-white hover:bg-white/10 hover:border-white/40 px-9 py-4 text-base tracking-wide"
              >
                {slide.ctaSecondary.label}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="flex items-center justify-center gap-2 mt-14">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                i === current
                  ? "w-10 bg-accent"
                  : "w-4 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-10"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll to Explore</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
