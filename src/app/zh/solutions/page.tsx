import { ContentPage } from "@/components/ContentPage";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata = { title: "解决方案" };

export default function ZhSolutions() {
  return (
    <>
      <SiteHeader locale="zh" />
      <ContentPage locale="zh" pageKey="solutions" />
      <SiteFooter locale="zh" />
      <WhatsAppFloat locale="zh" />
    </>
  );
}
