import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "PROSYS LTD's terms and conditions governing the use of our website and services.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "Scope",
    content:
      "These Terms govern your use of prosysltd.com and any free resources, demos, or general communications you receive through it. Paid engagements are governed by a separate Master Services Agreement (MSA) and Statement of Work (SOW), which override these Terms in the event of a conflict.",
  },
  {
    title: "About PROSYS LTD",
    content:
      "PROSYS LTD is a software engineering practice headquartered in Lahore, Pakistan. References to \"we\", \"us\", or \"our\" mean PROSYS LTD.",
  },
  {
    title: "Acceptable Use",
    content:
      "You agree not to use this website to (a) submit false or misleading information; (b) attempt to gain unauthorized access to any system, account, or data; (c) interfere with site availability through automated traffic, scraping at scale, or denial-of-service techniques; or (d) use any content for purposes that violate applicable law.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content on this website — including copy, designs, illustrations, code samples, and case studies — is owned by PROSYS LTD or licensed to us, and is protected by intellectual property laws. You may share short quotations with attribution. Wholesale reproduction, scraping for AI training datasets, or commercial reuse is not permitted without written consent. Client deliverables under an MSA/SOW are assigned per the terms of that agreement, typically on full payment.",
  },
  {
    title: "Client Engagements",
    content:
      "Where you engage us under an MSA/SOW, you agree to provide timely access to systems, decisions, and stakeholders required to deliver the work. We reserve the right to pause work and adjust the schedule where client-side blockers materially affect delivery. All commercial terms — fees, milestones, change control, IP, warranties — are set out in the MSA/SOW.",
  },
  {
    title: "Confidentiality",
    content:
      "We treat any non-public information you share with us as confidential and use it only to evaluate or deliver the engagement. We will sign a mutual NDA on request, and we expect the same protection of any sensitive information we share with you.",
  },
  {
    title: "Disclaimers",
    content:
      "The website and its content are provided \"as is\" without warranty of any kind, express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components. Nothing on this website constitutes legal, financial, or professional advice.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, PROSYS LTD will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for lost profits or revenues, arising out of or related to your use of this website. Where you have a paid engagement with us, our liability is capped as set out in the MSA/SOW.",
  },
  {
    title: "Third-Party Links",
    content:
      "Our website may link to third-party websites or services. We do not endorse and are not responsible for the content, policies, or practices of any third party.",
  },
  {
    title: "Termination",
    content:
      "We may suspend or terminate your access to the website at any time for breach of these Terms. Either party may terminate a paid engagement under the terms of the applicable MSA/SOW. Provisions that by their nature should survive termination — including intellectual property, confidentiality, and limitation of liability — will survive.",
  },
  {
    title: "Governing Law & Disputes",
    content:
      "These Terms are governed by the laws of the Islamic Republic of Pakistan. Any dispute arising from or relating to these Terms or your use of the website will be resolved exclusively by the courts of Lahore, Pakistan, unless otherwise required by mandatory local law.",
  },
  {
    title: "Changes",
    content:
      "We may update these Terms from time to time. The current version is always available at this URL. Material changes will be highlighted at the top of this page with the new effective date.",
  },
  {
    title: "Contact",
    content: `For any question about these Terms, contact us at ${siteConfig.email} or by post at PROSYS LTD, Lahore, Pakistan.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PageHero
          size="compact"
          badge="Legal"
          title="Terms &"
          highlight="Conditions"
          description="Terms governing your use of our website and services."
        />

        <section className="py-20 lg:py-28 bg-light-primary">
          <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
            <div className="space-y-6">
              {sections.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 0.04}>
                  <div className="p-6 md:p-8 border border-card-light-border bg-white">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-accent/10 text-accent text-xs font-bold flex items-center justify-center mt-0.5">
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
