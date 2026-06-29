import type { Product } from "@/data/products";

const labels: Record<keyof Product["specs"], string> = {
  ratedPower: "Rated Power",
  maxPower: "Max Power",
  voltage: "Voltage",
  fuelType: "Fuel Type",
  engineModel: "Engine Model",
  engineType: "Engine Type",
  tankCapacity: "Tank Capacity",
  oilCapacity: "Oil Capacity",
  startMode: "Start Mode",
  noiseLevel: "Noise Level",
  grossWeight: "Gross Weight",
  dimensions: "Dimensions",
  frequency: "Frequency",
  flow: "Flow",
  head: "Head",
  outletDiameter: "Outlet Diameter",
  weldingCurrent: "Welding Current",
  lampPower: "Lamp Power",
  liftingHeight: "Lifting Height",
};

export function SpecTable({ product }: { product: Product }) {
  const rows = Object.entries(product.specs).filter(([, value]) => Boolean(value)) as [keyof Product["specs"], string][];

  return (
    <div className="overflow-x-auto border border-zinc-200">
      <table className="min-w-full divide-y divide-zinc-200 text-sm">
        <tbody className="divide-y divide-zinc-200 bg-white">
          {rows.map(([key, value]) => (
            <tr key={key}>
              <th className="w-52 bg-zinc-50 px-4 py-3 text-left font-semibold text-zinc-700">{labels[key]}</th>
              <td className="px-4 py-3 text-zinc-900">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
