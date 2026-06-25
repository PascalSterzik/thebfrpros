"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { sendGAEvent } from "@next/third-parties/google";
import TeamTrainingFormFlow from "./TeamTrainingFormFlow";

// Full-screen overlay that hosts the qualify flow. Copy of ConsultingFormOverlay:
// opens on the URL hash "#start" (so every trigger stays a plain server-component
// <a href="#start">, hero CTA, the launch band, the per-card CTAs, the closer),
// covers the page, locks page scroll, ESC/X to close, mounted once per page.
//
// GA4 funnel (spec §8): team_form_start fires once when the overlay opens.

const OPEN_HASH = "#start";

export default function TeamTrainingFormOverlay() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  const close = useCallback(() => {
    if (typeof window !== "undefined" && window.location.hash === OPEN_HASH) {
      // Drop the hash without a history jump or a new entry.
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    setOpen(false);
  }, []);

  // Open/close from the hash (initial load + every hashchange).
  useEffect(() => {
    const sync = () => {
      const isOpen = window.location.hash === OPEN_HASH;
      setOpen(isOpen);
      // Fire the funnel-start event once per page session, the first time the
      // overlay opens.
      if (isOpen && !startedRef.current) {
        startedRef.current = true;
        sendGAEvent("event", "team_form_start", { location: "train_your_team" });
      }
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  // Lock the page scroll behind the overlay.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC to close; move focus into the panel on open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="team-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Train your team inquiry"
          className="fixed inset-0 z-[100] overflow-y-auto bg-cream"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Bare X only (no header bar, no circle): present, but not inviting. */}
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="fixed right-5 top-5 z-[110] text-navy/40 transition hover:text-navy"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <div
            ref={panelRef}
            tabIndex={-1}
            className="mx-auto w-full max-w-2xl px-5 pt-16 pb-16 outline-none sm:px-8"
          >
            <TeamTrainingFormFlow />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
