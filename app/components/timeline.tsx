import React, { Fragment } from "react";

const Timeline = () => {
  return (
    <div>
      <div className="hidden md:block md:max-w-2xl lg:max-w-5xl">
        <div className="flex flex-row justify-center">
          <div className="w-1/2 border-dashed border-black border-r-2">
            <p className="p-8">
              <b className="font-montesserat-bold">Laying The Foundation</b>
              <br />
              Our Director, Mr. Inasu Joseph, began his career at Raja & Co., a
              leading wooden packaging manufacturer in Thrissur, Kerala, where
              he played a key role in expanding the clientele, securing major
              clients like Asian Bearing & Mill Stores, Karnataka Ball Bearing
              Corporation Ltd, Premier Mills, Fuji Umbrella, and Futura
              Polymers.
            </p>
          </div>
          <div className="w-1/2 flex flex-row items-center">
            <hr className="px-8 border-black" />
            <div className="size-8 rounded-full bg-iorange mr-8" />
            <span className="font-montesserat-bold text-2xl">1988 - 1998</span>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="w-1/2 flex flex-row items-center justify-end border-dashed border-r-2 border-black">
            <span className="font-montesserat-bold text-2xl">1998 - 2006</span>
            <div className="size-8 rounded-full bg-iorange ml-8" />
            <hr className="px-8 border-1 border-black" />
          </div>
          <div className="w-1/2">
            <p className="p-8">
              <b className="font-montesserat-bold">Expanding Market Presence</b>
              <br />
              Recognizing his expertise, Mr. Inasu Joseph became a partner at
              Raja & Co., leading the establishment of a Bangalore unit. Under
              his guidance, the company dominated the beverage packaging
              industry, serving as the exclusive supplier to Coca-Cola, PepsiCo,
              Bacardi, and Nestlé.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="w-1/2 border-dashed border-black border-r-2">
            <p className="p-8">
              <b className="font-montesserat-bold">
                Diversification & Specialization
              </b>
              <br />
              Mr. Joseph founded Raja Pallet in Bangalore to expand into
              precision packaging. The company quickly earned a reputation for
              quality, supplying industry leaders like Tata Advanced Systems,
              Proceal, Kionix, and Millipore Sigma.
            </p>
          </div>
          <div className="w-1/2 flex flex-row items-center">
            <hr className="px-8 border-black" />
            <div className="size-8 rounded-full bg-iorange mr-8" />
            <span className="font-montesserat-bold text-2xl">2006 - 2010</span>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="w-1/2 flex flex-row items-center justify-end border-dashed border-r-2 border-black">
            <span className="font-montesserat-bold text-2xl">2010 - 2024</span>
            <div className="size-8 rounded-full bg-iorange ml-8" />
            <hr className="px-8 border-black" />
          </div>
          <div className="w-1/2">
            <p className="p-8">
              <b className="font-montesserat-bold">
                Establishing A Strong Legacy
              </b>
              <br />
              In 2010, Mr. Joseph launched Raja Spools in Jigani, Bangalore,
              with Lapp India as its primary client. Over time, the company grew
              significantly, serving 16+ niche industries and building a strong
              reputation for excellence and reliability.
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="w-1/2 border-dashed border-black border-r-2">
            <p className="p-8">
              <b className="font-montesserat-bold">
                Uniting Under Issa Wood Industries
              </b>
              <br />
              To unify decades of expertise, all units merged into a single
              brand called Issa Wood Industries. Today, we lead the industry
              with innovative wooden packaging, superior quality, and a
              customer-first approach.
            </p>
          </div>
          <div className="w-1/2 flex flex-row items-center">
            <hr className="px-8 border-black" />
            <div className="size-8 rounded-full bg-iorange mr-8" />
            <span className="font-montesserat-bold text-2xl">
              2024 - Present
            </span>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="w-screen flex flex-col gap-6 items-center p-4">
          <div className="flex flex-col items-center justify-center border-b-2 border-dashed">
            <div className="flex flex-row items-center gap-4">
              <div className="rounded-full size-2 bg-iorange"></div>
              <b className="font-montesserat-bold text-xl">1988 - 1998</b>
              <div className="rounded-full size-2 bg-iorange"></div>
            </div>
            <b className="font-montesserat text-md text-center">
              Laying The Foundation
            </b>
            <hr className="border-iorange w-full" />
            <p className="text-center text-sm p-2">
              Our Director, Mr. Inasu Joseph, began his career at Raja & Co., a
              leading wooden packaging manufacturer in Thrissur, Kerala, where
              he played a key role in expanding the clientele, securing major
              clients like Asian Bearing & Mill Stores, Karnataka Ball Bearing
              Corporation Ltd, Premier Mills, Fuji Umbrella, and Futura
              Polymers.
            </p>
          </div>
          <div className="flex flex-col items-center border-b-2 border-dashed">
            <div className="flex flex-row items-center gap-4">
              <div className="rounded-full size-2 bg-iorange"></div>
              <b className="font-montesserat-bold text-xl">1998 - 2006</b>
              <div className="rounded-full size-2 bg-iorange"></div>
            </div>
            <b className="font-montesserat text-md text-center">
              Expanding Market Presence
            </b>
            <hr className="border-iorange w-full" />
            <p className="text-center text-sm p-2">
              Recognizing his expertise, Mr. Inasu Joseph became a partner at
              Raja & Co., leading the establishment of a Bangalore unit. Under
              his guidance, the company dominated the beverage packaging
              industry, serving as the exclusive supplier to Coca-Cola, PepsiCo,
              Bacardi, and Nestlé.
            </p>
          </div>
          <div className="flex flex-col items-center border-b-2 border-dashed">
            <div className="flex flex-row items-center gap-4">
              <div className="rounded-full size-2 bg-iorange"></div>
              <b className="font-montesserat-bold text-xl">2006 - 2010</b>
              <div className="rounded-full size-2 bg-iorange"></div>
            </div>
            <b className="font-montesserat text-md text-center">
              Diversification And Specialization
            </b>
            <hr className="border-iorange w-full" />
            <p className="text-center text-sm p-2">
              Mr. Joseph founded Raja Pallet in Bangalore to expand into
              precision packaging. The company quickly earned a reputation for
              quality, supplying industry leaders like Tata Advanced Systems,
              Proceal, Kionix, and Millipore Sigma.
            </p>
          </div>
          <div className="flex flex-col items-center border-b-2 border-dashed">
            <div className="flex flex-row items-center gap-4">
              <div className="rounded-full size-2 bg-iorange"></div>
              <b className="font-montesserat-bold text-xl">2010 - 2024</b>
              <div className="rounded-full size-2 bg-iorange"></div>
            </div>
            <b className="font-montesserat text-md text-center">
              Establishing A Strong Legacy
            </b>
            <hr className="border-iorange w-full" />
            <p className="text-center text-sm p-2">
              In 2010, Mr. Joseph launched Raja Spools in Jigani, Bangalore,
              with Lapp India as its primary client. Over time, the company grew
              significantly, serving 16+ niche industries and building a strong
              reputation for excellence and reliability
            </p>
          </div>
          <div className="flex flex-col items-center border-b-2 border-dashed">
            <div className="flex flex-row items-center gap-4">
              <div className="rounded-full size-2 bg-iorange"></div>
              <b className="font-montesserat-bold text-xl">2024 - Present</b>
              <div className="rounded-full size-2 bg-iorange"></div>
            </div>
            <b className="font-montesserat text-md text-center">
              Uniting Under Issa Wood Industries
            </b>
            <hr className="border-iorange w-full" />
            <p className="text-center text-sm p-2">
              To unify decades of expertise, all units merged into a single
              brand called Issa Wood Industries. Today, we lead the industry
              with innovative wooden packaging, superior quality, and a
              customer-first approach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
