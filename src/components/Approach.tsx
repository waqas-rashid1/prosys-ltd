"use client";

import {
  Compass,
  Layers,
  Code2,
  Rocket,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { approach } from "@/lib/constants";
import ScrollReveal from "./ui/ScrollReveal";

const stepMeta = [
  {
    icon: Compass,
    tagline: "Define the problem before the solution",
    duration: "1–2 weeks",
    accent: "from-emerald-500/20 to-emerald-500/0",
    deliverables: [
      "Product thesis & success metrics",
      "User research & personas",
      "Feasibility & risk assessment",
    ],
  },
  {
    icon: Layers,
    tagline: "Architecture that survives scale",
    duration: "1–2 weeks",
    accent: "from-cyan-500/20 to-cyan-500/0",
    deliverables: [
      "System architecture",
      "Technology selection & rationale",
      "Design system & component library",
    ],
  },
  {
    icon: Code2,
    tagline: "Reviewable releases at every checkpoint",
    duration: "4–12 weeks",
    accent: "from-violet-500/20 to-violet-500/0",
    deliverables: [
      "Fixed iteration cadence",
      "Stakeholder demos & approval gates",
      "Automated CI/CD pipelines",
    ],
  },
  {
    icon: Rocket,
    tagline: "Operational ownership beyond go-live",
    duration: "Ongoing",
    accent: "from-amber-500/20 to-amber-500/0",
    deliverables: [
      "Zero-downtime deployments",
      "Observability & on-call rotation",
      "SEO · AIEO · analytics programs",
    ],
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="relative bg-dark-primary overflow-hidden py-14 lg:py-20"
    >
      {/* Decorative layer */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-50 animate-pulse-glow"
          style={{
            background:
              "radial-gradient(ellipse at center top, rgba(6,182,212,0.45) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full blur-[140px] opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(103,232,249,0.18) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 -left-32 w-[480px] h-[480px] rounded-full blur-[140px] opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--accent-light) 1px, transparent 1px), linear-gradient(90deg, var(--accent-light) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 w-full">
        {/* ── Editorial header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16 items-end">
          <ScrollReveal className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[10px] text-white/30 tracking-[0.25em] uppercase">
                / The Process
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent max-w-[160px]" />
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5rem] font-black text-white leading-[0.98] tracking-tight mb-5">
              How we{" "}
              <span className="headline-highlight">deliver</span>
              .
            </h2>

            <p className="text-base md:text-lg text-text-light-muted leading-relaxed max-w-2xl">
              Four phases, applied consistently across engagements. Scope, deliverables,
              and commercials are defined before the build begins — no mystery
              deliverables, no surprise invoices.
            </p>
          </ScrollReveal>

          {/* Mini-summary card — redesigned */}
          <ScrollReveal className="lg:col-span-5" delay={0.1}>
            <div className="relative p-5 lg:p-6 border border-card-dark-border bg-gradient-to-br from-card-dark/80 to-dark-secondary/60 backdrop-blur-sm overflow-hidden">
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-30"
                style={{ background: "radial-gradient(circle, rgba(103,232,249,0.4) 0%, transparent 70%)" }}
                aria-hidden="true"
              />
              <div className="relative">
                <p className="text-[10px] uppercase tracking-[0.25em] text-accent-light/80 font-semibold mb-3">
                  Engagement Profile
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="font-heading text-2xl lg:text-3xl font-black text-white leading-none tracking-tight mb-1.5">
                      6–16
                    </p>
                    <p className="text-[10px] text-white/50 uppercase tracking-widest font-semibold">
                      Weeks
                    </p>
                  </div>
                  <div className="pl-4 border-l border-white/10">
                    <p className="font-heading text-2xl lg:text-3xl font-black text-white leading-none tracking-tight mb-1.5">
                      4
                    </p>
                    <p className="text-[10px] text-white/50 uppercase tracking-widest font-semibold">
                      Phases
                    </p>
                  </div>
                  <div className="pl-4 border-l border-white/10">
                    <p className="font-heading text-2xl lg:text-3xl font-black text-white leading-none tracking-tight mb-1.5">
                      50+
                    </p>
                    <p className="text-[10px] text-white/50 uppercase tracking-widest font-semibold">
                      Engagements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Phase cards — richer design ── */}
        <div className="relative">
          {/* Horizontal connector with animated progress */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-[3.25rem] left-[4%] right-[4%] z-0"
          >
            <div className="relative h-px">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-r from-accent via-accent-light to-accent origin-left"
                style={{ boxShadow: "0 0 12px rgba(103,232,249,0.6)" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative z-10">
            {approach.map((item, i) => {
              const meta = stepMeta[i];
              const Icon = meta.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.1, duration: 0.55 }}
                  className="group relative"
                >
                  {/* Subtle ambient glow on hover */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-br ${meta.accent} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none`}
                    aria-hidden="true"
                  />

                  <div className="relative h-full border border-card-dark-border bg-card-dark/80 backdrop-blur-sm overflow-hidden group-hover:border-accent/40 transition-all duration-500">
                    {/* Top gradient bar */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-accent-light to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                    {/* Step node — sits on the connector line */}
                    <div className="relative flex items-center justify-center pt-5">
                      <div className="relative w-14 h-14">
                        {/* Rotating frame */}
                        <div
                          className="absolute inset-0 border border-accent/30 group-hover:border-accent/70 transition-colors duration-500"
                          style={{ transform: "rotate(45deg)" }}
                        />
                        {/* Inner disc */}
                        <div className="absolute inset-[5px] bg-gradient-to-br from-dark-primary via-card-dark to-dark-primary border border-card-dark-border group-hover:from-accent/20 group-hover:via-card-dark group-hover:to-dark-primary transition-all duration-500 flex items-center justify-center">
                          <Icon
                            size={20}
                            strokeWidth={1.7}
                            className="text-accent-light group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        {/* Pulsing ring on hover */}
                        <div className="absolute inset-0 border border-accent/60 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700" />
                      </div>
                    </div>

                    {/* Phase number + marker */}
                    <div className="flex items-center justify-between px-6 pt-4 pb-2">
                      <span className="font-mono text-[9px] text-white/40 tracking-[0.25em] uppercase">
                        Phase · {item.step}
                      </span>
                      <span className="font-heading text-[10px] text-accent-light/50 tracking-widest uppercase font-bold">
                        Step {i + 1} of 4
                      </span>
                    </div>

                    <div className="px-6 pb-6">
                      {/* Big number watermark */}
                      <div className="relative mb-3">
                        <span
                          className="absolute -top-2 right-0 font-heading text-6xl font-black text-white/[0.04] group-hover:text-accent/15 leading-none transition-colors duration-500 pointer-events-none"
                          aria-hidden="true"
                        >
                          {item.step}
                        </span>
                        <p className="relative text-[10px] uppercase tracking-[0.22em] text-accent-light font-bold mb-2">
                          {meta.tagline}
                        </p>
                        <h3 className="relative font-heading text-lg lg:text-xl font-bold text-white tracking-tight leading-tight">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-text-light-muted text-[13px] leading-relaxed mb-5 line-clamp-3">
                        {item.description}
                      </p>

                      {/* Deliverables */}
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-bold mb-3">
                          Deliverables
                        </p>
                        <ul className="space-y-2 mb-4">
                          {meta.deliverables.map((d) => (
                            <li
                              key={d}
                              className="flex items-start gap-2 text-[12px] text-text-light-muted leading-snug"
                            >
                              <CheckCircle2
                                size={11}
                                className="text-accent-light mt-[3px] flex-shrink-0"
                                strokeWidth={2.4}
                              />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex items-center justify-between">
                          <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-white/70">
                            <Clock size={10} className="text-accent-light" />
                            <span className="tracking-wide font-medium">
                              {meta.duration}
                            </span>
                          </div>
                          {i < approach.length - 1 && (
                            <ArrowRight
                              size={14}
                              className="text-white/20 group-hover:text-accent-light group-hover:translate-x-1 transition-all duration-500"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 lg:mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-5 lg:p-6 border border-card-dark-border bg-card-dark/60 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="relative w-11 h-11 bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <Sparkles size={16} className="text-accent-light" />
                <div className="absolute inset-0 bg-accent/20 blur-xl opacity-60 -z-10" />
              </div>
              <div>
                <p className="font-heading text-base lg:text-lg font-bold text-white leading-tight">
                  Need a scoped plan for your engagement?
                </p>
                <p className="text-[13px] text-text-light-muted mt-0.5">
                  Complimentary 30-minute discovery call with a delivery lead.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-dark-primary hover:bg-accent hover:text-white transition-colors font-semibold text-xs uppercase tracking-widest whitespace-nowrap"
              >
                Start an engagement
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/20 text-white hover:border-white/50 hover:bg-white/5 transition-colors font-medium text-xs uppercase tracking-widest whitespace-nowrap"
              >
                See case studies
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
