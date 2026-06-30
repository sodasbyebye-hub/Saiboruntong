"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { alternateLocalePath, localizedPath } from "@/lib/i18n";
import { getDictionary } from "@/i18n/site";
import { PillNav } from "@/components/PillNav";

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const dictionary = getDictionary(locale);
  const homeHref = localizedPath(locale, "/");
  const items = [
    { label: dictionary.nav.home, href: homeHref },
    { label: dictionary.nav.products, href: localizedPath(locale, "/products") },
    { label: dictionary.nav.solutions, href: localizedPath(locale, "/solutions") },
    { label: dictionary.nav.oem, href: localizedPath(locale, "/oem-customization") },
    { label: dictionary.nav.quality, href: localizedPath(locale, "/quality-control") },
    { label: dictionary.nav.about, href: localizedPath(locale, "/about-us") },
    { label: dictionary.nav.resources, href: localizedPath(locale, "/resources") },
    { label: dictionary.nav.contact, href: localizedPath(locale, "/contact") },
    {
      label: locale === "en" ? "中文" : "EN",
      href: alternateLocalePath(pathname, locale === "en" ? "zh" : "en"),
      ariaLabel: locale === "en" ? "Switch to Chinese" : "Switch to English",
    },
  ];
  const activeHref = items.find((item) => pathname === item.href || (item.href !== homeHref && pathname.startsWith(`${item.href}/`)))?.href;

  return (
    <PillNav
      items={items}
      activeHref={activeHref}
      baseColor="#111113"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#111113"
      initialLoadAnimation={false}
    />
  );
}
