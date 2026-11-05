"use client";

import { SalePrice, usePrice } from "@/components/shared/PriceContext";
import { SALE } from "@/lib/sale";

// Thin bar above the header on /certification while the sale runs.
// Renders nothing outside the sale window.
export default function SaleBanner() {
  const p = usePrice();
  if (!p.onSale) return null;
  return (
    <div className="bg-navy text-white" role="region" aria-label={SALE.label}>
      <p className="container-rail py-2.5 text-center text-sm sm:text-base">
        <span className="font-semibold">{SALE.label}: {SALE.percentOff}% off.</span>{" "}
        <span className="whitespace-nowrap font-semibold">
          <SalePrice />
        </span>{" "}
        <span className="whitespace-nowrap">
          Ends {SALE.endLabel}.{" "}
          <a href="#pricing" className="ml-2 font-semibold underline underline-offset-4 hover:text-white/80">
            See pricing
          </a>
        </span>
      </p>
    </div>
  );
}
