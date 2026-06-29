import { notFound } from "next/navigation";
import { ProductDetailPage } from "@/components/ProductDetailPage";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { products, getProduct } from "@/lib/products";
import { text } from "@/lib/i18n";

export function generateStaticParams() {
  return products.map((product) => ({ category: product.categorySlug, slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product ? `${text(product.name, "zh")} ${product.model}` : "产品详情" };
}

export default async function ZhProductPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const product = getProduct(slug);
  if (!product || product.categorySlug !== category) notFound();

  return (
    <>
      <SiteHeader locale="zh" />
      <ProductDetailPage locale="zh" categorySlug={category} slug={slug} />
      <SiteFooter locale="zh" />
      <WhatsAppFloat locale="zh" />
    </>
  );
}
