// Anchor target for the one opt-in form on /the-loading-wall.
//
// Every CTA button below the hero is a plain <a href="#optin-<source>">. Those
// ids sit as zero-height markers immediately above the form, so all of them
// land on the form while each leaves its OWN hash in the URL. OptInForm reads
// that hash on submit to recover which button sent the visitor, which is the
// attribution the modal used to give for free.
export const OPT_IN_ANCHOR = "optin";

// Sources in page order. Adding one means adding its marker in page.tsx too.
export const OPT_IN_SOURCES = ["header", "hook", "report", "final-cta"] as const;
