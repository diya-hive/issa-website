import React from "react";
import Image from "next/image";
import Link from "next/link";
import CTAOne from "../components/ctaone";

const page = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-4 md:p-12">
      <h1 className="font-montesserat-bold text-iblue text-3xl md:text-5xl text-center text-pretty">
        The Issa Blog: Insights and Innovations
      </h1>
      <p className="font-montesserat text-base md:text-lg text-gray-500 text-center">
        Stay Updated on the Latest Trends, Tips, and Techniques in Woodcraft
      </p>
      <div className="flex flex-col md:flex-row gap-4 w-full h-[60vh] p-2 md:p-8">
        <div className="flex flex-row w-full md:w-1/2 border-iorange border-1 rounded-lg">
          <div className="relative w-1/2 h-full rounded overflow-hidden">
            <Image
              src="/Blog.jpg"
              alt="alt text"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2 p-2 md:p-4 justify-between">
            <p className="font-montesserat-bold text-base md:text-2xl text-pretty">
              ISPM 15 and its Importance in Export Packing
            </p>
            <p className="font-montesserat text-gray-600 text-xs md:text-sm line-clamp-6">
              In the global trade industry, ensuring the safe and efficient
              transportation of goods is a top priority. One crucial regulation
              that plays a significant role in international shipping and export
              packing is ISPM 15 (International Standards for Phytosanitary
              Measures No. 15). This regulation addresses the risk of pests and
              diseases being spread through wooden packaging materials used in
              international trade.
            </p>
            <Link
              href="/blog/ispm-15"
              className="text-iblue font-montesserat-bold text-xs md:text-sm hover:underline self-end"
            >
              Read More
            </Link>
          </div>
        </div>
        <div className="flex flex-row w-full md:w-1/2 border-iorange border-1 rounded-lg">
          <div className="relative w-1/2 h-full rounded overflow-hidden">
            <Image
              src="/Blog2.jpg"
              alt="alt text"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2 p-2 md:p-4 justify-between">
            <p className="font-montesserat-bold text-base md:text-2xl text-pretty">
              Wooden Packaging in Aerospace and Defense Industry
            </p>
            <p className="font-montesserat text-gray-600 text-xs md:text-sm line-clamp-5">
              The aerospace and defense industry requires specialized packaging
              solutions to transport high-value, sensitive, and often oversized
              components. Wooden packaging plays a crucial role in ensuring the
              safe and secure shipment of aircraft parts, military equipment,
              and precision instruments. Given the critical nature of these
              shipments, wooden packaging in this sector must comply with strict
              industry standards and regulations.
            </p>
            <Link
              href="/blog/aerospace-defence-packaging"
              className="text-iblue font-montesserat-bold text-xs md:text-sm hover:underline self-end"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="h-full">
        <h2 className="text-center font-montesserat-bold text-3xl p-6 text-iblue">
          OTHER ARTICLES
        </h2>
        <div className="flex flex-col gap-2 w-full md:w-4xl border-b-1 border-gray-300 p-4">
          <div className="flex flex-col justify-center md:justify-between h-full gap-2">
            <h1 className="font-montesserat-bold text-base md:text-xl">
              Sustainability in the Wooden Packaging Industry
            </h1>
            <p className="text-xs text-gray-400 font-montesserat">
              17th March, 2025
            </p>
            <p className="font-montesserat text-xs md:text-sm text-gray-500 line-clamp-3 md:line-clamp-4">
              As businesses across industries move toward environmentally
              friendly practices, the wooden packaging industry is playing a
              significant role in promoting sustainability. As businesses across
              industries move toward environmentally friendly practices, the
              wooden packaging industry is playing a significant role in
              promoting sustainability. Wooden packaging, including pallets,
              crates, and boxes, is widely used for transportation and storage
              due to its durability, recyclability, and natural
              biodegradability.
            </p>
            <Link
              href="/blog/sustainability-in-packaging"
              className="text-iblue font-montesserat-bold text-sm hover:underline self-end"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
      <CTAOne />
    </div>
  );
};

export default page;
