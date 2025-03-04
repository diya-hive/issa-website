"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="w-screen min-h-screen overflow-scroll bg-radial-[at_25%_25%] from-[#1A52A2] to-iblue to-75% z-0">
        <div className="flex flex-row w-full h-full z-10">
          <div className="flex flex-col gap-2 p-2 w-1/2 h-screen items-center justify-center text-white">
            <h1 className="font-montesserat-bold text-5xl">OUR VISION</h1>
            <p className="max-w-lg text-lg font-montesserat">
              Metus vivamus nostra; risus penatibus consequat quisque hendrerit
              cras. Cras accumsan suscipit fringilla pharetra proin natoque
              aptent sed neque. Finibus in odio mollis ridiculus montes litora
              litora netus. Quisque nibh et cursus, velit non urna. <br />{" "}
              <br />
              Metus vivamus nostra; risus penatibus consequat quisque hendrerit
              cras. Cras accumsan suscipit fringilla pharetra proin natoque
              aptent sed neque. Finibus in odio mollis ridiculus montes litora
              litora netus. Quisque nibh et cursus, velit non urna.
            </p>
          </div>
          <div className="flex w-1/2 h-screen">
            <img src="/AboutHero.png" className="pl-20 object-contain" />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col w-screen min-h-screen justify-center items-center p-12 font-montesserat">
          <h2 className="font-montesserat-bold text-4xl text-iblue">
            OUR JOURNEY
          </h2>
          <div className="flex flex-row justify-center">
            <div className="w-1/2 border-dashed border-black border-r-2">
              <p className="p-8">
                Nullam laoreet tellus ac tortor finibus mollis. Sed convallis
                feugiat dignissim. In vitae nunc faucibus, hendrerit augue ut,
                auctor augue. Sed non neque pellentesque, semper mi eget,
                pulvinar leo.
              </p>
            </div>
            <div className="w-1/2 flex flex-row items-center">
              <hr className="px-8 border-black" />
              <div className="size-8 rounded-full bg-iorange mr-8" />
              <span className="font-montesserat-bold text-2xl">1975-1989</span>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="w-1/2 flex flex-row items-center justify-end border-dashed border-r-2 border-black">
              <span className="font-montesserat-bold text-2xl">1975-1989</span>
              <div className="size-8 rounded-full bg-iorange ml-8" />
              <hr className="px-8 border-black" />
            </div>
            <div className="w-1/2">
              <p className="p-8">
                Nullam laoreet tellus ac tortor finibus mollis. Sed convallis
                feugiat dignissim. In vitae nunc faucibus, hendrerit augue ut,
                auctor augue. Sed non neque pellentesque, semper mi eget,
                pulvinar leo.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="w-1/2 border-dashed border-black border-r-2">
              <p className="p-8">
                Nullam laoreet tellus ac tortor finibus mollis. Sed convallis
                feugiat dignissim. In vitae nunc faucibus, hendrerit augue ut,
                auctor augue. Sed non neque pellentesque, semper mi eget,
                pulvinar leo.
              </p>
            </div>
            <div className="w-1/2 flex flex-row items-center">
              <hr className="px-8 border-black" />
              <div className="size-8 rounded-full bg-iorange mr-8" />
              <span className="font-montesserat-bold text-2xl">1975-1989</span>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="w-1/2 flex flex-row items-center justify-end border-dashed border-r-2 border-black">
              <span className="font-montesserat-bold text-2xl">1975-1989</span>
              <div className="size-8 rounded-full bg-iorange ml-8" />
              <hr className="px-8 border-black" />
            </div>
            <div className="w-1/2">
              <p className="p-8">
                Nullam laoreet tellus ac tortor finibus mollis. Sed convallis
                feugiat dignissim. In vitae nunc faucibus, hendrerit augue ut,
                auctor augue. Sed non neque pellentesque, semper mi eget,
                pulvinar leo.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen h-1/2">
        <div className="flex flex-row gap-4 h-full w-full">
          <div className="flex flex-col">
            <img src="/Person1.jpg" className="w-56 object-contain" />
            <p className="text-iblue font-montesserat-bold text-sm">Jane Doe</p>
            <p className="text-iblue font-montesserat text-sm">
              Marketing Head
            </p>
          </div>
          <div className="flex flex-col">
            <img src="/Person2.jpg" className="w-56 object-contain" />
            <p className="text-iblue font-montesserat-bold text-sm">Jane Doe</p>
            <p className="text-iblue font-montesserat text-sm">
              Marketing Head
            </p>
          </div>
          <div className="flex flex-col">
            <img src="/Person3.jpg" className="w-56 object-contain" />
            <p className="text-iblue font-montesserat-bold text-sm">Jane Doe</p>
            <p className="text-iblue font-montesserat text-sm">
              Marketing Head
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
