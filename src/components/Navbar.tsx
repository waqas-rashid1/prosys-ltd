"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/constants";

const servicesMega = [
  {
    heading: "Digital",
    items: [
      { label: "Digital Consulting & Strategy", href: "/services/digital-consulting" },
      { label: "Digital Commerce", href: "/services/digital-commerce" },
      { label: "Business Applications", href: "/services/business-applications" },
    ],
  },
  {
    heading: "Data & Analytics",
    items: [
      { label: "Data Modernization", href: "/services/data-modernization" },
      { label: "Advanced Analytics", href: "/services/advanced-analytics" },
      { label: "Connected Intelligence", href: "/services/connected-intelligence" },
      { label: "Data Management", href: "/services/data-management" },
      { label: "Generative AI", href: "/services/generative-ai" },
    ],
  },
  {
    heading: "Cloud",
    items: [
      { label: "Cloud Operations & Migration", href: "/services/cloud-operations" },
      { label: "Cloud App Development & Integration", href: "/services/cloud-app-development" },
      { label: "Managed Services", href: "/services/managed-services" },
    ],
  },
  {
    heading: "Business Process Services",
    items: [
      { label: "Contact Center", href: "/services/contact-center" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Finance & Accounting", href: "/services/finance-accounting" },
      { label: "Staff Augmentation", href: "/services/staff-augmentation" },
      { label: "Legal Process Outsourcing", href: "/services/legal-process-outsourcing" },
      { label: "Recruitment Process Outsourcing", href: "/services/recruitment-outsourcing" },
    ],
  },
  {
    heading: "Other Key Areas",
    items: [
      { label: "Digital Infrastructure Services", href: "/services/digital-infrastructure" },
      { label: "Security", href: "/services/security" },
      { label: "Emerging Technologies", href: "/services/emerging-technologies" },
    ],
  },
];

const industriesMega = [
  { label: "FinTech", desc: "Banking, payments, trading platforms", href: "/industries" },
  { label: "HealthTech", desc: "Telehealth, patient portals, compliance", href: "/industries" },
  { label: "E-Commerce & D2C", desc: "Headless commerce, inventory, CRO", href: "/industries" },
  { label: "EdTech", desc: "LMS, AI tutors, assessments", href: "/industries" },
  { label: "Real Estate", desc: "Listings, CRM, virtual tours", href: "/industries" },
  { label: "Startups & SaaS", desc: "MVPs, multi-tenant, billing", href: "/industries" },
];

const aboutMega = {
  left: [
    { label: "Who We Are", href: "/about" },
    { label: "Our Leadership", href: "/about#leadership" },
    { label: "Our Journey", href: "/about#timeline" },
    { label: "Global Presence", href: "/about#global" },
    { label: "Careers", href: "/careers" },
  ],
  right: [
    { label: "React", href: "#" },
    { label: "Next.js", href: "#" },
    { label: "AWS", href: "#" },
    { label: "Google Cloud", href: "#" },
    { label: "OpenAI", href: "#" },
    { label: "Vercel", href: "#" },
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

  useEffect(() => {
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark-primary/95 glass-effect shadow-lg shadow-black/20"
            : "bg-dark-primary/70 glass-effect"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-1 group">
              <span className="font-heading text-2xl font-bold">
                <span className="text-accent-light group-hover:text-accent-hover transition-colors duration-300">PRO</span>
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
                          pathname === link.href || megaOpen ? "text-accent-light" : "text-text-light-muted hover:text-accent-light"
                        }`}
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
                        className={`flex items-center gap-1 px-4 py-2 text-sm tracking-wide transition-colors duration-300 rounded-lg hover:bg-white/5 ${
                          pathname === link.href || aboutOpen ? "text-accent-light" : "text-text-light-muted hover:text-accent-light"
                        }`}
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
                        className={`flex items-center gap-1 px-4 py-2 text-sm tracking-wide transition-colors duration-300 rounded-lg hover:bg-white/5 ${
                          pathname === link.href || industriesOpen ? "text-accent-light" : "text-text-light-muted hover:text-accent-light"
                        }`}
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
                    className={`px-4 py-2 text-sm tracking-wide transition-colors duration-300 rounded-lg hover:bg-white/5 ${
                      pathname === link.href ? "text-accent-light" : "text-text-light-muted hover:text-accent-light"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="ml-4 inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 cursor-pointer gradient-bg text-white hover:shadow-lg hover:shadow-accent/25 hover:scale-105 px-6 py-2.5 text-sm"
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
              <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-8">
                <div className="grid grid-cols-12 gap-8">
                  {/* Left column - first 3 groups */}
                  <div className="col-span-4 space-y-6">
                    {servicesMega.slice(0, 3).map((col) => (
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
                    {servicesMega.slice(3).map((col) => (
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
                    <div className="rounded-lg border border-card-dark-border bg-card-dark p-6 flex-grow">
                      <span className="inline-block px-2 py-0.5 text-[10px] font-bold rounded-lg bg-accent/20 text-accent-light tracking-wider uppercase mb-3">
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
                  <div className="col-span-4">
                    <h4 className="text-[11px] text-accent-light tracking-[0.15em] uppercase font-bold mb-4 pb-2 border-b border-card-dark-border">
                      Company
                    </h4>
                    <div className="space-y-0.5">
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

                  <div className="col-span-4">
                    <h4 className="text-[11px] text-accent-light tracking-[0.15em] uppercase font-bold mb-4 pb-2 border-b border-card-dark-border">
                      Technology Alliances
                    </h4>
                    <div className="space-y-0.5">
                      {aboutMega.right.map((item) => (
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

                  <div className="col-span-4">
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
                    className={`font-heading text-2xl transition-colors ${
                      pathname === link.href ? "text-accent-light" : "text-text-light hover:text-accent-light"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 cursor-pointer gradient-bg text-white hover:shadow-lg hover:shadow-accent/25 px-9 py-4 text-base tracking-wide"
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
