"use client";

import Link from "next/link";
import ScrollReveal from "./ui/ScrollReveal";

export default function HelpCTA() {
  return (
    <section className="relative py-20 lg:py-28 bg-dark-primary overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-accent/[0.06] blur-[200px] rounded-full translate-x-1/4 translate-y-1/4" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-[11px] text-accent-light uppercase tracking-[0.25em] font-semibold mb-6">
              Start the conversation
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-8 leading-[1.05] tracking-tight">
              Talk to a senior engineer — <span className="gradient-text">not a sales rep.</span>
            </h2>
            <p className="text-text-light-muted text-base md:text-lg mb-12 leading-relaxed max-w-2xl">
              30 minutes. Real architectural advice. A scoped approach with timeline and pricing. Whether you&apos;re validating an idea or scaling a platform — we respond within one business day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-300 cursor-pointer bg-white text-dark-primary hover:bg-accent hover:text-white px-8 py-4 text-sm uppercase tracking-widest"
              >
                Book a Consultation
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 cursor-pointer border border-white/20 text-white/70 hover:text-white hover:border-white/50 px-8 py-4 text-sm uppercase tracking-widest"
              >
                See Case Studies
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl">
              {[
                { v: "<24h", l: "Response time" },
                { v: "Senior", l: "Engineers only" },
                { v: "NDA", l: "On request" },
                { v: "Global", l: "12+ countries" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-heading text-xl font-bold text-white mb-0.5">{s.v}</div>
                  <div className="text-[11px] text-white/40 uppercase tracking-widest">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
