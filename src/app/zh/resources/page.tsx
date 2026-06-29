import { ContentPage } from "@/components/ContentPage";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata = { title: "资料中心" };

export default function ZhResources() {
  return (
    <>
      <SiteHeader locale="zh" />
      <ContentPage locale="zh" pageKey="resources" />
      <SiteFooter locale="zh" />
      <WhatsAppFloat locale="zh" />
    </>
  );
}
