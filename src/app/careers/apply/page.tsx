import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplyForm from "./ApplyForm";

export const metadata: Metadata = {
  title: "Apply for a Role",
  description: "Apply to join PROSYS LTD. Submit your application and a member of our talent team will get back to you within 5 business days.",
};

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const { role } = await searchParams;

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="relative pt-32 pb-14 bg-dark-primary overflow-hidden">
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <Link href="/careers" className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors mb-6">
              <ArrowLeft size={14} /> Back to all roles
            </Link>
            <p className="text-xs text-accent-light uppercase tracking-[0.2em] font-medium mb-4">Application</p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
              {role ? `Apply: ${role}` : "Apply to PROSYS LTD"}
            </h1>
            <p className="text-text-light-muted leading-relaxed max-w-2xl">
              Tell us about yourself. We read every application. Expect to hear back within 5 business days.
            </p>
          </div>
        </section>

        <section className="py-14 lg:py-20 bg-light-primary">
          <div className="max-w-[900px] mx-auto px-6 lg:px-8">
            <div className="bg-white border border-card-light-border p-8 md:p-10 rounded-md">
              <ApplyForm defaultRole={role} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
