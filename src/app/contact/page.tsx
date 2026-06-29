import { ContentPage } from "@/components/ContentPage";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata = { title: "Contact Us" };

export default function Contact() {
  return (
    <>
      <SiteHeader locale="en" />
      <ContentPage locale="en" pageKey="contact" />
      <SiteFooter locale="en" />
      <WhatsAppFloat locale="en" />
    </>
  );
}
