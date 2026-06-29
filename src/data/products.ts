import type { LocalizedText } from "@/lib/i18n";

export type Product = {
  slug: string;
  model: string;
  categorySlug: string;
  name: LocalizedText;
  shortDescription: LocalizedText;
  images: string[];
  fuelType: "Gasoline" | "Diesel" | "Gasoline / Diesel" | "N/A";
  powerRange: "0-5kW" | "5-10kW" | "10-20kW" | "20kW+";
  voltage: string;
  startMode: string;
  applications: LocalizedText[];
  featured?: boolean;
  needsVerification?: boolean;
  specs: {
    ratedPower?: string;
    maxPower?: string;
    voltage?: string;
    fuelType?: string;
    engineModel?: string;
    engineType?: string;
    tankCapacity?: string;
    oilCapacity?: string;
    startMode?: string;
    noiseLevel?: string;
    grossWeight?: string;
    dimensions?: string;
    frequency?: string;
    flow?: string;
    head?: string;
    outletDiameter?: string;
    weldingCurrent?: string;
    lampPower?: string;
    liftingHeight?: string;
  };
};

export const products: Product[] = [
  {
    slug: "sbrt4800-gasoline-generator",
    model: "SBRT4800",
    categorySlug: "gasoline-generators",
    name: { en: "3.0kW Open Frame Gasoline Generator", zh: "3.0kW 开架式汽油发电机" },
    shortDescription: {
      en: "Compact gasoline generator for portable backup power, small job sites and maintenance teams.",
      zh: "紧凑型汽油发电机，适用于小型备用供电、工地和维护作业。",
    },
    images: ["/assets/catalog/products/gasoline-generator-open-frame.jpg"],
    fuelType: "Gasoline",
    powerRange: "0-5kW",
    voltage: "230V",
    startMode: "Manual / Electric",
    applications: [
      { en: "Backup Power", zh: "备用电源" },
      { en: "Construction Site Power", zh: "工地供电" },
    ],
    featured: true,
    specs: {
      ratedPower: "3.0kW",
      maxPower: "3.2kW",
      voltage: "230V",
      fuelType: "Unleaded gasoline",
      engineModel: "170F",
      engineType: "4-stroke OHV air-cooled",
      tankCapacity: "15L",
      oilCapacity: "0.6L",
      startMode: "Manual / electric start",
      noiseLevel: "66dB at 7m",
      grossWeight: "48kg",
      dimensions: "596 x 460 x 500mm",
    },
  },
  {
    slug: "sbrt7000-gasoline-generator",
    model: "SBRT7000",
    categorySlug: "gasoline-generators",
    name: { en: "5.0kW Gasoline Generator", zh: "5.0kW 汽油发电机" },
    shortDescription: {
      en: "General-purpose gasoline generator for distributors, contractors and emergency stock programs.",
      zh: "通用型汽油发电机，适合经销、工程承包和应急储备采购。",
    },
    images: ["/assets/catalog/products/gasoline-generator-category.jpg"],
    fuelType: "Gasoline",
    powerRange: "5-10kW",
    voltage: "230V",
    startMode: "Manual / Electric",
    applications: [
      { en: "Construction Site Power", zh: "工地供电" },
      { en: "Emergency Supply", zh: "应急保障" },
    ],
    featured: true,
    specs: {
      ratedPower: "5.0kW",
      maxPower: "5.5kW",
      voltage: "230V",
      fuelType: "Unleaded gasoline",
      engineModel: "188FD",
      engineType: "4-stroke OHV air-cooled",
      tankCapacity: "25L",
      oilCapacity: "1.1L",
      startMode: "Manual / electric start",
      noiseLevel: "74dB at 7m",
      grossWeight: "86kg",
      dimensions: "700 x 526 x 580mm",
    },
  },
  {
    slug: "sbrt10500-gasoline-generator",
    model: "SBRT10500",
    categorySlug: "gasoline-generators",
    name: { en: "7.5kW Gasoline Generator", zh: "7.5kW 汽油发电机" },
    shortDescription: {
      en: "Higher-output gasoline generator for field operation, tools and backup power packages.",
      zh: "较高功率汽油发电机，可用于现场作业、电动工具和备用供电组合。",
    },
    images: ["/assets/catalog/products/gasoline-generator-open-frame.jpg"],
    fuelType: "Gasoline",
    powerRange: "5-10kW",
    voltage: "230V",
    startMode: "Manual / Electric",
    applications: [
      { en: "Backup Power", zh: "备用电源" },
      { en: "Construction Site Power", zh: "工地供电" },
    ],
    featured: true,
    specs: {
      ratedPower: "7.5kW",
      maxPower: "8.0kW",
      voltage: "230V",
      fuelType: "Unleaded gasoline",
      engineModel: "192FD",
      engineType: "4-stroke OHV air-cooled",
      tankCapacity: "25L",
      oilCapacity: "1.1L",
      startMode: "Manual / electric start",
      noiseLevel: "76dB at 7m",
      grossWeight: "100kg",
      dimensions: "700 x 526 x 580mm",
    },
  },
  {
    slug: "sbrt12000-heavy-duty-gasoline-generator",
    model: "SBRT12000",
    categorySlug: "gasoline-generators",
    name: { en: "9.0kW Heavy-Duty Gasoline Generator", zh: "9.0kW 大功率汽油发电机" },
    shortDescription: {
      en: "Twin-cylinder gasoline power for larger field loads and mobile service applications.",
      zh: "双缸汽油动力，适用于较大现场负载和移动服务场景。",
    },
    images: ["/assets/catalog/products/gasoline-generator-heavy-duty.jpg"],
    fuelType: "Gasoline",
    powerRange: "5-10kW",
    voltage: "230V",
    startMode: "Manual / Electric",
    applications: [
      { en: "Backup Power", zh: "备用电源" },
      { en: "Field Operations", zh: "现场作业" },
    ],
    needsVerification: true,
    specs: {
      ratedPower: "9.0kW",
      maxPower: "10.0kW",
      voltage: "230V",
      fuelType: "Unleaded gasoline",
      engineModel: "R500(D/V)",
      engineType: "Twin-cylinder 4-stroke OHV air-cooled",
      tankCapacity: "40L",
      oilCapacity: "1.2L",
      startMode: "Manual / electric start",
      noiseLevel: "76dB at 7m",
      grossWeight: "110kg",
      dimensions: "740 x 550 x 680mm",
    },
  },
  {
    slug: "bp7000i-open-inverter-generator",
    model: "BP7000i",
    categorySlug: "inverter-generators",
    name: { en: "5.0kW Open Inverter Generator", zh: "5.0kW 开架变频发电机" },
    shortDescription: {
      en: "Open-frame inverter generator for stable output and mobile power supply programs.",
      zh: "开架式变频发电机，适合稳定输出与移动供电采购。",
    },
    images: ["/assets/catalog/products/inverter-generator-series.jpg"],
    fuelType: "Gasoline",
    powerRange: "0-5kW",
    voltage: "230V",
    startMode: "Manual",
    applications: [
      { en: "Portable Backup", zh: "便携备用" },
      { en: "Sensitive Equipment", zh: "精密设备" },
    ],
    featured: true,
    specs: {
      ratedPower: "5.0kW",
      maxPower: "5.5kW",
      voltage: "230V",
      fuelType: "Unleaded gasoline",
      engineModel: "172F/P",
      engineType: "4-stroke OHV air-cooled",
      tankCapacity: "10L",
      oilCapacity: "0.6L",
      startMode: "Manual start",
      noiseLevel: "76dB at 7m",
      grossWeight: "30kg",
      dimensions: "508 x 408 x 488mm",
    },
  },
  {
    slug: "sbrt4000ie-inverter-generator",
    model: "SBRT4000iE",
    categorySlug: "inverter-generators",
    name: { en: "3.2kW Portable Inverter Generator", zh: "3.2kW 便携式变频发电机" },
    shortDescription: {
      en: "Compact enclosed inverter generator with portable housing for quieter site use.",
      zh: "封闭式便携变频发电机，适合低噪声移动供电场景。",
    },
    images: ["/assets/catalog/products/inverter-generator-red.jpg"],
    fuelType: "Gasoline",
    powerRange: "0-5kW",
    voltage: "230V",
    startMode: "Manual / Electric",
    applications: [
      { en: "Portable Backup", zh: "便携备用" },
      { en: "Outdoor Work", zh: "户外作业" },
    ],
    featured: true,
    needsVerification: true,
    specs: {
      ratedPower: "3.2kW",
      maxPower: "3.5kW",
      voltage: "230V",
      fuelType: "Gasoline",
      engineModel: "R210i",
      tankCapacity: "8.3L",
      startMode: "Manual / electric start",
      noiseLevel: "76dB at 7m",
      grossWeight: "76kg",
    },
  },
  {
    slug: "bp300a-welding-generator",
    model: "BP300A",
    categorySlug: "welding-generators",
    name: { en: "300A Gasoline Welding Generator", zh: "300A 汽油发电电焊机" },
    shortDescription: {
      en: "Generator-welder for field repair, construction fabrication and mobile maintenance teams.",
      zh: "适用于现场抢修、工程焊接和移动维护的发电电焊设备。",
    },
    images: ["/assets/catalog/products/welding-generator-series.jpg"],
    fuelType: "Gasoline",
    powerRange: "5-10kW",
    voltage: "AC 230V",
    startMode: "Manual",
    applications: [
      { en: "Field Welding", zh: "现场焊接" },
      { en: "Maintenance", zh: "设备维护" },
    ],
    specs: {
      ratedPower: "7.5kW",
      voltage: "AC 230V",
      fuelType: "Unleaded gasoline",
      engineModel: "172F/P",
      engineType: "4-stroke OHV air-cooled",
      tankCapacity: "10L",
      oilCapacity: "0.6L",
      startMode: "Manual start",
      noiseLevel: "76dB at 7m",
      grossWeight: "40kg",
      dimensions: "508 x 408 x 488mm",
      weldingCurrent: "300A",
    },
  },
  {
    slug: "sbrt7000-diesel-generator-set",
    model: "SBRT7000 Diesel",
    categorySlug: "diesel-generator-sets",
    name: { en: "5.0kW Open Diesel Generator Set", zh: "5.0kW 开架柴油发电机组" },
    shortDescription: {
      en: "Open diesel generator set for durable field power and distributor stock programs.",
      zh: "开架式柴油发电机组，适合耐用现场供电和经销备货。",
    },
    images: ["/assets/catalog/products/diesel-generator-open-frame.jpg"],
    fuelType: "Diesel",
    powerRange: "0-5kW",
    voltage: "230V",
    startMode: "Manual / Electric",
    applications: [
      { en: "Industrial Backup", zh: "工业备用" },
      { en: "Field Operations", zh: "户外作业" },
    ],
    featured: true,
    specs: {
      ratedPower: "5.0kW",
      maxPower: "5.5kW",
      voltage: "230V",
      fuelType: "Diesel",
      engineModel: "188F",
      engineType: "Single-cylinder 4-stroke direct injection air-cooled",
      tankCapacity: "16L",
      oilCapacity: "1.65L",
      startMode: "Manual / electric start",
      noiseLevel: "84dB",
      grossWeight: "106kg",
      dimensions: "710 x 490 x 650mm with wheels",
      frequency: "50Hz",
    },
  },
  {
    slug: "sbrt12000-diesel-generator-set",
    model: "SBRT12000 Diesel",
    categorySlug: "diesel-generator-sets",
    name: { en: "8.5kW Open Diesel Generator Set", zh: "8.5kW 开架柴油发电机组" },
    shortDescription: {
      en: "Higher-output diesel generator set for temporary power, job sites and emergency reserve.",
      zh: "较高功率柴油发电机组，适用于临时供电、工地和应急储备。",
    },
    images: ["/assets/catalog/products/diesel-generator-product.jpg"],
    fuelType: "Diesel",
    powerRange: "5-10kW",
    voltage: "230V",
    startMode: "Electric",
    applications: [
      { en: "Industrial Backup", zh: "工业备用" },
      { en: "Emergency Procurement", zh: "应急采购" },
    ],
    specs: {
      ratedPower: "8.5kW",
      maxPower: "10.0kW",
      voltage: "230V",
      fuelType: "Diesel",
      engineModel: "198F",
      engineType: "Single-cylinder 4-stroke direct injection air-cooled",
      tankCapacity: "16L",
      oilCapacity: "1.65L",
      startMode: "Electric start",
      noiseLevel: "84dB",
      grossWeight: "130kg",
      dimensions: "710 x 490 x 650mm with wheels",
      frequency: "50Hz",
    },
  },
  {
    slug: "silent-8kw-diesel-generator",
    model: "8kW Silent Diesel",
    categorySlug: "silent-diesel-generators",
    name: { en: "8kW Silent Diesel Generator", zh: "8kW 低噪音柴油发电机" },
    shortDescription: {
      en: "Sound-attenuated diesel generator for backup power where noise control matters.",
      zh: "静音型柴油发电机，适用于对噪声控制有要求的备用供电。",
    },
    images: ["/assets/catalog/products/silent-diesel-generator.jpg"],
    fuelType: "Diesel",
    powerRange: "5-10kW",
    voltage: "230V / 400V",
    startMode: "Electric",
    applications: [
      { en: "Commercial Backup", zh: "商业备用" },
      { en: "Municipal Service", zh: "市政服务" },
    ],
    featured: true,
    needsVerification: true,
    specs: {
      ratedPower: "7.5kW",
      maxPower: "8.0kW",
      voltage: "230V / 400V / 230V+400V options",
      fuelType: "Diesel",
      engineModel: "192FD",
      engineType: "Single-cylinder 4-stroke air-cooled",
      tankCapacity: "16L",
      oilCapacity: "1.65L",
      startMode: "Electric start",
      noiseLevel: "68-72dB",
      grossWeight: "211kg",
      dimensions: "950 x 560 x 760mm",
    },
  },
  {
    slug: "sbrt30-gasoline-water-pump",
    model: "SBRT30",
    categorySlug: "water-pumps",
    name: { en: "3-inch Gasoline Water Pump", zh: "3寸汽油动力水泵" },
    shortDescription: {
      en: "Self-priming gasoline pump for drainage, irrigation and emergency water transfer.",
      zh: "自吸式汽油水泵，适用于排水、灌溉和应急转运水。",
    },
    images: ["/assets/catalog/products/water-pump-gasoline.jpg"],
    fuelType: "Gasoline",
    powerRange: "0-5kW",
    voltage: "N/A",
    startMode: "Manual",
    applications: [
      { en: "Water Pumping", zh: "抽排水" },
      { en: "Flood Control", zh: "防汛抢险" },
    ],
    featured: true,
    needsVerification: true,
    specs: {
      fuelType: "Gasoline",
      engineModel: "170F",
      engineType: "Single-cylinder 4-stroke air-cooled",
      startMode: "Manual start",
      noiseLevel: "Catalog value to verify",
      grossWeight: "Catalog value to verify",
      outletDiameter: "80mm / 3 inch",
      head: "30m total head; 8m suction head",
      flow: "60m3/h",
    },
  },
  {
    slug: "diesel-4-inch-water-pump",
    model: "Diesel 4-inch Pump",
    categorySlug: "water-pumps",
    name: { en: "4-inch Diesel Water Pump", zh: "4寸柴油动力水泵" },
    shortDescription: {
      en: "Diesel powered pump for higher-flow water transfer and field drainage.",
      zh: "柴油动力水泵，适合较大流量转运水和现场排水作业。",
    },
    images: ["/assets/catalog/products/water-pump-diesel.jpg"],
    fuelType: "Diesel",
    powerRange: "0-5kW",
    voltage: "N/A",
    startMode: "Electric",
    applications: [
      { en: "Water Pumping", zh: "抽排水" },
      { en: "Agriculture", zh: "农业灌溉" },
    ],
    needsVerification: true,
    specs: {
      fuelType: "Diesel",
      engineModel: "186F",
      engineType: "Single-cylinder 4-stroke air-cooled",
      tankCapacity: "5.5L",
      oilCapacity: "1.65L",
      startMode: "Electric start",
      noiseLevel: "74dB at 7m",
      grossWeight: "73kg",
      dimensions: "660 x 485 x 625mm",
      outletDiameter: "100mm / 4 inch",
      head: "31m total head; 8m suction head",
      flow: "96m3/h",
    },
  },
  {
    slug: "sbrt-dt7000-mobile-lighting-tower",
    model: "SBRT-DT7000",
    categorySlug: "mobile-lighting-towers",
    name: { en: "Mobile Lighting Tower Generator", zh: "移动照明灯塔发电机" },
    shortDescription: {
      en: "Portable lighting tower set for emergency response, road work and night construction.",
      zh: "移动照明灯塔机组，适用于应急抢险、道路作业和夜间施工。",
    },
    images: ["/assets/catalog/products/lighting-tower-mobile.jpg", "/assets/catalog/products/emergency-lighting-tower.jpg"],
    fuelType: "Gasoline",
    powerRange: "0-5kW",
    voltage: "220V",
    startMode: "Manual / Electric",
    applications: [
      { en: "Mobile Lighting", zh: "移动照明" },
      { en: "Emergency Supply", zh: "应急保障" },
    ],
    needsVerification: true,
    specs: {
      ratedPower: "5.0kW output",
      voltage: "220V",
      fuelType: "Gasoline",
      engineModel: "188F",
      tankCapacity: "25L",
      frequency: "50Hz",
      lampPower: "4 x 1000W",
      liftingHeight: "1.8m minimum; 4.5m maximum",
      grossWeight: "79kg generator set; 10kg lamp disc",
    },
  },
  {
    slug: "sbrt15000-base-station-generator",
    model: "SBRT15000",
    categorySlug: "base-station-maintenance-generators",
    name: { en: "Base Station Maintenance Generator", zh: "基站代维发电机组" },
    shortDescription: {
      en: "Mobile power unit for telecom maintenance contractors and emergency communication backup.",
      zh: "面向通信基站代维承包商和应急通信保障的移动供电机组。",
    },
    images: ["/assets/catalog/products/base-station-generator.jpg"],
    fuelType: "Gasoline",
    powerRange: "10-20kW",
    voltage: "400V / 230V",
    startMode: "Electric",
    applications: [
      { en: "Telecom Base Station Maintenance", zh: "通信基站代维" },
      { en: "Temporary Power", zh: "临时供电" },
    ],
    needsVerification: true,
    specs: {
      ratedPower: "12.0kW",
      maxPower: "13.0kW",
      voltage: "400V / 230V",
      fuelType: "Unleaded gasoline",
      engineModel: "R740",
      engineType: "Twin-cylinder 4-stroke air-cooled",
      startMode: "Electric start",
      noiseLevel: "Catalog value to verify",
    },
  },
  {
    slug: "emergency-generator-sbrt8600",
    model: "SBRT8600 Emergency",
    categorySlug: "emergency-power-equipment",
    name: { en: "Emergency Gasoline Generator", zh: "应急物资汽油发电机组" },
    shortDescription: {
      en: "Emergency reserve generator for rapid deployment and government procurement programs.",
      zh: "用于快速部署和政企应急采购的储备型汽油发电机组。",
    },
    images: ["/assets/catalog/products/emergency-generator.jpg"],
    fuelType: "Gasoline",
    powerRange: "5-10kW",
    voltage: "230V / 400V",
    startMode: "Manual / Electric",
    applications: [
      { en: "Emergency Supply", zh: "应急保障" },
      { en: "Disaster Relief", zh: "救灾抢险" },
    ],
    needsVerification: true,
    specs: {
      ratedPower: "6.5kW",
      maxPower: "7.0kW",
      voltage: "230V / 400V",
      fuelType: "Unleaded gasoline",
      engineModel: "190FD",
      tankCapacity: "25L",
      oilCapacity: "1.1L",
      startMode: "Manual / electric start",
      grossWeight: "94kg",
      dimensions: "700 x 526 x 580mm",
    },
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((product) => product.categorySlug === categorySlug);
}
