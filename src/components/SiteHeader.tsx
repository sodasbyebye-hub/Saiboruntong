"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { alternateLocalePath, localizedPath } from "@/lib/i18n";
import { getDictionary } from "@/i18n/site";
import { CtaButton } from "@/components/CtaButton";

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const dictionary = getDictionary(locale);
  const nav = [
    [dictionary.nav.products, "/products"],
    [dictionary.nav.solutions, "/solutions"],
    [dictionary.nav.oem, "/oem-customization"],
    [dictionary.nav.quality, "/quality-control"],
    [dictionary.nav.about, "/about-us"],
    [dictionary.nav.resources, "/resources"],
    [dictionary.nav.contact, "/contact"],
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href={localizedPath(locale, "/")} className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center bg-red-700 text-lg font-black text-white">S</span>
          <span className="leading-tight">
            <span className="block text-sm font-black uppercase tracking-wide text-zinc-950">Saiboruntong</span>
            <span className="block text-xs text-zinc-500">{dictionary.common.fromChina}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={localizedPath(locale, href)} className="text-sm font-medium text-zinc-700 hover:text-red-700">
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={alternateLocalePath(pathname, locale === "en" ? "zh" : "en")}
            className="rounded-sm border border-zinc-300 px-3 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-100"
          >
            {locale === "en" ? "中文" : "EN"}
          </Link>
          <CtaButton href={localizedPath(locale, "/contact")} variant="primary">
            {dictionary.cta.quote}
          </CtaButton>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-zinc-300 text-zinc-950 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-zinc-200 bg-white px-4 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2">
            {nav.map(([label, href]) => (
              <Link
                key={href}
                href={localizedPath(locale, href)}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-100"
              >
                {label}
              </Link>
            ))}
            <div className="mt-3 flex gap-3">
              <Link
                href={alternateLocalePath(pathname, locale === "en" ? "zh" : "en")}
                className="inline-flex min-h-11 items-center justify-center border border-zinc-300 px-4 text-sm font-semibold"
              >
                {locale === "en" ? "中文" : "EN"}
              </Link>
              <CtaButton href={localizedPath(locale, "/contact")} variant="primary">
                {dictionary.cta.quote}
              </CtaButton>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
