import { NextResponse } from "next/server";

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    // If Resend Audiences is configured, add the contact. Otherwise log.
    if (apiKey && audienceId) {
      const resp = await fetch(
        `https://api.resend.com/audiences/${audienceId}/contacts`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, unsubscribed: false }),
        }
      );

      if (!resp.ok) {
        const body = await resp.text();
        console.error("[newsletter] resend error:", body);
        return NextResponse.json(
          { ok: false, error: "Subscription service error" },
          { status: 502 }
        );
      }
    } else {
      console.log(`[newsletter] subscribe (no RESEND config): ${email}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter] unexpected error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
