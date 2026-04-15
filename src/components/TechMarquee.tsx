"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";

const techCategories = [
  {
    label: "All",
    techs: [
      { name: "React", logo: "/logos/react.svg" },
      { name: "Next.js", logo: "/logos/nextjs.svg" },
      { name: "TypeScript", logo: "/logos/typescript.svg" },
      { name: "Node.js", logo: "/logos/nodejs.svg" },
      { name: "Python", logo: "/logos/python.svg" },
      { name: "TailwindCSS", logo: "/logos/tailwindcss.svg" },
      { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
      { name: "MongoDB", logo: "/logos/mongodb.svg" },
      { name: "AWS", logo: "/logos/aws.svg" },
      { name: "Vercel", logo: "/logos/vercel.svg" },
      { name: "OpenAI", logo: "/logos/openai.svg" },
      { name: "LangChain", logo: "/logos/langchain.svg" },
      { name: "Docker", logo: "/logos/docker.svg" },
      { name: "Figma", logo: "/logos/figma.svg" },
      { name: "n8n", logo: "/logos/n8n.svg" },
      { name: "Stripe", logo: "/logos/stripe.svg" },
    ],
  },
  {
    label: "Frontend",
    techs: [
      { name: "React", logo: "/logos/react.svg" },
      { name: "Next.js", logo: "/logos/nextjs.svg" },
      { name: "TypeScript", logo: "/logos/typescript.svg" },
      { name: "TailwindCSS", logo: "/logos/tailwindcss.svg" },
      { name: "Framer Motion", logo: "/logos/framer-motion.svg" },
      { name: "Figma", logo: "/logos/figma.svg" },
    ],
  },
  {
    label: "Backend",
    techs: [
      { name: "Node.js", logo: "/logos/nodejs.svg" },
      { name: "Python", logo: "/logos/python.svg" },
      { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
      { name: "MongoDB", logo: "/logos/mongodb.svg" },
      { name: "Redis", logo: "/logos/redis.svg" },
      { name: "GraphQL", logo: "/logos/graphql.svg" },
      { name: "Prisma", logo: "/logos/prisma.svg" },
    ],
  },
  {
    label: "AI & Data",
    techs: [
      { name: "OpenAI", logo: "/logos/openai.svg" },
      { name: "LangChain", logo: "/logos/langchain.svg" },
      { name: "Pinecone", logo: "/logos/pinecone.svg" },
      { name: "Hugging Face", logo: "/logos/huggingface.svg" },
      { name: "FastAPI", logo: "/logos/fastapi.svg" },
      { name: "ChromaDB", logo: "/logos/chromadb.svg" },
    ],
  },
  {
    label: "DevOps & Cloud",
    techs: [
      { name: "AWS", logo: "/logos/aws.svg" },
      { name: "Vercel", logo: "/logos/vercel.svg" },
      { name: "Docker", logo: "/logos/docker.svg" },
      { name: "GitHub Actions", logo: "/logos/github-actions.svg" },
      { name: "Terraform", logo: "/logos/terraform.svg" },
    ],
  },
  {
    label: "Tools",
    techs: [
      { name: "Stripe", logo: "/logos/stripe.svg" },
      { name: "n8n", logo: "/logos/n8n.svg" },
      { name: "Figma", logo: "/logos/figma.svg" },
      { name: "Sanity CMS", logo: "/logos/sanity.svg" },
      { name: "Supabase", logo: "/logos/supabase.svg" },
      { name: "Airtable", logo: "/logos/airtable.svg" },
    ],
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

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {techCategories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === i
                    ? "gradient-bg text-white"
                    : "text-text-light-muted hover:text-accent-light border border-card-dark-border hover:border-accent/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

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
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03 }}
                className="group relative flex flex-col items-center justify-center gap-2.5 h-24 md:h-28 rounded-md bg-white hover:-translate-y-1 transition-all duration-300 p-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-accent/[0.15] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-accent/50 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="relative z-10 w-7 h-7 md:w-8 md:h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10 text-[10px] md:text-xs font-medium text-text-dark/70 group-hover:text-text-dark transition-colors duration-300 text-center leading-tight">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
