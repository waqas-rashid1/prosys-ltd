"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle, FileText } from "lucide-react";
import Button from "@/components/ui/Button";
import { openRoleTitles, GENERAL_APPLICATION } from "@/lib/careers-data";

type Status = "idle" | "submitting" | "success" | "error";

function looksLikeUrl(value: string) {
  if (!value) return true; // optional
  try {
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

export default function ApplyForm({ defaultRole }: { defaultRole?: string }) {
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

    const role = (fd.get("role") || "").toString().trim();
    const validRoles = [...openRoleTitles, GENERAL_APPLICATION];
    if (role && !validRoles.includes(role)) {
      setStatus("error");
      setErrorMsg("Please select a role from the list.");
      return;
    }

    const cvUrl = (fd.get("cvUrl") || "").toString().trim();
    if (cvUrl && !looksLikeUrl(cvUrl)) {
      setStatus("error");
      setErrorMsg("Please paste a valid CV link (e.g. Google Drive, Dropbox, or LinkedIn).");
      return;
    }

    const payload = {
      intent: "career-application",
      name: (fd.get("name") || "").toString().trim(),
      email: (fd.get("email") || "").toString().trim(),
      role,
      experience: (fd.get("experience") || "").toString(),
      portfolio: (fd.get("portfolio") || "").toString().trim(),
      linkedin: (fd.get("linkedin") || "").toString().trim(),
      message: (fd.get("message") || "").toString().trim(),
      cvUrl,
      company: "Career Application",
      consent: true,
      website: (fd.get("website") || "").toString(),
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
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input
          type="text" id="website" name="website" tabIndex={-1} autoComplete="off"
        />
      </div>

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
          <select
            id="role" name="role" required
            defaultValue={defaultRole || ""}
            className="w-full px-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark focus:outline-none focus:border-accent transition-all"
          >
            <option value="" disabled>Select a role</option>
            {openRoleTitles.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
            <option value={GENERAL_APPLICATION}>{GENERAL_APPLICATION}</option>
          </select>
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
        <label htmlFor="cvUrl" className="block text-sm font-medium text-text-dark mb-2">
          CV / Resume Link
          <span className="text-text-dark-muted font-normal ml-2 text-xs">
            Google Drive, Dropbox, Notion, or LinkedIn — set sharing to &ldquo;Anyone with the link&rdquo;
          </span>
        </label>
        <div className="relative">
          <FileText
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-accent pointer-events-none"
          />
          <input
            type="url"
            id="cvUrl"
            name="cvUrl"
            placeholder="https://drive.google.com/…"
            className="w-full pl-10 pr-4 py-3 rounded-md border border-card-light-border bg-light-primary text-text-dark placeholder:text-text-dark-muted/70 focus:outline-none focus:border-accent transition-all"
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

      <label className="flex items-start gap-3 cursor-pointer text-sm text-text-dark-muted">
        <input
          type="checkbox" name="consent" required
          className="mt-1 h-4 w-4 rounded border-card-light-border text-accent focus:ring-accent cursor-pointer"
        />
        <span>
          I agree to PROSYS LTD&apos;s{" "}
          <a href="/privacy" className="text-accent hover:underline">privacy policy</a>{" "}
          and consent to my data being processed for recruitment purposes.
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
          We respond to every application within 5 business days.
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
