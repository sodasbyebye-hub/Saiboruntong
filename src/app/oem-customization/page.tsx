import { ContentPage } from "@/components/ContentPage";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata = { title: "OEM & Customization" };

export default function OemCustomization() {
  return (
    <>
      <SiteHeader locale="en" />
      <ContentPage locale="en" pageKey="oem" />
      <SiteFooter locale="en" />
      <WhatsAppFloat locale="en" />
    </>
  );
}
