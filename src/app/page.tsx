import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
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
        {/* light */}
        <Services />
        {/* dark */}
        <About />
        {/* light */}
        <StatsSection />
        {/* light */}
        <CaseStudies />
        {/* dark */}
        <Testimonials />
        {/* light */}
        <Industries />
        {/* dark */}
        <Approach />
        {/* dark */}
        <TechMarquee />
        {/* light */}
        <Insights />
        {/* dark */}
        <Partners />
        {/* dark */}
        <HelpCTA />
      </main>
      <Footer />
    </>
  );
}
