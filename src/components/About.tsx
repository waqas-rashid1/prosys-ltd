"use client";

import { stats } from "@/lib/constants";
import StatsCounter from "./ui/StatsCounter";
import ScrollReveal from "./ui/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 mb-6">
              <span className="text-xs text-accent tracking-widest uppercase font-medium">
                About Us
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-light tracking-wide mb-6 leading-tight">
              Redefining Innovation
              <br />
              <span className="gradient-text">Across the Globe</span>
            </h2>
            <p className="text-text-light-muted text-lg leading-relaxed mb-6">
              PROSYS LTD is a global technology powerhouse delivering
              transformative digital solutions to enterprises across industries.
              We combine deep technical expertise with strategic thinking to help
              organizations navigate complexity and accelerate growth.
            </p>
            <p className="text-text-light-muted leading-relaxed">
              From AI-driven intelligence to cloud-native architectures, our
              multidisciplinary teams engineer solutions that create lasting
              impact. We believe technology should not just solve problems — it
              should unlock possibilities.
            </p>
          </ScrollReveal>

          {/* Visual element */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border border-accent/10 animate-[spin_30s_linear_infinite]" />
                <div className="absolute inset-8 rounded-full border border-accent/15 animate-[spin_25s_linear_infinite_reverse]" />
                <div className="absolute inset-16 rounded-full border border-accent/20 animate-[spin_20s_linear_infinite]" />

                {/* Center element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-2xl gradient-bg rotate-45 opacity-20 blur-sm" />
                  <div className="absolute w-24 h-24 rounded-2xl gradient-bg rotate-45 flex items-center justify-center">
                    <span className="font-heading text-2xl font-bold text-dark-primary -rotate-45 tracking-wider">
                      PRO
                    </span>
                  </div>
                </div>

                {/* Floating dots */}
                <div className="absolute top-12 right-12 w-3 h-3 rounded-full bg-accent animate-float" />
                <div className="absolute bottom-20 left-8 w-2 h-2 rounded-full bg-cyan-400 animate-float [animation-delay:1s]" />
                <div className="absolute top-1/2 right-4 w-2.5 h-2.5 rounded-full bg-accent/60 animate-float [animation-delay:2s]" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-card-dark-border">
            {stats.map((stat) => (
              <StatsCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
