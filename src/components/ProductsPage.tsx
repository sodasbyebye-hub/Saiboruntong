import type { Locale } from "@/lib/i18n";
import { text } from "@/lib/i18n";
import { getDictionary } from "@/i18n/site";
import { categories, getCategory, getProductsByCategory, products } from "@/lib/products";
import { ProductFilters } from "@/components/ProductFilters";
import { SectionHeader } from "@/components/SectionHeader";

export function ProductsPage({ locale, categorySlug }: { locale: Locale; categorySlug?: string }) {
  const dictionary = getDictionary(locale);
  const category = categorySlug ? getCategory(categorySlug) : undefined;
  const scopedProducts = categorySlug ? getProductsByCategory(categorySlug) : products;

  return (
    <main>
      <section className="bg-zinc-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">{dictionary.nav.products}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-5xl">
            {category ? text(category.name, locale) : dictionary.pages.productsTitle}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            {category ? text(category.summary, locale) : dictionary.pages.productsIntro}
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionHeader title={category ? text(category.name, locale) : dictionary.common.filters} intro={category ? dictionary.pages.productsIntro : undefined} />
        <div className="mt-8">
          <ProductFilters locale={locale} products={scopedProducts} categories={categories} fixedCategory={categorySlug} />
        </div>
      </section>
    </main>
  );
}
