import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { localizedPath, text } from "@/lib/i18n";
import { getDictionary } from "@/i18n/site";
import { getCategory, getProduct, getProductsByCategory } from "@/lib/products";
import { CtaButton } from "@/components/CtaButton";
import { InquiryForm } from "@/components/InquiryForm";
import { ProductCard } from "@/components/ProductCard";
import { ProductGallery } from "@/components/ProductGallery";
import { SectionHeader } from "@/components/SectionHeader";
import { SpecTable } from "@/components/SpecTable";

export function ProductDetailPage({ locale, slug }: { locale: Locale; categorySlug: string; slug: string }) {
  const dictionary = getDictionary(locale);
  const product = getProduct(slug);

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <Link href={localizedPath(locale, "/products")} className="mt-6 inline-block text-red-700">
          {dictionary.nav.products}
        </Link>
      </main>
    );
  }

  const category = getCategory(product.categorySlug);
  const related = getProductsByCategory(product.categorySlug).filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <ProductGallery images={product.images} alt={text(product.name, locale)} />
        <div className="grid content-start gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-700">
              {category ? text(category.name, locale) : product.categorySlug}
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-zinc-950">{text(product.name, locale)}</h1>
            <p className="mt-2 font-mono text-zinc-500">{product.model}</p>
            <p className="mt-5 text-lg leading-8 text-zinc-600">{text(product.shortDescription, locale)}</p>
          </div>
          {product.needsVerification ? (
            <p className="inline-flex items-center gap-2 border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
              <AlertTriangle className="h-4 w-4" />
              {dictionary.common.verification}
            </p>
          ) : null}
          <dl className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {[
              ["Power", product.specs.ratedPower || product.powerRange],
              ["Voltage", product.voltage],
              ["Fuel", product.fuelType],
              ["Start", product.startMode],
              ["Engine", product.specs.engineModel || "-"],
              ["Weight", product.specs.grossWeight || "-"],
            ].map(([label, value]) => (
              <div key={label} className="border border-zinc-200 p-4">
                <dt className="text-xs text-zinc-500">{label}</dt>
                <dd className="mt-1 text-sm font-bold text-zinc-950">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap gap-3">
            <CtaButton href="#inquiry" variant="primary">
              {dictionary.cta.bestPrice}
            </CtaButton>
            <CtaButton href="#inquiry" variant="dark" icon="whatsapp">
              {dictionary.cta.whatsapp}
            </CtaButton>
            <CtaButton href="/assets/catalog/2026-saiboruntong-catalog.pdf" variant="ghost" icon="download" download>
              {dictionary.cta.catalog}
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <SectionHeader title={dictionary.common.specs} />
            <div className="mt-6">
              <SpecTable product={product} />
            </div>
          </div>
          <div>
            <SectionHeader title={dictionary.common.applications} />
            <div className="mt-6 grid gap-3">
              {product.applications.map((application) => (
                <div key={text(application, locale)} className="border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-800">
                  {text(application, locale)}
                </div>
              ))}
            </div>
            <div className="mt-8 border border-zinc-200 bg-zinc-950 p-6 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-red-400">{dictionary.common.video}</p>
              <div className="mt-6 flex aspect-video items-center justify-center border border-white/15 bg-white/5 text-sm text-zinc-300">
                {dictionary.common.placeholder}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InquiryForm locale={locale} product={`${text(product.name, locale)} - ${product.model}`} />
        </div>
      </section>

      {related.length ? (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeader title={dictionary.common.relatedProducts} />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} locale={locale} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
