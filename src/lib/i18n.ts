export type Locale = "en" | "zh";

export type LocalizedText = Record<Locale, string>;

export const locales: Locale[] = ["en", "zh"];

export function text(value: LocalizedText, locale: Locale) {
  return value[locale] || value.en;
}

export function localePrefix(locale: Locale) {
  return locale === "zh" ? "/zh" : "";
}

export function localizedPath(locale: Locale, path: string) {
  const normalized = path === "/" ? "" : path;
  return `${localePrefix(locale)}${normalized}` || "/";
}

export function alternateLocalePath(pathname: string, targetLocale: Locale) {
  const withoutZh = pathname === "/zh" ? "/" : pathname.replace(/^\/zh(?=\/)/, "");

  if (targetLocale === "zh") {
    return withoutZh === "/" ? "/zh" : `/zh${withoutZh}`;
  }

  return withoutZh || "/";
}
