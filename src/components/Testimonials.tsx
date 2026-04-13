"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const testimonials = [
  {
    quote:
      "PROSYS delivered our MVP in just 5 weeks — and it was investor-ready from day one. Their team operates like senior co-founders, not contractors. The quality of code and architecture blew our technical advisors away.",
    name: "Sarah K.",
    role: "CEO & Co-Founder",
    company: "HealthTech Startup, USA",
  },
  {
    quote:
      "We needed an AI-powered analytics dashboard built fast and built right. PROSYS not only delivered ahead of schedule, they proactively suggested architecture improvements that saved us months of refactoring later.",
    name: "Ahmed R.",
    role: "CTO",
    company: "FinTech Platform, UAE",
  },
  {
    quote:
      "Their SEO and AIEO work is genuinely next-level. Within 3 months, our brand started appearing in ChatGPT responses and our organic traffic tripled. No other agency we've worked with understood AI search optimization like PROSYS does.",
    name: "Michael T.",
    role: "Head of Marketing",
    company: "D2C Brand, UK",
  },
  {
    quote:
      "From a blank canvas to a fully functional SaaS platform with multi-tenant architecture, billing, and onboarding — in 8 weeks. PROSYS is the technical partner every startup wishes they had.",
    name: "Fatima Z.",
    role: "Founder",
    company: "EdTech Startup, Pakistan",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-28 lg:py-36 bg-dark-primary overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6">
              <span className="text-xs text-accent tracking-widest uppercase font-medium">
                Client Testimonials
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-light tracking-wide">
              What Our Clients Say
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-4 left-8 text-accent/10">
            <Quote size={80} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative z-10 text-center px-4 md:px-12"
            >
              <p className="text-xl md:text-2xl lg:text-[1.65rem] text-text-light leading-relaxed mb-10 font-light italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div>
                <div className="font-heading text-lg font-bold text-accent tracking-wide">
                  {testimonials[current].name}
                </div>
                <div className="text-text-light-muted text-sm">
                  {testimonials[current].role} &mdash;{" "}
                  {testimonials[current].company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-card-dark-border flex items-center justify-center text-text-light-muted hover:text-accent hover:border-accent/40 transition-all duration-300 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                    i === current
                      ? "w-8 bg-accent"
                      : "w-3 bg-text-light-muted/20 hover:bg-text-light-muted/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-card-dark-border flex items-center justify-center text-text-light-muted hover:text-accent hover:border-accent/40 transition-all duration-300 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
