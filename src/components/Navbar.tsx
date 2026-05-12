"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Search } from "lucide-react";
import { navLinks } from "@/lib/constants";

const servicesMega = [
  {
    heading: "Product Engineering",
    items: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "MVP Development", href: "/services/mvp-development" },
      { label: "SaaS Development", href: "/services/saas-development" },
      { label: "Custom Software", href: "/services/software-development" },
    ],
  },
  {
    heading: "AI & Automation",
    items: [
      { label: "AI Development", href: "/services/ai-development" },
      { label: "AI Automations", href: "/services/ai-automations" },
      { label: "Generative AI", href: "/services/generative-ai" },
    ],
  },
  {
    heading: "Cloud & Infrastructure",
    items: [
      { label: "Cloud Migration & Ops", href: "/services/cloud-operations" },
      { label: "Managed Services", href: "/services/managed-services" },
      { label: "Security", href: "/services/security" },
    ],
  },
  {
    heading: "Growth & Marketing",
    items: [
      { label: "SEO", href: "/services/seo" },
      { label: "AIEO", href: "/services/aieo" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Graphics & Branding", href: "/services/graphics-branding" },
    ],
  },
];

const industriesMega = [
  { label: "FinTech", desc: "Payments, lending, trading platforms", href: "/industries/fintech" },
  { label: "HealthTech", desc: "Telehealth, patient portals, compliance", href: "/industries/healthtech" },
  { label: "E-Commerce & D2C", desc: "Headless commerce, inventory, CRO", href: "/industries/ecommerce" },
  { label: "EdTech", desc: "LMS, AI tutors, assessments", href: "/industries/edtech" },
  { label: "Startups & SaaS", desc: "Multi-tenant, billing, SSO", href: "/industries/saas-startups" },
];

const aboutMega = {
  left: [
    { label: "Who We Are", href: "/about" },
    { label: "Our Leadership", href: "/about#leadership" },
    { label: "Our Journey", href: "/about#timeline" },
    { label: "Global Presence", href: "/about#global" },
    { label: "Webinars", href: "/webinars" },
    { label: "Careers", href: "/careers" },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const pathname = usePathname();
  const megaRef = useRef<HTMLDivElement>(null);
  const megaTimeout = useRef<NodeJS.Timeout | null>(null);
  const indTimeout = useRef<NodeJS.Timeout | null>(null);
  const aboutTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  // Close all menus when the route changes. This is the canonical use case
  // for setState-in-effect (syncing UI to an external store — the router), so
  // the lint warning is intentionally suppressed here. A ref guard prevents
  // re-running on incidental re-renders.
  const lastPath = useRef(pathname);
  useEffect(() => {
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
    setMegaOpen(false);
    setIndustriesOpen(false);
    setAboutOpen(false);
  }, [pathname]);

  const closeAll = () => { setMegaOpen(false); setIndustriesOpen(false); setAboutOpen(false); };

  const handleMegaEnter = () => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    closeAll();
    setMegaOpen(true);
  };

  const handleMegaLeave = () => {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200);
  };

  const handleIndEnter = () => {
    if (indTimeout.current) clearTimeout(indTimeout.current);
    closeAll();
    setIndustriesOpen(true);
  };

  const handleIndLeave = () => {
    indTimeout.current = setTimeout(() => setIndustriesOpen(false), 200);
  };

  const handleAboutEnter = () => {
    if (aboutTimeout.current) clearTimeout(aboutTimeout.current);
    closeAll();
    setAboutOpen(true);
  };

  const handleAboutLeave = () => {
    aboutTimeout.current = setTimeout(() => setAboutOpen(false), 200);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${ scrolled ? "bg-dark-primary/95 glass-effect shadow-lg shadow-black/20" : "bg-dark-primary/70 glass-effect" }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center group" aria-label="PROSYS LTD - Home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt="PROSYS LTD"
                width={220}
                height={44}
                className="h-8 w-auto transition-opacity duration-300 group-hover:opacity-80"
              />
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
                        aria-current={pathname === link.href ? "page" : undefined}
                        className={`flex items-center gap-1 px-4 py-2 text-sm tracking-wide transition-colors duration-300 hover:bg-white/5 ${ pathname === link.href || megaOpen ? "text-accent-light" : "text-text-light-muted hover:text-accent-light" }`}
                      >
                        {link.label}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`} />
                      </Link>
                    </div>
                  );
                }
                if (link.label === "About") {
                  return (
                    <div key={link.href} className="relative" onMouseEnter={handleAboutEnter} onMouseLeave={handleAboutLeave}>
                      <Link
                        href={link.href}
                        aria-current={pathname === link.href ? "page" : undefined}
                        className={`flex items-center gap-1 px-4 py-2 text-sm tracking-wide transition-colors duration-300 hover:bg-white/5 ${ pathname === link.href || aboutOpen ? "text-accent-light" : "text-text-light-muted hover:text-accent-light" }`}
                      >
                        {link.label}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`} />
                      </Link>
                    </div>
                  );
                }
                if (link.label === "Industries") {
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={handleIndEnter}
                      onMouseLeave={handleIndLeave}
                    >
                      <Link
                        href={link.href}
                        aria-current={pathname === link.href ? "page" : undefined}
                        className={`flex items-center gap-1 px-4 py-2 text-sm tracking-wide transition-colors duration-300 hover:bg-white/5 ${ pathname === link.href || industriesOpen ? "text-accent-light" : "text-text-light-muted hover:text-accent-light" }`}
                      >
                        {link.label}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${industriesOpen ? "rotate-180" : ""}`} />
                      </Link>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`px-4 py-2 text-sm tracking-wide transition-colors duration-300 hover:bg-white/5 ${ pathname === link.href ? "text-accent-light" : "text-text-light-muted hover:text-accent-light" }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("prosys:open-cmdk"))}
                className="ml-2 hidden xl:inline-flex items-center gap-2 px-3 py-2 rounded-md border border-card-dark-border bg-card-dark/50 hover:border-white/20 hover:bg-white/5 text-text-light-muted hover:text-white transition-all duration-300 cursor-pointer text-xs"
                aria-label="Open quick search (Ctrl+K or Command+K)"
                title="Quick search (Ctrl+K / ⌘K)"
              >
                <Search size={12} />
                <span>Quick search</span>
                <kbd className="px-1.5 py-0.5 text-[9px] font-mono border border-card-dark-border rounded bg-dark-primary/50 ml-2">⌘K / Ctrl+K</kbd>
              </button>
              <Link
                href="/contact"
                className="ml-2 group inline-flex items-center gap-2 font-semibold rounded-md transition-all duration-300 cursor-pointer bg-white text-dark-primary hover:bg-accent hover:text-white px-6 py-2.5 text-sm"
              >
                Book a Call
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-text-light -mr-2 p-3 cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-drawer"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
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
              <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-8">
                <div className="grid grid-cols-12 gap-8">
                  {/* Left column - first 3 groups */}
                  <div className="col-span-4 space-y-6">
                    {servicesMega.slice(0, 2).map((col) => (
                      <div key={col.heading}>
                        <h4 className="text-[11px] text-accent-light tracking-[0.15em] uppercase font-bold mb-2.5 pb-2 border-b border-card-dark-border">
                          {col.heading}
                        </h4>
                        <div className="space-y-0.5">
                          {col.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-2 py-1.5 text-[13px] text-text-light-muted hover:text-white transition-colors group"
                            >
                              {item.label}
                              <ArrowRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-accent-light" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right column - last 2 groups */}
                  <div className="col-span-4 space-y-6">
                    {servicesMega.slice(2).map((col) => (
                      <div key={col.heading}>
                        <h4 className="text-[11px] text-accent-light tracking-[0.15em] uppercase font-bold mb-2.5 pb-2 border-b border-card-dark-border">
                          {col.heading}
                        </h4>
                        <div className="space-y-0.5">
                          {col.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-2 py-1.5 text-[13px] text-text-light-muted hover:text-white transition-colors group"
                            >
                              {item.label}
                              <ArrowRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-accent-light" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Featured card */}
                  <div className="col-span-4 flex flex-col gap-4">
                    <div className="border border-card-dark-border bg-card-dark p-6 flex-grow">
                      <span className="inline-block px-2 py-0.5 text-[10px] font-bold bg-accent/20 text-accent-light tracking-wider uppercase mb-3">
                        Featured
                      </span>
                      <h3 className="font-heading text-lg font-bold text-text-light mb-2">
                        Generative AI Solutions
                      </h3>
                      <p className="text-text-light-muted text-sm leading-relaxed mb-4">
                        Transform your business with custom AI models, LLM integrations, and intelligent automation.
                      </p>
                      <Link
                        href="/services/generative-ai"
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent-light hover:gap-3 transition-all duration-300"
                      >
                        Learn More <ArrowRight size={14} />
                      </Link>
                    </div>
                    <Link
                      href="/services"
                      className="flex items-center justify-center gap-2 py-3 rounded-md border border-card-dark-border text-text-light-muted text-sm hover:text-accent-light hover:border-accent/40 transition-all duration-300"
                    >
                      View All Services <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Industries Dropdown */}
        <AnimatePresence>
          {industriesOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 right-0 top-full bg-dark-primary/98 glass-effect border-t border-card-dark-border shadow-2xl shadow-black/40 hidden lg:block"
              onMouseEnter={handleIndEnter}
              onMouseLeave={handleIndLeave}
            >
              <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-8">
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-8">
                    <h4 className="text-[11px] text-accent-light tracking-[0.15em] uppercase font-bold mb-4 pb-2 border-b border-card-dark-border">
                      Industries We Serve
                    </h4>
                    <div className="grid grid-cols-2 gap-x-12">
                      {industriesMega.map((ind) => (
                        <Link
                          key={ind.label}
                          href={ind.href}
                          className="group flex items-start gap-3 py-3 border-b border-card-dark-border/50 last:border-0"
                        >
                          <div className="flex-grow">
                            <div className="text-sm font-medium text-text-light group-hover:text-accent-light transition-colors">
                              {ind.label}
                            </div>
                            <div className="text-xs text-text-light-muted/60 mt-0.5">
                              {ind.desc}
                            </div>
                          </div>
                          <ArrowRight size={12} className="mt-1 opacity-0 group-hover:opacity-100 text-accent-light transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-4">
                    <div className="rounded-md border border-card-dark-border bg-card-dark p-6 h-full flex flex-col justify-between">
                      <div>
                        <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded-md bg-accent/20 text-accent-light tracking-wider uppercase mb-3">
                          Spotlight
                        </span>
                        <h3 className="font-heading text-lg font-bold text-text-light mb-2">
                          FinTech Solutions
                        </h3>
                        <p className="text-text-light-muted text-sm leading-relaxed">
                          Secure, compliant platforms for payments, lending, and financial analytics with bank-grade security.
                        </p>
                      </div>
                      <Link
                        href="/industries"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-light hover:gap-3 transition-all duration-300"
                      >
                        Explore Industries <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* About Dropdown */}
        <AnimatePresence>
          {aboutOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 right-0 top-full bg-dark-primary/98 glass-effect border-t border-card-dark-border shadow-2xl shadow-black/40 hidden lg:block"
              onMouseEnter={handleAboutEnter}
              onMouseLeave={handleAboutLeave}
            >
              <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-8">
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-7">
                    <h4 className="text-[11px] text-accent-light tracking-[0.15em] uppercase font-bold mb-4 pb-2 border-b border-card-dark-border">
                      Company
                    </h4>
                    <div className="grid grid-cols-2 gap-x-6">
                      {aboutMega.left.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="flex items-center gap-2 py-2 text-[13px] text-text-light-muted hover:text-white transition-colors group"
                        >
                          {item.label}
                          <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 text-accent-light transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-5">
                    <div className="rounded-md border border-card-dark-border bg-card-dark p-6 h-full flex flex-col justify-between">
                      <div>
                        <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded-md bg-accent/20 text-accent-light tracking-wider uppercase mb-3">
                          Culture
                        </span>
                        <h3 className="font-heading text-lg font-bold text-text-light mb-2">
                          Join Our Team
                        </h3>
                        <p className="text-text-light-muted text-sm leading-relaxed">
                          We&apos;re hiring engineers, designers, and growth specialists who want to build products that matter.
                        </p>
                      </div>
                      <Link href="/careers" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-light hover:gap-3 transition-all duration-300">
                        View Open Roles <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Drawer.
          Notes:
          - Each link explicitly closes the drawer on tap. The
            pathname-effect already does this, but on slow networks
            the route change can lag a beat behind the tap, leaving
            the drawer covering the next page. Explicit close = zero
            chance of "links don't work" perception.
          - Mobile-only links (Contact, Webinars) are added below the
            primary navLinks because they were previously only
            reachable through desktop mega-menus.
          - Each link gets py-3 + full-width tap area = ~52px tall,
            comfortably above the 44px iOS minimum. */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-drawer"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 top-20 z-40 bg-dark-primary/98 glass-effect lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col px-6 pt-10 pb-16 gap-1 max-w-md mx-auto">
              {[...navLinks, { label: "Webinars", href: "/webinars" }, { label: "Contact", href: "/contact" }].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`block font-heading text-2xl py-3 border-b border-white/8 transition-colors ${ pathname === link.href ? "text-accent-light" : "text-text-light active:text-accent-light" }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-8 inline-flex items-center justify-center font-semibold rounded-md transition-all duration-300 cursor-pointer bg-white text-dark-primary active:bg-accent active:text-white px-9 py-4 text-base tracking-wide"
              >
                Book a Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
