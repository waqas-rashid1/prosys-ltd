"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
  center = true,
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={`mb-16 ${center ? "text-center" : ""}`}>
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${ light ? "text-text-dark" : "text-text-light" }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl text-lg ${center ? "mx-auto" : ""} ${ light ? "text-text-dark-muted" : "text-text-light-muted" }`}
        >
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex items-center gap-2 justify-center">
        <span className="h-px w-12 bg-accent/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="h-px w-12 bg-accent/60" />
      </div>
    </ScrollReveal>
  );
}
