"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { CONTACT_FORM_ENDPOINT } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Secondary conversion path for /certification (PLAN.md §6 dual conversion).
// Cold paid traffic that does not buy on first visit MUST leave with the lead
// magnet ("The Faster Recovery Method" / BFR Safety Screening Checklist) so
// the page is ROI-positive. Provider-agnostic POST:
//   - Default endpoint = CONTACT_FORM_ENDPOINT (`mailto:` so the static site
//     works immediately without an external service).
//   - Pass `endpoint` to swap to MailerLite / GoHighLevel / any HTTP endpoint
//     later, one prop change, no code rewrite.
// Asset already exists in Agency/Clients/The BFR Pros/Deliverables/Lead-Magnet/
// (The-Faster-Recovery-Method.pdf, opt-in copy, nurture sequence outline).

type Status = "idle" | "sending" | "ok" | "error";

export default function LeadMagnetCapture({
  label,
  headline,
  body,
  fields,
  cta,
  privacyLine,
  endpoint = CONTACT_FORM_ENDPOINT,
}: {
  label: string;
  headline: string;
  body: string;
  fields: { placeholder: string }[];
  cta: string;
  privacyLine: string;
  endpoint?: string;
}) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const isMailto = endpoint.startsWith("mailto:");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    if (isMailto) {
      // mailto: transport works on a static deploy with no external service.
      // Browser opens the user's mail client with the form values pre-filled.
      const subject = encodeURIComponent("BFR Safety Screening Checklist request");
      const body = encodeURIComponent(
        `First name: ${firstName}\nWork email: ${email}\n\nFrom /certification lead magnet.`,
      );
      window.location.href = `${endpoint}?subject=${subject}&body=${body}`;
      setStatus("ok");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          email,
          source: "/certification",
          lead_magnet: "bfr-safety-screening-checklist",
        }),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="lead-magnet"
      className="section-wrap cream-field"
      aria-label="Lead magnet: BFR Safety Screening Checklist"
    >
      <div className="container-narrow">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-2xl rounded-lg border border-line bg-white p-7 lg:p-10 shadow-[0_30px_60px_-30px_rgba(25,55,99,0.18)]"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={label} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-lg text-navy text-balance"
          >
            {headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base leading-relaxed text-ink/85"
          >
            {body}
          </motion.p>

          {status === "ok" ? (
            <motion.p
              variants={fadeUp}
              className="mt-7 rounded-lg border border-accent/30 bg-accent/[0.08] p-5 text-base text-navy"
            >
              Thanks. The checklist is on its way to <span className="font-semibold">{email}</span>. Check your inbox in the next few minutes.
            </motion.p>
          ) : (
            <motion.form variants={fadeUp} onSubmit={onSubmit} className="mt-7 grid gap-3 sm:grid-cols-2">
              <label className="sm:col-span-1">
                <span className="sr-only">{fields[0]?.placeholder ?? "First name"}</span>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder={fields[0]?.placeholder ?? "First name"}
                  className="w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </label>
              <label className="sm:col-span-1">
                <span className="sr-only">{fields[1]?.placeholder ?? "Work email"}</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={fields[1]?.placeholder ?? "Work email"}
                  className="w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="sm:col-span-2 mt-1 inline-flex items-center justify-center rounded-lg bg-navy px-6 py-3.5 font-body text-base font-semibold text-white transition hover:bg-navy-deeper disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : cta}
              </button>
              {status === "error" && (
                <p className="sm:col-span-2 text-sm text-accent">
                  Something went wrong. Email nick@thebfrpros.com and we will send the checklist directly.
                </p>
              )}
            </motion.form>
          )}

          <motion.p
            variants={fadeUp}
            className="mt-5 text-xs leading-relaxed text-muted"
          >
            {privacyLine}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
