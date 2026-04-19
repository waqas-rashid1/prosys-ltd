"use client";

import Link from "next/link";
import {
  Compass,
  Layers,
  Code2,
  Rocket,
  ArrowRight,
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
      "Product thesis & success metrics",
      "User research & personas",
      "Technical feasibility audit",
      "Prioritised roadmap",
    ],
  },
  {
    icon: Layers,
    tagline: "Plan for scale",
    duration: "1–2 weeks",
    deliverables: [
      "System architecture diagrams",
      "Tech stack decisions",
      "Design system & UI kit",
      "API & data contracts",
    ],
  },
  {
    icon: Code2,
    tagline: "Ship in sprints",
    duration: "4–12 weeks",
    deliverables: [
      "Two-week delivery cadence",
      "Weekly demos & code reviews",
      "Automated tests & CI/CD",
      "Inline documentation",
    ],
  },
  {
    icon: Rocket,
    tagline: "Grow post-launch",
    duration: "Ongoing",
    deliverables: [
      "Zero-downtime deployment",
      "Observability & SRE setup",
      "SEO · AIEO · Analytics",
      "Quarterly roadmap reviews",
    ],
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative min-h-screen flex flex-col justify-center bg-dark-primary overflow-hidden"
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

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 w-full py-24 lg:py-28">
        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 lg:mb-20 items-end">
          <ScrollReveal className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[11px] text-white/30 tracking-[0.2em] uppercase">
                / The Process
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent max-w-[200px]" />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/10 backdrop-blur-sm mb-6">
              <Sparkles size={12} className="text-accent-light" />
              <span className="text-[11px] text-accent-light tracking-[0.18em] font-semibold uppercase">
                Our Methodology
              </span>
            </div>

            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] font-black text-white leading-[0.98] tracking-tight mb-6">
              How we{" "}
              <span className="gradient-text relative inline-block">
                deliver
                <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-accent-light to-transparent rounded-full" />
              </span>
              .
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-text-light-muted leading-relaxed max-w-2xl">
              Four disciplined phases, one bar of quality. A proven, agile methodology engineered for transparency, speed, and outcomes you can measure.
            </p>
          </ScrollReveal>

          {/* Mini-summary card */}
          <ScrollReveal
            className="lg:col-span-4 lg:pl-6 lg:border-l lg:border-white/10"
            delay={0.1}
          >
            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/40 font-semibold mb-2">
                  Typical Engagement
                </p>
                <p className="font-heading text-3xl font-black text-white leading-tight mb-1">
                  6 – 16 weeks
                </p>
                <p className="text-sm text-text-light-muted">
                  From kickoff to production launch.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-5 border-t border-white/10">
                <div>
                  <p className="font-heading text-2xl font-black text-white">
                    4
                  </p>
                  <p className="text-[11px] text-white/50 uppercase tracking-widest">
                    Phases
                  </p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-black text-white">
                    100%
                  </p>
                  <p className="text-[11px] text-white/50 uppercase tracking-widest">
                    Transparent
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Timeline / Steps ── */}
        <div className="relative">
          {/* Horizontal connector line (desktop) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[92px] left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {approach.map((item, i) => {
              const meta = stepMeta[i];
              const Icon = meta.icon;
              return (
                <ScrollReveal key={item.step} delay={i * 0.08}>
                  <div className="group relative h-full">
                    {/* Icon node */}
                    <div className="relative flex items-center justify-center mb-6">
                      <div className="relative w-20 h-20">
                        {/* Outer ring */}
                        <div className="absolute inset-0 rounded-2xl border border-accent/20 group-hover:border-accent/60 transition-colors duration-500" />
                        {/* Inner plate */}
                        <div className="absolute inset-1.5 rounded-xl bg-gradient-to-br from-card-dark via-card-dark/80 to-dark-primary border border-card-dark-border group-hover:from-accent/15 group-hover:to-card-dark transition-all duration-500 flex items-center justify-center">
                          <Icon
                            size={26}
                            className="text-accent-light group-hover:scale-110 transition-transform duration-500"
                            strokeWidth={1.6}
                          />
                        </div>
                        {/* Pulse dot */}
                        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-accent-light shadow-[0_0_12px_rgba(52,211,153,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>

                    {/* Card */}
                    <div className="relative bg-card-dark/60 backdrop-blur-sm border border-card-dark-border rounded-xl p-7 lg:p-8 h-[calc(100%-6.5rem)] hover:border-accent/30 hover:bg-card-dark/80 transition-all duration-500 overflow-hidden">
                      {/* Top gradient bar */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                      {/* Watermark number */}
                      <span className="font-mono absolute top-5 right-5 text-[11px] text-white/25 tracking-widest">
                        PHASE/{item.step}
                      </span>

                      <div className="flex items-baseline gap-3 mb-4">
                        <span className="font-heading text-6xl font-black text-white/[0.06] group-hover:text-accent/20 leading-none transition-colors duration-500">
                          {item.step}
                        </span>
                      </div>

                      <p className="text-[10px] uppercase tracking-[0.22em] text-accent-light font-semibold mb-2">
                        {meta.tagline}
                      </p>
                      <h3 className="font-heading text-xl lg:text-[22px] font-bold text-white mb-3 tracking-tight leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-text-light-muted text-[13px] leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Deliverables */}
                      <div className="pt-5 border-t border-white/10">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-white/40 font-semibold mb-3">
                          Deliverables
                        </p>
                        <ul className="space-y-2 mb-5">
                          {meta.deliverables.map((d) => (
                            <li
                              key={d}
                              className="flex items-start gap-2 text-[12.5px] text-text-light-muted leading-snug"
                            >
                              <CheckCircle2
                                size={12}
                                className="text-accent-light mt-[3px] flex-shrink-0"
                                strokeWidth={2.2}
                              />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Duration chip */}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-text-light-muted">
                          <Clock size={10} className="text-accent-light" />
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

        {/* ── Bottom CTA strip ── */}
        <ScrollReveal>
          <div className="mt-14 lg:mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-7 lg:p-8 rounded-xl border border-card-dark-border bg-card-dark/40 backdrop-blur-sm">
            <div className="flex items-start md:items-center gap-5">
              <div className="hidden md:flex w-12 h-12 rounded-md bg-accent/15 border border-accent/25 items-center justify-center text-accent-light flex-shrink-0">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="font-heading text-lg lg:text-xl font-bold text-white mb-1 tracking-tight">
                  Ready to kick off discovery?
                </p>
                <p className="text-sm text-text-light-muted">
                  Book a 30-minute strategy call with a senior engineer — no commitment.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 font-semibold rounded-md bg-white text-dark-primary hover:bg-accent hover:text-white px-7 py-3.5 text-xs uppercase tracking-widest transition-all duration-300"
              >
                Start a Project
                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 font-medium rounded-md border border-white/20 text-white hover:border-accent/60 hover:bg-accent/10 px-7 py-3.5 text-xs uppercase tracking-widest transition-all duration-300"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
