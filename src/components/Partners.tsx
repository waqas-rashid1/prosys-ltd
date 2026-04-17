"use client";

import Image from "next/image";
import ScrollReveal from "./ui/ScrollReveal";

const partners = [
  { name: "React", logo: "/logos/react.svg" },
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "AWS", logo: "/logos/aws-partner.svg" },
  { name: "Google Cloud", logo: "/logos/google-cloud.svg" },
  { name: "Vercel", logo: "/logos/vercel.svg" },
  { name: "OpenAI", logo: "/logos/openai.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "Stripe", logo: "/logos/stripe.svg" },
];

export default function Partners() {
  return (
    <section id="partners" className="py-24 lg:py-32 bg-dark-secondary border-t border-card-dark-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-xs text-text-light-muted/40 tracking-[0.2em] uppercase font-medium mb-12">
            Technology & Strategic Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 lg:gap-x-16 gap-y-8">
            {partners.map((p) => (
              <div key={p.name} className="group flex items-center gap-3">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain opacity-30 group-hover:opacity-70 transition-opacity duration-400"
                />
                <span className="text-sm text-text-light-muted/30 font-medium group-hover:text-text-light-muted/70 transition-colors duration-400">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
