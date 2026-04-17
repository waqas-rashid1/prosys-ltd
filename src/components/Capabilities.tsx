"use client";

import { ShieldCheck, Users, Clock, Code2, GitBranch, Lock } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const capabilities = [
  {
    icon: ShieldCheck,
    label: "ISO / SOC 2 aligned",
    desc: "Security-aligned processes modeled on ISO 27001 and SOC 2. Formal certification on our roadmap.",
  },
  {
    icon: Users,
    label: "Senior engineers only",
    desc: "No junior hand-offs. Every engagement is staffed by experienced product engineers.",
  },
  {
    icon: Clock,
    label: "4-week delivery cycles",
    desc: "Two-week sprints with continuous delivery. Demo, feedback, iterate — predictable pace.",
  },
  {
    icon: Code2,
    label: "Modern engineering stack",
    desc: "TypeScript, Next.js, Python, Go, AWS, GCP, and battle-tested open-source foundations.",
  },
  {
    icon: GitBranch,
    label: "GitFlow + IaC",
    desc: "Trunk-based workflows, infrastructure as code, automated CI/CD, and observability by default.",
  },
  {
    icon: Lock,
    label: "NDA ready",
    desc: "NDA + MSA signed pre-engagement. Confidentiality is standard — not an upsell.",
  },
];

export default function Capabilities() {
  return (
    <section className="py-20 lg:py-28 bg-dark-secondary border-y border-card-dark-border relative overflow-hidden grain-overlay">
      <div className="absolute inset-0 pointer-events-none opacity-60" style={{ background: "radial-gradient(ellipse 800px 400px at 50% 0%, rgba(12,108,54,0.12) 0%, transparent 60%)" }} />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mb-14">
            <p className="text-[11px] text-accent-light uppercase tracking-[0.25em] font-semibold mb-4">
              How we deliver
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-5">
              Enterprise discipline. <br className="hidden md:inline" />Startup velocity.
            </h2>
            <p className="text-base md:text-lg text-text-light-muted leading-relaxed">
              Every engagement runs on a documented delivery framework — compliance-aligned, senior-staffed, and optimized for measurable outcomes over activity.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-card-dark-border border border-card-dark-border">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <ScrollReveal key={cap.label} delay={i * 0.05}>
                <div className="group bg-dark-secondary hover:bg-card-dark p-8 h-full transition-colors duration-300 relative">
                  <div className="absolute top-0 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-700" />
                  <div className="w-11 h-11 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-2">{cap.label}</h3>
                  <p className="text-sm text-text-light-muted leading-relaxed">{cap.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
