"use client";
import React from "react";
import Gallery from "../components/gallery";
import CTAOne from "../components/ctaone";

export default function Products() {
  return (
    <div className="flex flex-col gap-12 p-12">
      <h1 className="font-montesserat-bold text-4xl md:text-5xl text-iblue text-center">
        Built to Last: Our Work in Focus
      </h1>
      <Gallery />
      <CTAOne />
    </div>
  );
}
