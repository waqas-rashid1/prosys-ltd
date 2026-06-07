"use client";

import Image from "next/image";
import ScrollReveal from "./ui/ScrollReveal";
import DarkSectionFx from "./ui/DarkSectionFx";

/**
 * Partners — moving technology stack marquee.
 *
 * Two rows scroll in opposite directions. Each tile is logo-first: icon well
 * on top, name below — reads clearer at speed than inline pill chips.
 */

type Tech = { name: string; logo: string };

const ROW_ONE: Tech[] = [
  { name: "React", logo: "/logos/react.svg" },
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "Node.js", logo: "/logos/nodejs.svg" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "Rust", logo: "/logos/rust.svg" },
  { name: "TailwindCSS", logo: "/logos/tailwindcss.svg" },
  { name: "GraphQL", logo: "/logos/graphql.svg" },
  { name: "Prisma", logo: "/logos/prisma.svg" },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
  { name: "MongoDB", logo: "/logos/mongodb.svg" },
  { name: "Redis", logo: "/logos/redis.svg" },
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "Google Cloud", logo: "/logos/google-cloud.svg" },
  { name: "Azure", logo: "/logos/azure.svg" },
  { name: "Vercel", logo: "/logos/vercel.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "Kubernetes", logo: "/logos/kubernetes.svg" },
  { name: "Terraform", logo: "/logos/terraform.svg" },
  { name: "GitHub Actions", logo: "/logos/github-actions.svg" },
];

const ROW_TWO: Tech[] = [
  { name: "OpenAI", logo: "/logos/openai.svg" },
  { name: "Claude", logo: "/logos/claude.svg" },
  { name: "Gemini", logo: "/logos/gemini.svg" },
  { name: "LangChain", logo: "/logos/langchain.svg" },
  { name: "Hugging Face", logo: "/logos/huggingface.svg" },
  { name: "Pinecone", logo: "/logos/pinecone.svg" },
  { name: "TensorFlow", logo: "/logos/tensorflow.svg" },
  { name: "scikit-learn", logo: "/logos/scikit-learn.svg" },
  { name: "FastAPI", logo: "/logos/fastapi.svg" },
  { name: "Snowflake", logo: "/logos/snowflake.svg" },
  { name: "Databricks", logo: "/logos/databricks.svg" },
  { name: "Apache Kafka", logo: "/logos/kafka.svg" },
  { name: "Apache Airflow", logo: "/logos/airflow.svg" },
  { name: "Stripe", logo: "/logos/stripe.svg" },
  { name: "Twilio", logo: "/logos/twilio.svg" },
  { name: "Supabase", logo: "/logos/supabase.svg" },
  { name: "Sanity", logo: "/logos/sanity.svg" },
  { name: "Figma", logo: "/logos/figma.svg" },
  { name: "n8n", logo: "/logos/n8n.svg" },
  { name: "Datadog", logo: "/logos/datadog.svg" },
];

function TechTile({ tech }: { tech: Tech }) {
  return (
    <div
      className="group/tile relative mx-2.5 w-[128px] shrink-0 cursor-default transition-all duration-300 ease-out hover:z-10 hover:-translate-y-1.5 hover:scale-[1.06]"
      title={tech.name}
    >
      {/* Accent top bar on hover */}
      <span
        className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover/tile:scale-x-100 transition-transform duration-300 origin-left z-10"
        aria-hidden="true"
      />

      <div className="relative border border-card-dark-border bg-gradient-to-b from-card-dark/90 to-dark-primary/80 overflow-hidden transition-all duration-300 group-hover/tile:border-accent/50 group-hover/tile:shadow-[0_16px_40px_-12px_rgba(6,182,212,0.35)]">
        {/* Logo well */}
        <div className="relative flex h-[88px] items-center justify-center border-b border-card-dark-border bg-dark-primary/60 group-hover/tile:bg-dark-primary transition-colors duration-300">
          <span
            className="pointer-events-none absolute inset-0 opacity-0 group-hover/tile:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(ellipse 80px 50px at 50% 60%, rgba(6,182,212,0.12), transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="relative flex h-14 w-14 items-center justify-center border border-white/[0.08] bg-white/[0.03] group-hover/tile:border-accent/30 group-hover/tile:bg-white/[0.06] transition-all duration-300">
            <Image
              src={tech.logo}
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 object-contain opacity-70 grayscale group-hover/tile:opacity-100 group-hover/tile:grayscale-0 group-hover/tile:scale-110 transition-all duration-300"
            />
          </div>
        </div>

        {/* Name */}
        <div className="px-2 py-3 text-center">
          <span className="block text-[11px] font-semibold leading-tight tracking-wide text-text-light-muted/80 group-hover/tile:text-white transition-colors duration-300">
            {tech.name}
          </span>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  techs,
  direction = "left",
  label,
}: {
  techs: Tech[];
  direction?: "left" | "right";
  label: string;
}) {
  const animationClass =
    direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div className="relative">
      <p className="mb-3 px-6 lg:px-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-accent-light/50">
        {label}
      </p>
      <div className="relative overflow-hidden border-y border-card-dark-border/60 bg-dark-primary/25 py-4">
        <div
          className={`flex w-max ${animationClass} group-hover:[animation-play-state:paused]`}
        >
          {[...techs, ...techs].map((tech, i) => (
            <TechTile key={`${tech.name}-${i}`} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section
      id="partners"
      className="relative py-14 lg:py-20 bg-dark-secondary border-t border-card-dark-border overflow-hidden"
    >
      <DarkSectionFx variant="soft" />

      <div className="relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] text-accent-light/60 uppercase tracking-[0.35em] font-semibold">
                / Technology
              </span>
              <span className="h-px flex-1 max-w-[160px] bg-gradient-to-r from-accent-light/40 to-transparent" />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  The stack we ship{" "}
                  <span className="gradient-text">in production.</span>
                </h2>
                <p className="text-text-light-muted text-base md:text-lg leading-relaxed max-w-2xl mt-3">
                  A pragmatic toolkit, chosen for long-term operability over
                  novelty. We standardize on what teams can actually run at 3am
                  on a Saturday.
                </p>
              </div>
              <div className="hidden lg:inline-flex items-center gap-2.5 self-end rounded-none border border-card-dark-border bg-card-dark/60 px-4 py-2 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-light/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-light" />
                </span>
                <span className="text-sm font-medium text-white">
                  {ROW_ONE.length + ROW_TWO.length}+
                </span>
                <span className="text-sm text-text-light-muted">
                  technologies in active use
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div
          className="relative group space-y-6"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          }}
        >
          <MarqueeRow techs={ROW_ONE} direction="left" label="Core platform & cloud" />
          <MarqueeRow techs={ROW_TWO} direction="right" label="AI, data & integrations" />

          <p className="mt-2 text-center text-[11px] text-text-light-muted/45 tracking-wide">
            Hover the row to pause · hover a tile to focus
          </p>
        </div>
      </div>
    </section>
  );
}
