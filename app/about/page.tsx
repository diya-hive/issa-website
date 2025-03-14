import Image from "next/image";
import CTAOne from "../components/ctaone";
import Timeline from "../components/timeline";
import { Metadata } from "next";
import { generateMeta } from "@/lib/generateMeta";

export const metadata: Metadata = await generateMeta({
  title: "About Us | Issa Wood Industries",
  description:
    "Learn more about Issa Wood Industries, a leader in crafting durable wooden crates, pallets, and custom packaging solutions. Discover our commitment to quality, innovation, and customer satisfaction, and understand the processes dedicated to providing reliable and export-compliant packaging.",
  keywords:
    "wooden crates, pallets, custom packaging, ISPM-15 certified, sustainable packaging solutions, eco-friendly packaging",
});

export default function About() {
  return (
    <>
      <section className="w-full h-[70vh] md:h-screen bg-[url('/VisionImage.jpg')] bg-cover z-0">
        <div className="w-full h-full items-end justify-center text-white flex flex-col bg-iblue/65 md:bg-transparent md:bg-linear-to-r md:from-transparent md:via-iblue/75 md:to-iblue">
          <div className="p-8 gap-2">
            <h1 className="font-montesserat-bold text-4xl lg:text-5xl pb-4 text-center md:text-left">
              OUR VISION
            </h1>
            <p className="max-w-xl text-base lg:text-lg font-montesserat text-center md:text-left text-pretty">
              To be the most trusted and innovative provider of high-quality,
              sustainable packaging solutions, delivering excellence through
              precision, reliability, and customer-focused service. <br />
              <br />
              At Issa Wood Industries, we envision a future where packaging not
              only protects products but also preserves the planet through
              cutting-edge technology, responsible sourcing, and a commitment to
              global standards.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col w-screen justify-center items-center font-montesserat">
          <h2 className="font-montesserat-bold text-4xl md:text-5xl text-iblue p-6 md:p-12 md:pt-20 text-center">
            OUR JOURNEY
          </h2>
          <Timeline />
        </div>
      </section>

      <section className="flex flex-col gap-8 p-8 md:p-16 pb-0 items-center">
        <p className="font-montesserat-bold text-4xl text-iblue text-center">
          ISPM-15 CERTIFIED FHAT
        </p>
        <div className="w-full flex flex-col md:flex-row max-w-7xl">
          <div className="w-full md:w-2/3">
            <p className="font-montesserat text-base text-center md:text-left">
              Our manufacturing facility features an in-house ISPM-15 Certified
              FHAT (Forced Hot Air Treatment) plant, ensuring compliance with
              International Plant Protection Convention (IPPC) standards. This
              system uses controlled hot air circulation to eliminate pests,
              larvae, and fungi, raising the wood's core temperature to 56°C for
              at least 30 minutes, as required by ISPM-15 regulations. Each
              treated unit is stamped and certified for seamless global export.
              <br />
              <br />
              Unlike chemical fumigation, our FHAT process is eco-friendly and
              non-toxic, aligning with our commitment to sustainability and
              responsible sourcing. With this advanced in-house treatment, we
              guarantee high-quality, pest-free, and globally compliant wood
              packaging for secure international shipping.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <img
              src="/Certificate.jpg"
              className="object-contain"
              alt="ISPM-15 Certification"
            />
          </div>
        </div>
      </section>
      <CTAOne />
    </>
  );
}
