"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import HeroEyebrow from "./ui/HeroEyebrow";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-dvh flex items-center overflow-hidden bg-dark-primary">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {!prefersReducedMotion && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            src="/videos/hero.mp4"
            className="absolute inset-0 w-full h-full object-cover opacity-75"
          />
        )}
        <div className="absolute inset-0 bg-dark-primary/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-primary via-dark-primary/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-transparent to-dark-primary/40" />
        <div
          className="absolute top-1/2 right-0 w-[600px] h-[600px] pointer-events-none opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(103,232,249,0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 w-full pt-28 pb-20 lg:pt-32 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl"
        >
          <HeroEyebrow label="Beyond AI pilots" icon={Sparkles} />

          <h1 className="font-heading text-[2.25rem] leading-[1.05] sm:text-5xl md:text-[3.5rem] lg:text-6xl xl:text-[4.25rem] font-black mb-5 text-white tracking-tight max-w-3xl">
            Safely deploy AI into{" "}
            <span className="gradient-text">real business operations.</span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-white/65 mb-7 leading-relaxed">
            We help companies move AI from pilots to production — governed agents,
            secure knowledge, integrations, and monitoring.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3">
            <MagneticButton strength={4}>
              <Link
                href="/contact"
                className="hero-cta-glow group relative inline-flex items-center justify-center gap-2 font-semibold rounded-md bg-white text-dark-primary px-7 py-3.5 text-xs uppercase tracking-widest shadow-lg shadow-black/20 transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-xl hover:shadow-accent/40 active:scale-[0.98]"
              >
                Book an AI Readiness Call
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </MagneticButton>
            <Link
              href="/work"
              className="group inline-flex items-center justify-center gap-2 font-medium rounded-md border border-white/25 text-white px-7 py-3.5 text-xs uppercase tracking-widest backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              See Case Studies
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden md:flex absolute bottom-6 right-8 flex-col items-center gap-1.5 text-white/30 z-10"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
