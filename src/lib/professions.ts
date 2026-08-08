// Shared profession options for every opt-in on the site (footer newsletter,
// /the-loading-wall lead magnet, anything added later).
//
// Nick-approved 2026-07-30. CHANGING THESE AFTER LAUNCH FRAGMENTS THE DATA:
// old subscribers keep the old label, so a renamed option silently splits one
// segment into two in MailerLite. Add rather than rename, and only from the
// evidence of the "Other" answers.
//
// Why a fixed list and not free text (carried over from NewsletterForm, where
// this list originally lived): the 767-response intro-course survey stored
// profession as a 2-option select, Rehab 94% / Fitness 6%, which is too coarse
// to segment on because 682 people in one bucket is the list, not a segment.
// Free text segments worse still, returning "PT" / "Physical Therapist" /
// "physio" / "DPT" for one profession. OTHER reveals a text input so the tail
// is captured without guessing, and after a few months those answers say which
// option to promote.
//
// §Pascal-2026-08-08: lifted out of NewsletterForm into this module when the
// Loading Wall opt-in adopted the same four fields. Two copies of a list whose
// own comment warns against drift would have been the drift.

export const OTHER = "Other";

export const PROFESSIONS = [
  "Physical Therapist / PTA",
  "Athletic Trainer",
  "Strength & Conditioning / Personal Trainer",
  "Student",
  OTHER,
] as const;

// Send what the visitor typed rather than the literal "Other", so the
// MailerLite column always holds a real profession.
export function resolveProfession(profession: string, other: string): string {
  return profession === OTHER ? other.trim() || OTHER : profession;
}
