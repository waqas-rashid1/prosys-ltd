import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Insights from "@/components/Insights";
import Industries from "@/components/Industries";
import Approach from "@/components/Approach";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Insights />
        <Industries />
        <Approach />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
