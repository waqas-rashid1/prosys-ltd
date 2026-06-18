"use client";

import Image from "next/image";
import ScrollReveal from "./ui/ScrollReveal";
import DarkSectionFx from "./ui/DarkSectionFx";
import SectionHeading from "./ui/SectionHeading";

/**
 * Partners — moving technology stack marquee.
 *
 * Two rows scroll in opposite directions across the section. Each row's
 * markup is duplicated end-to-end so the CSS keyframes (translateX 0 →
 * -50%) creates a perfectly seamless loop. The whole thing pauses on
 * hover so visitors can read individual logos.
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

function TechChip({ tech }: { tech: Tech }) {
  return (
    <div
      className="group/chip relative flex items-center gap-3 px-5 py-3.5 mx-2.5 rounded-xl border border-card-dark-border bg-gradient-to-b from-card-dark/80 to-card-dark/30 backdrop-blur-sm whitespace-nowrap cursor-default transition-all duration-300 ease-out hover:z-10 hover:scale-[1.14] hover:-translate-y-1 hover:border-accent/60 hover:from-card-dark hover:to-card-dark hover:shadow-[0_12px_30px_-8px_rgba(6,182,212,0.45)]"
      title={tech.name}
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover/chip:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(120px 60px at 50% 0%, rgba(6,182,212,0.14), transparent 70%)",
        }}
        aria-hidden="true"
      />
      <Image
        src={tech.logo}
        alt=""
        width={24}
        height={24}
        className="relative w-6 h-6 object-contain opacity-65 grayscale group-hover/chip:opacity-100 group-hover/chip:grayscale-0 transition-all duration-300"
      />
      <span className="relative text-[13px] font-medium text-text-light-muted/70 group-hover/chip:text-white transition-colors duration-300 tracking-wide">
        {tech.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  techs,
  direction = "left",
}: {
  techs: Tech[];
  direction?: "left" | "right";
}) {
  const animationClass =
    direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div className="relative overflow-hidden py-2.5">
      <div
        className={`flex w-max ${animationClass} group-hover:[animation-play-state:paused]`}
      >
        {[...techs, ...techs].map((tech, i) => (
          <TechChip key={`${tech.name}-${i}`} tech={tech} />
        ))}
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
          <SectionHeading
            theme="dark"
            eyebrow="Technology"
            title={
              <>
                The stack we ship{" "}
                <span className="gradient-text">in production.</span>
              </>
            }
            description="A pragmatic toolkit, chosen for long-term operability over novelty. We standardize on what teams can actually run at 3am on a Saturday."
            aside={
              <div className="hidden lg:inline-flex items-center gap-2.5 rounded-full border border-card-dark-border bg-card-dark/60 px-4 py-2 backdrop-blur-sm">
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
            }
            className="mb-10"
          />
        </div>

        <div
          className="relative group"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          }}
        >
          <div className="space-y-2">
            <MarqueeRow techs={ROW_ONE} direction="left" />
            <MarqueeRow techs={ROW_TWO} direction="right" />
          </div>

          <p className="mt-6 text-center text-xs text-text-light-muted/50">
            Hover to pause · hover a tool to focus
          </p>
        </div>
      </div>
    </section>
  );
}
