"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const videos = [
  {
    id: "EipWVDSJVPE",
    title: "How we ship production software",
    subtitle: "A look inside our engineering process",
    tag: "Inside PROSYS",
  },
  {
    id: "jI_b2lcF5kM",
    title: "Building AI that actually works",
    subtitle: "From prototype to production-grade AI",
    tag: "AI In Production",
  },
];

export default function Videos() {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <section className="relative py-20 lg:py-28 bg-dark-primary overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(ellipse, rgba(12,108,54,0.2) 0%, transparent 60%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Editorial rail */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] text-accent-light/60 uppercase tracking-[0.35em] font-semibold">
            / Watch
          </span>
          <span className="h-px flex-1 max-w-[160px] bg-gradient-to-r from-accent-light/40 to-transparent" />
        </div>

        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/25 bg-accent/5 mb-5">
                <Sparkles size={12} className="text-accent-light" />
                <span className="text-[11px] text-accent-light tracking-widest uppercase font-semibold">
                  See us in action
                </span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-black text-white leading-[1.02] tracking-tight mb-5">
                Inside the <span className="gradient-text">engine room.</span>
              </h2>
              <p className="text-base md:text-lg text-text-light-muted leading-relaxed max-w-2xl">
                Watch how we approach hard problems — from architecture calls and sprint
                planning to shipping production AI, in our own words.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Video grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className="group relative rounded-lg border border-card-dark-border bg-card-dark overflow-hidden hover:border-accent/40 transition-colors"
            >
              <div className="relative aspect-video bg-black overflow-hidden">
                {playing === v.id ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                    title={v.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(v.id)}
                    className="absolute inset-0 w-full h-full group/btn cursor-pointer"
                    aria-label={`Play video: ${v.title}`}
                  >
                    {/* YouTube thumbnail — maxresdefault may 404 for non-HD uploads,
                        so we fall back to hqdefault (always available). */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover/btn:opacity-90 group-hover/btn:scale-[1.02] transition-all duration-500"
                      loading="lazy"
                      onError={(e) => {
                        const img = e.currentTarget;
                        if (img.dataset.fallback !== "hq") {
                          img.dataset.fallback = "hq";
                          img.src = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;
                        } else if (img.dataset.fallback !== "mq") {
                          img.dataset.fallback = "mq";
                          img.src = `https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-accent/40 rounded-full blur-xl group-hover/btn:bg-accent/60 transition-colors" />
                        <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover/btn:scale-110 group-hover/btn:bg-accent group-hover/btn:text-white transition-all duration-300">
                          <Play size={24} className="ml-1 text-dark-primary group-hover/btn:text-white transition-colors fill-current" />
                        </div>
                      </div>
                    </div>

                    {/* Caption overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 text-left">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-light animate-pulse" />
                        <span className="text-[10px] text-accent-light uppercase tracking-widest font-semibold">
                          {v.tag}
                        </span>
                      </span>
                      <h3 className="font-heading text-xl lg:text-2xl font-bold text-white leading-tight mb-1">
                        {v.title}
                      </h3>
                      <p className="text-sm text-white/70">{v.subtitle}</p>
                    </div>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
