import { notFound } from "next/navigation";
import { ProductsPage } from "@/components/ProductsPage";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { categories, getCategory } from "@/lib/products";
import { text } from "@/lib/i18n";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  return { title: category ? text(category.name, "en") : "Products" };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (!getCategory(category)) notFound();

  return (
    <>
      <SiteHeader locale="en" />
      <ProductsPage locale="en" categorySlug={category} />
      <SiteFooter locale="en" />
      <WhatsAppFloat locale="en" />
    </>
  );
}
