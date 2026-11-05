"use client";

import { createContext, useContext, type ReactNode } from "react";
import { getPriceState, type PriceState } from "@/lib/sale";

// The server page decides once whether the sale is active and passes the
// boolean down, so server HTML and client hydration always agree.
// Default (no provider) = regular price, so every other page is unaffected.
const PriceContext = createContext<PriceState>(getPriceState(false));

export function PriceProvider({ onSale, children }: { onSale: boolean; children: ReactNode }) {
  return <PriceContext.Provider value={getPriceState(onSale)}>{children}</PriceContext.Provider>;
}

export function usePrice(): PriceState {
  return useContext(PriceContext);
}

/** Regular price struck through, then the price paid today. Plain price when not on sale. */
export function SalePrice({ strikeClassName = "" }: { strikeClassName?: string }) {
  const p = usePrice();
  if (!p.onSale) return <>{p.priceLabel}</>;
  return (
    <>
      <s className={`decoration-2 opacity-60 ${strikeClassName}`}>{p.regularLabel}</s>{" "}
      {p.priceLabel}
    </>
  );
}

/** Renders a copy string, striking the regular price and adding the sale price after it. */
export function TextWithSalePrice({ text }: { text: string }) {
  const p = usePrice();
  if (!p.onSale) return <>{text}</>;
  const parts = text.split(p.regularLabel);
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && <SalePrice />}
          {part}
        </span>
      ))}
    </>
  );
}
