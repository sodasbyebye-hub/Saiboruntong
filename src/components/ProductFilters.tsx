"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { text } from "@/lib/i18n";
import { getDictionary } from "@/i18n/site";
import type { Category } from "@/data/categories";
import type { Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export function ProductFilters({
  locale,
  products,
  categories,
  fixedCategory,
}: {
  locale: Locale;
  products: Product[];
  categories: Category[];
  fixedCategory?: string;
}) {
  const dictionary = getDictionary(locale);
  const [category, setCategory] = useState(fixedCategory || "all");
  const [fuel, setFuel] = useState("all");
  const [power, setPower] = useState("all");
  const [voltage, setVoltage] = useState("all");
  const [application, setApplication] = useState("all");
  const [startMode, setStartMode] = useState("all");

  const options = useMemo(() => {
    return {
      fuel: Array.from(new Set(products.map((product) => product.fuelType))).sort(),
      power: Array.from(new Set(products.map((product) => product.powerRange))).sort(),
      voltage: Array.from(new Set(products.map((product) => product.voltage))).sort(),
      startMode: Array.from(new Set(products.map((product) => product.startMode))).sort(),
      application: Array.from(
        new Set(products.flatMap((product) => product.applications.map((item) => text(item, locale)))),
      ).sort(),
    };
  }, [locale, products]);

  const filtered = products.filter((product) => {
    const localizedApplications = product.applications.map((item) => text(item, locale));
    return (
      (category === "all" || product.categorySlug === category) &&
      (fuel === "all" || product.fuelType === fuel) &&
      (power === "all" || product.powerRange === power) &&
      (voltage === "all" || product.voltage === voltage) &&
      (application === "all" || localizedApplications.includes(application)) &&
      (startMode === "all" || product.startMode === startMode)
    );
  });

  const selectClass = "min-h-11 w-full border border-zinc-300 bg-white px-3 text-sm font-medium text-zinc-800";

  return (
    <div className="grid gap-8">
      <div className="grid gap-3 border border-zinc-200 bg-zinc-50 p-4 md:grid-cols-3 lg:grid-cols-6">
        {!fixedCategory ? (
          <select className={selectClass} value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Category">
            <option value="all">{dictionary.common.all} Category</option>
            {categories.map((item) => (
              <option key={item.slug} value={item.slug}>
                {text(item.name, locale)}
              </option>
            ))}
          </select>
        ) : null}
        <select className={selectClass} value={fuel} onChange={(event) => setFuel(event.target.value)} aria-label="Fuel Type">
          <option value="all">{dictionary.common.all} Fuel</option>
          {options.fuel.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select className={selectClass} value={power} onChange={(event) => setPower(event.target.value)} aria-label="Power Range">
          <option value="all">{dictionary.common.all} Power</option>
          {options.power.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select className={selectClass} value={voltage} onChange={(event) => setVoltage(event.target.value)} aria-label="Voltage">
          <option value="all">{dictionary.common.all} Voltage</option>
          {options.voltage.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select className={selectClass} value={application} onChange={(event) => setApplication(event.target.value)} aria-label="Application">
          <option value="all">{dictionary.common.all} Application</option>
          {options.application.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select className={selectClass} value={startMode} onChange={(event) => setStartMode(event.target.value)} aria-label="Start Mode">
          <option value="all">{dictionary.common.all} Start</option>
          {options.startMode.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      {filtered.length ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} locale={locale} />
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-zinc-300 p-10 text-center text-zinc-600">{dictionary.common.noProducts}</div>
      )}
    </div>
  );
}
