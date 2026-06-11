import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import BlogListing from "./BlogListing";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";

export const metadata: Metadata = {
  title: "Production AI Field Notes",
  description:
    "Practical lessons on safe AI deployment: secure agents, governance, enterprise knowledge systems, integrations, security testing, and monitoring.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Production AI Field Notes — PROSYS LTD",
    description:
      "Practical lessons on safe AI deployment: secure agents, governance, enterprise knowledge systems, integrations, security testing, and monitoring.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Production AI Field Notes — PROSYS LTD",
    description:
      "Practical lessons on safe AI deployment: secure agents, governance, enterprise knowledge systems, integrations, security testing, and monitoring.",
  },
};

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Blog", path: "/blog" },
        ]}
      />
      <Navbar />
      <main id="main-content">
        <PageHero
          size="compact"
          badge="Production AI Field Notes"
          title="Field notes on"
          highlight="deploying AI safely."
          description="Practical lessons on production AI — secure agents, governance, enterprise knowledge systems, integrations, security testing, monitoring, and what breaks after launch."
          trustSignals={["Written by practitioners", "Field-tested playbooks", "Production-grounded analysis"]}
          primaryCta={{ label: "Read the latest", href: "#articles" }}
          secondaryCta={{ label: "Subscribe", href: "#newsletter" }}
        />

        <BlogListing />
      </main>
      <Footer />
    </>
  );
}
