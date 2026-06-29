import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { getDictionary } from "@/i18n/site";
import { CtaButton } from "@/components/CtaButton";

export function SiteFooter({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const links = [
    [dictionary.nav.products, "/products"],
    [dictionary.nav.solutions, "/solutions"],
    [dictionary.nav.oem, "/oem-customization"],
    [dictionary.nav.quality, "/quality-control"],
    [dictionary.nav.about, "/about-us"],
    [dictionary.nav.contact, "/contact"],
  ] as const;

  return (
    <footer className="bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="text-lg font-black uppercase tracking-wide">Saiboruntong</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300">{dictionary.company}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaButton href={localizedPath(locale, "/contact")} variant="primary">
              {dictionary.cta.quote}
            </CtaButton>
            <CtaButton href="/assets/catalog/2026-saiboruntong-catalog.pdf" variant="secondary" icon="download" download>
              {dictionary.cta.catalog}
            </CtaButton>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {links.map(([label, href]) => (
            <Link key={href} href={localizedPath(locale, href)} className="text-zinc-300 hover:text-white">
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-zinc-500">
        © 2026 Chongqing Saiboruntong Machinery Manufacturing Co., Ltd.
      </div>
    </footer>
  );
}
