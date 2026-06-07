"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CONSULTING_FORM, type ConsultingQuestion } from "@/content/consulting";
import {
  CONSULTING_CAL_LINK,
  CONSULTING_CAL_URL,
  CONSULTING_FORM_ENDPOINT,
  SITE,
} from "@/lib/constants";
import { editorialEase } from "@/lib/motion";

// The qualification flow (step machine), rendered inside ConsultingFormOverlay.
// Typeform-style: one question per screen, a progress bar, Back, Enter-to-advance
// on single-line inputs, per-step validation, and a keyed entrance transition
// (NOT mode="wait"+exit, which deadlocks under React StrictMode dev). Each step
// from Q2 on shows an affirmation (the "pat"); prompts/affirmations interpolate
// {name} and {answerId}. The budget answer terminally branches: a ready "yes"
// goes to the Cal.com booking step, "know more first" to the certification page.
// Leads save twice: an incomplete snapshot once the email validates, and a
// complete row on finish (append-only; latest row per lead_id wins server-side).

const QUESTIONS = CONSULTING_FORM.questions;
const TOTAL = QUESTIONS.length;
const LEAD_KEY = "bfr_consult_lead_id";
// The final question routes by BFR stage. Its LAST option ("not certified yet")
// is the only "not ready" answer -> certification page; everything else books.
const STAGE_Q = QUESTIONS.find((q) => q.id === "bfrStage");
const NOT_READY_ANSWER =
  STAGE_Q?.options?.[(STAGE_Q.options?.length ?? 1) - 1] ?? "I'm not BFR-certified yet";

type Status = "idle" | "submitting";

// First name for personalization: strip a leading honorific, take the first
// token. "Dr. Mia Sanchez" -> "Mia"; "" -> "".
function firstName(raw: string): string {
  const cleaned = raw.trim().replace(/^(dr|mr|mrs|ms|mx|prof|professor|coach)\.?\s+/i, "");
  return cleaned.split(/\s+/)[0] ?? "";
}

// Interpolate {name} and {answerId} tokens. With no name, a preceding ", {name}"
// is dropped so "...details, {name}?" -> "...details?".
function interpolate(text: string, answers: Record<string, string>): string {
  const name = firstName(answers.name ?? "");
  let out = name ? text.replace(/\{name\}/g, name) : text.replace(/,?\s*\{name\}/g, "");
  out = out.replace(/\{(\w+)\}/g, (_, id: string) => answers[id] ?? "");
  return out;
}

// Stable per browser so the email-capture snapshot and the final submission
// share a lead_id; persisted so a refresh resumes the same lead.
function getLeadId(): string {
  try {
    const existing = window.localStorage.getItem(LEAD_KEY);
    if (existing) return existing;
    const id = crypto.randomUUID();
    window.localStorage.setItem(LEAD_KEY, id);
    return id;
  } catch {
    return crypto.randomUUID();
  }
}

export default function ConsultingFormFlow() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [honey, setHoney] = useState(""); // honeypot; dropped server-side if filled
  const [flash, setFlash] = useState<string | null>(null); // brief affirmation interstitial
  const leadIdRef = useRef("");
  const emailSavedRef = useRef(false);
  // Per-question: the answer value at the moment we last flashed its affirmation,
  // so a Back-then-forward with no edit does NOT re-flash the reaction.
  const affirmedRef = useRef<Record<string, string>>({});

  useEffect(() => {
    leadIdRef.current = getLeadId();
  }, []);

  const onTerminal = step >= TOTAL;
  const current = onTerminal ? null : QUESTIONS[step];
  const qualified = !!answers.bfrStage && answers.bfrStage !== NOT_READY_ANSWER;

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

  async function saveLead(statusVal: "incomplete" | "complete") {
    try {
      await fetch(CONSULTING_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...answers,
          leadId: leadIdRef.current,
          status: statusVal,
          step,
          company: honey,
          site: SITE.domain,
        }),
      });
    } catch {
      // Best-effort: a failed save never blocks the booking step.
    }
  }

  async function goNext() {
    if (onTerminal || !current || flash) return;
    const err = validate(current);
    if (err) {
      setError(err);
      return;
    }
    setError(null);

    // Partial capture: snapshot the lead once, the moment the email validates.
    if (current.id === "email" && !emailSavedRef.current) {
      emailSavedRef.current = true;
      void saveLead("incomplete");
    }

    if (step === TOTAL - 1) {
      setStatus("submitting");
      await saveLead("complete");
      setStatus("idle");
      setStep(TOTAL);
      return;
    }

    // Brief affirmation interstitial before the next question, but only when the
    // answer just given actually changed (no re-flash on Back-then-forward).
    const answeredId = current.id;
    const changed = (answers[answeredId] ?? "") !== (affirmedRef.current[answeredId] ?? "");
    affirmedRef.current[answeredId] = answers[answeredId] ?? "";
    const nextAffirmation = QUESTIONS[step + 1]?.affirmation;
    const aff = changed && nextAffirmation ? interpolate(nextAffirmation, answers) : null;

    if (aff) {
      setFlash(aff);
      window.setTimeout(() => {
        setFlash(null);
        setStep((s) => s + 1);
      }, 900);
    } else {
      setStep((s) => s + 1);
    }
  }

  function goBack() {
    setError(null);
    setStep((s) => Math.max(0, s - 1));
  }

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key !== "Enter" || e.shiftKey) return;
    const tag = (e.target as HTMLElement).tagName;
    // Textareas keep the newline; option/scale buttons handle their own Enter.
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
    <div onKeyDown={onKeyDown}>
      {/* Honeypot: off-screen + aria-hidden; bots that auto-fill `company` are
          silently dropped server-side. */}
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

      {/* Progress */}
      <div className="mb-16">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-muted">
          <span>
            {onTerminal
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

      {/* Flash / step / terminal */}
      <div className="relative min-h-[19rem]">
        <AnimatePresence initial={false}>
          {flash ? (
            <motion.div
              key="flash"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, ease: editorialEase }}
            >
              <p className="font-body text-4xl font-bold text-accent">{flash}</p>
            </motion.div>
          ) : onTerminal ? (
            <motion.div
              key="terminal"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, ease: editorialEase }}
            >
              {qualified ? <Booking /> : <NotReady />}
            </motion.div>
          ) : (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, ease: editorialEase }}
            >
              <Step
                q={current!}
                value={answers[current!.id] ?? ""}
                prompt={interpolate(current!.prompt, answers)}
                onChange={setAnswer}
                error={error}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Nav */}
      {!onTerminal && !flash && (
        <div className="mt-8 flex items-center justify-between gap-4">
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
  );
}

function Step({
  q,
  value,
  prompt,
  onChange,
  error,
}: {
  q: ConsultingQuestion;
  value: string;
  prompt: string;
  onChange: (id: string, value: string) => void;
  error: string | null;
}) {
  return (
    <div>
      <p className="font-body text-2xl font-semibold leading-snug text-navy sm:text-[1.7rem]">
        {prompt}
      </p>
      {q.helper ? <p className="mt-2 text-sm leading-relaxed text-muted">{q.helper}</p> : null}

      <div className="mt-6">
        {q.type === "text" || q.type === "email" ? (
          <input
            type={q.type}
            value={value}
            aria-label={prompt}
            autoFocus
            onChange={(e) => onChange(q.id, e.target.value)}
            placeholder={q.placeholder}
            autoComplete={q.type === "email" ? "email" : "name"}
            className="w-full rounded-lg border border-line bg-white px-4 py-3 text-lg text-ink placeholder:text-muted/60 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        ) : q.type === "longtext" ? (
          <textarea
            value={value}
            aria-label={prompt}
            autoFocus
            onChange={(e) => onChange(q.id, e.target.value)}
            placeholder={q.placeholder}
            rows={5}
            className="w-full resize-y rounded-lg border border-line bg-white px-4 py-3 text-lg text-ink placeholder:text-muted/60 transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        ) : q.type === "select" ? (
          <OptionButtons options={q.options ?? []} value={value} onChange={(v) => onChange(q.id, v)} />
        ) : q.type === "scale" ? (
          <ScaleSelector q={q} value={value} onChange={onChange} />
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
  onChange,
}: {
  q: ConsultingQuestion;
  value: string;
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
    </div>
  );
}

function Booking() {
  const b = CONSULTING_FORM.booking;

  // Cal.com official inline embed. We inject the exact vanilla snippet via a
  // created <script> so it runs client-side with no npm dep and no Cal typing.
  // The id guard makes it StrictMode-safe (initializes once on the dev
  // double-invoke). It renders the calendar into #my-cal-inline-consult.
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

      {/* Cal.com inline embed renders here (see useEffect above). */}
      <div
        id="my-cal-inline-consult"
        className="mt-7 min-h-[600px] w-full overflow-auto rounded-lg border border-line bg-white"
      />

      {/* Subtle fallback only, no competing button. */}
      <p className="mt-4 text-xs text-muted">
        {b.fallbackBefore}
        <a
          href={CONSULTING_CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-2 hover:no-underline"
        >
          {b.fallbackLinkLabel}
        </a>
        {b.fallbackAfter}
      </p>
    </div>
  );
}

function NotReady() {
  const n = CONSULTING_FORM.notReady;
  return (
    <div className="text-center">
      <p className="eyebrow">{n.eyebrow}</p>
      <h3 className="mt-3 font-display text-display-md text-navy">{n.headline}</h3>
      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink/80">{n.body}</p>
      <a href={SITE.routes.getCertified} className="btn-primary mt-7">
        <span>{n.ctaLabel}</span>
      </a>
    </div>
  );
}
