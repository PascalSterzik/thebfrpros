import { NextResponse } from "next/server";
import { SUPABASE_ANON_KEY, SUPABASE_URL as SUPABASE_URL_DEFAULT } from "@/lib/constants";

// POST /api/team-training
// Persists a /train-your-team qualify-form submission to Supabase and (best
// effort) emails Nick. Copy of /api/consulting, adapted to the clinic_inquiries
// table + team qualify fields. Plain fetch against Supabase's + Resend's REST
// APIs, so NO extra npm dependencies.
//
// Supabase (saves with NO env setup): the clinic_inquiries table has RLS ON with
// an INSERT-only policy for the `anon` role, so the public can submit but cannot
// read/modify any data; only the service_role (Supabase dashboard) can read
// submissions. We use the publishable anon key committed in constants.ts. To
// harden later, set SUPABASE_SERVICE_ROLE_KEY (and optionally SUPABASE_URL) in
// the deploy env and the route prefers those automatically.
//
// Email (optional): set RESEND_API_KEY (+ a verified TEAM_TRAINING_NOTIFY_FROM,
// TEAM_TRAINING_NOTIFY_TO) to email Nick each COMPLETE submission. Without it,
// submissions still save; no email is sent.

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SUPABASE_URL = process.env.SUPABASE_URL || SUPABASE_URL_DEFAULT;
// Prefer a server-only service_role key if provided; otherwise use the anon key
// (which only has INSERT rights on clinic_inquiries via the RLS policy).
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || SUPABASE_ANON_KEY;

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const NOTIFY_TO = process.env.TEAM_TRAINING_NOTIFY_TO || "nick@thebfrpros.com";
const NOTIFY_FROM = process.env.TEAM_TRAINING_NOTIFY_FROM || "BFR Pros <onboarding@resend.dev>";

// Clamp any single field so a malicious payload can't bloat the row.
function clamp(value: unknown, max = 4000): string | null {
  if (value === undefined || value === null) return null;
  const s = String(value);
  return s.length > max ? s.slice(0, max) : s;
}

// Accept only a well-formed UUID for the uuid column; anything else -> null
// (a bad value would otherwise make the whole insert fail the uuid cast).
function uuidOrNull(value: unknown): string | null {
  const s = typeof value === "string" ? value : "";
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(s) ? s : null;
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

  // Partial-capture metadata: the client sends a stable lead_id (one per form
  // session) plus status incomplete|complete. Inserts are append-only; the
  // latest row per lead_id wins (see the clinic_inquiries_latest view).
  const leadId = uuidOrNull(answers.lead_id ?? answers.leadId);
  const status = answers.status === "incomplete" ? "incomplete" : "complete";
  const stepNum = Number(answers.step);
  const step = Number.isFinite(stepNum) ? Math.trunc(stepNum) : null;

  let saved = false;
  const row = {
    lead_id: leadId,
    status,
    step,
    name: clamp(answers.name, 200),
    email: clamp(answers.email, 320),
    role: clamp(answers.role, 120),
    setting: clamp(answers.setting, 120),
    team_size: clamp(answers.teamSize, 40),
    format_interest: clamp(answers.formatInterest, 120),
    cuffs_on_hand: clamp(answers.cuffsOnHand, 40),
    timing: clamp(answers.timing, 120),
    open_note: clamp(answers.openNote),
    answers,
    site: clamp(answers.site, 200),
  };

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/clinic_inquiries`, {
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
        "[team-training] supabase insert failed",
        res.status,
        await res.text().catch(() => ""),
      );
    }
  } catch (err) {
    console.error("[team-training] supabase insert error", err);
  }

  // Only email Nick on a COMPLETE submission, never on the partial email-capture
  // snapshot (that would spam him with half-finished inquiries).
  if (RESEND_API_KEY && status === "complete") {
    const summary = [
      ["Name", answers.name],
      ["Email", answers.email],
      ["Role", answers.role],
      ["Practice / program", answers.setting],
      ["Team size", answers.teamSize],
      ["Format interest", answers.formatInterest],
      ["BFR cuffs on hand", answers.cuffsOnHand],
      ["Timing", answers.timing],
      ["Open note", answers.openNote],
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
          subject: `New BFR team-training inquiry: ${clamp(answers.name, 120) || "Website"}`,
          text: `New clinic team-training inquiry from the website.\n\n${summary}`,
        }),
      });
    } catch (err) {
      console.error("[team-training] notify email error", err);
    }
  }

  return NextResponse.json({ ok: saved });
}
