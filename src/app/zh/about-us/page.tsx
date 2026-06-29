import { ContentPage } from "@/components/ContentPage";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata = { title: "关于我们" };

export default function ZhAboutUs() {
  return (
    <>
      <SiteHeader locale="zh" />
      <ContentPage locale="zh" pageKey="about" />
      <SiteFooter locale="zh" />
      <WhatsAppFloat locale="zh" />
    </>
  );
}
