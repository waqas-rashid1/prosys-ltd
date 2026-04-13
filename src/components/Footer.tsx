"use client";

import Link from "next/link";
import { ArrowUp, ArrowRight } from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-primary border-t border-card-dark-border">
      {/* Newsletter */}
      <div className="border-b border-card-dark-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-light tracking-wide mb-2">
                Subscribe
              </h3>
              <p className="text-text-light-muted">
                Stay updated on how the future of technology is shaping.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full lg:w-auto gap-3"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow lg:w-80 px-5 py-3 rounded-full border border-card-dark-border bg-card-dark text-text-light placeholder:text-text-light-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all text-sm"
              />
              <button
                type="submit"
                className="gradient-bg text-dark-primary px-6 py-3 rounded-full font-medium text-sm hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 cursor-pointer flex items-center gap-2 flex-shrink-0"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading text-2xl font-bold tracking-wider">
                <span className="text-accent">PRO</span>
                <span className="text-text-light">SYS</span>
                <span className="text-text-light-muted text-xs ml-1">LTD</span>
              </span>
            </Link>
            <p className="text-text-light-muted leading-relaxed mb-6 max-w-sm text-sm">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3">
              {[
                { label: "Li", name: "LinkedIn" },
                { label: "X", name: "Twitter" },
                { label: "Gh", name: "GitHub" },
                { label: "Yt", name: "YouTube" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-card-dark-border flex items-center justify-center text-text-light-muted hover:text-accent hover:border-accent/40 transition-all duration-300 text-xs font-bold tracking-wide"
                  aria-label={social.name}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-text-light tracking-widest uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-text-light-muted hover:text-accent transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-text-light tracking-widest uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-text-light-muted hover:text-accent transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-text-light tracking-widest uppercase mb-5">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-text-light-muted hover:text-accent transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-card-dark-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs text-text-light-muted">
            <span>&copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</span>
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs text-text-light-muted hover:text-accent transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            Back to top
            <span className="w-8 h-8 rounded-lg border border-card-dark-border flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
