import type { Metadata } from "next";
import { Robots } from "next/dist/lib/metadata/types/metadata-types";

import { mergeOpenGraph } from "./mergeOpenGraph";

export const generateMeta = async ({
  title,
  description,
  ogImageLink,
  robots,
}: {
  title?: string;
  description?: string;
  ogImageLink?: string;
  robots?: Robots;
}): Promise<Metadata> => {
  const ogImage = ogImageLink
    ? `${process.env.NEXT_PUBLIC_URL}/${ogImageLink}`
    : undefined;

  return {
    title: title,
    description: description,
    robots: robots,
    openGraph: mergeOpenGraph({
      title: title,
      description: description,
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
    }),
  };
};
