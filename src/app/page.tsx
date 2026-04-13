import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Insights from "@/components/Insights";
import Industries from "@/components/Industries";
import Approach from "@/components/Approach";
import FAQ from "@/components/FAQ";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <About />
        <CaseStudies />
        <Industries />
        <Approach />
        <FAQ />
        <Insights />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
