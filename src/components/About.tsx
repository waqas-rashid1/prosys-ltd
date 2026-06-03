"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Users, Rocket } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import SpotlightCard from "./ui/SpotlightCard";

// `certifications` and the corresponding badge row are commented out in the
// JSX below until formal audits complete. Re-enable both when ready.

const pillars = [
  { icon: Target, label: "Production, not demos", desc: "We focus on AI that reaches real operations — connected to workflows, integrated with systems, and measured after launch, not just impressive in a pilot." },
  { icon: Users, label: "Safe by design", desc: "Permissions, approvals, audit logs, and human oversight are designed in from the start, so AI stays controlled and auditable in day-to-day use." },
  { icon: Rocket, label: "End-to-end ownership", desc: "From readiness and strategy through build, governance, integration, security, and monitoring — one accountable team across the full AI lifecycle." },
];

const orbitTags = [
  { label: "Agents", pos: "top-[10%] left-[8%]", delay: 0 },
  { label: "Governance", pos: "top-[12%] right-[10%]", delay: 0.8 },
  { label: "RAG", pos: "bottom-[18%] right-[6%]", delay: 1.6 },
  { label: "Security", pos: "bottom-[10%] left-[14%]", delay: 2.4 },
  { label: "Integration", pos: "top-[44%] -left-2", delay: 1.2 },
  { label: "Monitoring", pos: "top-[50%] -right-2", delay: 2.0 },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative flex items-center bg-dark-secondary overflow-hidden py-20 lg:py-28"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.08]" style={{ background: "radial-gradient(circle, rgba(103,232,249,0.5) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.06]" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.6) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        {/* Editorial rail */}
        <div className="flex items-center gap-3 mb-6 lg:mb-8">
          <span className="text-[10px] text-accent-light/60 uppercase tracking-[0.35em] font-semibold">/ Who We Are</span>
          <span className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-accent-light/40 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left column — copy */}
          <ScrollReveal className="lg:col-span-7">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-black text-white mb-6 leading-[1.02] tracking-tight">
              Safe AI deployment.{" "}
              <br />
              <span className="gradient-text">Real operations.</span>
            </h2>

            <p className="text-base md:text-lg text-text-light-muted leading-relaxed mb-5 max-w-2xl">
              PROSYS LTD helps companies deploy AI safely into real business operations —
              from pilots to production. We build secure agents, governed workflows,
              enterprise knowledge systems, integrations, and the controls that make AI
              dependable in day-to-day use.
            </p>
            <p className="text-sm md:text-base text-text-light-muted/80 leading-relaxed mb-8 max-w-2xl">
              Most AI initiatives stall after the demo. We focus on the operational layer —
              permissions, approvals, audit logs, integrations, testing, and monitoring —
              so AI moves past the proof of concept and keeps working once real users and
              real data depend on it.
            </p>

            {/* Three pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <SpotlightCard
                    key={p.label}
                    variant="dark"
                    className="group p-4 bg-card-dark/50 border border-card-dark-border hover:border-accent/40 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light mb-3 group-hover:bg-accent group-hover:text-white transition-colors">
                      <Icon size={15} />
                    </div>
                    <div className="font-heading text-sm font-bold text-white mb-1">{p.label}</div>
                    <div className="text-[11px] text-text-light-muted/80 leading-snug">{p.desc}</div>
                  </SpotlightCard>
                );
              })}
            </div>

            {/* Certifications row — hidden until full audits are complete */}
            {/*
            <div className="pt-6 border-t border-card-dark-border mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold mr-2">Aligned With</span>
                {certifications.map((cert) => (
                  <div
                    key={cert.label}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-card-dark/60 border border-card-dark-border hover:border-accent/30 transition-colors"
                  >
                    <Image src={cert.logo} alt={cert.label} width={12} height={12} className="w-3 h-3 opacity-60" />
                    <span className="text-[10px] text-text-light-muted font-medium whitespace-nowrap">{cert.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-white/40 leading-relaxed max-w-2xl">
                Our processes are aligned to these standards and partner programs. Full certification audits are in progress &mdash; references and audit documentation available on request.
              </p>
            </div>
            */}

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-semibold rounded-md bg-white text-dark-primary hover:bg-accent hover:text-white px-6 py-3.5 text-xs uppercase tracking-widest transition-all duration-300"
              >
                Our Story
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-medium rounded-md border border-white/20 text-white hover:border-white/60 hover:bg-white/5 px-6 py-3.5 text-xs uppercase tracking-widest transition-all duration-300"
              >
                Work With Us
              </Link>
            </div>
          </ScrollReveal>

          {/* Right column — visual */}
          <ScrollReveal delay={0.2} direction="right" className="lg:col-span-5">
            <div className="relative aspect-square max-w-[520px] mx-auto">
              {/* Rotating rings */}
              <div className="absolute inset-0 rounded-full border border-accent/10 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-10 rounded-full border border-accent/15 animate-[spin_30s_linear_infinite_reverse]" />
              <div className="absolute inset-20 rounded-full border border-accent/20 animate-[spin_22s_linear_infinite]" />
              <div className="absolute inset-28 rounded-full border border-dashed border-accent/25" />

              {/* Center emblem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 gradient-bg rotate-45 opacity-20 blur-xl" />
                <div className="absolute w-28 h-28 lg:w-32 lg:h-32 gradient-bg rotate-45 flex items-center justify-center shadow-[0_0_60px_rgba(103,232,249,0.35)]">
                  <div className="-rotate-45 text-center">
                    <div className="font-heading text-3xl font-black text-white leading-none tracking-tighter">PRO</div>
                    <div className="text-[9px] text-white/80 uppercase tracking-[0.3em] mt-1 font-semibold">Sys</div>
                  </div>
                </div>
              </div>

              {/* Orbital dots */}
              <motion.div className="absolute top-[22%] right-[18%] w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(103,232,249,0.8)]" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} />
              <motion.div className="absolute bottom-[26%] left-[18%] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]" animate={{ y: [0, 8, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }} />

              {/* Orbit tags */}
              {orbitTags.map((t) => (
                <motion.div
                  key={t.label}
                  className={`absolute ${t.pos} px-2.5 py-1 rounded-md bg-card-dark/90 backdrop-blur-sm border border-card-dark-border shadow-lg`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: t.delay * 0.15 + 0.3, duration: 0.5 }}
                >
                  <span className="text-[10px] text-accent-light font-semibold tracking-wider uppercase">{t.label}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
