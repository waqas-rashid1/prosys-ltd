"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Please enter a valid email.");
      setStatus("error");
      return;
    }

    if (!consent) {
      setErrorMsg("Please confirm you agree to our privacy policy.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const resp = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent: true }),
      });
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok || !data.ok) {
        throw new Error(data.error || "Subscription failed.");
      }
      setStatus("success");
      setEmail("");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 px-4 py-4 rounded-md bg-accent/10 border border-accent/20 text-accent-light animate-in fade-in slide-in-from-bottom-2 duration-500">
        <CheckCircle2 size={18} className="flex-shrink-0" />
        <p className="text-sm font-medium">You&apos;re in. Look for our first Field Notes in your inbox.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full lg:w-auto gap-2 shrink-0">
      <div className="flex gap-2">
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <div className="flex-grow lg:w-72 relative">
          <input
            id="newsletter-email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
            required
            placeholder="your@email.com"
            className={`w-full px-4 py-3 rounded-md border ${
              status === "error" ? "border-red-400/60" : "border-card-dark-border"
            } bg-dark-primary text-text-light placeholder:text-text-light-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all text-sm`}
            disabled={status === "submitting"}
          />
        </div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-white text-dark-primary hover:bg-accent hover:text-white px-5 py-3 rounded-md font-semibold text-sm transition-all duration-300 cursor-pointer flex items-center gap-2 flex-shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? (
            <>
              <Loader2 size={14} className="animate-spin" />
              Sending
            </>
          ) : (
            <>
              Subscribe
              <ArrowRight size={14} />
            </>
          )}
        </button>
      </div>

      <label className="flex items-start gap-2 text-[11px] text-text-light-muted/70 leading-snug cursor-pointer select-none max-w-md">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => { setConsent(e.target.checked); if (status === "error") setStatus("idle"); }}
          className="mt-0.5 accent-accent-light h-3.5 w-3.5 flex-shrink-0 cursor-pointer"
          aria-describedby="newsletter-consent"
        />
        <span id="newsletter-consent">
          I agree to receive monthly Field Notes from PROSYS LTD and accept the{" "}
          <a href="/privacy" className="text-accent-light hover:underline">privacy policy</a>. Unsubscribe anytime.
        </span>
      </label>

      {status === "error" && (
        <div className="flex items-center gap-1 text-[11px] text-red-400">
          <AlertCircle size={11} />
          <span>{errorMsg}</span>
        </div>
      )}
    </form>
  );
}
