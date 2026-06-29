import Image from "next/image";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { text } from "@/lib/i18n";
import { getDictionary } from "@/i18n/site";
import type { Product } from "@/data/products";
import { getCategory } from "@/data/categories";
import { productHref } from "@/lib/products";

export function ProductCard({ product, locale }: { product: Product; locale: Locale }) {
  const dictionary = getDictionary(locale);
  const category = getCategory(product.categorySlug);

  return (
    <article className="group grid overflow-hidden border border-zinc-200 bg-white">
      <Link href={productHref(product, locale)} className="relative block aspect-[4/3] bg-zinc-100">
        <Image
          src={product.images[0]}
          alt={`${text(product.name, locale)} ${product.model}`}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-contain p-5 transition duration-300 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="grid gap-4 p-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-700">
            {category ? text(category.name, locale) : product.categorySlug}
          </p>
          <h3 className="mt-2 text-lg font-bold text-zinc-950">{text(product.name, locale)}</h3>
          <p className="mt-1 font-mono text-sm text-zinc-500">{product.model}</p>
        </div>
        <dl className="grid grid-cols-3 gap-2 text-sm">
          <div>
            <dt className="text-xs text-zinc-500">Power</dt>
            <dd className="font-semibold text-zinc-950">{product.specs.ratedPower || product.powerRange}</dd>
          </div>
          <div>
            <dt className="text-xs text-zinc-500">Voltage</dt>
            <dd className="font-semibold text-zinc-950">{product.voltage}</dd>
          </div>
          <div>
            <dt className="text-xs text-zinc-500">Fuel</dt>
            <dd className="font-semibold text-zinc-950">{product.fuelType}</dd>
          </div>
        </dl>
        {product.needsVerification ? (
          <p className="inline-flex items-center gap-2 text-xs font-medium text-amber-700">
            <AlertTriangle className="h-4 w-4" />
            {dictionary.common.verification}
          </p>
        ) : null}
        <div className="grid grid-cols-2 gap-2">
          <Link
            href={productHref(product, locale)}
            className="inline-flex min-h-11 items-center justify-center border border-zinc-950 px-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-950 hover:text-white"
          >
            {dictionary.cta.details}
          </Link>
          <Link
            href={`${productHref(product, locale)}#inquiry`}
            className="inline-flex min-h-11 items-center justify-center bg-red-700 px-3 text-sm font-semibold text-white hover:bg-red-800"
          >
            {dictionary.cta.price}
          </Link>
        </div>
      </div>
    </article>
  );
}
