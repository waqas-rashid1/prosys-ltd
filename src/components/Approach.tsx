"use client";

import {
  Compass,
  Layers,
  Code2,
  Rocket,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";
import { approach } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";

const stepMeta = [
  {
    icon: Compass,
    tagline: "Understand the problem",
    duration: "1–2 weeks",
    deliverables: [
      "Product thesis & metrics",
      "User research & personas",
      "Feasibility audit",
    ],
  },
  {
    icon: Layers,
    tagline: "Plan for scale",
    duration: "1–2 weeks",
    deliverables: [
      "System architecture",
      "Tech stack decisions",
      "Design system",
    ],
  },
  {
    icon: Code2,
    tagline: "Ship in sprints",
    duration: "4–12 weeks",
    deliverables: [
      "Two-week cadence",
      "Weekly demos & reviews",
      "Automated CI/CD",
    ],
  },
  {
    icon: Rocket,
    tagline: "Grow post-launch",
    duration: "Ongoing",
    deliverables: [
      "Zero-downtime deploy",
      "Observability & SRE",
      "SEO · AIEO · Analytics",
    ],
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative h-screen min-h-[760px] flex flex-col justify-center bg-dark-primary overflow-hidden"
    >
      {/* Decorative layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] opacity-40 animate-pulse-glow"
          style={{
            background:
              "radial-gradient(ellipse at center top, rgba(12,108,54,0.5) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full blur-[140px] opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(52,211,153,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 -left-32 w-[480px] h-[480px] rounded-full blur-[140px] opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(12,108,54,0.3) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--accent-light) 1px, transparent 1px), linear-gradient(90deg, var(--accent-light) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 w-full py-14 lg:py-16">
        {/* ── Header (compact) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-8 lg:mb-10 items-end">
          <ScrollReveal className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase">
                / The Process
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent max-w-[160px]" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/25 bg-accent/10 backdrop-blur-sm mb-4">
              <Sparkles size={11} className="text-accent-light" />
              <span className="text-[10px] text-accent-light tracking-[0.18em] font-semibold uppercase">
                Our Methodology
              </span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-black text-white leading-[0.98] tracking-tight mb-4">
              How we{" "}
              <span className="gradient-text relative inline-block">
                deliver
                <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-light to-transparent rounded-full" />
              </span>
              .
            </h2>

            <p className="text-sm md:text-base text-text-light-muted leading-relaxed max-w-2xl">
              Four disciplined phases, one bar of quality — engineered for transparency, speed, and measurable outcomes.
            </p>
          </ScrollReveal>

          {/* Mini-summary card */}
          <ScrollReveal
            className="lg:col-span-4 lg:pl-6 lg:border-l lg:border-white/10"
            delay={0.1}
          >
            <div className="flex flex-wrap items-end gap-x-8 gap-y-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/40 font-semibold mb-1">
                  Typical Engagement
                </p>
                <p className="font-heading text-2xl lg:text-3xl font-black text-white leading-tight">
                  6 – 16 weeks
                </p>
              </div>
              <div className="flex gap-6">
                <div>
                  <p className="font-heading text-xl lg:text-2xl font-black text-white leading-tight">
                    4
                  </p>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest">
                    Phases
                  </p>
                </div>
                <div>
                  <p className="font-heading text-xl lg:text-2xl font-black text-white leading-tight">
                    100%
                  </p>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest">
                    Transparent
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Timeline / Steps (compact single-row cards) ── */}
        <div className="relative">
          {/* Horizontal connector (aligned with inline icons inside card header) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-9 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {approach.map((item, i) => {
              const meta = stepMeta[i];
              const Icon = meta.icon;
              return (
                <ScrollReveal key={item.step} delay={i * 0.06}>
                  <div className="group relative h-full">
                    <div className="relative bg-card-dark/60 backdrop-blur-sm border border-card-dark-border rounded-xl p-5 lg:p-6 h-full hover:border-accent/30 hover:bg-card-dark/80 transition-all duration-500 overflow-hidden">
                      {/* Top gradient bar */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                      {/* Card header row: icon + step number + phase marker */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="relative w-12 h-12">
                          <div className="absolute inset-0 rounded-lg border border-accent/20 group-hover:border-accent/60 transition-colors duration-500" />
                          <div className="absolute inset-1 rounded-md bg-gradient-to-br from-card-dark via-card-dark/80 to-dark-primary border border-card-dark-border group-hover:from-accent/15 group-hover:to-card-dark transition-all duration-500 flex items-center justify-center">
                            <Icon
                              size={18}
                              className="text-accent-light group-hover:scale-110 transition-transform duration-500"
                              strokeWidth={1.7}
                            />
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-heading text-4xl font-black text-white/[0.08] group-hover:text-accent/25 leading-none transition-colors duration-500 block">
                            {item.step}
                          </span>
                          <span className="font-mono text-[9px] text-white/25 tracking-widest">
                            PHASE/{item.step}
                          </span>
                        </div>
                      </div>

                      <p className="text-[9.5px] uppercase tracking-[0.22em] text-accent-light font-semibold mb-1.5">
                        {meta.tagline}
                      </p>
                      <h3 className="font-heading text-base lg:text-lg font-bold text-white mb-2 tracking-tight leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-text-light-muted text-[12px] leading-[1.55] mb-4 line-clamp-3">
                        {item.description}
                      </p>

                      {/* Deliverables (3 compact items) */}
                      <div className="pt-4 border-t border-white/10">
                        <ul className="space-y-1.5 mb-3">
                          {meta.deliverables.map((d) => (
                            <li
                              key={d}
                              className="flex items-start gap-1.5 text-[11.5px] text-text-light-muted leading-snug"
                            >
                              <CheckCircle2
                                size={10}
                                className="text-accent-light mt-[3px] flex-shrink-0"
                                strokeWidth={2.4}
                              />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Duration chip */}
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-text-light-muted">
                          <Clock size={9} className="text-accent-light" />
                          <span className="tracking-wide">{meta.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
