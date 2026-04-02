"use client";

import { useState } from "react";

import type { ServiceCalculator } from "@/lib/services";
import { cn } from "@/lib/utils";

import { ServiceActionLink } from "./ServiceActionLink";

type ExchangeCalculatorProps = {
  calculator: ServiceCalculator;
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value);

export const ExchangeCalculator = ({
  calculator,
}: ExchangeCalculatorProps) => {
  const [cediAmount, setCediAmount] = useState(
    calculator.fromValue.toString()
  );

  const parsedAmount = Number(cediAmount.replace(/,/g, ""));
  const safeAmount =
    Number.isFinite(parsedAmount) && parsedAmount >= 0 ? parsedAmount : 0;
  const convertedAmount = safeAmount * calculator.rate;

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.45)] md:p-8">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
            Rate widget
          </p>
          <h2 className="mt-2 text-2xl font-black text-slate-950 md:text-3xl">
            {calculator.heading}
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-slate-500">
          {calculator.note}
        </p>
      </div>

      <div className="grid gap-5 rounded-[1.75rem] bg-slate-950 p-6 text-white md:grid-cols-[1fr_auto_1fr] md:items-center">
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
            {calculator.fromLabel}
          </span>
          <input
            type="text"
            inputMode="decimal"
            value={cediAmount}
            onChange={(event) => setCediAmount(event.target.value)}
            className={cn(
              "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-3xl font-black text-white outline-none transition",
              "focus:border-secondary focus:bg-white/10"
            )}
            aria-label={calculator.fromLabel}
          />
        </label>

        <div className="text-center text-sm font-bold uppercase tracking-[0.35em] text-secondary">
          Converts to
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
          <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
            {calculator.toLabel}
          </span>
          <p className="text-3xl font-black text-white">
            {formatCurrency(convertedAmount)}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          Example reference rate: 1 {calculator.fromLabel} = {calculator.rate}{" "}
          {calculator.toLabel}
        </p>
        <ServiceActionLink action={calculator.button} />
      </div>
    </div>
  );
};
