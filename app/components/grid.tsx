import {
  Package,
  Archive,
  Codesandbox,
  Truck,
  ShieldCheck,
  WandSparkles,
  CircleCheckBig,
  HandCoins,
  Factory,
} from "lucide-react";
export default function FeaturesGrid() {
  return (
    <section className="w-full flex items-center justify-center bg-transparent p-8">
      <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center justify-center bg-transparent p-2 md:p-6 border border-amber-600 rounded-xl shadow-md hover:shadow-2xl"
          >
            <div className="flex h-1/2 items-center justify-center">
              {feature.image}
            </div>
            <div className="flex h-1/2 items-center justify-center">
              <p className="text-sm font-montesserat-bold text-center text-[#0A1E3C]">
                {feature.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const features = [
  {
    image: <ShieldCheck strokeWidth={1} size={40} color="#0A1E3C" />,
    label: "HIGH QUALITY MATERIAL",
  },
  {
    image: <WandSparkles strokeWidth={1} size={40} color="#0A1E3C" />,
    label: "CUSTOM DESIGN",
  },
  {
    image: <CircleCheckBig strokeWidth={1} size={40} color="#0A1E3C" />,
    label: "ISPM-15 GLOBAL STANDARD",
  },
  {
    image: <Truck strokeWidth={1} size={40} color="#0A1E3C" />,
    label: "EFFICIENT DELIVERY",
  },
  {
    image: <HandCoins strokeWidth={1} size={40} color="#0A1E3C" />,
    label: "COST EFFECTIVE SOLUTIONS",
  },
  {
    image: <Factory strokeWidth={1} size={40} color="#0A1E3C" />,
    label: "ADVANCED MANUFACTURING & TECHNOLOGY",
  },
];
