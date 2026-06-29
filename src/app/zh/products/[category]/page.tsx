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
  return { title: category ? text(category.name, "zh") : "产品中心" };
}

export default async function ZhCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (!getCategory(category)) notFound();

  return (
    <>
      <SiteHeader locale="zh" />
      <ProductsPage locale="zh" categorySlug={category} />
      <SiteFooter locale="zh" />
      <WhatsAppFloat locale="zh" />
    </>
  );
}
