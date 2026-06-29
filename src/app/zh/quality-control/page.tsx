import { ContentPage } from "@/components/ContentPage";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata = { title: "质量控制" };

export default function ZhQualityControl() {
  return (
    <>
      <SiteHeader locale="zh" />
      <ContentPage locale="zh" pageKey="quality" />
      <SiteFooter locale="zh" />
      <WhatsAppFloat locale="zh" />
    </>
  );
}
