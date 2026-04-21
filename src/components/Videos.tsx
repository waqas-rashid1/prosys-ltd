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

type ThumbState = "loading" | "ok" | "failed";

interface VideosProps {
  /** Hide the internal section heading (use when a PageHero is already rendered above). */
  hideHeader?: boolean;
  /** Visual theme for the section. Defaults to `dark` to match the home-page look. */
  variant?: "dark" | "light";
}

export default function Videos({ hideHeader = false, variant = "dark" }: VideosProps) {
  const [playing, setPlaying] = useState<string | null>(null);
  const [thumb, setThumb] = useState<Record<string, ThumbState>>({});

  const isLight = variant === "light";

  return (
    <section
      className={`relative py-20 lg:py-28 overflow-hidden ${
        isLight ? "bg-light-primary" : "bg-dark-primary"
      }`}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-3xl ${
            isLight ? "opacity-20" : "opacity-40"
          }`}
          style={{
            background: isLight
              ? "radial-gradient(ellipse, rgba(12,108,54,0.14) 0%, transparent 60%)"
              : "radial-gradient(ellipse, rgba(12,108,54,0.2) 0%, transparent 60%)",
          }}
        />
        <div
          className={`absolute inset-0 ${isLight ? "opacity-[0.04]" : "opacity-[0.025]"}`}
          style={{
            backgroundImage: isLight
              ? "linear-gradient(rgba(15,23,42,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.6) 1px, transparent 1px)"
              : "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {!hideHeader && (
          <>
            <div className="flex items-center gap-3 mb-6">
              <span
                className={`text-[10px] uppercase tracking-[0.35em] font-semibold ${
                  isLight ? "text-accent/70" : "text-accent-light/60"
                }`}
              >
                / Watch
              </span>
              <span
                className={`h-px flex-1 max-w-[160px] bg-gradient-to-r to-transparent ${
                  isLight ? "from-accent/30" : "from-accent-light/40"
                }`}
              />
            </div>

            <ScrollReveal>
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                <div className="max-w-3xl">
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mb-5 ${
                      isLight
                        ? "border-accent/30 bg-accent/10"
                        : "border-accent/25 bg-accent/5"
                    }`}
                  >
                    <Sparkles
                      size={12}
                      className={isLight ? "text-accent" : "text-accent-light"}
                    />
                    <span
                      className={`text-[11px] tracking-widest uppercase font-semibold ${
                        isLight ? "text-accent" : "text-accent-light"
                      }`}
                    >
                      See us in action
                    </span>
                  </div>
                  <h2
                    className={`font-heading text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-black leading-[1.02] tracking-tight mb-5 ${
                      isLight ? "text-text-dark" : "text-white"
                    }`}
                  >
                    Inside the <span className="gradient-text">engine room.</span>
                  </h2>
                  <p
                    className={`text-base md:text-lg leading-relaxed max-w-2xl ${
                      isLight ? "text-text-dark-muted" : "text-text-light-muted"
                    }`}
                  >
                    Watch how we approach hard problems — from architecture calls and sprint
                    planning to shipping production AI, in our own words.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </>
        )}

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
                className={`group relative rounded-lg border overflow-hidden hover:border-accent/40 transition-colors ${
                  isLight
                    ? "border-card-light-border bg-white shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
                    : "border-card-dark-border bg-card-dark"
                }`}
              >
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-card-dark via-dark-secondary to-dark-primary">
                  {/* Designed placeholder background (always present, visible when img fails) */}
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, rgba(12,108,54,0.35) 0%, transparent 70%)",
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
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
                      {/* YouTube thumbnail — with graceful fallback chain */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://i.ytimg.com/vi/${v.id}/maxresdefault.jpg`}
                        alt=""
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                          thumbState === "ok"
                            ? "opacity-70 group-hover/btn:opacity-90 group-hover/btn:scale-[1.02]"
                            : "opacity-0"
                        }`}
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

                      {/* Gradient overlay — darker when no thumb so text still reads */}
                      <div
                        className={`absolute inset-0 transition-opacity duration-500 ${
                          thumbState === "ok"
                            ? "bg-gradient-to-t from-black/80 via-black/30 to-black/50"
                            : "bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                        }`}
                      />

                      {/* Play button */}
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

                      {/* YouTube corner badge */}
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
          className={`mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs ${
            isLight ? "text-text-dark-muted/70" : "text-white/40"
          }`}
        >
          <span className="uppercase tracking-widest">Prefer YouTube?</span>
          {videos.map((v) => (
            <a
              key={v.id}
              href={`https://youtu.be/${v.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors uppercase tracking-widest ${
                isLight
                  ? "text-text-dark-muted hover:text-accent"
                  : "text-white/60 hover:text-accent-light"
              }`}
            >
              Watch &quot;{v.title}&quot; →
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
