"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

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
    cta: { label: "AI Services", href: "/services" },
    ctaSecondary: { label: "See Our Work", href: "/work" },
  },
  {
    badge: "SEO & AIEO Specialists",
    title: "Rank Everywhere",
    highlight: "Even on AI",
    description:
      "We optimize your digital presence for Google, ChatGPT, Gemini, Perplexity — the next frontier of visibility.",
    cta: { label: "Learn About AIEO", href: "/services" },
    ctaSecondary: { label: "Get in Touch", href: "/contact" },
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-primary">
      {/* Animated bg */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/6 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.04] blur-[130px] animate-pulse-glow [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-accent/[0.02] blur-[200px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-[0.012]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="diag" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="var(--accent)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, var(--dark-primary) 100%)" }} />
      </div>

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
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-8">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-accent tracking-wide font-medium">
                {slide.badge}
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-[2.75rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-wide mb-6">
              {slide.title}
              <br />
              <span className="gradient-text">{slide.highlight}</span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-text-light-muted mb-10 leading-relaxed">
              {slide.description}
            </p>

            {/* CTAs */}
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
                className="inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 cursor-pointer border border-accent/40 text-accent hover:bg-accent/10 hover:border-accent px-9 py-4 text-base tracking-wide"
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
              onClick={() => {
                setCurrent(i);
                setIsAutoPlaying(false);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                i === current
                  ? "w-10 bg-accent"
                  : "w-4 bg-text-light-muted/20 hover:bg-text-light-muted/40"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-light-muted"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll to Explore</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
