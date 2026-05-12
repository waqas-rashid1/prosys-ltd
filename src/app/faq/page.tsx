import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/ui/CTABanner";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";
import { GlobalFAQSchema } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about PROSYS LTD's services, process, technologies, pricing, and how we work with startups and enterprises worldwide.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — PROSYS LTD",
    description:
      "Frequently asked questions about PROSYS LTD's services, process, technologies, pricing, and how we work with startups and enterprises worldwide.",
    url: "/faq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — PROSYS LTD",
    description:
      "Frequently asked questions about PROSYS LTD's services, process, technologies, pricing, and how we work with startups and enterprises worldwide.",
  },
};

export default function FAQPage() {
  return (
    <>
      <GlobalFAQSchema />
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "FAQ", path: "/faq" },
        ]}
      />
      <Navbar />
      <main id="main-content">
        <PageHero
          size="compact"
          badge="FAQ"
          title="Frequently"
          highlight="asked questions."
          description="Engagement scope, pricing models, intellectual property ownership, delivery process, and operational standards — answered directly."
        />

        <div className="bg-dark-secondary">
          <FAQ />
        </div>

        <CTABanner
          title="Question not"
          highlight="answered here?"
          description="The engagement lead reviews every inbound. Response within 24 business hours."
          buttonText="Contact Us"
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
