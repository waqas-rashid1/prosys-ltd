"use client";

import { useState } from "react";
import { Send, Briefcase, Clock, Target, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Button from "./ui/Button";

const intentOptions = [
  { id: "book-call", label: "Book an AI Readiness Call", desc: "I'm ready to scope an AI deployment", icon: Target },
  { id: "proposal", label: "Request a Proposal", desc: "I need a proposal or estimate", icon: Briefcase },
  { id: "explore", label: "Explore Fit", desc: "I'm exploring whether AI fits our workflow", icon: Clock },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [intent, setIntent] = useState("book-call");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const fd = new FormData(e.currentTarget);

    if ((fd.get("website") || "").toString().trim()) {
      setStatus("success");
      return;
    }

    const consent = fd.get("consent");
    if (!consent) {
      setStatus("error");
      setErrorMsg("Please confirm you agree to the privacy policy.");
      return;
    }

    const payload = {
      intent,
      name: (fd.get("name") || "").toString().trim(),
      email: (fd.get("email") || "").toString().trim(),
      company: (fd.get("company") || "").toString().trim(),
      role: (fd.get("role") || "").toString().trim(),
      companySize: (fd.get("companySize") || "").toString(),
      industry: (fd.get("industry") || "").toString(),
      service: (fd.get("service") || "").toString(),
      timeline: (fd.get("timeline") || "").toString(),
      budget: (fd.get("budget") || "").toString(),
      message: (fd.get("message") || "").toString().trim(),
      consent: true,
      website: (fd.get("website") || "").toString(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setErrorMsg("Please complete your name, email, and project details.");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok || !data.ok) {
        throw new Error(data.error || "Could not send your message.");
      }
      setStatus("success");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setErrorMsg(msg);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-10 animate-in fade-in duration-500">
        <div className="w-16 h-16 rounded-full bg-accent/10 text-accent mx-auto flex items-center justify-center mb-5 animate-in zoom-in duration-500">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="font-heading text-2xl font-bold text-text-dark mb-3">Message received.</h3>
        <p className="text-text-dark-muted max-w-md mx-auto mb-6">
          The engagement lead will respond within 24 business hours with scoped next steps for your build.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-accent font-semibold hover:underline cursor-pointer"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-7" onSubmit={handleSubmit} noValidate>
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="website-hp">Website</label>
        <input
          type="text" id="website-hp" name="website" tabIndex={-1} autoComplete="off"
        />
      </div>

      {/* Intent routing */}
      <div>
        <label className="block text-[11px] uppercase tracking-widest font-semibold text-text-dark-muted mb-3">
          What brings you here?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {intentOptions.map((opt) => {
            const Icon = opt.icon;
            const active = intent === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setIntent(opt.id)}
                className={`text-left p-3.5 rounded-md border transition-all duration-200 cursor-pointer ${ active ? "border-accent bg-accent/5" : "border-card-light-border bg-white hover:border-accent/40" }`}
              >
                <Icon size={16} className={`mb-2 ${active ? "text-accent" : "text-text-dark-muted"}`} />
                <p className={`text-sm font-semibold ${active ? "text-accent" : "text-text-dark"}`}>
                  {opt.label}
                </p>
                <p className="text-[11px] text-text-dark-muted mt-0.5 leading-snug">{opt.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            type="text" id="name" name="name" required autoComplete="name"
            placeholder="Jane Doe"
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark placeholder:text-text-dark-muted/70 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
            Work Email <span className="text-accent">*</span>
          </label>
          <input
            type="email" id="email" name="email" required autoComplete="email"
            placeholder="jane@company.com"
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark placeholder:text-text-dark-muted/70 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-text-dark mb-2">
            Company <span className="text-accent">*</span>
          </label>
          <input
            type="text" id="company" name="company" required autoComplete="organization"
            placeholder="Acme Inc."
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark placeholder:text-text-dark-muted/70 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-text-dark mb-2">
            Your Role
          </label>
          <input
            type="text" id="role" name="role" autoComplete="organization-title"
            placeholder="CTO, Founder, Product Lead…"
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark placeholder:text-text-dark-muted/70 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="companySize" className="block text-sm font-medium text-text-dark mb-2">
            Company Size
          </label>
          <select
            id="companySize" name="companySize" defaultValue=""
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
          >
            <option value="" disabled>Select size</option>
            <option>Solo / Founder</option>
            <option>2 – 10 (Early-stage startup)</option>
            <option>11 – 50 (Seed / Series A)</option>
            <option>51 – 200 (Mid-market)</option>
            <option>201 – 1000 (Growth-stage)</option>
            <option>1000+ (Enterprise)</option>
          </select>
        </div>
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-text-dark mb-2">
            Industry
          </label>
          <select
            id="industry" name="industry" defaultValue=""
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
          >
            <option value="" disabled>Select industry</option>
            <option>FinTech / Financial Services</option>
            <option>HealthTech / Healthcare</option>
            <option>E-Commerce / D2C</option>
            <option>EdTech / Education</option>
            <option>SaaS / Software</option>
            <option>Real Estate / PropTech</option>
            <option>Logistics / Supply Chain</option>
            <option>Media / Entertainment</option>
            <option>Government / Public Sector</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-text-dark mb-2">
            Primary Need
          </label>
          <select
            id="service" name="service" defaultValue=""
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
          >
            <option value="" disabled>Select a service</option>
            <option>AI Readiness &amp; Strategy</option>
            <option>Secure AI Agents &amp; Workflow Automation</option>
            <option>AI Governance &amp; Control Systems</option>
            <option>Secure Enterprise Knowledge Systems</option>
            <option>AI Integration with Existing Systems</option>
            <option>AI Security, Monitoring &amp; Optimization</option>
            <option>Not sure — need guidance</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-text-dark mb-2">
            Timeline
          </label>
          <select
            id="timeline" name="timeline" defaultValue=""
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all"
          >
            <option value="" disabled>When to start?</option>
            <option>Immediately</option>
            <option>Within 1 month</option>
            <option>Within a quarter</option>
            <option>Exploring / No rush</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-text-dark mb-2">
          Estimated Budget (USD)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {["$10K – $25K", "$25K – $75K", "$75K – $250K", "$250K+"].map((b) => (
            <label key={b} className="cursor-pointer">
              <input type="radio" name="budget" value={b} className="peer sr-only" />
              <span className="block text-center py-2.5 px-2 text-xs font-semibold text-text-dark border border-card-light-border bg-white rounded-md hover:border-accent/40 peer-checked:border-accent peer-checked:bg-accent/5 peer-checked:text-accent transition-all">
                {b}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
          Project Details <span className="text-accent">*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5} maxLength={5000}
          placeholder="Briefly describe your project, challenges, or goals. The more context you share, the sharper our response."
          className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark placeholder:text-text-dark-muted/70 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all resize-none"
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer text-sm text-text-dark-muted">
        <input
          type="checkbox" name="consent" required
          className="mt-1 h-4 w-4 rounded border-card-light-border text-accent focus:ring-accent cursor-pointer"
        />
        <span>
          I agree to PROSYS LTD&apos;s{" "}
          <a href="/privacy" className="text-accent hover:underline">privacy policy</a>{" "}
          and consent to my data being processed for this enquiry.
        </span>
      </label>

      {status === "error" && errorMsg && (
        <div className="flex items-start gap-3 p-4 rounded-md bg-red-50 border border-red-200 text-red-700" role="alert">
          <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
          <p className="text-sm">{errorMsg}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
        <p className="text-xs text-text-dark-muted">
          We respond within 24 hours.
        </p>
        <Button type="submit" size="lg" className="gap-2 shrink-0" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send size={16} />
              {intent === "book-call" ? "Book My Call" : intent === "proposal" ? "Request Proposal" : "Send Message"}
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
