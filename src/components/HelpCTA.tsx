"use client";

import Link from "next/link";
import ScrollReveal from "./ui/ScrollReveal";

export default function HelpCTA() {
  return (
    <section className="relative py-32 lg:py-40 bg-dark-primary overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-accent/[0.06] blur-[200px] rounded-full translate-x-1/4 translate-y-1/4" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="text-xs text-text-light-muted/40 uppercase tracking-[0.2em] font-medium mb-6">
              Start a Conversation
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6 leading-tight">
              Let&apos;s discuss your
              <span className="gradient-text"> next project.</span>
            </h2>
            <p className="text-text-light-muted text-lg mb-10 leading-relaxed max-w-lg">
              Schedule a free technical consultation. We&apos;ll review your requirements, recommend an approach, and provide a detailed proposal — no commitment required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 cursor-pointer gradient-bg text-white hover:shadow-lg hover:shadow-accent/20 px-8 py-3.5 text-sm uppercase tracking-widest"
              >
                Schedule a Call
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 cursor-pointer border border-white/20 text-white/70 hover:text-white hover:border-white/40 px-8 py-3.5 text-sm uppercase tracking-widest"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
