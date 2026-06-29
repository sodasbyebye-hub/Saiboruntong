import { ProductsPage } from "@/components/ProductsPage";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata = {
  title: "Generator Products",
};

export default function Products() {
  return (
    <>
      <SiteHeader locale="en" />
      <ProductsPage locale="en" />
      <SiteFooter locale="en" />
      <WhatsAppFloat locale="en" />
    </>
  );
}
