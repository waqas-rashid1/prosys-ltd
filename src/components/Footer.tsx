"use client";

import Link from "next/link";
import {
  ArrowUp,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Clock,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { LinkedInIcon, XIcon, GitHubIcon, YouTubeIcon } from "./ui/SocialIcons";
import NewsletterForm from "./NewsletterForm";
import { siteConfig, footerLinks } from "@/lib/constants";

const pillars: { heading: string; key: keyof typeof footerLinks }[] = [
  { heading: "Product Engineering", key: "productEngineering" },
  { heading: "AI & Automation", key: "aiAndAutomation" },
  { heading: "Cloud & Platform", key: "cloudAndPlatform" },
  { heading: "Growth & Marketing", key: "growthAndMarketing" },
];

const trustPoints = [
  { icon: Clock, label: "24-hour response" },
  { icon: ShieldCheck, label: "NDA on request" },
  { icon: Globe, label: "12+ countries served" },
  { icon: Sparkles, label: "Senior engineers only" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative min-h-screen flex flex-col bg-dark-primary border-t border-card-dark-border overflow-hidden">
      {/* Decorative layer */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] opacity-40 animate-pulse-glow"
          style={{
            background:
              "radial-gradient(ellipse at center top, rgba(12,108,54,0.55) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 -left-32 w-[520px] h-[520px] rounded-full blur-[140px] opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(12,108,54,0.3) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[620px] h-[620px] rounded-full blur-[180px]"
          style={{
            background:
              "radial-gradient(circle, rgba(52,211,153,0.14) 0%, transparent 70%)",
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

      {/* ── Massive CTA block ───────────────────────────────────────── */}
      <section className="relative z-10 border-b border-card-dark-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 pt-20 lg:pt-28 pb-16 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/10 backdrop-blur-sm mb-8">
                <Sparkles size={12} className="text-accent-light" />
                <span className="text-[11px] text-accent-light tracking-[0.18em] font-semibold uppercase">
                  Ready to Build?
                </span>
              </div>

              <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] font-black text-white leading-[0.98] tracking-tight mb-8">
                Let&apos;s build something{" "}
                <span className="gradient-text relative inline-block">
                  extraordinary.
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-light to-transparent" />
                </span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-text-light-muted leading-relaxed max-w-2xl mb-10">
                From first conversation to production-ready launch — we bring senior engineering, applied AI, and growth discipline to every engagement.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 font-semibold rounded-md bg-white text-dark-primary hover:bg-accent hover:text-white px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300"
                >
                  Start a project
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href="https://cal.com/prosysltd/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-medium rounded-md border border-white/25 text-white hover:border-white/60 hover:bg-white/5 px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300"
                >
                  Book a call
                </a>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-text-light-muted/80">
                {trustPoints.map((t) => {
                  const Icon = t.icon;
                  return (
                    <span key={t.label} className="flex items-center gap-2">
                      <Icon size={13} className="text-accent-light" />
                      {t.label}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Newsletter card */}
            <div className="lg:col-span-4">
              <div className="bg-card-dark/60 backdrop-blur-sm border border-card-dark-border rounded-lg p-7">
                <p className="text-[11px] uppercase tracking-[0.2em] text-accent-light font-semibold mb-3">
                  Field Notes
                </p>
                <h3 className="font-heading text-xl font-bold text-white mb-2 leading-tight">
                  Engineering insights, monthly.
                </h3>
                <p className="text-text-light-muted text-sm leading-relaxed mb-5">
                  Architecture patterns, AI in production, and growth tactics. No noise.
                </p>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mega link grid ──────────────────────────────────────────── */}
      <section className="relative z-10 border-b border-card-dark-border flex-1">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-3">
              <Link href="/" className="inline-flex items-baseline gap-2 mb-5">
                <span className="font-heading text-2xl font-black tracking-tight text-white">
                  PROSYS
                </span>
                <span className="text-white/40 text-[11px] font-medium tracking-[0.2em] border-l border-white/15 pl-2">
                  LTD
                </span>
              </Link>
              <p className="text-sm text-text-light-muted leading-relaxed mb-6 max-w-xs">
                Enterprise-grade product engineering, AI, and growth systems — delivered by senior teams.
              </p>

              <div className="space-y-3 text-sm mb-7">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 text-text-light-muted hover:text-accent-light transition-colors group"
                >
                  <Mail size={14} className="text-accent-light" />
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2.5 text-text-light-muted hover:text-accent-light transition-colors"
                >
                  <Phone size={14} className="text-accent-light" />
                  +92 300 123 4567
                </a>
                <div className="flex items-start gap-2.5 text-text-light-muted">
                  <MapPin size={14} className="text-accent-light mt-0.5" />
                  <span>{siteConfig.address} · Global Delivery</span>
                </div>
              </div>

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
                      className="w-9 h-9 rounded-md border border-card-dark-border flex items-center justify-center text-text-light-muted hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
                      aria-label={`Follow on ${social.name}`}
                    >
                      <Icon size={15} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Capability pillars */}
            {pillars.map((p) => (
              <div key={p.key} className="lg:col-span-2">
                <h4 className="font-heading text-[11px] font-bold text-white tracking-[0.18em] uppercase mb-5 pb-3 border-b border-card-dark-border">
                  {p.heading}
                </h4>
                <ul className="space-y-2.5">
                  {footerLinks[p.key].map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-text-light-muted hover:text-accent-light transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Company + Resources stacked */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h4 className="font-heading text-[11px] font-bold text-white tracking-[0.18em] uppercase mb-5 pb-3 border-b border-card-dark-border">
                  Company
                </h4>
                <ul className="space-y-2.5">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-text-light-muted hover:text-accent-light transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-heading text-[11px] font-bold text-white tracking-[0.18em] uppercase mb-5 pb-3 border-b border-card-dark-border">
                  Resources
                </h4>
                <ul className="space-y-2.5">
                  {footerLinks.resources.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-text-light-muted hover:text-accent-light transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom bar ──────────────────────────────────────────────── */}
      <div className="relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-text-light-muted/70">
            <span>
              &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
            </span>
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-accent-light transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/sitemap.xml"
              className="hover:text-accent-light transition-colors"
            >
              Sitemap
            </Link>
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs text-text-light-muted hover:text-accent-light transition-colors cursor-pointer uppercase tracking-widest"
            aria-label="Scroll back to top"
          >
            Back to top
            <span className="w-8 h-8 rounded-md border border-card-dark-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
