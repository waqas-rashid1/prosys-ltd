"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export default function ApplyForm({ defaultRole }: { defaultRole?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const fd = new FormData(e.currentTarget);
    const payload = {
      intent: "career-application",
      name: (fd.get("name") || "").toString().trim(),
      email: (fd.get("email") || "").toString().trim(),
      role: (fd.get("role") || "").toString().trim(),
      experience: (fd.get("experience") || "").toString(),
      portfolio: (fd.get("portfolio") || "").toString().trim(),
      linkedin: (fd.get("linkedin") || "").toString().trim(),
      message: (fd.get("message") || "").toString().trim(),
      company: "Career Application",
    };

    if (!payload.name || !payload.email || !payload.role || !payload.message) {
      setStatus("error");
      setErrorMsg("Please complete your name, email, role, and cover message.");
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
        throw new Error(data.error || "Could not send your application.");
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
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-accent/10 text-accent mx-auto flex items-center justify-center mb-5">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="font-heading text-2xl font-bold text-text-dark mb-3">Application received.</h3>
        <p className="text-text-dark-muted max-w-md mx-auto">
          Thanks for applying. Our talent team will review and get back to you within 5 business days.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            type="text" id="name" name="name" required autoComplete="name"
            placeholder="Jane Doe"
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark focus:outline-none focus:border-accent transition-all"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">
            Email <span className="text-accent">*</span>
          </label>
          <input
            type="email" id="email" name="email" required autoComplete="email"
            placeholder="jane@example.com"
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark focus:outline-none focus:border-accent transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-text-dark mb-2">
            Applying for <span className="text-accent">*</span>
          </label>
          <input
            type="text" id="role" name="role" required
            defaultValue={defaultRole || ""}
            placeholder="e.g. Senior Full-Stack Engineer"
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark focus:outline-none focus:border-accent transition-all"
          />
        </div>
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-text-dark mb-2">
            Years of Experience
          </label>
          <select
            id="experience" name="experience" defaultValue=""
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark focus:outline-none focus:border-accent transition-all"
          >
            <option value="" disabled>Select</option>
            <option>0 – 1 year</option>
            <option>1 – 3 years</option>
            <option>3 – 5 years</option>
            <option>5 – 8 years</option>
            <option>8+ years</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium text-text-dark mb-2">
            LinkedIn URL
          </label>
          <input
            type="url" id="linkedin" name="linkedin"
            placeholder="https://linkedin.com/in/…"
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark focus:outline-none focus:border-accent transition-all"
          />
        </div>
        <div>
          <label htmlFor="portfolio" className="block text-sm font-medium text-text-dark mb-2">
            Portfolio / GitHub
          </label>
          <input
            type="url" id="portfolio" name="portfolio"
            placeholder="https://…"
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark focus:outline-none focus:border-accent transition-all"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">
          Cover Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5} maxLength={3000}
          placeholder="Tell us why you'd be a great fit. Link to projects you're proud of."
          className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark focus:outline-none focus:border-accent transition-all resize-none"
        />
      </div>

      {status === "error" && errorMsg && (
        <div className="flex items-start gap-3 p-4 rounded-md bg-red-50 border border-red-200 text-red-700">
          <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
          <p className="text-sm">{errorMsg}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
        <p className="text-xs text-text-dark-muted">
          By submitting, you agree to our{" "}
          <a href="/privacy" className="text-accent hover:underline">privacy policy</a>.
        </p>
        <Button type="submit" size="lg" className="gap-2 shrink-0" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Sending…
            </>
          ) : (
            <>
              <Send size={16} /> Submit Application
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
