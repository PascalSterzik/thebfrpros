"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";

// The single opt-in form for /the-loading-wall, rendered twice (hero + final
// CTA). One job: drop the visitor into the MailerLite "The Loading Wall" group
// via the server route, then deliver them to the thank-you page.
//
// Flow on submit:
//   1. Honeypot (`company`) filled -> bail silently (the server drops it too).
//   2. POST { name, email, company } to /api/the-loading-wall.
//   3. On success -> fire GA4 `generate_lead` BEFORE the redirect, then push
//      to /the-loading-wall/thank-you.
//   4. On failure -> inline retry message, do NOT redirect (redirecting would
//      tell the visitor they are subscribed when they are not). PLAN.md §4.
//
// The API key lives server-side only; this client never sees MailerLite.

type Status = "idle" | "sending" | "error";

const THANK_YOU_PATH = "/the-loading-wall/thank-you";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    if (company) return; // honeypot tripped: pretend nothing happened
    if (!email) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/the-loading-wall", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, source: location }),
      });
      if (res.ok) {
        // Conversion fires before navigation so it is not lost to the redirect.
        sendGAEvent("event", "generate_lead", {
          lead_magnet: "the-loading-wall",
          location,
        });
        router.push(THANK_YOU_PATH);
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const nameId = `${idPrefix}-name`;
  const emailId = `${idPrefix}-email`;

  return (
    <form onSubmit={onSubmit} className="grid gap-3" noValidate>
      <div>
        <label htmlFor={nameId} className="sr-only">
          First name
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          required
          autoComplete="given-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="First name"
          className="w-full rounded-lg border border-line bg-white px-4 py-3.5 text-base text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor={emailId} className="sr-only">
          Email address
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="w-full rounded-lg border border-line bg-white px-4 py-3.5 text-base text-ink placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      {/* Honeypot: visually hidden + off the tab order. Bots fill it, humans don't. */}
      <div aria-hidden className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${idPrefix}-company`}>Company</label>
        <input
          id={`${idPrefix}-company`}
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
        className="mt-1 inline-flex w-full items-center justify-center rounded-lg bg-accent px-6 py-4 font-body text-base font-semibold uppercase tracking-wide text-white shadow-[0_14px_28px_-12px_rgba(173,26,39,0.55)] transition hover:bg-accent-deeper disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Sending..." : cta}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-accent">
          Something went wrong. Please try again, or email nick@thebfrpros.com and we will send The Loading Wall directly.
        </p>
      )}

      <p className="text-center text-xs leading-relaxed text-muted">{microcopy}</p>
    </form>
  );
}
