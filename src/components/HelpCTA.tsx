"use client";

import Link from "next/link";
import ScrollReveal from "./ui/ScrollReveal";
import DarkSectionFx from "./ui/DarkSectionFx";

export default function HelpCTA() {
  return (
    <section className="relative py-14 lg:py-20 bg-dark-primary overflow-hidden">
      <DarkSectionFx variant="default" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-[11px] text-accent-light uppercase tracking-[0.25em] font-semibold mb-6">
              Start the conversation
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-8 leading-[1.05] tracking-tight">
              Engineering conversations, <span className="gradient-text">not sales calls.</span>
            </h2>
            <p className="text-text-light-muted text-base md:text-lg mb-12 leading-relaxed max-w-2xl">
              A 30-minute working session with the engagement lead. Architectural review, scope assessment, written recommendation with timeline and pricing. Response within one business day — whether you are validating a build or scaling a platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-300 cursor-pointer bg-white text-dark-primary hover:bg-accent hover:text-white px-8 py-4 text-sm uppercase tracking-widest"
              >
                Book an AI Readiness Call
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
                { v: "<24h", l: "Response SLA" },
                { v: "50+", l: "Engagements delivered" },
                { v: "NDA", l: "On request" },
                { v: "5", l: "Industry verticals" },
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
