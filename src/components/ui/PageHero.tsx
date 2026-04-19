"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";

export interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
  align?: "left" | "center";
  bgImage?: string;
  /** 0.1 – 1 */
  bgImageOpacity?: number;
  stats?: { value: string; label: string }[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Small marks shown just under the description as trust signals */
  trustSignals?: string[];
}

export default function PageHero({
  badge,
  title,
  highlight,
  description,
  align = "left",
  bgImage,
  bgImageOpacity = 0.2,
  stats,
  primaryCta,
  secondaryCta,
  trustSignals,
}: PageHeroProps) {
  const isCenter = align === "center";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-primary">
      {/* Background image (optional) */}
      {bgImage && (
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ opacity: bgImageOpacity }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-primary via-dark-primary/92 to-dark-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/70 via-transparent to-dark-primary" />
        </div>
      )}

      {/* Decorative gradient glows */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/4 -left-20 w-[520px] h-[520px] rounded-full blur-[140px] animate-pulse-glow"
          style={{ background: "radial-gradient(circle, rgba(12,108,54,0.35) 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[620px] h-[620px] rounded-full blur-[180px]"
          style={{ background: "radial-gradient(circle, rgba(52,211,153,0.14) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(12,108,54,0.25) 0%, transparent 70%)" }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--accent-light) 1px, transparent 1px), linear-gradient(90deg, var(--accent-light) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        {/* Side frame accents */}
        <div className="absolute top-1/2 left-8 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-accent/40 to-transparent hidden lg:block" />
        <div className="absolute top-1/2 right-8 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-accent/40 to-transparent hidden lg:block" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 pt-32 pb-20 lg:pt-36 lg:pb-28">
        <div className={isCenter ? "text-center" : ""}>
          <div className={isCenter ? "max-w-4xl mx-auto" : "max-w-4xl"}>
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/10 backdrop-blur-sm mb-8 ${
                  isCenter ? "" : ""
                }`}
              >
                <Sparkles size={12} className="text-accent-light" />
                <span className="text-[11px] text-accent-light tracking-[0.18em] font-semibold uppercase">
                  {badge}
                </span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6rem] font-black leading-[1.02] tracking-tight text-white mb-8"
            >
              {title}
              {highlight && (
                <>
                  {" "}
                  <span className="gradient-text relative inline-block">
                    {highlight}
                    <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-light to-transparent" />
                  </span>
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              className={`text-base sm:text-lg md:text-xl text-text-light-muted leading-relaxed mb-10 ${
                isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"
              }`}
            >
              {description}
            </motion.p>

            {trustSignals && trustSignals.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className={`flex flex-wrap gap-x-5 gap-y-2.5 mb-10 text-sm text-text-light-muted/80 ${
                  isCenter ? "justify-center" : ""
                }`}
              >
                {trustSignals.map((t) => (
                  <span key={t} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
                    {t}
                  </span>
                ))}
              </motion.div>
            )}

            {(primaryCta || secondaryCta) && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.4 }}
                className={`flex flex-col sm:flex-row gap-3 ${isCenter ? "justify-center" : ""}`}
              >
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="group inline-flex items-center justify-center gap-2 font-semibold rounded-md bg-white text-dark-primary hover:bg-accent hover:text-white px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300"
                  >
                    {primaryCta.label}
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center gap-2 font-medium rounded-md border border-white/25 text-white hover:border-white/60 hover:bg-white/5 px-8 py-4 text-sm uppercase tracking-widest transition-all duration-300"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </motion.div>
            )}
          </div>

          {/* Stats / proof strip */}
          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.5 }}
              className={`mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl ${
                isCenter ? "mx-auto" : ""
              }`}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-heading text-3xl md:text-4xl font-black text-white mb-1 tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-[11px] text-white/50 uppercase tracking-[0.18em] font-semibold">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 z-10"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
