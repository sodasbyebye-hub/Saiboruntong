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
  return { title: product ? `${text(product.name, "en")} ${product.model}` : "Product" };
}

export default async function ProductPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const product = getProduct(slug);
  if (!product || product.categorySlug !== category) notFound();

  return (
    <>
      <SiteHeader locale="en" />
      <ProductDetailPage locale="en" categorySlug={category} slug={slug} />
      <SiteFooter locale="en" />
      <WhatsAppFloat locale="en" />
    </>
  );
}
