import type { Metadata } from "next";
import VariantPage from "@/components/VariantPage";
import { VARIANTS } from "@/content/variants";

const v = VARIANTS.v3;

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
  return <VariantPage variant={v} />;
}
