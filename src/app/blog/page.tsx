import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import BlogListing from "./BlogListing";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";

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
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-dark-primary overflow-hidden">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-accent/[0.03] blur-[150px]" />
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl">
              <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-6">Blog & Insights</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
                Perspectives on building
                <span className="gradient-text"> what matters.</span>
              </h1>
              <p className="text-lg text-text-light-muted leading-relaxed max-w-2xl">
                Deep dives on AI, SaaS architecture, SEO, AIEO, and the engineering decisions that separate products that scale from products that break.
              </p>
            </div>
          </div>
        </section>

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
