"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    eyebrow: "Software Engineering",
    title: "We Build What Others",
    highlight: "Only Plan",
    description:
      "From enterprise platforms to investor-ready MVPs — we deliver software engineered for performance, scale, and measurable outcomes.",
  },
  {
    eyebrow: "AI & Automation",
    title: "AI That Drives",
    highlight: "Real Results",
    description:
      "Production-grade AI systems, intelligent automation, and LLM integrations — built to deliver ROI, not just demos.",
  },
  {
    eyebrow: "Digital Growth",
    title: "Visibility on Every",
    highlight: "Search Engine",
    description:
      "We optimize your presence for Google, ChatGPT, Gemini, and Perplexity — ensuring your brand is found wherever decisions are made.",
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="auto" src="/videos/hero.mp4" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-primary/80 via-dark-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/80 via-transparent to-dark-primary/30" />
      </div>

      {/* Slide arrows */}
      <button onClick={prev} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-white/10 bg-black/20 glass-effect flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300 cursor-pointer" aria-label="Previous slide">
        <ChevronLeft size={20} />
      </button>
      <button onClick={() => { next(); setIsAutoPlaying(false); }} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-white/10 bg-black/20 glass-effect flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300 cursor-pointer" aria-label="Next slide">
        <ChevronRight size={20} />
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-2xl"
          >
            <p className="text-xs text-white/40 uppercase tracking-[0.2em] font-medium mb-6">
              {slide.eyebrow}
            </p>

            <h1 className="font-heading text-4xl leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 text-white">
              {slide.title}
              <br />
              <span className="gradient-text">{slide.highlight}</span>
            </h1>

            <p className="max-w-lg text-base sm:text-lg text-white/50 mb-10 leading-relaxed">
              {slide.description}
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 cursor-pointer border border-white/30 text-white hover:bg-white hover:text-dark-primary px-8 py-3.5 text-sm uppercase tracking-widest"
            >
              Get in Touch
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="flex items-center gap-2 mt-16">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-[2px] transition-all duration-500 cursor-pointer ${
                i === current ? "w-10 bg-white" : "w-5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 z-10"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
