"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { heroProofPoints } from "@/lib/constants";
import MagneticButton from "./ui/MagneticButton";

const slides = [
  {
    eyebrow: "Safe AI Deployment",
    title: "Deploy AI safely",
    highlight: "into real operations.",
    description:
      "Most AI pilots stall before they reach production. We help companies move AI from proof of concept into day-to-day operations — with the controls, oversight, and integrations real businesses require.",
  },
  {
    eyebrow: "Secure AI Agents",
    title: "AI agents that work",
    highlight: "inside your workflows.",
    description:
      "Agents that summarize, classify, route, draft, recommend, and trigger actions — with role-based permissions, human-in-the-loop approvals, and audit logs on every action. Useful, and controlled.",
  },
  {
    eyebrow: "Governance & Security",
    title: "Control what AI",
    highlight: "can see and do.",
    description:
      "Governance systems, secure knowledge access, integrations with your existing tools, and red-team testing for prompt injection and data leakage — so AI stays auditable, reliable, and safe after launch.",
  },
];

const proofPoints = heroProofPoints;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [inView, setInView] = useState(true);
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setIsAutoPlaying(false);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  }, []);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  // Pause the auto-advance once the user scrolls past the hero. Saves CPU
  // and prevents the active slide from changing while the user is reading
  // something else on the page.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => setInView(entries.some((e) => e.isIntersecting)),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || prefersReducedMotion || !inView) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next, prefersReducedMotion, inView]);

  const slide = slides[current];

  return (
    <section ref={sectionRef} className="relative h-dvh min-h-[640px] flex items-center overflow-hidden bg-dark-primary">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* Hero globe video — the only foreground asset. The section's
            bg-dark-primary acts as the placeholder until the video has
            buffered its first frame. No <img>/poster fallback, so there
            is nothing to "swap from" and no fade transition that could
            re-trigger on the loop boundary. */}
        {!prefersReducedMotion && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            src="/videos/hero.mp4"
            className="absolute inset-0 w-full h-full object-cover opacity-75"
          />
        )}
        <div className="absolute inset-0 bg-dark-primary/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-primary via-dark-primary/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-transparent to-dark-primary/40" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] pointer-events-none opacity-70" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 60%)" }} />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] pointer-events-none opacity-60" style={{ background: "radial-gradient(circle, rgba(103,232,249,0.1) 0%, transparent 70%)" }} />
      </div>

      {/* Slide arrows.
          Desktop (md+): vertically centred at the screen edges, the
          classic carousel position. Mobile (<md): hidden — they were
          sitting directly over the hero h1 and intercepting taps. The
          dot indicators at the bottom remain reachable via the larger
          touch targets defined below. */}
      <button onClick={prev} className="hidden md:flex absolute md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-white/10 bg-black/20 glass-effect items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300 cursor-pointer" aria-label="Previous slide">
        <ChevronLeft size={20} />
      </button>
      <button onClick={() => { next(); setIsAutoPlaying(false); }} className="hidden md:flex absolute md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-white/10 bg-black/20 glass-effect items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300 cursor-pointer" aria-label="Next slide">
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
              <MagneticButton strength={4}>
                <Link
                  href="/contact"
                  className="hero-cta-glow relative inline-flex items-center justify-center font-semibold rounded-md bg-white text-dark-primary hover:bg-accent hover:text-white px-7 py-3.5 text-xs uppercase tracking-widest transition-colors duration-200"
                >
                  Book an AI Readiness Call
                </Link>
              </MagneticButton>
              <Link
                href="/work"
                className="inline-flex items-center justify-center font-medium rounded-md border border-white/25 text-white hover:border-white/60 px-7 py-3.5 text-xs uppercase tracking-widest transition-colors duration-200"
              >
                View case studies
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap gap-x-6 sm:gap-x-10 md:gap-x-14 gap-y-3 pt-6 border-t border-white/10 max-w-3xl"
        >
          {proofPoints.map((p) => (
            <div key={p.label}>
              <div className="font-heading text-xl md:text-2xl font-bold text-white mb-0.5">{p.value}</div>
              <div className="text-[10px] text-white/40 uppercase tracking-widest">{p.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Slide indicators.
            The visible bar is still a slim 2px line so the desktop
            aesthetic is preserved, but the <button> hit-box is padded
            out to ~44px tall on mobile so it's an actual touch target
            rather than a 2-pixel sliver no thumb can hit. */}
        <div className="absolute bottom-4 md:bottom-6 left-6 lg:left-12 xl:left-16 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="group py-3 cursor-pointer"
              aria-label={`Slide ${i + 1}`}
            >
              <span
                className={`block h-[2px] transition-all duration-500 ${ i === current ? "w-10 bg-accent-light" : "w-5 bg-white/20 group-hover:bg-white/40" }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* "Scroll" indicator — hidden on mobile, where the page already
          obviously continues below the fold and the indicator just
          competes for attention with the slide dots. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden md:flex absolute bottom-6 right-8 flex-col items-center gap-1.5 text-white/30 z-10"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
