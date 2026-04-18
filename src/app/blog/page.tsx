import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import PageHero from "@/components/ui/PageHero";
import BlogListing from "./BlogListing";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "Insights, guides, and thought leadership from PROSYS LTD on AI development, SaaS engineering, SEO, AIEO, and modern software architecture.",
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
          badge="Blog & Insights"
          title="Perspectives on building"
          highlight="what matters."
          description="Deep dives on AI, SaaS architecture, SEO, AIEO, and the engineering decisions that separate products that scale from products that break."
          trustSignals={["Written by senior engineers", "Field-tested playbooks", "No fluff, ever"]}
          primaryCta={{ label: "Read the latest", href: "#articles" }}
          secondaryCta={{ label: "Subscribe", href: "#newsletter" }}
          stats={[
            { value: `${blogPosts.length}`, label: "Articles" },
            { value: `${new Set(blogPosts.map((p) => p.category)).size}`, label: "Categories" },
            { value: "Weekly", label: "Cadence" },
            { value: "Senior", label: "Authors" },
          ]}
        />

        <BlogListing />

        <FinalCTA
          eyebrow="From reading to building"
          title="Have a project that needs this level of thinking?"
        />
      </main>
      <Footer />
    </>
  );
}
