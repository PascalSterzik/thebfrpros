"use client";

import { useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";

// Sitewide newsletter opt-in, rendered inside the shared Footer.
//
// Deliberately NOT a lead-magnet capture. Pascal + Nick 2026-07-30: the offer
// is Nick himself (BFR research first-hand from the author of 74 peer-reviewed
// publications), not a beginner guide. Site visitors already searched BFR, so
// they are problem/solution/product-aware; a starter-kit magnet would read
// down-market to exactly the practitioners worth having on the list. The
// Loading Wall magnet keeps its own funnel at /the-loading-wall.
//
// NO thank-you page. A footer signup is a micro-conversion on a site full of
// other things to do, and this footer IS the site's secondary nav (Blog,
// Podcast, Reviews, Press, FAQ, audience + bio pages all moved off the header
// in Phase 1d). Redirecting someone away from the nav they just opened is
// hostile, so the form swaps in place for a confirmation line. Leaving the
// emptied form on screen instead would invite double submits.
//
// Fields are first name, last name, email, profession (Nick's ask). Profession
// is a SELECT, not free text: the 767-response intro-course survey stored it as
// a 2-option select (Rehab 94% / Fitness 6%), which is too coarse to segment on
// (682 people in one bucket is the list, not a segment). Free text would return
// "PT" / "Physical Therapist" / "physio" / "DPT" and segment even worse. The
// option list is grounded in that survey plus brand-guide Target Audience;
// "Other" reveals a text input so the tail is captured without guessing, and
// after a few months the Other answers say which option to promote.

type Status = "idle" | "sending" | "done" | "error";

const OTHER = "Other";

// Nick-approved 2026-07-30. Changing these after launch fragments the data.
const PROFESSIONS = [
  "Physical Therapist / PTA",
  "Athletic Trainer",
  "Strength & Conditioning / Personal Trainer",
  "Student",
  OTHER,
] as const;

// Inputs sit on the navy footer, so they carry explicit light-surface colors.
// The native <select> option list inherits the OS menu surface, not this
// element, so `option` gets its own explicit background + color or it renders
// unreadable under a dark OS theme.
const FIELD =
  "w-full rounded-lg border border-white/20 bg-white px-4 py-3 text-base text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

export default function NewsletterForm() {
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

    // Send what they typed rather than the literal "Other", so the MailerLite
    // column always holds a real profession.
    const resolvedProfession =
      profession === OTHER ? professionOther.trim() || OTHER : profession;

    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          profession: resolvedProfession,
          company,
        }),
      });
      if (res.ok) {
        sendGAEvent("event", "newsletter_signup", { location: "footer" });
        setStatus("done");
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div
        role="status"
        className="rounded-lg border border-white/20 bg-white/5 px-6 py-8 text-center"
      >
        <p className="font-body text-lg font-semibold text-white">You&rsquo;re subscribed.</p>
        <p className="mt-2 text-sm leading-relaxed text-white/75">
          We&rsquo;ll email you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2" noValidate>
      <div>
        <label htmlFor="nl-first-name" className="sr-only">
          First name
        </label>
        <input
          id="nl-first-name"
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
        <label htmlFor="nl-last-name" className="sr-only">
          Last name
        </label>
        <input
          id="nl-last-name"
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
        <label htmlFor="nl-email" className="sr-only">
          Email address
        </label>
        <input
          id="nl-email"
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
        <label htmlFor="nl-profession" className="sr-only">
          Profession
        </label>
        <select
          id="nl-profession"
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
          <label htmlFor="nl-profession-other" className="sr-only">
            Tell us your profession
          </label>
          <input
            id="nl-profession-other"
            name="professionOther"
            type="text"
            autoFocus
            value={professionOther}
            onChange={(e) => setProfessionOther(e.target.value)}
            placeholder="Tell us your profession"
            className={FIELD}
          />
        </div>
      )}

      {/* Honeypot: visually hidden + off the tab order. Bots fill it, humans don't. */}
      <div aria-hidden className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="nl-company">Company</label>
        <input
          id="nl-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-3.5 font-body text-base font-semibold uppercase tracking-wide text-white transition hover:bg-accent-deeper disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Subscribing..." : "Subscribe"}
        </button>
      </div>

      {status === "error" && (
        <p role="alert" className="sm:col-span-2 text-sm font-medium text-white">
          Something went wrong. Please try again, or email{" "}
          <a href="mailto:nick@thebfrpros.com" className="underline">
            nick@thebfrpros.com
          </a>{" "}
          to be added.
        </p>
      )}
    </form>
  );
}
