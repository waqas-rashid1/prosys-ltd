import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/ui/CTABanner";
import { ServiceFAQSchema, BreadcrumbSchema } from "@/components/schema/PageSchema";
import { faq } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about PROSYS LTD's services, process, technologies, pricing, and how we work with startups and enterprises worldwide.",
};

export default function FAQPage() {
  const faqSchemaItems = faq.map((f) => ({ q: f.question, a: f.answer }));

  return (
    <>
      <ServiceFAQSchema faq={faqSchemaItems} />
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "FAQ", path: "/faq" },
        ]}
      />
      <Navbar />
      <main id="main-content">
        <PageHero
          badge="FAQ"
          title="Got"
          highlight="Questions?"
          description="Everything you need to know about working with PROSYS LTD — scope, pricing, IP ownership, process, and more."
        />

        <div className="bg-dark-secondary">
          <FAQ />
        </div>

        <CTABanner
          title="Still Have"
          highlight="Questions?"
          description="No problem. Reach out and we'll get back to you within 24 hours."
          buttonText="Contact Us"
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
