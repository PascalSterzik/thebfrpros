"use client";

import { useEffect, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { CONSULTING_FORM, type ConsultingQuestion } from "@/content/consulting";
import {
  CONSULTING_CAL_LINK,
  CONSULTING_CAL_URL,
  CONSULTING_FORM_ENDPOINT,
  SITE,
} from "@/lib/constants";
import { editorialEase } from "@/lib/motion";

// The qualification form. Typeform-style: one question per screen, a progress
// bar, a Back button, Enter-to-advance on single-line inputs, per-step
// validation, and AnimatePresence step transitions. BANT-derived question set
// lives in content/consulting.ts (engagement-first order; budget worded to the
// real $275/hr rate). On the last question the answers POST to
// CONSULTING_FORM_ENDPOINT (mailto fallback), then the Cal.com booking embed
// renders as the final step. Text primitives mirror the retired ContactForm;
// select/scale render as option buttons for the one-question-per-screen flow.

const QUESTIONS = CONSULTING_FORM.questions;
const TOTAL = QUESTIONS.length;

type Status = "idle" | "submitting";

export default function ConsultingForm() {
  const [step, setStep] = useState(0); // 0..TOTAL-1 are questions; TOTAL is the booking step
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [honey, setHoney] = useState(""); // honeypot; dropped server-side if filled

  const onBooking = step >= TOTAL;
  const current = onBooking ? null : QUESTIONS[step];

  function setAnswer(id: string, value: string) {
    setAnswers((a) => ({ ...a, [id]: value }));
    if (error) setError(null);
  }

  function validate(q: ConsultingQuestion): string | null {
    const v = (answers[q.id] ?? "").trim();
    if (q.required && !v) return CONSULTING_FORM.requiredError;
    if (q.type === "email" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
      return CONSULTING_FORM.emailError;
    }
    return null;
  }

  async function submitAnswers() {
    // Readable summary keyed by each question's prompt, plus the scale follow-up.
    const lines = QUESTIONS.flatMap((q) => {
      const main = `${q.prompt}\n  ${answers[q.id] ?? ""}`;
      if (q.followUp && (answers[q.followUp.id] ?? "").trim()) {
        const fu = q.followUp.prompt.replace("{value}", answers[q.id] ?? "");
        return [main, `${fu}\n  ${answers[q.followUp.id]}`];
      }
      return [main];
    });
    const subject = `BFR consulting inquiry: ${answers.name || "Website"}`;
    const body = `New BFR consulting inquiry from ${answers.name || "a clinician"} (${
      answers.email || "no email"
    }).\n\n${lines.join("\n\n")}`;

    try {
      if (CONSULTING_FORM_ENDPOINT.startsWith("mailto:")) {
        window.location.href = `${CONSULTING_FORM_ENDPOINT}?subject=${encodeURIComponent(
          subject,
        )}&body=${encodeURIComponent(body)}`;
        return;
      }
      await fetch(CONSULTING_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...answers, company: honey, site: SITE.domain }),
      });
    } catch {
      // Lead capture is best-effort. The booking step (the real conversion)
      // shows regardless, so a failed POST never blocks the user.
    }
  }

  async function goNext() {
    if (onBooking || !current) return;
    const err = validate(current);
    if (err) {
      setError(err);
      return;
    }
    setError(null);

    if (step === TOTAL - 1) {
      setStatus("submitting");
      await submitAnswers();
      setStatus("idle");
      setStep(TOTAL);
      return;
    }
    setStep((s) => s + 1);
  }

  function goBack() {
    setError(null);
    setStep((s) => Math.max(0, s - 1));
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key !== "Enter" || e.shiftKey) return;
    const tag = (e.target as HTMLElement).tagName;
    // Let textareas take the newline and let option/scale buttons handle their
    // own Enter (which selects). Only single-line inputs advance on Enter.
    if (tag === "TEXTAREA" || tag === "BUTTON") return;
    e.preventDefault();
    void goNext();
  }

  const progressPct = Math.round((Math.min(step, TOTAL) / TOTAL) * 100);
  const nextLabel =
    status === "submitting"
      ? CONSULTING_FORM.submittingLabel
      : step === TOTAL - 1
        ? CONSULTING_FORM.finishLabel
        : CONSULTING_FORM.nextLabel;

  return (
    <section id="consulting-form" className="section-wrap bg-white scroll-mt-24">
      <div className="container-rail">
        {/* Honeypot: off-screen + aria-hidden so humans never see or fill it;
            bots that auto-fill `company` are silently dropped server-side. */}
        <div aria-hidden className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
          <label>
            Company
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honey}
              onChange={(e) => setHoney(e.target.value)}
            />
          </label>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel label={CONSULTING_FORM.eyebrow} />
          <h2 className="mt-5 font-display text-display-xl text-navy text-balance">
            {CONSULTING_FORM.headline}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">{CONSULTING_FORM.intro}</p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-muted">
              <span>
                {onBooking
                  ? "All set"
                  : CONSULTING_FORM.progressLabel
                      .replace("{current}", String(step + 1))
                      .replace("{total}", String(TOTAL))}
              </span>
              <span>{progressPct}%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-line">
              <div
                className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          <div
            onKeyDown={onKeyDown}
            className="relative min-h-[19rem] rounded-lg border border-line bg-cream/60 p-6 sm:p-9"
          >
            {/* Keyed entrance animation per step. We deliberately do NOT use
                mode="wait" + an exit animation here: that combination deadlocks
                under React StrictMode (Next dev double-invoke) and can leave the
                old step on screen while `step` has already advanced. A keyed
                remount with an entrance-only transition is robust in dev + prod. */}
            <AnimatePresence initial={false}>
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, ease: editorialEase }}
              >
                {onBooking || !current ? (
                  <Booking />
                ) : (
                  <Step
                    q={current}
                    value={answers[current.id] ?? ""}
                    followUpValue={current.followUp ? answers[current.followUp.id] ?? "" : ""}
                    onChange={setAnswer}
                    error={error}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {!onBooking && (
            <div className="mt-6 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={goBack}
                disabled={step === 0}
                className="text-sm font-semibold text-muted transition enabled:hover:text-navy disabled:cursor-not-allowed disabled:opacity-40"
              >
                ← {CONSULTING_FORM.backLabel}
              </button>
              <button
                type="button"
                onClick={() => void goNext()}
                disabled={status === "submitting"}
                className="btn-primary !py-4 !text-xl disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span>{nextLabel}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Step({
  q,
  value,
  followUpValue,
  onChange,
  error,
}: {
  q: ConsultingQuestion;
  value: string;
  followUpValue: string;
  onChange: (id: string, value: string) => void;
  error: string | null;
}) {
  return (
    <div>
      <p className="font-body text-2xl font-semibold leading-snug text-navy sm:text-[1.7rem]">
        {q.prompt}
      </p>
      {q.helper ? <p className="mt-2 text-sm leading-relaxed text-muted">{q.helper}</p> : null}

      <div className="mt-6">
        {q.type === "text" || q.type === "email" ? (
          <input
            type={q.type}
            value={value}
            aria-label={q.prompt}
            onChange={(e) => onChange(q.id, e.target.value)}
            placeholder={q.placeholder}
            autoComplete={q.type === "email" ? "email" : "name"}
            className="w-full rounded-lg border border-line bg-white px-4 py-3 text-lg text-ink placeholder:text-muted/60 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        ) : q.type === "longtext" ? (
          <textarea
            value={value}
            aria-label={q.prompt}
            onChange={(e) => onChange(q.id, e.target.value)}
            placeholder={q.placeholder}
            rows={5}
            className="w-full resize-y rounded-lg border border-line bg-white px-4 py-3 text-lg text-ink placeholder:text-muted/60 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        ) : q.type === "select" ? (
          <OptionButtons
            options={q.options ?? []}
            value={value}
            onChange={(v) => onChange(q.id, v)}
          />
        ) : q.type === "scale" ? (
          <ScaleSelector
            q={q}
            value={value}
            followUpValue={followUpValue}
            onChange={onChange}
          />
        ) : null}
      </div>

      {error ? (
        <p role="alert" className="mt-4 text-sm font-medium text-accent">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function OptionButtons({
  options,
  value,
  onChange,
}: {
  options: ReadonlyArray<string>;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      {options.map((opt) => {
        const selected = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            aria-pressed={selected}
            className={`flex items-center justify-between gap-4 rounded-lg border px-5 py-4 text-left text-base font-medium transition ${
              selected
                ? "border-accent bg-accent/5 text-navy"
                : "border-line bg-white text-ink hover:border-navy/40"
            }`}
          >
            <span>{opt}</span>
            <span
              aria-hidden
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                selected ? "border-accent bg-accent text-white" : "border-line"
              }`}
            >
              {selected ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M5 12.5l4 4 10-10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : null}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function ScaleSelector({
  q,
  value,
  followUpValue,
  onChange,
}: {
  q: ConsultingQuestion;
  value: string;
  followUpValue: string;
  onChange: (id: string, value: string) => void;
}) {
  const min = q.scaleMin ?? 1;
  const max = q.scaleMax ?? 10;
  const nums = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  return (
    <div>
      <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
        {nums.map((n) => {
          const selected = value === String(n);
          return (
            <button
              key={n}
              type="button"
              onClick={() => onChange(q.id, String(n))}
              aria-pressed={selected}
              className={`aspect-square rounded-lg border text-lg font-semibold transition ${
                selected
                  ? "border-accent bg-accent text-white"
                  : "border-line bg-white text-navy hover:border-navy/40"
              }`}
            >
              {n}
            </button>
          );
        })}
      </div>
      <div className="mt-2 flex justify-between text-xs text-muted">
        <span>{q.scaleMinLabel}</span>
        <span>{q.scaleMaxLabel}</span>
      </div>

      {q.followUp ? (
        <div className="mt-6">
          <label className="small-caps-line text-xs text-navy/80">
            {q.followUp.prompt.replace("{value}", value || "that")}
          </label>
          <textarea
            value={followUpValue}
            aria-label={q.followUp.prompt.replace("{value}", value || "that")}
            onChange={(e) => onChange(q.followUp!.id, e.target.value)}
            placeholder={q.followUp.placeholder}
            rows={2}
            className="mt-2 w-full resize-y rounded-lg border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-muted/60 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </div>
      ) : null}
    </div>
  );
}

function Booking() {
  const b = CONSULTING_FORM.booking;

  // Cal.com official inline embed. We inject the exact vanilla snippet (from
  // Cal.com's "inline embed" code) via a created <script> element so it runs
  // client-side without an npm dependency and without typing the Cal global.
  // The guard + StrictMode-safe id means it initializes once even with the dev
  // double-invoke. The loader queues calls until app.cal.com/embed/embed.js
  // loads, then renders the calendar into #my-cal-inline-consult.
  useEffect(() => {
    if (document.getElementById("cal-embed-loader-consult")) return;
    const s = document.createElement("script");
    s.id = "cal-embed-loader-consult";
    s.type = "text/javascript";
    s.text = `
(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "consult", {origin:"https://app.cal.com"});
Cal.ns.consult("inline", { elementOrSelector:"#my-cal-inline-consult", config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"}, calLink: "${CONSULTING_CAL_LINK}" });
Cal.ns.consult("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
`;
    document.body.appendChild(s);
  }, []);

  return (
    <div className="text-center">
      <p className="eyebrow">{b.eyebrow}</p>
      <h3 className="mt-3 font-display text-display-md text-navy">{b.headline}</h3>
      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink/80">{b.intro}</p>

      {/* Cal.com inline embed renders into this element (see useEffect above). */}
      <div
        id="my-cal-inline-consult"
        className="mt-7 min-h-[600px] w-full overflow-auto rounded-lg border border-line bg-white"
      />

      <a
        href={CONSULTING_CAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary mt-7"
      >
        <span>{b.ctaLabel}</span>
      </a>
      <p className="mt-3 text-xs text-muted">{b.fallbackNote}</p>
    </div>
  );
}
