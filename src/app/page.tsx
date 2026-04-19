import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
// import Capabilities from "@/components/Capabilities"; // moved to /services
// import CaseStudies from "@/components/CaseStudies"; // hidden from home
// import StatsSection from "@/components/StatsSection"; // hidden from home
import About from "@/components/About";
// import Testimonials from "@/components/Testimonials"; // moved to /about
import Industries from "@/components/Industries";
import Approach from "@/components/Approach";
import Videos from "@/components/Videos";
import Insights from "@/components/Insights";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <About />
        <Industries />
        <Approach />
        <Videos />
        <Insights />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
