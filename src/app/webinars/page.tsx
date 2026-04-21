import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Videos from "@/components/Videos";
import PageHero from "@/components/ui/PageHero";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Webinars",
  description:
    "Watch PROSYS LTD webinars and talks — engineering deep-dives, applied AI sessions, and founder conversations on shipping production-grade software.",
  alternates: {
    canonical: "/webinars",
  },
  openGraph: {
    title: "Webinars | PROSYS LTD",
    description:
      "Engineering deep-dives, applied AI sessions, and founder conversations from the PROSYS team.",
    url: "/webinars",
  },
};

export default function WebinarsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          badge="Webinars"
          title="Inside the"
          highlight="engine room."
          description="Recorded sessions, technical deep-dives, and founder conversations — watch how senior teams architect, ship, and scale production software and applied AI."
          trustSignals={[
            "Engineering deep-dives",
            "Applied AI sessions",
            "Founder conversations",
          ]}
          primaryCta={{ label: "Watch now", href: "#sessions" }}
          secondaryCta={{ label: "Book a call", href: "/contact" }}
        />

        <section id="sessions" className="scroll-mt-20">
          <Videos hideHeader />
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
