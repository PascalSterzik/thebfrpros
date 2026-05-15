"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { CONTACT_FORM } from "@/content/contact";
import { CONTACT_FORM_ENDPOINT, SITE } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Contact form. Reads CONTACT_FORM_ENDPOINT to decide transport:
//   - `mailto:...`  -> opens the user's email client with prefilled body
//                      (default until MailerLite / GHL is wired)
//   - any other URL -> JSON POST {name, email, topic, message}
//
// Local state machine: idle -> submitting -> (success | error). After success
// or error the user can submit again. Honeypot field for bots. No tracking.

type Status = "idle" | "submitting" | "success" | "error";

const TOPICS = CONTACT_FORM.fields.topicOptions;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<string>(TOPICS[0]);
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState(""); // honeypot

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    if (honey) {
      // Bot detected. Pretend success to avoid telling the bot anything.
      setStatus("success");
      return;
    }
    setStatus("submitting");

    const subject = `${topic}: ${name || "Website inquiry"}`;
    const body = `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`;

    try {
      if (CONTACT_FORM_ENDPOINT.startsWith("mailto:")) {
        const url = `${CONTACT_FORM_ENDPOINT}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
        window.location.href = url;
        setStatus("success");
        return;
      }

      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, topic, message, site: SITE.domain }),
      });
      if (!res.ok) throw new Error(`Submit failed: ${res.status}`);
      setStatus("success");
      setName("");
      setEmail("");
      setTopic(TOPICS[0]);
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center">
            <SectionLabel label={CONTACT_FORM.eyebrow} />
            <motion.h2
              variants={fadeUp}
              className="mt-5 font-display text-display-xl text-navy text-balance"
            >
              {CONTACT_FORM.headline}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
            >
              {CONTACT_FORM.intro}
            </motion.p>
          </motion.div>

          {status === "success" ? (
            <motion.div
              variants={fadeUp}
              role="status"
              aria-live="polite"
              className="mt-12 rounded-lg border border-accent/20 bg-cream p-8 text-center"
            >
              <p className="small-caps-line text-accent">Got it</p>
              <h3 className="mt-3 font-display text-2xl text-navy">
                {CONTACT_FORM.fields.successHeadline}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink/85">
                {CONTACT_FORM.fields.successBody}
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-deeper transition"
              >
                Send another <span aria-hidden>→</span>
              </button>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeUp}
              onSubmit={onSubmit}
              className="mt-12 space-y-6"
              noValidate
            >
              {/* Honeypot — hidden from real users, bots fill it */}
              <div
                aria-hidden
                className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden"
              >
                <label>
                  Leave this field empty
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honey}
                    onChange={(e) => setHoney(e.target.value)}
                  />
                </label>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field
                  label={CONTACT_FORM.fields.nameLabel}
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={setName}
                  placeholder={CONTACT_FORM.fields.namePlaceholder}
                  autoComplete="name"
                />
                <Field
                  label={CONTACT_FORM.fields.emailLabel}
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={setEmail}
                  placeholder={CONTACT_FORM.fields.emailPlaceholder}
                  autoComplete="email"
                />
              </div>

              <SelectField
                label={CONTACT_FORM.fields.topicLabel}
                name="topic"
                value={topic}
                onChange={setTopic}
                options={TOPICS}
              />

              <TextareaField
                label={CONTACT_FORM.fields.messageLabel}
                name="message"
                required
                value={message}
                onChange={setMessage}
                placeholder={CONTACT_FORM.fields.messagePlaceholder}
              />

              {status === "error" ? (
                <div
                  role="alert"
                  className="rounded-lg border border-accent/30 bg-accent/5 p-5 text-sm text-ink"
                >
                  <p className="small-caps-line text-accent">
                    {CONTACT_FORM.fields.errorHeadline}
                  </p>
                  <p className="mt-2 leading-relaxed">
                    {CONTACT_FORM.fields.errorBody}
                  </p>
                </div>
              ) : null}

              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting"
                    ? CONTACT_FORM.fields.submittingLabel
                    : CONTACT_FORM.fields.submitLabel}
                </button>
                <p className="text-xs text-muted sm:max-w-xs sm:text-right">
                  {CONTACT_FORM.fields.privacyNote}
                </p>
              </div>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
  value,
  onChange,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type: "text" | "email";
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="small-caps-line text-navy/80 text-xs">
        {label}
        {required ? <span aria-hidden className="text-accent"> *</span> : null}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="rounded-lg border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: ReadonlyArray<string>;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="small-caps-line text-navy/80 text-xs">{label}</span>
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-line bg-white px-4 py-3 text-base text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextareaField({
  label,
  name,
  required,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="small-caps-line text-navy/80 text-xs">
        {label}
        {required ? <span aria-hidden className="text-accent"> *</span> : null}
      </span>
      <textarea
        name={name}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={6}
        className="rounded-lg border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition resize-y"
      />
    </label>
  );
}
