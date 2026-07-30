import { NextResponse } from "next/server";

// POST /api/newsletter
// Upserts the footer newsletter subscriber into the MailerLite newsletter
// group, which triggers the welcome-email automation. Plain fetch against
// MailerLite's REST API, so there are NO extra npm deps. Mirrors
// /api/the-loading-wall; the two are deliberately separate groups so the
// Loading Wall's paid-traffic numbers stay clean and its guide-delivery
// automation never fires for someone who only asked for the newsletter.
//
// Env (server-side only, never shipped to the client bundle):
//   MAILERLITE_API_KEY                 - account API token (Bearer), shared
//                                        with /api/the-loading-wall
//   MAILERLITE_NEWSLETTER_GROUP_ID     - the newsletter group id
//   MAILERLITE_PROFESSION_FIELD_KEY    - optional. The API key of the custom
//                                        "Profession" field, defaulting to
//                                        `profession`. It is an env var because
//                                        MailerLite does not always derive the
//                                        key from the field name: this account's
//                                        Zip field is keyed `z_i_p`. Read the
//                                        real key off the MailerLite fields
//                                        screen and set this if it differs.
// If the key or group id is missing the route returns a clean 500 (no crash);
// the footer form shows its inline retry message.
//
// MailerLite API:
//   POST https://connect.mailerlite.com/api/subscribers
//   body { email, fields: { name, last_name, <profession> }, groups: [GROUP_ID] }
//   Auth: Bearer <token>; Accept + Content-Type application/json
//   Upsert + non-destructive: 201 = created, 200 = already existed (updated).
//   So res.ok (200/201) is success; an already-subscribed email is success and
//   prior membership is never revealed to the client.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAILERLITE_ENDPOINT = "https://connect.mailerlite.com/api/subscribers";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_PROFESSION_FIELD = "profession";

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
  const firstName = clamp(payload.firstName, 200);
  const lastName = clamp(payload.lastName, 200);
  const profession = clamp(payload.profession, 200);
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_NEWSLETTER_GROUP_ID;
  if (!apiKey || !groupId) {
    console.error("[newsletter] missing MailerLite env vars");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  const professionField =
    process.env.MAILERLITE_PROFESSION_FIELD_KEY || DEFAULT_PROFESSION_FIELD;

  // Only send fields we actually have. Sending an empty string would overwrite
  // a value an existing subscriber already has (e.g. from the Teachable import).
  const fields: Record<string, string> = {};
  if (firstName) fields.name = firstName;
  if (lastName) fields.last_name = lastName;
  if (profession) fields[professionField] = profession;

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
        fields,
        groups: [groupId],
      }),
    });

    // 200 (already existed, updated) and 201 (created) are both success.
    if (res.ok) {
      return NextResponse.json({ ok: true });
    }

    console.error(
      "[newsletter] mailerlite upsert failed",
      res.status,
      await res.text().catch(() => ""),
    );
    return NextResponse.json({ ok: false, error: "upstream_error" }, { status: 502 });
  } catch (err) {
    console.error("[newsletter] mailerlite upsert error", err);
    return NextResponse.json({ ok: false, error: "network_error" }, { status: 502 });
  }
}
