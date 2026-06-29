import Link from "next/link";

// Minimal footer for /the-loading-wall. Copyright + a single privacy-policy
// link only (the page collects an email, so a privacy link is required;
// nothing else competes for the click). PLAN.md §3 row 7.
export default function LoadingWallFooter({
  copyright,
  privacyLabel,
  privacyHref,
}: {
  copyright: string;
  privacyLabel: string;
  privacyHref: string;
}) {
  return (
    <footer className="border-t border-line bg-white">
      <div className="container-rail flex flex-col items-center gap-3 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {copyright}. All rights reserved.
        </p>
        <Link
          href={privacyHref}
          className="text-xs text-muted underline-offset-2 hover:text-navy hover:underline"
        >
          {privacyLabel}
        </Link>
      </div>
    </footer>
  );
}
