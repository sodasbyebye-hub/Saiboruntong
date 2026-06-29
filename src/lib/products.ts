import { categories, getCategory } from "@/data/categories";
import { getProduct, getProductsByCategory, products } from "@/data/products";

export { categories, getCategory, getProduct, getProductsByCategory, products };

export const fuelTypes = ["Gasoline", "Diesel", "Gasoline / Diesel", "N/A"];
export const powerRanges = ["0-5kW", "5-10kW", "10-20kW", "20kW+"];

export function uniqueVoltages() {
  return Array.from(new Set(products.map((product) => product.voltage))).sort();
}

export function uniqueStartModes() {
  return Array.from(new Set(products.map((product) => product.startMode))).sort();
}

export function uniqueApplications(locale: "en" | "zh") {
  return Array.from(
    new Set(products.flatMap((product) => product.applications.map((application) => application[locale]))),
  ).sort();
}

export function productHref(product: { categorySlug: string; slug: string }, locale: "en" | "zh") {
  const prefix = locale === "zh" ? "/zh" : "";
  return `${prefix}/products/${product.categorySlug}/${product.slug}`;
}

export function categoryHref(categorySlug: string, locale: "en" | "zh") {
  const prefix = locale === "zh" ? "/zh" : "";
  return `${prefix}/products/${categorySlug}`;
}
