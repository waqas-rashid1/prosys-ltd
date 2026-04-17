"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { getTechLogo } from "@/lib/tech-logos";
import ScrollReveal from "./ui/ScrollReveal";

type Props = {
  serviceName: string;
  techStack: string[];
};

export default function ServiceTechStack({ serviceName, techStack }: Props) {
  return (
    <section className="py-14 lg:py-20 bg-dark-primary relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/[0.05] blur-[200px] rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/[0.03] blur-[180px] rounded-full -translate-x-1/3 -translate-y-1/3" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-[11px] text-accent-light uppercase tracking-[0.25em] font-semibold mb-4">
              Technology Stack
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-text-light mb-4 tracking-tight leading-[1.05]">
              Our {serviceName} toolkit
            </h2>
            <p className="text-text-light-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Hand-picked tools and frameworks we use to ship production-grade {serviceName.toLowerCase()} projects.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {techStack.map((tech, i) => {
            const logo = getTechLogo(tech);
            return (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.03, duration: 0.4 }}
                className="group relative flex flex-col items-center justify-center gap-2.5 h-24 md:h-28 rounded-md bg-white hover:-translate-y-1 transition-all duration-300 p-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-accent/[0.15] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-accent/50 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {logo ? (
                  <Image
                    src={logo}
                    alt={tech}
                    width={32}
                    height={32}
                    className="relative z-10 w-7 h-7 md:w-8 md:h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                ) : (
                  <Code2
                    size={28}
                    className="relative z-10 text-text-dark/60 group-hover:text-accent transition-colors duration-300"
                  />
                )}
                <span className="relative z-10 text-[10px] md:text-xs font-medium text-text-dark/70 group-hover:text-text-dark transition-colors duration-300 text-center leading-tight">
                  {tech}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
