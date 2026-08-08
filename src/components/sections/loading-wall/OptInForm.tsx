"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";
import { OTHER, PROFESSIONS, resolveProfession } from "@/lib/professions";

// The single opt-in form for /the-loading-wall. One job: drop the visitor into
// the MailerLite "The Loading Wall" group via the server route, then deliver
// them to the thank-you page.
//
// §Pascal-2026-08-08: fields went from (first name, email) to the same four the
// footer newsletter collects, first name / last name / email / profession,
// which was Nick's ask there. Two reasons beyond Pascal's own (a little
// friction qualifies, and a form you have to work at reads less like a throwaway
// magnet): profession is the field that does real work, because it decides
// which CEU angle and which emails a subscriber gets, and matching the
// newsletter means one data shape in MailerLite instead of two. Profession is a
// SELECT off the shared list in @/lib/professions, never free text. First and
// last name share a row so the form grew by one row, not two.
//
// Flow on submit:
//   1. Honeypot (`company`) filled -> bail silently (the server drops it too).
//   2. POST { firstName, lastName, email, profession, company } to
//      /api/the-loading-wall.
//   3. On success -> fire GA4 `generate_lead` BEFORE the redirect, then push
//      to /the-loading-wall/thank-you.
//   4. On failure -> inline retry message, do NOT redirect (redirecting would
//      tell the visitor they are subscribed when they are not). PLAN.md §4.
//
// `location` is the form's own position. The CTA buttons further down the page
// are plain anchors that scroll here, and they leave their own hash behind, so
// readCtaSource() recovers WHICH button sent them. Without it every signup
// would report as the hero form.
//
// The API key lives server-side only; this client never sees MailerLite.

type Status = "idle" | "sending" | "error";

const THANK_YOU_PATH = "/the-loading-wall/thank-you";
const FIELD =
  "w-full rounded-lg border border-line bg-white px-4 py-3.5 text-base text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

// "#optin-hook" -> "hook". Anything else (including a bare "#optin" or no hash
// at all, i.e. they scrolled here themselves) -> null.
function readCtaSource(): string | null {
  if (typeof window === "undefined") return null;
  const m = window.location.hash.match(/^#optin-([a-z0-9-]+)$/i);
  return m ? m[1] : null;
}

export default function OptInForm({
  idPrefix,
  cta,
  microcopy,
  location,
}: {
  idPrefix: string;
  cta: string;
  microcopy: string;
  location: string;
}) {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [professionOther, setProfessionOther] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    if (company) return; // honeypot tripped: pretend nothing happened
    if (!email) return;

    const resolvedProfession = resolveProfession(profession, professionOther);
    const ctaSource = readCtaSource();
    const source = ctaSource ? `${location}-via-${ctaSource}` : location;

    setStatus("sending");
    try {
      const res = await fetch("/api/the-loading-wall", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          profession: resolvedProfession,
          company,
          source,
        }),
      });
      if (res.ok) {
        // Conversion fires before navigation so it is not lost to the redirect.
        sendGAEvent("event", "generate_lead", {
          lead_magnet: "the-loading-wall",
          location: source,
          profession: resolvedProfession,
        });
        router.push(THANK_YOU_PATH);
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const id = (suffix: string) => `${idPrefix}-${suffix}`;

  return (
    <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2" noValidate>
      <div>
        <label htmlFor={id("first-name")} className="sr-only">
          First name
        </label>
        <input
          id={id("first-name")}
          name="firstName"
          type="text"
          required
          autoComplete="given-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          className={FIELD}
        />
      </div>

      <div>
        <label htmlFor={id("last-name")} className="sr-only">
          Last name
        </label>
        <input
          id={id("last-name")}
          name="lastName"
          type="text"
          required
          autoComplete="family-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name"
          className={FIELD}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={id("email")} className="sr-only">
          Email address
        </label>
        <input
          id={id("email")}
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className={FIELD}
        />
      </div>

      <div className={profession === OTHER ? "" : "sm:col-span-2"}>
        <label htmlFor={id("profession")} className="sr-only">
          Profession
        </label>
        {/* The native option list inherits the OS menu surface, not this
            element, so each option carries explicit colours or it renders
            unreadable under a dark OS theme. */}
        <select
          id={id("profession")}
          name="profession"
          required
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          className={`${FIELD} ${profession ? "" : "text-muted"}`}
        >
          <option value="" disabled style={{ color: "#475569", background: "#FFFFFF" }}>
            Your profession
          </option>
          {PROFESSIONS.map((p) => (
            <option key={p} value={p} style={{ color: "#1F2937", background: "#FFFFFF" }}>
              {p}
            </option>
          ))}
        </select>
      </div>

      {profession === OTHER && (
        <div>
          <label htmlFor={id("profession-other")} className="sr-only">
            Tell us your profession
          </label>
          <input
            id={id("profession-other")}
            name="professionOther"
            type="text"
            value={professionOther}
            onChange={(e) => setProfessionOther(e.target.value)}
            placeholder="Your profession"
            className={FIELD}
          />
        </div>
      )}

      {/* Honeypot: visually hidden + off the tab order. Bots fill it, humans don't. */}
      <div aria-hidden className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={id("company")}>Company</label>
        <input
          id={id("company")}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-4 font-body text-base font-semibold uppercase tracking-wide text-white shadow-[0_14px_28px_-12px_rgba(173,26,39,0.55)] transition hover:bg-accent-deeper disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
      >
        {status === "sending" ? "Sending..." : cta}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-accent sm:col-span-2">
          Something went wrong. Please try again, or email nick@thebfrpros.com and we will send The Loading Wall directly.
        </p>
      )}

      <p className="text-center text-xs leading-relaxed text-muted sm:col-span-2">{microcopy}</p>
    </form>
  );
}
