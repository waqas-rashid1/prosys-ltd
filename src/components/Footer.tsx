"use client";

import { ArrowUp } from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-primary border-t border-card-dark-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-4">
              <span className="font-heading text-2xl font-bold tracking-wider">
                <span className="text-accent">PRO</span>
                <span className="text-text-light">SYS</span>
                <span className="text-text-light-muted text-xs ml-1">LTD</span>
              </span>
            </a>
            <p className="text-text-light-muted leading-relaxed mb-6 max-w-sm">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3">
              {[
                { label: "Li", href: "#", name: "LinkedIn" },
                { label: "X", href: "#", name: "Twitter" },
                { label: "Gh", href: "#", name: "GitHub" },
                { label: "Yt", href: "#", name: "YouTube" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 rounded-lg border border-card-dark-border flex items-center justify-center text-text-light-muted hover:text-accent hover:border-accent/40 transition-all duration-300 text-xs font-bold tracking-wide"
                  aria-label={social.name}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-heading text-sm font-bold text-text-light tracking-widest uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-light-muted hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-text-light tracking-widest uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-light-muted hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-text-light tracking-widest uppercase mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-light-muted hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-card-dark-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-light-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs text-text-light-muted hover:text-accent transition-colors cursor-pointer"
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
