import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  { url: "/Products/Boxes/PlywoodBoxCopy.jpg", alt: "Plywood Box" },
  {
    url: "/Products/Boxes/PlywoodBoxCustomised3.jpg",
    alt: "Plywood Box Customised",
  },
  { url: "/Products/Crates/PlywoodCrate.jpg", alt: "Plywood Crate" },
  {
    url: "/Products/Boxes/PlywoodAndPinewoodBox.jpg",
    alt: "Plywood and Pinewood Box",
  },
  { url: "/Products/Pallet/General/Pallet_2.jpg", alt: "Pallet" },
];

const ProductCarousel = () => {
  return (
    <div className="px-4 md:px-12 pb-4">
      <Carousel
        partialVisible={true}
        responsive={responsive}
        swipeable={true}
        infinite={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        transitionDuration={500}
        showDots={false}
        arrows={true}
      >
        {images.map((image, index) => (
          <div key={index} className="px-2 md:px-4">
            <img
              src={image.url}
              alt={image.alt}
              className="w-96 h-96 rounded-lg"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
