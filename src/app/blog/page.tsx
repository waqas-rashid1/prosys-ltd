import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import BlogListing from "./BlogListing";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Insights, guides, and thought leadership from PROSYS LTD on AI development, SaaS engineering, SEO, AIEO, and modern software architecture.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog & Insights — PROSYS LTD",
    description:
      "Insights, guides, and thought leadership from PROSYS LTD on AI development, SaaS engineering, SEO, AIEO, and modern software architecture.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Insights — PROSYS LTD",
    description:
      "Insights, guides, and thought leadership from PROSYS LTD on AI development, SaaS engineering, SEO, AIEO, and modern software architecture.",
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
          badge="Blog & Insights"
          title="Perspectives on building"
          highlight="what matters."
          description="Deep dives on AI, SaaS architecture, SEO, AIEO, and the engineering decisions that separate products that scale from products that break."
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
