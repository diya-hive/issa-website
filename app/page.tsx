"use client";
import FeaturesGrid from "./components/grid";
import CountUp from "react-countup";
import ProductCarousel from "./components/carousel";
import Testimonials, { Logos } from "./components/testimonials";
import CTAOne from "./components/ctaone";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="flex w-screen h-screen bg-[url('/LandingHero.png')] bg-cover">
        <div className="flex flex-col w-full h-full items-start mt-24 ml-6 md:mt-24 md:ml-16 gap-4">
          <h1 className="max-w-xl md:max-w-xl lg:max-w-2xl text-2xl md:text-3xl lg:text-5xl font-bold font-montesserat-bold text-iblue z-10">
            Craftsmanship You Can Trust, Excellence You Can See
          </h1>
          <p className="font-montesserat text-iblue text-base md:text-xl lg:text-2xl max md:max-w-xl z-10">
            Issa Wood Industries - 35 Years of Unmatched Experience & Precision.
          </p>
        </div>
      </section>
      <section className="flex flex-col w-screen lg:h-screen bg-white">
        <div className="flex flex-col lg:flex-row items-center md:gap-4 h-2/3 w-full">
          <FeaturesGrid />
          <p className="max-w-screen md:max-w-xl font-montesserat text-base md:text-xl text-iblue p-4 md:p-2 text-center md:text-left">
            Issa Wood Industries specializes in manufacturing high-quality,
            durable, and export-compliant wooden crates, pallets, and custom
            packaging to meet the needs of various industries. Our team
            leverages the latest technology and industry best practices to
            ensure strong and secure packaging. We prioritize quality, timely
            delivery, and customer satisfaction. <br /> <br /> Your products
            deserve the best—trust Issa Wood Industries for superior packaging.
          </p>
        </div>
        <div className="flex flex-row w-full h-1/3 gap-6 md:gap-16 items-center justify-center text-iblue p-4 md:p-8">
          <div className="flex flex-col items-center font-montesserat-bold text-3xl md:text-5xl lg:text-7xl">
            <CountUp
              start={0}
              end={35}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              suffix="+"
            >
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
            <p className="text-iblue font-montesserat text-center text-xs md:text-xl">
              Years Of Experience
            </p>
          </div>
          <div className="flex flex-col items-center font-montesserat-bold text-3xl md:text-5xl lg:text-7xl">
            <CountUp
              start={0}
              end={36000}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              suffix="+"
            >
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
            <p className="text-iblue font-montesserat text-xs md:text-xl">
              Annual Production Capacity
            </p>
          </div>
          <div className="flex flex-col items-center font-montesserat-bold text-3xl  md:text-5xl lg:text-7xl">
            <CountUp
              start={0}
              end={16}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              suffix="+"
            >
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
            <p className="text-iblue font-montesserat text-xs md:text-xl">
              Industries Served
            </p>
          </div>
        </div>
      </section>
      <section className="w-screen bg-iblue flex flex-col">
        <p className="font-montesserat-bold text-white text-4xl p-12">
          OUR PRODUCTS
        </p>
        <ProductCarousel />
      </section>
      <section className="w-screen flex flex-col bg-white bg-[url('/BgIssa.jpg')] bg-contain bg-no-repeat bg-right">
        <p className="font-montesserat-bold text-4xl text-iblue p-12">
          WHAT OUR CLIENTS SAY
        </p>
        <Testimonials />
        <Logos />
      </section>
      <CTAOne />
    </div>
  );
}
