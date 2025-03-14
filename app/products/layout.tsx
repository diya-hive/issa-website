import { Metadata } from "next";
import Products from "./page";
import { generateMeta } from "@/lib/generateMeta";

export const metadata: Metadata = await generateMeta({
  title: "Products | Issa Wood Industries",
  description:
    "Browse the Issa Wood Industries Gallery to explore our high-quality, durable wooden crates, pallets, and custom packaging solutions. See the craftsmanship and attention to detail that goes into every product, designed for secure and reliable packaging.",
});
export default Products;
