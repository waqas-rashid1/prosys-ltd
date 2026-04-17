import { NextResponse } from "next/server";

type ContactPayload = {
  intent?: string;
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  companySize?: string;
  industry?: string;
  service?: string;
  timeline?: string;
  budget?: string;
  message?: string;
};

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function asText(data: ContactPayload) {
  return Object.entries(data)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactPayload;

    // Basic server-side validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }
    if (!validEmail(data.email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }
    if ((data.message || "").length > 5000) {
      return NextResponse.json({ ok: false, error: "Message too long" }, { status: 400 });
    }

    // If RESEND_API_KEY is configured, send an actual email. Otherwise log.
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "hello@prosysltd.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "noreply@prosysltd.com";

    if (apiKey) {
      const resp = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `PROSYS Website <${fromEmail}>`,
          to: [toEmail],
          reply_to: data.email,
          subject: `New ${data.intent || "inquiry"} — ${data.company || data.name}`,
          text: asText(data),
        }),
      });

      if (!resp.ok) {
        const body = await resp.text();
        console.error("[contact] resend error:", body);
        return NextResponse.json(
          { ok: false, error: "Email service error" },
          { status: 502 }
        );
      }
    } else {
      // Graceful dev/local fallback — log to server console.
      console.log("[contact] submission (no RESEND_API_KEY set):\n" + asText(data));
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
