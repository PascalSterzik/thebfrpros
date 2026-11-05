import type { Metadata } from "next";
import VariantPage from "@/components/VariantPage";
import { VARIANTS } from "@/content/variants";
import { isSaleActive } from "@/lib/sale";

const v = VARIANTS.v3;

// ISR: re-render at most every 10 minutes, so a time-boxed sale (src/lib/sale.ts)
// switches on and off by itself without a redeploy.
export const revalidate = 600;

export const metadata: Metadata = {
  title: v.metaTitle,
  description: v.metaDescription,
  alternates: { canonical: v.routePath },
  openGraph: {
    title: v.metaTitle,
    description: v.metaDescription,
    url: v.routePath,
    type: "website",
    images: [{ url: v.ogImage, width: 1200, height: 630, alt: v.metaTitle }],
  },
  twitter: {
    title: v.metaTitle,
    description: v.metaDescription,
    images: [v.ogImage],
  },
};

export default function GetCertifiedV3Page() {
  return <VariantPage variant={v} onSale={isSaleActive()} />;
}
