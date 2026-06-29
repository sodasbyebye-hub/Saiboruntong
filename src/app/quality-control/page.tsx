import { ContentPage } from "@/components/ContentPage";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata = { title: "Quality Control" };

export default function QualityControl() {
  return (
    <>
      <SiteHeader locale="en" />
      <ContentPage locale="en" pageKey="quality" />
      <SiteFooter locale="en" />
      <WhatsAppFloat locale="en" />
    </>
  );
}
