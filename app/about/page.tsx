import Image from "next/image";
import CTAOne from "../components/ctaone";
import Timeline from "../components/timeline";

export default function About() {
  return (
    <>
      <section className="bg-radial-[at_25%_25%] from-[#1A52A2] to-iblue to-75% z-0">
        <div className="flex flex-col md:flex-row z-10">
          <div className="flex flex-col gap-8 w-full md:w-[60%] items-center md:justify-center text-white p-8 md:p-0">
            <h1 className="font-montesserat-bold text-4xl lg:text-5xl">
              OUR VISION
            </h1>
            <p className="max-w-xl text-base lg:text-lg font-montesserat text-center md:text-left">
              To be the most trusted and innovative provider of high-quality,
              sustainable packaging solutions, delivering excellence through
              precision, reliability, and customer-focused service. <br />
              <br /> At Issa Wood Industries, we envision a future where
              packaging not only protects products but also preserves the planet
              - through cutting-edge technology, responsible sourcing, and a
              commitment to global standards.
            </p>
          </div>
          <div className="flex items-center w-full md:w-[40%] h-[10vh] md:h-screen">
            <img
              src="/Products/Pallet/General/Pallet_3.jpg"
              className="object-cover w-full h-full opacity-80"
            />
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
      <section className="flex flex-col gap-8 p-8 md:p-16 pb-0">
        <p className="font-montesserat-bold text-4xl text-iblue text-center">
          ISPM-15 CERTIFIED FHAT
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3">
            <p className="font-montesserat text-base text-center md:text-left">
              Our manufacturing facility features an in-house ISPM-15 Certified
              FHAT (Forced Hot Air Treatment) plant, ensuring compliance with
              International Plant Protection Convention (IPPC) standards. This
              system uses controlled hot air circulation to eliminate pests,
              larvae, and fungi, raising the wood’s core temperature to 56°C for
              at least 30 minutes, as required by ISPM-15 regulations. Each
              treated unit is stamped and certified for seamless global export.
              <br /> <br />
              Unlike chemical fumigation, our FHAT process is eco-friendly and
              non-toxic, aligning with our commitment to sustainability and
              responsible sourcing. With this advanced in-house treatment, we
              guarantee high-quality, pest-free, and globally compliant wood
              packaging for secure international shipping.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <img src="/Certificate.jpg" className="object-contain" />
          </div>
        </div>
      </section>
      <CTAOne />
    </>
  );
}
