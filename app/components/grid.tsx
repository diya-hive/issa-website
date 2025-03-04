import { Package, Archive, Codesandbox } from "lucide-react";
export default function FeaturesGrid() {
  return (
    <section className="max-w-2xl flex items-center justify-center bg-transparent p-16">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 items-center bg-transparent p-6 border border-amber-600 rounded-xl shadow-md hover:shadow-2xl"
          >
            {feature.image}
            <p className="text-lg font-montesserat-bold text-center text-[#0A1E3C]">
              {feature.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const features = [
  {
    image: <Archive strokeWidth={1} size={40} color="#0A1E3C" />,
    label: "LOREM IPSUM",
  },
  {
    image: <Package strokeWidth={1} size={40} color="#0A1E3C" />,
    label: "LOREM IPSUM",
  },
  {
    image: <Codesandbox strokeWidth={1} size={40} color="#0A1E3C" />,
    label: "LOREM IPSUM",
  },
  {
    image: <Archive strokeWidth={1} size={40} color="#0A1E3C" />,
    label: "LOREM IPSUM",
  },
  {
    image: <Archive strokeWidth={1} size={40} color="#0A1E3C" />,
    label: "LOREM IPSUM",
  },
  {
    image: <Archive strokeWidth={1} size={40} color="#0A1E3C" />,
    label: "LOREM IPSUM",
  },
];
