import React from "react";
import Link from "next/link";

const CTAOne = () => {
  return (
    <section className="flex flex-col gap-4 items-center p-12 md:p-24">
      <p className="font-montesserat-bold text-iblue text-4xl text-center">
        HAVE A REQUIREMENT?
      </p>
      <p className=" md:max-w-2xl font-montesserat text-iblue text-base md:text-2xl text-center">
        Looking for reliable wooden packaging solutions? Let’s build something
        great together!
      </p>
      <Link
        href="/contact"
        className="bg-amber-600 px-4 md:px-8 py-1 md:py-2 rounded text-white font-montesserat-bold text-base hover:opacity-80 duration-300"
      >
        Get In Touch!
      </Link>
    </section>
  );
};

export default CTAOne;
