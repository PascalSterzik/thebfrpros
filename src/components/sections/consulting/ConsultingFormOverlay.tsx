"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ConsultingFormFlow from "./ConsultingFormFlow";

// Full-screen overlay that hosts the qualification flow. It opens when the URL
// hash is "#start", so every trigger stays a plain server-component
// <a href="#start"> (hero CTA, the mid-page launch band, the closer) with no
// client wiring. While open it covers the whole page, locks the page scroll
// behind it, and is itself scrollable (long steps / the calendar). ESC or the X
// close it (clearing the hash). Mounted once per page.

const OPEN_HASH = "#start";

export default function ConsultingFormOverlay() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    if (typeof window !== "undefined" && window.location.hash === OPEN_HASH) {
      // Drop the hash without a history jump or a new entry.
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    setOpen(false);
  }, []);

  // Open/close from the hash (initial load + every hashchange). A CTA is just
  // <a href="#start">; the browser back button removes the hash and closes.
  useEffect(() => {
    const sync = () => setOpen(window.location.hash === OPEN_HASH);
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
          key="consult-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="BFR Case Review"
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
            <ConsultingFormFlow />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
