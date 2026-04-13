import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about PROSYS LTD's services, process, technologies, pricing, and how we work with startups and enterprises worldwide.",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          badge="FAQ"
          title="Got"
          highlight="Questions?"
          description="Everything you need to know about working with PROSYS LTD. Can't find what you're looking for? Reach out directly."
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
