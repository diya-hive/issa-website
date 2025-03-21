"use client";
import FeaturesGrid from "./components/grid";
import CountUp from "react-countup";
import ProductCarousel from "./components/carousel";
import Testimonials, { Logos } from "./components/testimonials";
import CTAOne from "./components/ctaone";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <section
        className="flex w-screen h-screen bg-[url('/HeroNew.jpeg')] bg-bottom md:bg-center bg-cover p-4"
        role="banner"
      >
        <div className="flex flex-col w-full h-full items-center mt-8 md:mt-8 md:ml-16 gap-4 p-4">
          <h1 className="md:max-w-xl lg:max-w-5xl text-2xl md:text-3xl lg:text-5xl font-montesserat-bold text-white text-center z-10">
            Craftsmanship You Can Trust, Excellence You Can See
          </h1>
          <p className="font-montesserat text-white text-center text-base md:text-xl lg:text-2xl max md:max-w-3xl z-10">
            Issa Wood Industries - 35 Years of Unmatched Experience & Precision.
          </p>
          <div className="w-full flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-iorange rounded text-white font-montesserat-bold w-full md:w-64 text-center py-2 hover:opacity-90 duration-300"
            >
              Explore Our Products
            </Link>
            <Link
              href="/contact"
              className="bg-white/85 border-white border-1 rounded text-iblue font-montesserat-bold w-full md:w-64 text-center py-2  hover:bg-white/70 hover:text-iblue duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col bg-white p-12 items-center">
        <div className="flex flex-col w-full md:max-w-7xl lg:flex-row items-center gap-4 md:gap-16 h-2/3 pb-12 md:pb-20">
          <div className="w-full lg:w-1/2">
            <FeaturesGrid />
          </div>
          <div className="w-full lg:w-1/2">
            <p className="font-montesserat text-base md:text-xl text-iblue text-center md:text-left text-pretty">
              Issa Wood Industries specializes in manufacturing high-quality,
              durable, and export-compliant wooden crates, pallets, and custom
              packaging to meet the needs of various industries. Our team
              leverages the latest technology and industry best practices to
              ensure strong and secure packaging. We prioritize quality, timely
              delivery, and customer satisfaction. <br /> <br /> Your products
              deserve the best- trust Issa Wood Industries for superior
              packaging.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row max-w-7xl h-1/3 gap-6 items-center justify-center text-iblue p-4 md:p-8">
          <div className="flex flex-col items-center font-montesserat-bold text-6xl lg:text-7xl">
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
          <div className="flex flex-col w-full items-center font-montesserat-bold text-6xl lg:text-7xl">
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
            <p className="text-iblue font-montesserat text-center text-xs md:text-xl">
              Annual Production <br />
              Capacity
            </p>
          </div>
          <div className="flex flex-col items-center font-montesserat-bold text-6xl lg:text-7xl">
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
            <p className="text-iblue font-montesserat text-xs text-center md:text-xl">
              Industries Served
            </p>
          </div>
        </div>
      </section>
      <section className="w-screen bg-iblue flex flex-col gap-8 p-4 md:p-12 pt-20 pb-20">
        <h2 className="font-montesserat-bold text-white text-4xl md:text-5xl text-center">
          OUR PRODUCTS
        </h2>
        <ProductCarousel />
        <Link
          href="/products"
          className="border-1 w-64 py-2 rounded self-center text-white font-montesserat text-center hover:bg-gray-500 duration-300"
        >
          Explore
        </Link>
      </section>
      <section className="w-screen flex flex-col bg-white bg-[url('/BgIssa.jpg')] bg-contain bg-no-repeat bg-right">
        <h2 className="font-montesserat-bold text-4xl md:text-5xl text-iblue p-4 md:p-12 pt-20 text-center">
          HEAR FROM OUR CLIENTS
        </h2>
        <Testimonials />
        <Logos />
      </section>
      <CTAOne />
    </>
  );
}
