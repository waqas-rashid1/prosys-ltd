import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import Industries from "@/components/Industries";
import Approach from "@/components/Approach";
import FAQ from "@/components/FAQ";
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
        <TechMarquee />
        <Services />
        <About />
        <Testimonials />
        <CaseStudies />
        <Industries />
        <Approach />
        <FAQ />
        <Insights />
        <Partners />
        <HelpCTA />
      </main>
      <Footer />
    </>
  );
}
