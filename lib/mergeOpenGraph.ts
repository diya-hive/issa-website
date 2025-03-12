import type { Metadata } from "next";

const defaultOpenGraph: Metadata["openGraph"] = {
  type: "website",
  siteName: "Issa",
  title: {
    default: `Precision Woodcraft & Spools Manufacturing | Issa Wood Industries`,
    template: `%s | Issa`,
  },
  description: `With 35 years of expertise, Issa Wood Industries (formerly Raja Spools) delivers high-quality wooden spools, bobbins, and precision woodcraft solutions. Trusted by leading industries across the country.`,
  images: [
    {
      url: `${
        process.env.NEXT_PUBLIC_URL ?? "https://www.issawoodindustries.in"
      }/og.png`,
    },
  ],
};

export const mergeOpenGraph = (
  og?: Metadata["openGraph"]
): Metadata["openGraph"] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  };
};
