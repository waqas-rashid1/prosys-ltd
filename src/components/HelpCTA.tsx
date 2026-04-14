"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

export default function HelpCTA() {
  return (
    <section className="relative py-32 lg:py-44 bg-dark-primary overflow-hidden">
      {/* Teal radial gradient background - like reference image */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[80%] h-[80%] bg-accent/[0.12] blur-[200px] rounded-full translate-x-1/4 translate-y-1/4" />
        <div className="absolute bottom-0 right-1/4 w-[50%] h-[50%] bg-accent/[0.06] blur-[150px] rounded-full translate-y-1/3" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-4 leading-tight">
              How Can We
              <span className="gradient-text"> Help You?</span>
            </h2>
            <p className="text-text-light-muted text-lg md:text-xl mb-10 leading-relaxed">
              Are you ready to push boundaries and explore new frontiers of innovation?
              Let&apos;s build something extraordinary together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-medium rounded-xl transition-all duration-300 cursor-pointer gradient-bg text-dark-primary hover:shadow-xl hover:shadow-accent/30 hover:scale-105 px-10 py-5 text-lg tracking-wide"
            >
              Let&apos;s Connect
              <ArrowRight size={20} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
