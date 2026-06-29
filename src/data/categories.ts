import type { LocalizedText } from "@/lib/i18n";

export type Category = {
  slug: string;
  name: LocalizedText;
  summary: LocalizedText;
  image: string;
  applications: LocalizedText[];
};

export const categories: Category[] = [
  {
    slug: "gasoline-generators",
    name: { en: "Gasoline Generators", zh: "汽油发电机组" },
    summary: {
      en: "Open-frame and heavy-duty gasoline generators for job sites, backup power and mobile service teams.",
      zh: "适用于工地、备用供电和移动运维的开架式及大功率汽油发电机组。",
    },
    image: "/assets/catalog/products/gasoline-generator-category.jpg",
    applications: [
      { en: "Backup Power", zh: "备用电源" },
      { en: "Construction Site Power", zh: "工地供电" },
      { en: "Emergency Supply", zh: "应急保障" },
    ],
  },
  {
    slug: "diesel-generator-sets",
    name: { en: "Diesel Generator Sets", zh: "柴油发电机组" },
    summary: {
      en: "Single-phase and three-phase diesel generator sets with durable engines and export-ready configurations.",
      zh: "单相及三相柴油发电机组，配置耐用柴油动力，适合工程与批量出口。",
    },
    image: "/assets/catalog/products/diesel-generator-open-frame.jpg",
    applications: [
      { en: "Industrial Backup", zh: "工业备用" },
      { en: "Field Operations", zh: "户外作业" },
      { en: "Emergency Procurement", zh: "应急采购" },
    ],
  },
  {
    slug: "silent-diesel-generators",
    name: { en: "Silent Diesel Generators", zh: "低噪音柴油发电机" },
    summary: {
      en: "Sound-attenuated diesel power units for noise-sensitive commercial and municipal applications.",
      zh: "面向商业、市政和低噪声场景的静音型柴油供电设备。",
    },
    image: "/assets/catalog/products/silent-diesel-generator.jpg",
    applications: [
      { en: "Commercial Backup", zh: "商业备用" },
      { en: "Municipal Service", zh: "市政服务" },
      { en: "Night Operations", zh: "夜间作业" },
    ],
  },
  {
    slug: "water-pumps",
    name: { en: "Water Pumps", zh: "动力水泵" },
    summary: {
      en: "Gasoline and diesel self-priming pumps for drainage, flood response and agricultural water transfer.",
      zh: "汽油及柴油自吸泵，适用于排水、防汛和农业转运水作业。",
    },
    image: "/assets/catalog/products/water-pump-gasoline.jpg",
    applications: [
      { en: "Water Pumping", zh: "抽排水" },
      { en: "Flood Control", zh: "防汛抢险" },
      { en: "Agriculture", zh: "农业灌溉" },
    ],
  },
  {
    slug: "mobile-lighting-towers",
    name: { en: "Mobile Lighting Towers", zh: "移动照明灯塔" },
    summary: {
      en: "Portable lighting tower generator sets for construction, emergency response and night work.",
      zh: "用于施工、应急抢险和夜间作业的移动式照明发电设备。",
    },
    image: "/assets/catalog/products/lighting-tower-mobile.jpg",
    applications: [
      { en: "Mobile Lighting", zh: "移动照明" },
      { en: "Emergency Supply", zh: "应急保障" },
      { en: "Construction Sites", zh: "施工现场" },
    ],
  },
  {
    slug: "welding-generators",
    name: { en: "Welding Generators", zh: "发电电焊机" },
    summary: {
      en: "Generator-welder units for repair teams, field fabrication and mobile maintenance.",
      zh: "面向抢修、现场焊接和移动维护的发电电焊一体设备。",
    },
    image: "/assets/catalog/products/welding-generator-series.jpg",
    applications: [
      { en: "Field Welding", zh: "现场焊接" },
      { en: "Maintenance", zh: "设备维护" },
      { en: "Construction", zh: "工程施工" },
    ],
  },
  {
    slug: "inverter-generators",
    name: { en: "Inverter Generators", zh: "变频发电机组" },
    summary: {
      en: "Compact inverter generators designed for stable output, portability and lower operating noise.",
      zh: "输出稳定、便携性强、噪声较低的变频发电机组。",
    },
    image: "/assets/catalog/products/inverter-generator-red.jpg",
    applications: [
      { en: "Portable Backup", zh: "便携备用" },
      { en: "Outdoor Work", zh: "户外作业" },
      { en: "Sensitive Equipment", zh: "精密设备" },
    ],
  },
  {
    slug: "base-station-maintenance-generators",
    name: { en: "Base Station Maintenance Generators", zh: "基站代维发电机" },
    summary: {
      en: "Mobile power solutions for telecom base station maintenance and temporary communication backup.",
      zh: "面向通信基站代维、临时通信保障的移动供电方案。",
    },
    image: "/assets/catalog/products/base-station-generator.jpg",
    applications: [
      { en: "Telecom Base Station Maintenance", zh: "通信基站代维" },
      { en: "Temporary Power", zh: "临时供电" },
      { en: "Emergency Communication", zh: "应急通信" },
    ],
  },
  {
    slug: "emergency-power-equipment",
    name: { en: "Emergency Power Equipment", zh: "应急电力装备" },
    summary: {
      en: "Emergency generators, pumps and lighting equipment for rapid-response procurement and disaster relief.",
      zh: "面向快速采购和应急救援的发电、抽水及照明装备组合。",
    },
    image: "/assets/catalog/products/emergency-generator.jpg",
    applications: [
      { en: "Emergency Supply", zh: "应急保障" },
      { en: "Disaster Relief", zh: "救灾抢险" },
      { en: "Municipal Reserve", zh: "市政储备" },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
