"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUp,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Clock,
  ShieldCheck,
  Globe,
  Send,
} from "lucide-react";
import { LinkedInIcon, XIcon, GitHubIcon, YouTubeIcon } from "./ui/SocialIcons";
import NewsletterForm from "./NewsletterForm";
import MagneticButton from "./ui/MagneticButton";
import { siteConfig, footerLinks } from "@/lib/constants";

const pillars: {
  number: string;
  heading: string;
  tagline: string;
  key: keyof typeof footerLinks;
}[] = [
  {
    number: "01",
    heading: "Strategy & Governance",
    tagline: "Decide and control AI",
    key: "productEngineering",
  },
  {
    number: "02",
    heading: "Build & Knowledge",
    tagline: "Agents and secure knowledge",
    key: "aiAndAutomation",
  },
  {
    number: "03",
    heading: "Integrate & Operate",
    tagline: "Connect, test, and monitor",
    key: "cloudAndPlatform",
  },
  {
    number: "04",
    heading: "Industries",
    tagline: "Deployed by sector",
    key: "growthAndMarketing",
  },
];

const trustPoints = [
  { icon: Clock, label: "24-hour response" },
  { icon: ShieldCheck, label: "NDA on request" },
  { icon: Globe, label: "5 industry verticals" },
  { icon: Sparkles, label: "Engineered for production" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative flex flex-col bg-dark-primary border-t border-card-dark-border overflow-hidden">
      {/* Decorative layer */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-50 animate-pulse-glow"
          style={{
            background:
              "radial-gradient(ellipse at center top, rgba(6,182,212,0.55) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 -left-40 w-[560px] h-[560px] rounded-full blur-[160px] opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.35) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[640px] h-[640px] rounded-full blur-[180px]"
          style={{
            background:
              "radial-gradient(circle, rgba(103,232,249,0.14) 0%, transparent 70%)",
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

      {/* ═══════════════ CTA section ═══════════════ */}
      <section className="relative z-10 border-b border-card-dark-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 pt-24 lg:pt-32 pb-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: headline + CTAs */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[11px] text-white/30 tracking-[0.2em] uppercase">
                  / Epilogue
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
              </div>

              <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] font-black text-white leading-[0.95] tracking-tight mb-8">
                Let&apos;s build
                <br />
                the{" "}
                <span className="headline-highlight">
                  next thing.
                </span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-text-light-muted leading-relaxed max-w-2xl mb-10">
                We help companies move AI from pilot to production — with the controls, integrations, and oversight real operations require. Describe the workflow you want to improve, and we&apos;ll tell you, on the call, whether we&apos;re the right team.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <MagneticButton strength={6}>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 font-semibold rounded-md bg-white text-dark-primary hover:bg-accent hover:text-white px-8 py-4 text-sm uppercase tracking-widest transition-colors duration-200 shadow-lg shadow-accent/10 hover:shadow-accent/30"
                  >
                    Start an engagement
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </MagneticButton>
                <a
                  href="https://cal.com/prosysltd/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 font-medium rounded-md border border-white/25 text-white hover:border-accent/60 hover:bg-accent/10 px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300"
                >
                  Book a 30-min call
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3 pt-8 border-t border-white/10 max-w-2xl">
                {trustPoints.map((t) => {
                  const Icon = t.icon;
                  return (
                    <div key={t.label} className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-md border border-accent/25 bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={12} className="text-accent-light" />
                      </span>
                      <span className="text-[12px] text-text-light-muted leading-tight">
                        {t.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: newsletter card */}
            <div className="lg:col-span-5 lg:pl-6 xl:pl-10 lg:border-l lg:border-white/10">
              <div className="relative bg-gradient-to-br from-card-dark/80 via-card-dark/50 to-card-dark/20 backdrop-blur-sm border border-card-dark-border p-8 lg:p-10 overflow-hidden group">
                {/* Card accent */}
                <div
                  className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-40 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(6,182,212,0.6) 0%, transparent 70%)",
                  }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-accent/15 border border-accent/30 flex items-center justify-center text-accent-light">
                      <Send size={18} />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-semibold">
                      Monthly · No spam
                    </span>
                  </div>

                  <p className="text-[11px] uppercase tracking-[0.22em] text-accent-light font-semibold mb-3">
                    Field Notes
                  </p>
                  <h3 className="font-heading text-2xl lg:text-3xl font-black text-white mb-3 leading-[1.1] tracking-tight">
                    What we shipped. What broke. What&apos;s next.
                  </h3>
                  <p className="text-text-light-muted text-sm leading-relaxed mb-7">
                    One email a month. AI deployment lessons, what worked in production, governance and security gotchas, and patterns for safe AI agents. Written by the engineers actually doing the work.
                  </p>

                  <NewsletterForm />

                  <div className="flex items-center justify-between gap-4 mt-7 pt-6 border-t border-white/10">
                    <div className="flex items-center -space-x-2">
                      {["F", "W", "U", "O", "S"].map((i, idx) => (
                        <span
                          key={idx}
                          className="w-7 h-7 rounded-full border-2 border-dark-primary flex items-center justify-center text-[10px] font-heading font-black bg-gradient-to-br from-accent/40 to-accent/10 text-accent-light"
                          aria-hidden="true"
                        >
                          {i}
                        </span>
                      ))}
                    </div>
                    <span className="text-[11px] text-white/50">
                      Written by the team
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Mega link grid ═══════════════ */}
      <section className="relative z-10 border-b border-card-dark-border flex-1">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-4 lg:pr-8">
              <Link href="/" className="inline-flex items-center mb-6 group" aria-label="PROSYS LTD - Home">
                <div className="relative h-14 w-56 overflow-hidden flex items-center justify-center">
                  <Image
                    src="/prosys-logo.png"
                    alt="PROSYS LTD"
                    width={500}
                    height={500}
                    className="h-[28rem] w-[28rem] max-w-none object-contain transition-opacity duration-300 group-hover:opacity-80"
                  />
                </div>
              </Link>
              <p className="text-[15px] text-text-light-muted leading-relaxed mb-8 max-w-sm">
                We help companies deploy AI safely into real business operations — secure agents, governed workflows, enterprise knowledge systems, integrations, and monitoring.
              </p>

              <ul className="space-y-3.5 text-sm mb-8">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-center gap-3 text-text-light-muted hover:text-white transition-colors"
                  >
                    <span className="w-9 h-9 rounded-md border border-card-dark-border flex items-center justify-center text-accent-light group-hover:border-accent/60 group-hover:bg-accent/10 transition-all">
                      <Mail size={14} />
                    </span>
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="group flex items-center gap-3 text-text-light-muted hover:text-white transition-colors"
                  >
                    <span className="w-9 h-9 rounded-md border border-card-dark-border flex items-center justify-center text-accent-light group-hover:border-accent/60 group-hover:bg-accent/10 transition-all">
                      <Phone size={14} />
                    </span>
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-text-light-muted">
                  <span className="w-9 h-9 rounded-md border border-card-dark-border flex items-center justify-center text-accent-light flex-shrink-0">
                    <MapPin size={14} />
                  </span>
                  <span>{siteConfig.address} · Global Delivery</span>
                </li>
              </ul>

              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/40 font-semibold mb-3">
                  Follow Along
                </p>
                <div className="flex items-center gap-2">
                  {[
                    {
                      icon: LinkedInIcon,
                      href: "https://linkedin.com/company/prosysltd",
                      name: "LinkedIn",
                    },
                    {
                      icon: XIcon,
                      href: "https://x.com/prosysltd",
                      name: "X (Twitter)",
                    },
                    {
                      icon: GitHubIcon,
                      href: "https://github.com/prosysltd",
                      name: "GitHub",
                    },
                    {
                      icon: YouTubeIcon,
                      href: "https://youtube.com/@prosysltd",
                      name: "YouTube",
                    },
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-md border border-card-dark-border flex items-center justify-center text-text-light-muted hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
                        aria-label={`Follow on ${social.name}`}
                      >
                        <Icon size={15} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Capability pillars — 4 column grid */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[11px] text-white/30 tracking-[0.2em] uppercase">
                  / Capabilities
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
                {pillars.map((p) => (
                  <div key={p.key}>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="font-mono text-[10px] text-accent-light/60 tracking-widest">
                        /{p.number}
                      </span>
                    </div>
                    <h4 className="font-heading text-sm font-bold text-white tracking-tight mb-1 leading-tight">
                      {p.heading}
                    </h4>
                    <p className="text-[11px] text-white/40 uppercase tracking-wider mb-5">
                      {p.tagline}
                    </p>
                    <ul className="space-y-2.5">
                      {footerLinks[p.key].map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="group inline-flex items-center gap-1.5 text-[13px] text-text-light-muted hover:text-accent-light transition-colors duration-200"
                          >
                            <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-accent-light transition-colors" />
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary row — Company + Resources as balanced horizontal strips */}
          <div className="mt-16 pt-10 border-t border-card-dark-border grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[11px] text-accent-light/60 tracking-widest">
                  /05
                </span>
                <h4 className="font-heading text-sm font-bold text-white tracking-tight">
                  Company
                </h4>
                <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-[13px] text-text-light-muted hover:text-accent-light transition-colors"
                    >
                      {link.label}
                      <ArrowRight
                        size={11}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[11px] text-accent-light/60 tracking-widest">
                  /06
                </span>
                <h4 className="font-heading text-sm font-bold text-white tracking-tight">
                  Resources
                </h4>
                <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-[13px] text-text-light-muted hover:text-accent-light transition-colors"
                    >
                      {link.label}
                      <ArrowRight
                        size={11}
                        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Bottom bar ═══════════════ */}
      <div className="relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 py-7 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-text-light-muted/70">
            <span>
              &copy; 2024&ndash;{new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
            </span>
            <span className="hidden md:inline text-white/15">·</span>
            {footerLinks.legal.map((link, i) => (
              <span key={link.label} className="flex items-center gap-x-6">
                <Link
                  href={link.href}
                  className="hover:text-accent-light transition-colors"
                >
                  {link.label}
                </Link>
                {i < footerLinks.legal.length - 1 && (
                  <span className="hidden md:inline text-white/15">·</span>
                )}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <span className="hidden sm:flex items-center gap-2 text-[11px] text-white/40 uppercase tracking-[0.2em]">
              <span className="h-2 w-2 rounded-full bg-accent-light animate-pulse" />
              Available for new projects
            </span>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs text-text-light-muted hover:text-accent-light transition-colors cursor-pointer uppercase tracking-widest"
              aria-label="Scroll back to top"
            >
              <span className="hidden sm:inline">Back to top</span>
              <span className="w-9 h-9 rounded-md border border-card-dark-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                <ArrowUp size={14} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
