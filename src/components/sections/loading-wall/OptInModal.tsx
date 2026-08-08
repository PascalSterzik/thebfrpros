"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OptInForm from "./OptInForm";

// Local, not imported from optInHash: that module now serves the live
// scroll-to-form anchors and no longer exports this. Keeping the parked file
// self-contained stops it from breaking the build again.
const OPT_IN_HASH = "#get-the-guide";

// NOT MOUNTED. §Pascal-2026-08-08: built, then dropped the same day in favour
// of one inline form that the CTA buttons scroll to ("if we keep the form on
// the page, we don't need the pop-up"). File kept in place, same convention as
// StickyCTABar.tsx, so the modal can be restored by re-rendering it in
// page.tsx and pointing OptInTrigger back at a "#get-the-guide-" hash.
// NOTE if it ever is restored: it expects the OLD two-field OptInForm props,
// and OptInForm now takes four fields, so re-check the panel width first.
//
// Opt-in form in an overlay, opened by the URL hash. Modelled on
// ConsultingFormOverlay so every trigger stays a plain server-rendered
// <a href="#get-the-guide-...">: no section that wants a CTA has to become a
// client component, and the browser back button closes the modal for free.
//
// Scope (Pascal 2026-08-08): the HERO keeps its own inline form. On a squeeze
// page taking cold paid traffic the visible form is part of the message, so
// the one mechanism is not hidden behind a click. This modal serves the CTAs
// BELOW the hero, which previously meant either a duplicated 224px form block
// or nothing at all across a ~3000px stretch of the page.
//
// The hash suffix is passed through as the form's `location`, so the four
// entry points stay distinguishable in GA4 and MailerLite.

export default function OptInModal({
  heading,
  cta,
  microcopy,
}: {
  heading: string;
  cta: string;
  microcopy: string;
}) {
  const [source, setSource] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const open = source !== null;

  const close = useCallback(() => {
    if (typeof window !== "undefined" && window.location.hash.startsWith(OPT_IN_HASH)) {
      // Drop the hash without a history jump or a new entry.
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    setSource(null);
  }, []);

  // Open/close from the hash, on load and on every hashchange.
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash;
      if (!hash.startsWith(OPT_IN_HASH)) {
        setSource(null);
        return;
      }
      setSource(hash.slice(OPT_IN_HASH.length).replace(/^-/, "") || "modal");
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

  // ESC closes; focus moves into the panel on open.
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
          key="optin-overlay"
          className="fixed inset-0 z-[100] overflow-y-auto bg-navy-deeper/70 backdrop-blur-sm"
          onClick={close}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          {/* items-start on phones: with the software keyboard open, a
              vertically centred card gets pushed off the top. */}
          <div className="flex min-h-full items-start justify-center px-4 py-10 sm:items-center">
            <motion.div
              ref={panelRef}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-label={heading}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-lg border border-line bg-white p-6 shadow-navy-lg outline-none sm:p-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 text-navy/40 transition hover:text-navy"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              <h2 className="pr-8 font-display text-display-md text-navy">{heading}</h2>

              <div className="mt-5">
                <OptInForm
                  idPrefix="modal"
                  cta={cta}
                  microcopy={microcopy}
                  location={`loading-wall-${source}`}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
