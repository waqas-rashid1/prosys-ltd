import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Videos from "@/components/Videos";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
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
      "Engineering deep-dives, applied AI sessions, and production case reviews from the PROSYS team.",
    url: "/webinars",
  },
};

export default function WebinarsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          size="compact"
          badge="Webinars"
          title="Inside the"
          highlight="engine room."
          description="Recorded sessions, technical deep-dives, and engineering conversations — how production teams architect, deliver, and operate software and applied AI at scale."
          trustSignals={[
            "Engineering deep-dives",
            "Applied AI sessions",
            "Production case reviews",
          ]}
          primaryCta={{ label: "Watch now", href: "#sessions" }}
          secondaryCta={{ label: "Book a call", href: "/contact" }}
        />

        {/* Sessions list — matches the eyebrow/heading rhythm of /work and /services */}
        <section id="sessions" className="py-14 lg:py-20 bg-light-primary scroll-mt-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex items-end justify-between mb-10">
                <div>
                  <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-3">
                    Latest Sessions
                  </p>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-dark">
                    Watch the <span className="gradient-text">engine room.</span>
                  </h2>
                  <p className="text-text-dark-muted text-base md:text-lg leading-relaxed max-w-2xl mt-4">
                    Process walkthroughs, applied-AI deep dives, and unfiltered
                    engineering conversations from the team. New sessions added
                    monthly.
                  </p>
                </div>
                <p className="text-sm text-text-dark-muted hidden md:block">
                  2 sessions
                </p>
              </div>
            </ScrollReveal>

            {/* Hide the component's own header (we just drew it above) and let
                Videos render only the grid. Pass variant="light" so the cards
                inherit the section's light background. */}
            <Videos hideHeader variant="light" embedded />
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
