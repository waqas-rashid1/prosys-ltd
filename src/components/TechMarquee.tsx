"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";

const techCategories = [
  {
    label: "All",
    techs: ["React", "Next.js", "TypeScript", "Node.js", "Python", "TailwindCSS", "PostgreSQL", "MongoDB", "AWS", "Vercel", "OpenAI", "LangChain", "Docker", "Figma", "n8n", "Stripe"],
  },
  {
    label: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Figma"],
  },
  {
    label: "Backend",
    techs: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "Prisma"],
  },
  {
    label: "AI & Data",
    techs: ["OpenAI", "LangChain", "Pinecone", "Hugging Face", "FastAPI", "ChromaDB"],
  },
  {
    label: "DevOps & Cloud",
    techs: ["AWS", "Vercel", "Docker", "GitHub Actions", "Terraform"],
  },
  {
    label: "Tools",
    techs: ["Stripe", "n8n", "Figma", "Sanity CMS", "Supabase", "Airtable"],
  },
];

export default function TechMarquee() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-28 lg:py-36 bg-dark-primary relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/[0.05] blur-[200px] rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-4">
              Our Tech Stack
            </h2>
            <p className="text-text-light-muted text-lg max-w-2xl mx-auto">
              Equipped with the latest tools, our teams deliver impactful solutions designed to grow your business.
            </p>
          </div>
        </ScrollReveal>

        {/* Category tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {techCategories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  activeTab === i
                    ? "gradient-bg text-dark-primary"
                    : "text-text-light-muted hover:text-accent border border-card-dark-border hover:border-accent/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Tech grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3"
          >
            {techCategories[activeTab].techs.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                className="group flex items-center justify-center h-16 md:h-20 rounded-xl bg-white hover:shadow-lg hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="font-heading text-[11px] md:text-xs font-bold text-text-dark group-hover:text-accent transition-colors duration-300 text-center px-2">
                  {tech}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
