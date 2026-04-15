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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-accent/20 bg-accent/5 mb-6">
                <span className="text-xs text-accent-light tracking-widest uppercase font-medium">
                  Testimonials
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-12 leading-tight">
                What Our Clients
                <span className="gradient-text"> Say</span>
              </h2>
            </ScrollReveal>

            <div className="relative min-h-[300px]">
              <Quote size={48} className="text-accent-light/[0.07] absolute -top-3 -left-2" />
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
                    <div className="w-12 h-12 rounded-md gradient-bg flex items-center justify-center text-white font-heading font-bold text-lg">
                      {t.initial}
                    </div>
                    <div>
                      <div className="font-heading text-base font-bold text-accent-light">
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
                className="w-10 h-10 rounded-md border border-card-dark-border flex items-center justify-center text-text-light-muted hover:text-accent-light hover:border-accent/40 transition-all cursor-pointer"
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
                className="w-10 h-10 rounded-md border border-card-dark-border flex items-center justify-center text-text-light-muted hover:text-accent-light hover:border-accent/40 transition-all cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Right: Mini contact form */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.2}>
              <div className="rounded-lg border border-card-dark-border bg-card-dark p-8 lg:mt-16">
                <h3 className="font-heading text-xl font-bold text-text-light mb-2">
                  Start Your Project
                </h3>
                <p className="text-text-light-muted text-sm mb-6">
                  Tell us about your idea and we&apos;ll get back within 24 hours.
                </p>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div>
                    <label htmlFor="testi-name" className="sr-only">Full Name</label>
                    <input
                      id="testi-name"
                      name="name"
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3.5 rounded-md border border-card-dark-border bg-dark-primary text-text-light placeholder:text-text-light-muted/40 text-sm focus:outline-none focus:border-accent/50 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="testi-email" className="sr-only">Work Email</label>
                    <input
                      id="testi-email"
                      name="email"
                      type="email"
                      placeholder="Work Email"
                      className="w-full px-4 py-3.5 rounded-md border border-card-dark-border bg-dark-primary text-text-light placeholder:text-text-light-muted/40 text-sm focus:outline-none focus:border-accent/50 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="testi-service" className="sr-only">Service needed</label>
                    <select
                      id="testi-service"
                      name="service"
                      defaultValue=""
                      className="w-full px-4 py-3.5 rounded-md border border-card-dark-border bg-dark-primary text-text-light text-sm focus:outline-none focus:border-accent/50 transition-all"
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
                  </div>
                  <div>
                    <label htmlFor="testi-message" className="sr-only">Project description</label>
                    <textarea
                      id="testi-message"
                      name="message"
                      placeholder="Brief project description"
                      rows={3}
                      className="w-full px-4 py-3.5 rounded-md border border-card-dark-border bg-dark-primary text-text-light placeholder:text-text-light-muted/40 text-sm focus:outline-none focus:border-accent/50 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full gradient-bg text-white px-6 py-3.5 rounded-md font-medium text-sm hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
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
