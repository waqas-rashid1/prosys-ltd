"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/constants";

const servicesMega = {
  columns: [
    {
      heading: "Development",
      items: [
        { label: "Web Development", desc: "Next.js, React, full-stack", href: "/services/web-development" },
        { label: "Software Development", desc: "Enterprise-grade systems", href: "/services/software-development" },
        { label: "MVP Development", desc: "Idea to launch in weeks", href: "/services/mvp-development" },
        { label: "SaaS Development", desc: "Multi-tenant platforms", href: "/services/saas-development" },
      ],
    },
    {
      heading: "AI & Automation",
      items: [
        { label: "AI Development", desc: "Custom models & LLM integrations", href: "/services/ai-development" },
        { label: "AI Automations", desc: "Workflows & AI agents", href: "/services/ai-automations" },
      ],
    },
    {
      heading: "Growth",
      items: [
        { label: "SEO", desc: "Technical & on-page optimization", href: "/services/seo" },
        { label: "AIEO", desc: "Rank on AI search engines", href: "/services/aieo" },
        { label: "Digital Marketing", desc: "Full-funnel campaigns", href: "/services/digital-marketing" },
        { label: "Graphics & Branding", desc: "Visual identity & design", href: "/services/graphics-branding" },
      ],
    },
  ],
  featured: {
    badge: "Popular",
    title: "MVP Development",
    desc: "Validate your idea with an investor-ready MVP in 4-8 weeks.",
    href: "/services/mvp-development",
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();
  const megaRef = useRef<HTMLDivElement>(null);
  const megaTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  const handleMegaEnter = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  };

  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark-primary/95 glass-effect shadow-lg shadow-black/20"
            : "bg-dark-primary/70 glass-effect"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-1 group">
              <span className="font-heading text-2xl font-bold tracking-wider">
                <span className="text-accent group-hover:text-accent-hover transition-colors duration-300">PRO</span>
                <span className="text-text-light">SYS</span>
              </span>
              <span className="text-text-light-muted text-xs font-medium tracking-widest ml-1 hidden sm:inline">LTD</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                if (link.label === "Services") {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={handleMegaEnter}
                      onMouseLeave={handleMegaLeave}
                      ref={megaRef}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center gap-1 px-4 py-2 text-sm tracking-wide transition-colors duration-300 rounded-lg hover:bg-white/5 ${
                          pathname === link.href || megaOpen ? "text-accent" : "text-text-light-muted hover:text-accent"
                        }`}
                      >
                        {link.label}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`} />
                      </Link>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-sm tracking-wide transition-colors duration-300 rounded-lg hover:bg-white/5 ${
                      pathname === link.href ? "text-accent" : "text-text-light-muted hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="ml-4 inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 cursor-pointer gradient-bg text-dark-primary hover:shadow-lg hover:shadow-accent/25 hover:scale-105 px-6 py-2.5 text-sm"
              >
                Get in Touch
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-text-light p-2 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mega Dropdown */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 right-0 top-full bg-dark-primary/98 glass-effect border-t border-card-dark-border shadow-2xl shadow-black/40 hidden lg:block"
              onMouseEnter={handleMegaEnter}
              onMouseLeave={handleMegaLeave}
            >
              <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-10">
                <div className="grid grid-cols-4 gap-8">
                  {servicesMega.columns.map((col) => (
                    <div key={col.heading}>
                      <h4 className="text-xs text-accent tracking-[0.2em] uppercase font-bold mb-4">
                        {col.heading}
                      </h4>
                      <div className="space-y-1">
                        {col.items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block p-3 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <div className="text-sm font-medium text-text-light group-hover:text-accent transition-colors">
                              {item.label}
                            </div>
                            <div className="text-xs text-text-light-muted mt-0.5">
                              {item.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Featured card */}
                  <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 flex flex-col justify-between">
                    <div>
                      <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded bg-accent/20 text-accent tracking-wider uppercase mb-3">
                        {servicesMega.featured.badge}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-text-light tracking-wide mb-2">
                        {servicesMega.featured.title}
                      </h3>
                      <p className="text-text-light-muted text-sm leading-relaxed">
                        {servicesMega.featured.desc}
                      </p>
                    </div>
                    <Link
                      href={servicesMega.featured.href}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all duration-300"
                    >
                      Start Now <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-dark-primary/98 glass-effect lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-full py-24 gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className={`font-heading text-2xl tracking-wider transition-colors ${
                      pathname === link.href ? "text-accent" : "text-text-light hover:text-accent"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 cursor-pointer gradient-bg text-dark-primary hover:shadow-lg hover:shadow-accent/25 px-9 py-4 text-base tracking-wide"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
