"use client";

import Link from "next/link";
import { ArrowUp, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { LinkedInIcon, XIcon, GitHubIcon, YouTubeIcon } from "./ui/SocialIcons";
import { siteConfig, footerLinks } from "@/lib/constants";

const pillars: { heading: string; key: keyof typeof footerLinks }[] = [
  { heading: "Product Engineering", key: "productEngineering" },
  { heading: "AI & Automation", key: "aiAndAutomation" },
  { heading: "Cloud & Platform", key: "cloudAndPlatform" },
  { heading: "Growth & Marketing", key: "growthAndMarketing" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-primary border-t border-card-dark-border relative overflow-hidden">
      {/* Ambient green glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-20" style={{ background: "radial-gradient(ellipse at center top, rgba(12,108,54,0.6) 0%, transparent 70%)" }} />

      {/* CTA strip */}
      <div className="relative border-b border-card-dark-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.25em] text-accent-light font-semibold mb-4">Let&apos;s build something that lasts</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight max-w-2xl">
                Ready to ship enterprise-grade software?
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row gap-3 lg:justify-end">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-dark-primary hover:bg-accent hover:text-white font-semibold px-7 py-4 rounded-md text-sm uppercase tracking-widest transition-all duration-300">
                Book a Call
                <ArrowRight size={14} />
              </Link>
              <Link href="/work" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:border-white/60 font-medium px-7 py-4 rounded-md text-sm uppercase tracking-widest transition-all duration-300">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Mega Footer */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-3">
            <Link href="/" className="inline-flex items-baseline gap-2 mb-5">
              <span className="font-heading text-2xl font-black tracking-tight text-white">PROSYS</span>
              <span className="text-white/40 text-[11px] font-medium tracking-[0.2em] border-l border-white/15 pl-2">LTD</span>
            </Link>
            <p className="text-sm text-text-light-muted leading-relaxed mb-6 max-w-xs">
              Enterprise-grade product engineering, AI, and growth systems — delivered by senior teams.
            </p>

            <div className="space-y-3 text-sm mb-7">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 text-text-light-muted hover:text-accent-light transition-colors group">
                <Mail size={14} className="text-accent-light" />
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2.5 text-text-light-muted hover:text-accent-light transition-colors">
                <Phone size={14} className="text-accent-light" />
                +92 300 123 4567
              </a>
              <div className="flex items-center gap-2.5 text-text-light-muted">
                <MapPin size={14} className="text-accent-light" />
                {siteConfig.address} · Global Delivery
              </div>
            </div>

            <div className="flex items-center gap-2">
              {[
                { icon: LinkedInIcon, href: "https://linkedin.com/company/prosysltd", name: "LinkedIn" },
                { icon: XIcon, href: "https://x.com/prosysltd", name: "X (Twitter)" },
                { icon: GitHubIcon, href: "https://github.com/prosysltd", name: "GitHub" },
                { icon: YouTubeIcon, href: "https://youtube.com/@prosysltd", name: "YouTube" },
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
                    <Link href={link.href} className="text-[13px] text-text-light-muted hover:text-accent-light transition-colors duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Company column */}
          <div className="lg:col-span-1">
            <h4 className="font-heading text-[11px] font-bold text-white tracking-[0.18em] uppercase mb-5 pb-3 border-b border-card-dark-border">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[13px] text-text-light-muted hover:text-accent-light transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Secondary row — Resources + Newsletter */}
        <div className="mt-14 pt-10 border-t border-card-dark-border grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <h4 className="font-heading text-[11px] font-bold text-white tracking-[0.18em] uppercase mb-4">
              Resources
            </h4>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {footerLinks.resources.map((link) => (
                <Link key={link.label} href={link.href} className="text-[13px] text-text-light-muted hover:text-accent-light transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-card-dark border border-card-dark-border rounded-md p-6 lg:p-7">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-accent-light font-semibold mb-2">Field Notes</p>
                  <h3 className="font-heading text-lg font-bold text-white mb-1">Engineering insights, monthly.</h3>
                  <p className="text-text-light-muted text-xs">Architecture patterns, AI in production, and growth tactics. No noise.</p>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex w-full lg:w-auto gap-2 shrink-0"
                >
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    placeholder="Work email"
                    className="flex-grow lg:w-72 px-4 py-3 rounded-md border border-card-dark-border bg-dark-primary text-text-light placeholder:text-text-light-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all text-sm"
                  />
                  <button
                    type="submit"
                    className="bg-white text-dark-primary hover:bg-accent hover:text-white px-5 py-3 rounded-md font-semibold text-sm transition-all duration-300 cursor-pointer flex items-center gap-2 flex-shrink-0"
                  >
                    Subscribe
                    <ArrowRight size={14} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-card-dark-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-text-light-muted/70">
            <span>&copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</span>
            {footerLinks.legal.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-accent-light transition-colors">
                {link.label}
              </Link>
            ))}
            <Link href="/sitemap.xml" className="hover:text-accent-light transition-colors">Sitemap</Link>
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
