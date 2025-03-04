"use client";
import FeaturesGrid from "./components/grid";
import CountUp from "react-countup";
import ProductCarousel from "./components/carousel";
import Testimonials, { Logos } from "./components/testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-screen min-h-screen overflow-scroll">
        <img
          src="/LandingHero.png"
          alt="landing"
          className="object-cover absolute inset-0 w-full h-full z-0"
        />
        <h1 className="absolute max-w-2xl top-36 left-24  text-4xl font-bold font-montesserat-bold text-iblue z-10">
          Craftsmanship You Can Trust, Excellence You Can See
        </h1>
        <p className="absolute top-56 left-24 font-montesserat text-iblue text-2xl max-w-xl z-10">
          Issa Wood Industries – 35 Years of Unmatched Experience & Precision.
        </p>
      </section>
      <section className="flex flex-col w-screen h-screen bg-white">
        <div className="flex flex-row items-center gap-4 h-2/3 w-full">
          <FeaturesGrid />
          <p className="max-w-xl font-montesserat text-xl text-iblue">
            Sit maximus per tellus bibendum morbi ex convallis maximus. Sagittis
            est ultrices velit diam blandit finibus. Dapibus vivamus etiam
            pulvinar laoreet aenean eros scelerisque tempus. Sit maximus per
            tellus bibendum morbi ex convallis maximus. Sagittis est ultrices
            velit diam blandit finibus. Dapibus vivamus etiam pulvinar laoreet
            aenean eros scelerisque tempus
          </p>
        </div>
        <div className="flex flex-row w-full h-1/3 gap-16 items-center justify-center text-iblue">
          <div className="flex flex-col items-center font-montesserat-bold text-7xl">
            <CountUp
              start={0}
              end={14}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              suffix="+"
            >
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
            <p className="text-iblue font-montesserat text-xl">Lorem Ipsum</p>
          </div>
          <div className="flex flex-col items-center font-montesserat-bold text-7xl">
            <CountUp
              start={0}
              end={125}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              suffix="+"
            >
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
            <p className="text-iblue font-montesserat text-xl">Lorem Ipsum</p>
          </div>
          <div className="flex flex-col items-center font-montesserat-bold text-7xl">
            <CountUp
              start={0}
              end={36}
              duration={3}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              suffix="+"
            >
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
            <p className="text-iblue font-montesserat text-xl">Lorem Ipsum</p>
          </div>
        </div>
      </section>
      <section className="w-screen min-h-screen bg-iblue flex flex-col">
        <p className="font-montesserat-bold text-white text-4xl pt-16 pl-16 pb-4">
          OUR PRODUCTS
        </p>
        <ProductCarousel />
      </section>
      <section className="w-screen min-h-screen flex flex-col bg-white bg-[url('/BgIssa.jpg')] bg-contain bg-no-repeat bg-right">
        <p className="font-montesserat-bold text-4xl text-iblue p-12">
          WHAT OUR CLIENTS SAY
        </p>
        <Testimonials />
        <Logos />
      </section>
      <section className="w-screen max-h-3xl flex flex-row justify-evenly bg-white">
        <div className="flex flex-col gap-2 p-8">
          <p className="font-montesserat-bold text-iblue text-3xl">
            HAVE A REQUIREMENT?
          </p>
          <p className="max-w-lg font-montesserat text-iblue text-xl">
            Looking for reliable wooden packaging solutions? Let’s build
            something great together!
          </p>
        </div>
        <button>
          <Link
            href="#"
            className="bg-amber-600 px-8 py-2  text-white font-montesserat-bold"
          >
            Get In Touch!
          </Link>
        </button>
      </section>
    </div>
  );
}
