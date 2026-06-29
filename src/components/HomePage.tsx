import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Factory, Globe2, PackageCheck, Settings, ShieldCheck, Wrench } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { localizedPath, text } from "@/lib/i18n";
import { getDictionary } from "@/i18n/site";
import { categories, products } from "@/lib/products";
import { CtaButton } from "@/components/CtaButton";
import { InquiryForm } from "@/components/InquiryForm";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";

const whyIcons = [Factory, Settings, ShieldCheck, CheckCircle2, Wrench, Globe2];

export function HomePage({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const featured = products.filter((product) => product.featured).slice(0, 8);
  const why = [
    "Factory Direct Supply",
    "Integrated R&D, Design, Production and Sales",
    "ISO Certified Management Systems",
    "Product Testing Before Delivery",
    "OEM & Customization Available",
    "Export Support",
  ];
  const whyZh = ["工厂直供", "研发、设计、生产、销售一体化", "ISO 管理体系认证", "出厂前产品测试", "支持 OEM 与定制", "出口支持"];
  const solutions = [
    ["Backup Power", "备用电源"],
    ["Construction Site Power", "工地供电"],
    ["Water Pumping", "抽排水"],
    ["Mobile Lighting", "移动照明"],
    ["Telecom Base Station Maintenance", "通信基站代维"],
    ["Emergency Supply", "应急保障"],
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0">
          <Image src="/assets/catalog/products/gasoline-generator-category.jpg" alt="" fill priority className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/50" />
        </div>
        <div className="relative mx-auto grid min-h-[620px] max-w-7xl content-center gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.75fr] lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-red-400">{dictionary.common.fromChina}</p>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">{dictionary.home.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200">{dictionary.home.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href={localizedPath(locale, "/contact")} variant="primary">
                {dictionary.cta.quote}
              </CtaButton>
              <CtaButton href={localizedPath(locale, "/products")} variant="secondary">
                {dictionary.cta.products}
              </CtaButton>
            </div>
          </div>
          <div className="hidden border-l border-white/15 pl-8 lg:block">
            <div className="grid gap-4">
              {["Gasoline", "Diesel", "Water Pumps", "Lighting Towers"].map((item) => (
                <div key={item} className="flex items-center justify-between border border-white/15 bg-white/5 px-5 py-4">
                  <span className="font-semibold">{item}</span>
                  <PackageCheck className="h-5 w-5 text-red-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader title={dictionary.common.productCategories} intro={dictionary.home.categoriesIntro} />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.slug} href={localizedPath(locale, `/products/${category.slug}`)} className="group border border-zinc-200 bg-white">
              <div className="relative aspect-[16/10] bg-zinc-100">
                <Image src={category.image} alt={text(category.name, locale)} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-contain p-4 transition group-hover:scale-[1.03]" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-zinc-950">{text(category.name, locale)}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{text(category.summary, locale)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-zinc-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title={dictionary.nav.solutions} intro={dictionary.home.solutionsIntro} />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {solutions.map(([en, zh]) => (
              <div key={en} className="border border-zinc-200 bg-white p-6">
                <p className="text-xl font-bold text-zinc-950">{locale === "en" ? en : zh}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {locale === "en"
                    ? "Match generator, pump and lighting equipment to real field procurement requirements."
                    : "根据实际现场采购需求匹配发电、抽水和照明设备。"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader title={dictionary.common.featuredProducts} />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} locale={locale} />
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 py-16 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">Manufacturer</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">{dictionary.home.whyTitle}</h2>
            <p className="mt-4 leading-7 text-zinc-300">{dictionary.home.whyIntro}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {(locale === "en" ? why : whyZh).map((item, index) => {
              const Icon = whyIcons[index];
              return (
                <div key={item} className="flex gap-4 border border-white/10 bg-white/5 p-5">
                  <Icon className="mt-1 h-5 w-5 flex-none text-red-400" />
                  <p className="font-semibold">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader title="Quality Certifications" intro={dictionary.home.certificationsIntro} />
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="relative aspect-[3/4] border border-zinc-200 bg-zinc-50">
              <Image
                src={`/assets/catalog/certificates/certificate-${String(index + 1).padStart(2, "0")}.jpg`}
                alt={`Certificate ${index + 1}`}
                fill
                sizes="20vw"
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-100 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <InquiryForm locale={locale} />
        </div>
      </section>
    </>
  );
}
