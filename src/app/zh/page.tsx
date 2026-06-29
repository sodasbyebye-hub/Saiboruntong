import { HomePage } from "@/components/HomePage";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata = {
  title: "重庆赛博润通发电设备制造商",
  description: "重庆赛博润通机械制造有限公司提供汽油发电机、柴油发电机组、水泵、灯塔和应急电力装备。",
};

export default function ZhHome() {
  return (
    <>
      <SiteHeader locale="zh" />
      <HomePage locale="zh" />
      <SiteFooter locale="zh" />
      <WhatsAppFloat locale="zh" />
    </>
  );
}
