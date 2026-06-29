import { ProductsPage } from "@/components/ProductsPage";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata = {
  title: "产品中心",
};

export default function ZhProducts() {
  return (
    <>
      <SiteHeader locale="zh" />
      <ProductsPage locale="zh" />
      <SiteFooter locale="zh" />
      <WhatsAppFloat locale="zh" />
    </>
  );
}
