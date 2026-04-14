import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "PROSYS LTD's terms and conditions governing the use of our website and services.",
};

const sections = [
  { title: "Acceptance of Terms", content: "By accessing and using the PROSYS LTD website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services." },
  { title: "Services", content: "PROSYS LTD provides software development, AI development, digital marketing, and related technology services as described on our website. All services are provided subject to a separate service agreement or statement of work." },
  { title: "Intellectual Property", content: "All content, designs, code, and materials on this website are the intellectual property of PROSYS LTD unless otherwise stated. Client deliverables are transferred upon full payment as specified in individual service agreements." },
  { title: "Client Obligations", content: "Clients agree to provide timely feedback, access to necessary systems, and accurate project requirements. Delays caused by client-side dependencies may affect project timelines." },
  { title: "Payment Terms", content: "Payment terms are specified in individual service agreements. Standard terms require a deposit before project commencement, with milestone-based payments throughout the engagement." },
  { title: "Limitation of Liability", content: "PROSYS LTD shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the fees paid for the specific service." },
  { title: "Confidentiality", content: "Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. This obligation survives the termination of any service agreement." },
  { title: "Termination", content: "Either party may terminate a service engagement with 30 days written notice, subject to the terms of the applicable service agreement. Outstanding payments for work completed remain due upon termination." },
  { title: "Governing Law", content: "These Terms and Conditions are governed by the laws of Pakistan. Any disputes shall be resolved through arbitration in Lahore, Pakistan." },
  { title: "Changes to Terms", content: "PROSYS LTD reserves the right to update these Terms at any time. Continued use of our website after changes constitutes acceptance of the updated Terms." },
  { title: "Contact", content: "For questions about these Terms, contact us at hello@prosysltd.com." },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          badge="Legal"
          title="Terms &"
          highlight="Conditions"
          description="The terms governing your use of our website and services."
        />

        <section className="py-28 lg:py-36 bg-light-primary">
          <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
            <div className="space-y-6">
              {sections.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 0.04}>
                  <div className="p-6 md:p-8 rounded-2xl border border-card-light-border bg-white">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 text-accent text-xs font-bold flex items-center justify-center mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h2 className="font-heading text-lg font-bold text-text-dark mb-3">
                          {s.title}
                        </h2>
                        <p className="text-text-dark-muted leading-relaxed">
                          {s.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <p className="text-text-dark-muted text-sm mt-10 text-center">
              Last updated: April 2026
            </p>
          </div>
        </section>

        <CTABanner
          title="Have Questions About"
          highlight="Our Terms?"
          description="We're happy to clarify anything. Get in touch."
          buttonText="Contact Us"
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
