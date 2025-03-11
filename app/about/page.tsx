"use client";

import CTAOne from "../components/ctaone";
import Timeline from "../components/timeline";

export default function About() {
  return (
    <>
      <section className="bg-radial-[at_25%_25%] from-[#1A52A2] to-iblue to-75% z-0">
        <div className="flex flex-col md:flex-row z-10">
          <div className="flex flex-col gap-8 p-4 md:p-12 lg:p-20 w-screen md:w-[60%] items-center md:items-start md:justify-center text-white">
            <h1 className="font-montesserat-bold text-3xl lg:text-5xl">
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
          <div className="flex w-screen md:w-[40%] h-[30vh] md:h-screen">
            <img src="/AboutHero.png" />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col w-screen justify-center items-center font-montesserat">
          <h2 className="font-montesserat-bold text-4xl md:text-5xl text-iblue p-6 md:p-12 text-center">
            OUR JOURNEY
          </h2>
          <Timeline />
        </div>
      </section>
      <CTAOne />
    </>
  );
}
