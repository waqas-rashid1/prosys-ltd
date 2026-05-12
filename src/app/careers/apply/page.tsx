import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplyForm from "./ApplyForm";
import { isValidRole } from "@/lib/careers-data";

export const metadata: Metadata = {
  title: "Apply for a Role",
  description: "Apply to join PROSYS LTD. Submit your application and a member of our talent team will get back to you within 5 business days.",
  alternates: { canonical: "/careers/apply" },
  robots: { index: false, follow: true },
};

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const { role: rawRole } = await searchParams;
  const roleIsValid = isValidRole(rawRole);
  const role = roleIsValid ? rawRole : undefined;

  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="relative min-h-[55vh] flex items-center bg-dark-primary overflow-hidden py-24 lg:py-28">
          <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-[140px] animate-pulse-glow" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.35) 0%, transparent 65%)" }} />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px]" style={{ background: "radial-gradient(circle, rgba(103,232,249,0.12) 0%, transparent 70%)" }} />
            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(var(--accent-light) 1px, transparent 1px), linear-gradient(90deg, var(--accent-light) 1px, transparent 1px)", backgroundSize: "90px 90px" }} />
          </div>
          <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 lg:px-8">
            <Link href="/careers" className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors mb-6">
              <ArrowLeft size={14} /> Back to all roles
            </Link>
            <div className="max-w-3xl">
              <p className="text-[11px] text-accent-light uppercase tracking-[0.2em] font-semibold mb-4">Application</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.04] tracking-tight mb-5">
                {role ? (
                  <>
                    Apply:{" "}
                    <span className="gradient-text">{role}</span>
                  </>
                ) : (
                  <>
                    Apply to{" "}
                    <span className="gradient-text">PROSYS LTD.</span>
                  </>
                )}
              </h1>
              <p className="text-base lg:text-lg text-text-light-muted leading-relaxed max-w-2xl mb-6">
                Tell us about yourself. We read every application. Expect to hear back within 5 business days.
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2.5 text-sm text-text-light-muted/80">
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent-light" /> 5-day response SLA</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent-light" /> Remote-friendly</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent-light" /> Transparent process</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-20 bg-light-primary">
          <div className="max-w-[900px] mx-auto px-6 lg:px-8">
            {!roleIsValid && (
              <div className="mb-6 p-5 rounded-md border border-amber-200 bg-amber-50 text-amber-900 text-sm">
                <p className="font-semibold mb-1">That role is no longer open.</p>
                <p>
                  We couldn&apos;t match the role you came from to one of our currently open positions. Browse all{" "}
                  <Link href="/careers#roles" className="underline font-semibold">open roles</Link>{" "}
                  or submit a general application below and our talent team will get back to you.
                </p>
              </div>
            )}
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
