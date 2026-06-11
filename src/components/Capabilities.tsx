"use client";

import { ShieldCheck, UserCheck, Activity, Blocks, FlaskConical, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";

const capabilities = [
  {
    num: "01",
    icon: ShieldCheck,
    label: "Safe by design",
    desc: "Permissions, approval workflows, audit logs, escalation paths, and kill switches are designed in from the start — so AI stays controlled and auditable in real operations, not just impressive in a demo.",
    tag: "Governance",
  },
  {
    num: "02",
    icon: UserCheck,
    label: "Human-in-the-loop",
    desc: "Sensitive actions pass through human review and approval gates. AI accelerates the work without taking unreviewed actions on business-critical processes.",
    tag: "Oversight",
  },
  {
    num: "03",
    icon: Lock,
    label: "Permission-aware data",
    desc: "Knowledge systems and integrations respect access boundaries. Each user only retrieves and sees the data they are authorized to access, with source citations.",
    tag: "Security",
  },
  {
    num: "04",
    icon: Blocks,
    label: "Built to integrate",
    desc: "AI connected to the CRMs, ERPs, helpdesks, databases, and legacy tools your business already runs on — with proper authentication and documented data flows.",
    tag: "Integration",
  },
  {
    num: "05",
    icon: FlaskConical,
    label: "Tested before launch",
    desc: "Red-team testing for prompt injection, data leakage, unsafe actions, and tool misuse, with guardrails and fallback behavior implemented against the failures found.",
    tag: "Testing",
  },
  {
    num: "06",
    icon: Activity,
    label: "Monitored after launch",
    desc: "Quality, cost, latency, failures, and escalation rates tracked in production — with a monthly improvement roadmap so AI keeps working as data and users change.",
    tag: "Monitoring",
  },
];

const proof = [
  { value: "6", label: "Core AI services" },
  { value: "6–12w", label: "Controlled production release" },
  { value: "HITL", label: "Oversight by design" },
  { value: "6", label: "Industries served" },
];

export default function Capabilities() {
  return (
    <section className="relative flex items-center bg-dark-secondary border-y border-card-dark-border overflow-hidden">
      {/* Ambient layers */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-3xl opacity-40" style={{ background: "radial-gradient(ellipse, rgba(6,182,212,0.18) 0%, transparent 60%)" }} />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle, rgba(103,232,249,0.12) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full py-14 lg:py-20">
        {/* Editorial rail */}
        <div className="flex items-center gap-3 mb-6 lg:mb-8">
          <span className="text-[10px] text-accent-light/60 uppercase tracking-[0.35em] font-semibold">/ How We Deliver</span>
          <span className="h-px flex-1 max-w-[160px] bg-gradient-to-r from-accent-light/40 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left — intro column */}
          <ScrollReveal className="lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-black text-white leading-[0.98] tracking-tight mb-6">
              Powerful AI.{" "}
              <br />
              Deployed{" "}
              <br />
              <span className="gradient-text">safely.</span>
            </h2>

            <p className="text-base md:text-lg text-text-light-muted leading-relaxed mb-8 max-w-xl">
              Every engagement follows the same operating model: the controls that make
              AI safe — permissions, approvals, audit logs, integrations, testing, and
              monitoring — are designed in from the start, not bolted on after launch.
            </p>

            {/* Proof strip */}
            <div className="grid grid-cols-2 gap-px bg-card-dark-border overflow-hidden border border-card-dark-border mb-8">
              {proof.map((p) => (
                <div key={p.label} className="bg-dark-secondary p-4">
                  <div className="font-heading text-2xl md:text-3xl font-black text-white leading-none mb-1.5 tracking-tight">
                    {p.value}
                  </div>
                  <div className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-semibold">
                    {p.label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm text-white hover:text-accent-light transition-colors font-semibold"
            >
              <span className="uppercase tracking-widest text-[11px]">Explore our capabilities</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>

          {/* Right — capability grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-card-dark-border overflow-hidden border border-card-dark-border">
              {capabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <motion.div
                    key={cap.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                    className="group relative bg-dark-secondary hover:bg-card-dark p-5 lg:p-6 transition-colors duration-300 overflow-hidden"
                  >
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-accent to-accent-light group-hover:w-full transition-all duration-700" />

                    {/* Header row */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                        <Icon size={16} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] text-accent-light/70 uppercase tracking-[0.2em] font-semibold px-2 py-0.5 rounded-full bg-accent/5 border border-accent/15">
                          {cap.tag}
                        </span>
                        <span className="font-heading text-[11px] text-white/30 tracking-widest font-bold group-hover:text-accent-light/60 transition-colors">
                          {cap.num}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-heading text-base lg:text-lg font-bold text-white mb-2 leading-tight">
                      {cap.label}
                    </h3>
                    <p className="text-[13px] text-text-light-muted leading-relaxed">
                      {cap.desc}
                    </p>

                    {/* Bottom subtle arrow on hover */}
                    <div className="mt-4 flex items-center gap-1.5 text-[10px] text-white/0 group-hover:text-accent-light/80 uppercase tracking-widest font-semibold transition-colors">
                      <span>Standard</span>
                      <ArrowRight size={10} />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Compliance badges row */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-3 bg-card-dark/40 border border-card-dark-border"
            >
              <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-semibold">Aligned with:</span>
              {["OWASP LLM Top 10", "NIST AI RMF", "ISO 27001", "SOC 2", "GDPR"].map((s) => (
                <span key={s} className="text-[10px] text-white/60 font-medium tracking-wide">{s}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
