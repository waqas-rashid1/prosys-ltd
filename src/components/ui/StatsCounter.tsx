"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatsCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatsCounter({
  value,
  suffix = "",
  label,
}: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-text-light-muted text-sm uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}
