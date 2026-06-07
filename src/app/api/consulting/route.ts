import { NextResponse } from "next/server";
import { SUPABASE_ANON_KEY, SUPABASE_URL as SUPABASE_URL_DEFAULT } from "@/lib/constants";

// POST /api/consulting
// Persists a consulting qualification-form submission to Supabase and (best
// effort) emails Nick. Uses plain fetch against Supabase's REST API and
// Resend's REST API, so there are NO extra npm dependencies.
//
// Supabase (saves with NO env setup): the consulting_leads table has RLS ON with
// an INSERT-only policy for the `anon` role, so the public can submit but cannot
// read/modify any data; only the service_role (Supabase dashboard) can read
// submissions. We use the publishable anon key committed in constants.ts. To
// harden later, set SUPABASE_SERVICE_ROLE_KEY (and optionally SUPABASE_URL) in
// the deploy env and the route prefers those automatically.
//
// Email (optional): set RESEND_API_KEY (+ a verified CONSULTING_NOTIFY_FROM,
// CONSULTING_NOTIFY_TO) to email Nick each submission. Without it, submissions
// still save; no email is sent.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SUPABASE_URL = process.env.SUPABASE_URL || SUPABASE_URL_DEFAULT;
// Prefer a server-only service_role key if provided; otherwise use the anon key
// (which only has INSERT rights on consulting_leads via the RLS policy).
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY;

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const NOTIFY_TO = process.env.CONSULTING_NOTIFY_TO || "nick@thebfrpros.com";
const NOTIFY_FROM = process.env.CONSULTING_NOTIFY_FROM || "BFR Pros <onboarding@resend.dev>";

// Clamp any single field so a malicious payload can't bloat the row.
function clamp(value: unknown, max = 4000): string | null {
  if (value === undefined || value === null) return null;
  const s = String(value);
  return s.length > max ? s.slice(0, max) : s;
}

export async function POST(req: Request) {
  let answers: Record<string, unknown>;
  try {
    answers = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  if (!answers || typeof answers !== "object") {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  // Honeypot: humans never see/fill `company`; bots do. Pretend success, drop it.
  if (clamp((answers as Record<string, unknown>).company)) {
    return NextResponse.json({ ok: true });
  }

  let saved = false;
  const row = {
    name: clamp(answers.name, 200),
    email: clamp(answers.email, 320),
    role: clamp(answers.role, 100),
    need: clamp(answers.need),
    need_intensity: clamp(answers.needIntensity, 10),
    need_intensity_why: clamp(answers.needIntensityWhy),
    timing: clamp(answers.timing, 100),
    authority: clamp(answers.authority, 100),
    budget: clamp(answers.budget, 100),
    answers,
    site: clamp(answers.site, 200),
  };

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/consulting_leads`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
    });
    saved = res.ok;
    if (!res.ok) {
      console.error(
        "[consulting] supabase insert failed",
        res.status,
        await res.text().catch(() => ""),
      );
    }
  } catch (err) {
    console.error("[consulting] supabase insert error", err);
  }

  if (RESEND_API_KEY) {
    const summary = [
      ["Name", answers.name],
      ["Email", answers.email],
      ["Role", answers.role],
      ["Case / challenge", answers.need],
      ["Urgency (1-10)", answers.needIntensity],
      ["Why that number", answers.needIntensityWhy],
      ["Timing", answers.timing],
      ["Decision maker", answers.authority],
      ["Budget ($275/hr)", answers.budget],
    ]
      .map(([label, v]) => `${label}: ${clamp(v) ?? "-"}`)
      .join("\n");
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: NOTIFY_FROM,
          to: [NOTIFY_TO],
          reply_to: clamp(answers.email, 320) || undefined,
          subject: `New BFR consulting inquiry: ${clamp(answers.name, 120) || "Website"}`,
          text: `New 1:1 BFR consulting inquiry from the website.\n\n${summary}`,
        }),
      });
    } catch (err) {
      console.error("[consulting] notify email error", err);
    }
  }

  return NextResponse.json({ ok: saved });
}
