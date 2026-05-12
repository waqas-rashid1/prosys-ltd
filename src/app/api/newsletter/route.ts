import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const isProd = process.env.NODE_ENV === "production";

// Default destination for newsletter notifications. Override with
// CONTACT_TO_EMAIL env var (shared with the contact form).
const DEFAULT_TO_EMAIL = "conveytowaqas@gmail.com";

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildBodies(subscriber: string) {
  const ts = new Date().toISOString();
  const text = `New newsletter subscriber\n\nemail: ${subscriber}\nsource: prosysltd.com footer / inline form\ntimestamp: ${ts}\n`;
  const safe = subscriber.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const html = `<!doctype html><html><body style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;background:#f6f7f9;padding:24px;">
    <table style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
      <tr><td style="padding:16px 20px;background:#0a0a0a;color:#fff;font-size:14px;letter-spacing:.08em;text-transform:uppercase;">PROSYS LTD · New newsletter subscriber</td></tr>
      <tr><td style="padding:18px 20px;font-size:14px;color:#111;">
        A new visitor just subscribed to the newsletter from prosysltd.com.
        <table style="width:100%;border-collapse:collapse;font-size:14px;margin-top:14px;">
          <tr><td style="padding:6px 0;font-weight:600;width:120px;">Email</td><td style="padding:6px 0;"><a href="mailto:${safe}" style="color:#0891b2;">${safe}</a></td></tr>
          <tr><td style="padding:6px 0;font-weight:600;">Source</td><td style="padding:6px 0;">prosysltd.com</td></tr>
          <tr><td style="padding:6px 0;font-weight:600;">Timestamp</td><td style="padding:6px 0;">${ts}</td></tr>
        </table>
      </td></tr>
    </table>
  </body></html>`;
  return { text, html };
}

async function sendViaResend(opts: {
  apiKey: string;
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
  replyTo: string;
}) {
  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${opts.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `PROSYS Website <${opts.from}>`,
      to: [opts.to],
      reply_to: opts.replyTo,
      subject: opts.subject,
      text: opts.text,
      html: opts.html,
    }),
  });
  if (!resp.ok) {
    const body = await resp.text();
    throw new Error(`resend ${resp.status}: ${body}`);
  }
}

async function sendViaGmailSmtp(opts: {
  user: string;
  pass: string;
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo: string;
}) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: opts.user, pass: opts.pass },
  });
  await transporter.sendMail({
    from: `PROSYS Website <${opts.user}>`,
    to: opts.to,
    subject: opts.subject,
    text: opts.text,
    html: opts.html,
    replyTo: opts.replyTo,
  });
}

export async function POST(request: Request) {
  try {
    const { email } = (await request.json()) as { email?: string };
    if (!email || !validEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;
    const subject = `New newsletter subscriber — ${email}`;
    const { text, html } = buildBodies(email);
    const replyTo = email;

    const resendKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "noreply@prosysltd.com";
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    try {
      // Preferred path: Resend Audiences (CRM-style storage of subscribers).
      if (resendKey && audienceId) {
        const resp = await fetch(
          `https://api.resend.com/audiences/${audienceId}/contacts`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${resendKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, unsubscribed: false }),
          }
        );
        if (!resp.ok) {
          const body = await resp.text();
          throw new Error(`resend audience ${resp.status}: ${body}`);
        }
        // Best-effort notification to the inbox as well, so the team sees it
        // immediately. Failure here does not invalidate the subscription.
        try {
          await sendViaResend({
            apiKey: resendKey,
            to: toEmail,
            from: fromEmail,
            subject,
            text,
            html,
            replyTo,
          });
        } catch (notifyErr) {
          if (!isProd) console.warn("[newsletter] notify failed:", notifyErr);
        }
      } else if (resendKey) {
        // Resend key but no audience — just send the notification email.
        await sendViaResend({
          apiKey: resendKey,
          to: toEmail,
          from: fromEmail,
          subject,
          text,
          html,
          replyTo,
        });
      } else if (gmailUser && gmailPass) {
        await sendViaGmailSmtp({
          user: gmailUser,
          pass: gmailPass,
          to: toEmail,
          subject,
          text,
          html,
          replyTo,
        });
      } else if (!isProd) {
        console.log(`[newsletter] no transport configured; would notify ${toEmail} of subscriber ${email}`);
      } else {
        return NextResponse.json(
          { ok: false, error: "Subscription service not configured" },
          { status: 500 }
        );
      }
    } catch (sendErr) {
      if (!isProd) console.error("[newsletter] send error:", sendErr);
      return NextResponse.json(
        { ok: false, error: "Subscription service error" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (!isProd) console.error("[newsletter] unexpected error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
