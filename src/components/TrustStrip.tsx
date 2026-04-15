"use client";

import Image from "next/image";
import ScrollReveal from "./ui/ScrollReveal";

const recognitions = [
  { logo: "/logos/iso.svg", label: "ISO 9001", desc: "Quality Management" },
  { logo: "/logos/iso.svg", label: "ISO 27001", desc: "Information Security" },
  { logo: "/logos/aws-partner.svg", label: "AWS", desc: "Select Partner" },
  { logo: "/logos/google-cloud.svg", label: "Google Cloud", desc: "Partner" },
  { logo: "/logos/clutch.svg", label: "Clutch", desc: "Top Developer 2026" },
  { logo: "/logos/goodfirms.svg", label: "GoodFirms", desc: "Top AI Company" },
];

export default function TrustStrip() {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-card-light-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-[11px] text-text-dark-muted/60 tracking-[0.25em] uppercase font-medium mb-10">
            Recognized & Certified
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-12 lg:gap-x-16 gap-y-8">
            {recognitions.map((r, i) => (
              <div
                key={`${r.label}-${i}`}
                className="group flex items-center gap-4 cursor-default"
              >
                {/* Logo container */}
                <div className="relative w-14 h-14 rounded-lg bg-light-primary border border-card-light-border flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/[0.04] group-hover:shadow-lg group-hover:shadow-accent/[0.06] transition-all duration-400">
                  <Image
                    src={r.logo}
                    alt={r.label}
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain opacity-50 group-hover:opacity-90 transition-opacity duration-400"
                  />
                </div>

                {/* Text */}
                <div>
                  <div className="text-[15px] font-bold text-text-dark leading-tight group-hover:text-accent transition-colors duration-300">
                    {r.label}
                  </div>
                  <div className="text-[12px] text-text-dark-muted/70">{r.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
