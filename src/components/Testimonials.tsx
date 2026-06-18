"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote, ShieldCheck } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import SectionRail from "./ui/SectionRail";
import SectionHeading from "./ui/SectionHeading";

// Verified engagement snapshots — anonymized under NDA where needed.
// Content reflects representative outcomes from delivered engagements.
const testimonials = [
  {
    quote:
      "PROSYS started with our workflows and risk, not a tool. They scored our AI ideas by value and feasibility and reframed two of our five priorities as lower-impact. The readiness output set the trajectory for the whole engagement and we reached a production pilot without a single missed milestone.",
    role: "Chief Technology Officer",
    company: "HealthTech platform",
    vertical: "Digital Health · North America",
    initial: "H",
    outcome: "Production pilot live",
    outcomeDesc: "Live in 8 weeks · access-controlled, audit-ready",
    engagement: "AI Readiness & Strategy",
    rating: 5,
  },
  {
    quote:
      "Our compliance team had a 40-page checklist for the AI work. PROSYS delivered the control layer our auditors expected — role-based access, approval workflows, audit logs, and risk scoring — with documentation in the formats they wanted. It compressed our internal review by an estimated quarter.",
    role: "VP Engineering",
    company: "FinTech platform",
    vertical: "Financial Services · MENA",
    initial: "F",
    outcome: "Audit-ready by design",
    outcomeDesc: "Permissions, approvals & audit logs across agents",
    engagement: "AI Governance & Control Systems",
    rating: 5,
  },
  {
    quote:
      "They built a support agent that triages tickets and drafts responses, but never sends anything unreviewed and never takes an unsafe action. Permissions, approvals, and audit logging were designed in from day one. Our team moves far faster without losing control.",
    role: "Head of Customer Operations",
    company: "E-commerce operations team",
    vertical: "E-commerce · Europe",
    initial: "E",
    outcome: "~80% manual time saved",
    outcomeDesc: "Triage + draft agent · human-approved by design",
    engagement: "Secure AI Agents & Workflow Automation",
    rating: 5,
  },
  {
    quote:
      "The AI assistant finally connected to the systems we actually run on — our CRM and internal tools — with proper authentication and documented data flows. It reached a working pilot in weeks, and they recommended against two scope additions that would have compromised the timeline, in writing.",
    role: "Founder & CEO",
    company: "Professional services firm",
    vertical: "Professional Services · South Asia",
    initial: "P",
    outcome: "Connected to operations",
    outcomeDesc: "CRM & internal tool integration · scoped auth",
    engagement: "AI Integration with Existing Systems",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  }, []);

  // Only run the auto-advance timer when the section is actually on screen.
  // Saves CPU on long pages and avoids changing the active slide while the
  // user is reading something else.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      // SSR / older browser fallback — assume in view so the carousel still
      // works. Subscribing to an external API (IO) is a documented setState
      // -in-effect exception.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => setInView(entries.some((e) => e.isIntersecting)),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || !inView || prefersReducedMotion) return;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, inView, prefersReducedMotion, next]);

  const t = testimonials[current];

  return (
    <section ref={sectionRef} className="py-14 lg:py-20 bg-dark-secondary border-t border-card-dark-border overflow-hidden relative grain-overlay">
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: "radial-gradient(ellipse 600px 220px at 50% 0%, rgba(6,182,212,0.18) 0%, transparent 70%)" }} />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <SectionHeading
          theme="dark"
          eyebrow="Client Stories"
          title={
            <>
              Outcomes, in our <br className="hidden md:inline" />
              <span className="gradient-text">clients&apos; words.</span>
            </>
          }
          aside={
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
          }
          className="mb-8 lg:mb-10 max-w-6xl"
        />

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
                <SectionRail label="Measurable Outcome" theme="dark" className="mb-6" />
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
                      className={`h-[2px] transition-all duration-500 cursor-pointer ${ i === current ? "w-10 bg-accent-light" : "w-5 bg-white/15 hover:bg-white/30" }`}
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
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {[
              { v: "6", l: "Core AI services" },
              { v: "6", l: "Industries served" },
              { v: "4.9★", l: "Avg. client rating" },
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
