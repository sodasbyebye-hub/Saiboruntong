import { HomePage } from "@/components/HomePage";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <SiteHeader locale="en" />
      <HomePage locale="en" />
      <SiteFooter locale="en" />
      <WhatsAppFloat locale="en" />
    </>
  );
}
