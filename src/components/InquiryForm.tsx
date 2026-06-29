"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/i18n/site";

export function InquiryForm({ locale, product }: { locale: Locale; product?: string }) {
  const dictionary = getDictionary(locale);
  const [sent, setSent] = useState(false);
  const inputClass = "min-h-11 w-full border border-zinc-300 px-3 text-sm outline-none focus:border-red-700";

  return (
    <form
      id="inquiry"
      className="grid gap-4 border border-zinc-200 bg-white p-5 shadow-sm md:p-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-700">Inquiry</p>
        <h2 className="mt-2 text-2xl font-bold text-zinc-950">{dictionary.inquiry.title}</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-600">{dictionary.inquiry.intro}</p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <input className={inputClass} placeholder={dictionary.inquiry.name} />
        <input className={inputClass} placeholder={dictionary.inquiry.country} />
        <input className={inputClass} placeholder={dictionary.inquiry.email} type="email" />
        <input className={inputClass} placeholder={dictionary.inquiry.whatsapp} />
        <input className={inputClass} placeholder={dictionary.inquiry.product} defaultValue={product || ""} />
        <input className={inputClass} placeholder={dictionary.inquiry.power} />
        <input className={inputClass} placeholder={dictionary.inquiry.quantity} />
        <input className={inputClass} placeholder={dictionary.inquiry.application} />
      </div>
      <textarea className={`${inputClass} min-h-28 py-3`} placeholder={dictionary.inquiry.message} />
      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="min-h-11 bg-red-700 px-6 text-sm font-semibold text-white hover:bg-red-800">
          {dictionary.cta.send}
        </button>
        <p className="text-xs text-zinc-500">{sent ? dictionary.inquiry.placeholderNotice : dictionary.inquiry.placeholderNotice}</p>
      </div>
    </form>
  );
}
