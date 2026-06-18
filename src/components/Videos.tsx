"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import SectionRail from "./ui/SectionRail";

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

type ThumbState = "loading" | "ok" | "failed";

interface VideosProps {
  /** Hide the internal section heading (use when a PageHero is already rendered above). */
  hideHeader?: boolean;
  /** Visual theme for the section. Defaults to `dark` to match the home-page look. */
  variant?: "dark" | "light";
  /**
   * When true, render only the grid + footer strip without the outer
   * <section>, background ambience, padding, or container. Used by pages
   * that supply their own section frame (e.g. /webinars).
   */
  embedded?: boolean;
}

export default function Videos({
  hideHeader = false,
  variant = "dark",
  embedded = false,
}: VideosProps) {
  const [playing, setPlaying] = useState<string | null>(null);
  const [thumb, setThumb] = useState<Record<string, ThumbState>>({});

  const isLight = variant === "light";

  // The grid + footer strip — shared between standalone and embedded modes.
  const grid = (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
        {videos.map((v, i) => {
          const thumbState = thumb[v.id] ?? "loading";
          return (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className={`group relative border overflow-hidden hover:border-accent/40 transition-colors ${ isLight ? "border-card-light-border bg-white shadow-[0_12px_30px_rgba(15,23,42,0.06)]" : "border-card-dark-border bg-card-dark" }`}
            >
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-card-dark via-dark-secondary to-dark-primary">
                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(6,182,212,0.35) 0%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />
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
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`}
                      alt=""
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${ thumbState === "ok" ? "opacity-70 group-hover/btn:opacity-90 group-hover/btn:scale-[1.02]" : "opacity-0" }`}
                      loading="lazy"
                      onLoad={() =>
                        setThumb((t) => ({ ...t, [v.id]: "ok" }))
                      }
                      onError={(e) => {
                        const img = e.currentTarget;
                        const step = img.dataset.fallback ?? "";
                        if (step === "") {
                          img.dataset.fallback = "hq";
                          img.src = `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;
                        } else if (step === "hq") {
                          img.dataset.fallback = "mq";
                          img.src = `https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`;
                        } else {
                          setThumb((t) => ({ ...t, [v.id]: "failed" }));
                        }
                      }}
                    />

                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ${ thumbState === "ok" ? "bg-gradient-to-t from-black/80 via-black/30 to-black/50" : "bg-gradient-to-t from-black/70 via-black/20 to-transparent" }`}
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-accent/40 rounded-full blur-xl group-hover/btn:bg-accent/60 transition-colors" />
                        <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover/btn:scale-110 group-hover/btn:bg-accent group-hover/btn:text-white transition-all duration-300">
                          <Play
                            size={24}
                            className="ml-1 text-dark-primary group-hover/btn:text-white transition-colors fill-current"
                          />
                        </div>
                      </div>
                    </div>

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

                    <div className="absolute top-4 right-4 z-10 pointer-events-none">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/10 text-[10px] text-white/90 font-semibold tracking-widest uppercase">
                        <span className="w-1 h-1 rounded-full bg-red-500" />
                        YouTube
                      </span>
                    </div>
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer strip — direct YouTube links as fallback */}
      <div
        className={`mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs ${ isLight ? "text-text-dark-muted/70" : "text-white/40" }`}
      >
        <span className="uppercase tracking-widest">Prefer YouTube?</span>
        {videos.map((v) => (
          <a
            key={v.id}
            href={`https://youtu.be/${v.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors uppercase tracking-widest ${ isLight ? "text-text-dark-muted hover:text-accent" : "text-white/60 hover:text-accent-light" }`}
          >
            Watch &quot;{v.title}&quot; →
          </a>
        ))}
      </div>
    </>
  );

  // When embedded, render just the grid — the parent owns the section frame.
  if (embedded) {
    return grid;
  }

  return (
    <section
      className={`relative py-14 lg:py-20 overflow-hidden ${ isLight ? "bg-light-primary" : "bg-dark-primary" }`}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-3xl ${ isLight ? "opacity-20" : "opacity-40" }`}
          style={{
            background: isLight
              ? "radial-gradient(ellipse, rgba(6,182,212,0.14) 0%, transparent 60%)"
              : "radial-gradient(ellipse, rgba(6,182,212,0.2) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {!hideHeader && (
          <>
            <SectionRail label="Watch" theme={isLight ? "light" : "dark"} />

            <ScrollReveal>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                <div className="max-w-3xl">
                  <h2
                    className={`font-heading text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-black leading-[1.02] tracking-tight mb-5 ${ isLight ? "text-text-dark" : "text-white" }`}
                  >
                    Inside the <span className="gradient-text">engine room.</span>
                  </h2>
                  <p
                    className={`text-base md:text-lg leading-relaxed max-w-2xl ${ isLight ? "text-text-dark-muted" : "text-text-light-muted" }`}
                  >
                    Watch how we approach hard problems — from architecture calls and sprint
                    planning to shipping production AI, in our own words.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </>
        )}

        {grid}
      </div>
    </section>
  );
}
