import { NextResponse } from "next/server";

// POST /api/the-loading-wall
// Upserts the opt-in subscriber into the MailerLite "The Loading Wall" group,
// which triggers the MailerLite automation that delivers the guide (email 1).
// Plain fetch against MailerLite's REST API, so there are NO extra npm deps.
//
// Env (server-side only, never shipped to the client bundle):
//   MAILERLITE_API_KEY                 - account API token (Bearer)
//   MAILERLITE_LOADING_WALL_GROUP_ID   - the "The Loading Wall" group id
// If either is missing the route returns a clean 500 (no crash); the page
// shows an inline retry message. Session C wires the env vars + live test.
//
// MailerLite API (verified against developers.mailerlite.com 2026-06-29):
//   POST https://connect.mailerlite.com/api/subscribers
//   body { email, fields: { name }, groups: [GROUP_ID] }
//   Auth: Bearer <token>; Accept + Content-Type application/json
//   Upsert + non-destructive: 201 = created, 200 = already existed (updated).
//   So res.ok (200/201) is success; an already-subscribed email is success and
//   prior membership is never revealed to the client.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAILERLITE_ENDPOINT = "https://connect.mailerlite.com/api/subscribers";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clamp(value: unknown, max = 320): string {
  if (value === undefined || value === null) return "";
  const s = String(value).trim();
  return s.length > max ? s.slice(0, max) : s;
}

export async function POST(req: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  // Honeypot: humans never see/fill `company`; bots do. Pretend success, drop it.
  if (clamp(payload.company)) {
    return NextResponse.json({ ok: true });
  }

  const email = clamp(payload.email).toLowerCase();
  const name = clamp(payload.name, 200);
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_LOADING_WALL_GROUP_ID;
  if (!apiKey || !groupId) {
    console.error("[the-loading-wall] missing MailerLite env vars");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  try {
    const res = await fetch(MAILERLITE_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        fields: name ? { name } : {},
        groups: [groupId],
      }),
    });

    // 200 (already existed, updated) and 201 (created) are both success.
    if (res.ok) {
      return NextResponse.json({ ok: true });
    }

    console.error(
      "[the-loading-wall] mailerlite upsert failed",
      res.status,
      await res.text().catch(() => ""),
    );
    return NextResponse.json({ ok: false, error: "upstream_error" }, { status: 502 });
  } catch (err) {
    console.error("[the-loading-wall] mailerlite upsert error", err);
    return NextResponse.json({ ok: false, error: "network_error" }, { status: 502 });
  }
}
