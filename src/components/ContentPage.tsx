import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { getDictionary } from "@/i18n/site";
import { CtaButton } from "@/components/CtaButton";
import { InquiryForm } from "@/components/InquiryForm";

type PageKey = "solutions" | "oem" | "quality" | "about" | "resources" | "contact";

export function ContentPage({ locale, pageKey }: { locale: Locale; pageKey: PageKey }) {
  const dictionary = getDictionary(locale);
  const content = {
    solutions: {
      title: dictionary.pages.solutionsTitle,
      intro: dictionary.pages.solutionsIntro,
      image: "/assets/catalog/products/emergency-generator.jpg",
      points:
        locale === "en"
          ? ["Backup power for commercial and municipal sites", "Construction power for tools and temporary loads", "Flood control pumping and mobile emergency lighting"]
          : ["商业与市政场景备用供电", "施工现场工具及临时负载供电", "防汛抽排水与移动应急照明"],
    },
    oem: {
      title: dictionary.pages.oemTitle,
      intro: dictionary.pages.oemIntro,
      image: "/assets/catalog/products/gasoline-generator-open-frame.jpg",
      points:
        locale === "en"
          ? ["Brand label and appearance coordination", "Voltage, start mode and packaging requirements", "Batch production support for distributors"]
          : ["品牌标识与外观协同", "电压、启动方式和包装要求", "面向经销商的批量生产支持"],
    },
    quality: {
      title: dictionary.pages.qualityTitle,
      intro: dictionary.pages.qualityIntro,
      image: "/assets/catalog/certificates/certificate-07.jpg",
      points:
        locale === "en"
          ? ["Incoming material and component checks", "Assembly process control", "Pre-delivery performance inspection"]
          : ["来料与零部件检查", "装配过程控制", "出厂前性能检验"],
    },
    about: {
      title: dictionary.pages.aboutTitle,
      intro: dictionary.pages.aboutIntro,
      image: "/assets/catalog/company/factory-exterior.jpg",
      points:
        locale === "en"
          ? ["Power equipment manufacturing in Chongqing", "Integrated R&D, design, production and sales", "Product lines for generator, pump, welding and lighting applications"]
          : ["位于重庆的电力设备制造企业", "集研发、设计、生产和销售于一体", "覆盖发电、抽水、电焊和照明等产品线"],
    },
    resources: {
      title: dictionary.pages.resourcesTitle,
      intro: dictionary.pages.resourcesIntro,
      image: "/assets/catalog/pages/page-05.png",
      points:
        locale === "en"
          ? ["Download the 2026 product catalog", "Compare models by fuel, power and application", "Send requirement details for a quotation package"]
          : ["下载 2026 产品画册", "按燃料、功率和场景比较型号", "提交需求以获取报价方案"],
    },
    contact: {
      title: dictionary.pages.contactTitle,
      intro: dictionary.pages.contactIntro,
      image: "/assets/catalog/products/base-station-generator.jpg",
      points:
        locale === "en"
          ? ["Distributor and wholesale inquiries", "Project and tender requirements", "Emergency procurement support"]
          : ["经销与批发询盘", "项目及招投标需求", "应急采购支持"],
    },
  }[pageKey];

  return (
    <main>
      <section className="bg-zinc-950 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div className="content-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">{dictionary.common.fromChina}</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">{content.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">{content.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href={localizedPath(locale, "/contact")} variant="primary">
                {dictionary.cta.quote}
              </CtaButton>
              <CtaButton href="/assets/catalog/2026-saiboruntong-catalog.pdf" variant="secondary" icon="download" download>
                {dictionary.cta.catalog}
              </CtaButton>
            </div>
          </div>
          <div className="relative aspect-[4/3] border border-white/10 bg-white/5">
            <Image src={content.image} alt={content.title} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-contain p-5" />
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        {content.points.map((point) => (
          <div key={point} className="border border-zinc-200 bg-white p-6">
            <p className="text-xl font-bold text-zinc-950">{point}</p>
          </div>
        ))}
      </section>
      <section className="bg-zinc-100 py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InquiryForm locale={locale} />
        </div>
      </section>
    </main>
  );
}
