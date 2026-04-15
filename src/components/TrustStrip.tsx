"use client";

import ScrollReveal from "./ui/ScrollReveal";

const recognitions = [
  { label: "ISO 9001", desc: "Quality Management" },
  { label: "ISO 27001", desc: "Information Security" },
  { label: "AWS", desc: "Select Partner" },
  { label: "Google", desc: "Cloud Partner" },
  { label: "Clutch", desc: "Top Developer 2026" },
  { label: "GoodFirms", desc: "Top AI Company" },
];

export default function TrustStrip() {
  return (
    <section className="py-14 bg-light-secondary border-y border-card-light-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-8">
            <p className="text-xs text-text-dark-muted tracking-[0.2em] uppercase font-medium">
              Recognized & Certified
            </p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {recognitions.map((r) => (
                <div key={r.label} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <span className="font-heading text-[10px] font-bold text-accent">
                      {r.label.substring(0, 3).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-text-dark leading-tight">{r.label}</div>
                    <div className="text-[11px] text-text-dark-muted">{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
