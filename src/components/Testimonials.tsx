"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Send } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const testimonials = [
  {
    quote:
      "PROSYS delivered our MVP in just 5 weeks — and it was investor-ready from day one. Their team operates like senior co-founders, not contractors. The quality blew our advisors away.",
    name: "Sarah K.",
    role: "CEO & Co-Founder",
    company: "HealthTech Startup, USA",
    initial: "S",
  },
  {
    quote:
      "We needed an AI-powered analytics dashboard built fast and built right. PROSYS delivered ahead of schedule with architecture improvements that saved us months of refactoring.",
    name: "Ahmed R.",
    role: "CTO",
    company: "FinTech Platform, UAE",
    initial: "A",
  },
  {
    quote:
      "Their SEO and AIEO work is genuinely next-level. Within 3 months, our brand started appearing in ChatGPT responses and our organic traffic tripled.",
    name: "Michael T.",
    role: "Head of Marketing",
    company: "D2C Brand, UK",
    initial: "M",
  },
  {
    quote:
      "From a blank canvas to a fully functional SaaS platform with multi-tenant architecture, billing, and onboarding — in 8 weeks. The team is world-class.",
    name: "Fatima Z.",
    role: "Founder",
    company: "EdTech Startup, Pakistan",
    initial: "F",
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

  const t = testimonials[current];

  return (
    <section className="py-28 lg:py-36 bg-dark-primary overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Testimonials */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-accent/20 bg-accent/5 mb-6">
                <span className="text-xs text-accent tracking-widest uppercase font-medium">
                  Testimonials
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-12 leading-tight">
                What Our Clients
                <span className="gradient-text"> Say</span>
              </h2>
            </ScrollReveal>

            <div className="relative min-h-[300px]">
              <Quote size={48} className="text-accent/[0.07] absolute -top-3 -left-2" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <p className="text-xl md:text-2xl text-text-light leading-relaxed mb-10 font-light pl-2">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-4 pl-2">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-dark-primary font-heading font-bold text-lg">
                      {t.initial}
                    </div>
                    <div>
                      <div className="font-heading text-base font-bold text-accent">
                        {t.name}
                      </div>
                      <div className="text-text-light-muted text-sm">
                        {t.role} &mdash; {t.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-xl border border-card-dark-border flex items-center justify-center text-text-light-muted hover:text-accent hover:border-accent/40 transition-all cursor-pointer"
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
                className="w-10 h-10 rounded-xl border border-card-dark-border flex items-center justify-center text-text-light-muted hover:text-accent hover:border-accent/40 transition-all cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Right: Mini contact form */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.2}>
              <div className="rounded-2xl border border-card-dark-border bg-card-dark p-8 lg:mt-16">
                <h3 className="font-heading text-xl font-bold text-text-light mb-2">
                  Start Your Project
                </h3>
                <p className="text-text-light-muted text-sm mb-6">
                  Tell us about your idea and we&apos;ll get back within 24 hours.
                </p>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3.5 rounded-xl border border-card-dark-border bg-dark-primary text-text-light placeholder:text-text-light-muted/40 text-sm focus:outline-none focus:border-accent/50 transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Work Email"
                    className="w-full px-4 py-3.5 rounded-xl border border-card-dark-border bg-dark-primary text-text-light placeholder:text-text-light-muted/40 text-sm focus:outline-none focus:border-accent/50 transition-all"
                  />
                  <select
                    defaultValue=""
                    className="w-full px-4 py-3.5 rounded-xl border border-card-dark-border bg-dark-primary text-text-light text-sm focus:outline-none focus:border-accent/50 transition-all"
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
                    className="w-full px-4 py-3.5 rounded-xl border border-card-dark-border bg-dark-primary text-text-light placeholder:text-text-light-muted/40 text-sm focus:outline-none focus:border-accent/50 transition-all resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full gradient-bg text-dark-primary px-6 py-3.5 rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    Send Inquiry
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
