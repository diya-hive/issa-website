import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const images = [
  { url: "/Landing1.jpeg", alt: "alt1" },
  { url: "/Landing2.jpg", alt: "alt2" },
  { url: "/Landing3.jpg", alt: "alt3" },
  { url: "/Landing1.jpeg", alt: "alt4" },
  { url: "/Landing2.jpg", alt: "alt5" },
  { url: "/Landing3.jpg", alt: "alt6" },
];

const ProductCarousel = () => {
  return (
    <Carousel
      partialVisbile={true}
      responsive={responsive}
      swipeable={true}
      infinite={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass="carousel-container"
      itemClass="px-2"
      showDots={false}
      arrows={true}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image.url}
            alt={image.alt}
            className="w-72 md:w-96 h-72 md:h-96 rounded-lg"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
