"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Send } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const testimonials = [
  {
    quote:
      "PROSYS delivered our MVP in just 5 weeks — and it was investor-ready from day one. Their team operates like senior co-founders, not contractors.",
    name: "Sarah K.",
    role: "CEO & Co-Founder",
    company: "HealthTech Startup, USA",
  },
  {
    quote:
      "We needed an AI-powered analytics dashboard built fast and built right. PROSYS delivered ahead of schedule with architecture improvements that saved us months.",
    name: "Ahmed R.",
    role: "CTO",
    company: "FinTech Platform, UAE",
  },
  {
    quote:
      "Their SEO and AIEO work is genuinely next-level. Within 3 months, our brand started appearing in ChatGPT responses and our organic traffic tripled.",
    name: "Michael T.",
    role: "Head of Marketing",
    company: "D2C Brand, UK",
  },
  {
    quote:
      "From a blank canvas to a fully functional SaaS platform with multi-tenant architecture, billing, and onboarding — in 8 weeks. Incredible.",
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

  return (
    <section className="py-28 lg:py-36 bg-dark-secondary overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Testimonials carousel */}
          <ScrollReveal>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6">
                <span className="text-xs text-accent tracking-widest uppercase font-medium">
                  Testimonials
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-light tracking-wide mb-10 leading-tight">
                What Our Clients
                <span className="gradient-text"> Say</span>
              </h2>

              <div className="relative min-h-[280px]">
                <Quote size={40} className="text-accent/10 absolute -top-2 -left-1" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.5 }}
                    className="pl-2"
                  >
                    <p className="text-lg md:text-xl text-text-light leading-relaxed mb-8 font-light italic">
                      &ldquo;{testimonials[current].quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-dark-primary font-heading font-bold text-sm">
                        {testimonials[current].name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-heading text-base font-bold text-accent tracking-wide">
                          {testimonials[current].name}
                        </div>
                        <div className="text-text-light-muted text-sm">
                          {testimonials[current].role} &mdash; {testimonials[current].company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <button
                  onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-card-dark-border flex items-center justify-center text-text-light-muted hover:text-accent hover:border-accent/40 transition-all cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                        i === current ? "w-8 bg-accent" : "w-3 bg-text-light-muted/20"
                      }`}
                      aria-label={`Testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-card-dark-border flex items-center justify-center text-text-light-muted hover:text-accent hover:border-accent/40 transition-all cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Mini contact form */}
          <ScrollReveal delay={0.2}>
            <div className="rounded-2xl border border-card-dark-border bg-card-dark p-8">
              <h3 className="font-heading text-xl font-bold text-text-light tracking-wide mb-2">
                Start Your Project
              </h3>
              <p className="text-text-light-muted text-sm mb-6">
                Tell us about your idea and we&apos;ll get back within 24 hours.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl border border-card-dark-border bg-dark-primary text-text-light placeholder:text-text-light-muted/40 text-sm focus:outline-none focus:border-accent/50 transition-all"
                />
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full px-4 py-3 rounded-xl border border-card-dark-border bg-dark-primary text-text-light placeholder:text-text-light-muted/40 text-sm focus:outline-none focus:border-accent/50 transition-all"
                />
                <select
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-xl border border-card-dark-border bg-dark-primary text-text-light text-sm focus:outline-none focus:border-accent/50 transition-all"
                >
                  <option value="" disabled>Service needed</option>
                  <option>Web Development</option>
                  <option>AI Development</option>
                  <option>MVP Development</option>
                  <option>SaaS Development</option>
                  <option>SEO / AIEO</option>
                  <option>Digital Marketing</option>
                  <option>Other</option>
                </select>
                <textarea
                  placeholder="Brief project description"
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-card-dark-border bg-dark-primary text-text-light placeholder:text-text-light-muted/40 text-sm focus:outline-none focus:border-accent/50 transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full gradient-bg text-dark-primary px-6 py-3 rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  Send Inquiry
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
