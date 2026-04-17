import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import StatsSection from "@/components/StatsSection";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Industries from "@/components/Industries";
import Approach from "@/components/Approach";
import TechMarquee from "@/components/TechMarquee";
import Insights from "@/components/Insights";
import Partners from "@/components/Partners";
import HelpCTA from "@/components/HelpCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Capabilities />
        <CaseStudies />
        <StatsSection />
        <About />
        <Testimonials />
        <Industries />
        <Approach />
        <TechMarquee />
        <Insights />
        <Partners />
        <HelpCTA />
      </main>
      <Footer />
    </>
  );
}
