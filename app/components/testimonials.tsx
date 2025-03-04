import Marquee from "react-fast-marquee";
import React from "react";

const reviews = [
  {
    name: "Jack",
    body: "Ut sit amet nulla dui. Mauris efficitur dolor leo, eu pellentesque quam ultricies volutpat. Aliquam nisl lorem, dictum eget sapien et, commodo mattis odio. ",
  },
  {
    name: "Jill",
    body: "Ut sit amet nulla dui. Mauris efficitur dolor leo, eu pellentesque quam ultricies volutpat. Aliquam nisl lorem, dictum eget sapien et, commodo mattis odio. ",
  },
  {
    name: "John",
    body: "Ut sit amet nulla dui. Mauris efficitur dolor leo, eu pellentesque quam ultricies volutpat. Aliquam nisl lorem, dictum eget sapien et, commodo mattis odio. ",
  },
  {
    name: "Jane",
    body: "Ut sit amet nulla dui. Mauris efficitur dolor leo, eu pellentesque quam ultricies volutpat. Aliquam nisl lorem, dictum eget sapien et, commodo mattis odio. ",
  },
  {
    name: "Jenny",
    body: "Ut sit amet nulla dui. Mauris efficitur dolor leo, eu pellentesque quam ultricies volutpat. Aliquam nisl lorem, dictum eget sapien et, commodo mattis odio. ",
  },
];

const logos = [
  {
    img: "/Logo1.png",
    alt: "Logo One",
  },
  {
    img: "/Logo2.png",
    alt: "Logo Two",
  },
  {
    img: "/Logo3.png",
    alt: "Logo Three",
  },
  {
    img: "/Logo4.png",
    alt: "Logo Four",
  },
  {
    img: "/Logo1.png",
    alt: "Logo One",
  },
  {
    img: "/Logo2.png",
    alt: "Logo Two",
  },
  {
    img: "/Logo3.png",
    alt: "Logo Three",
  },
  {
    img: "/Logo4.png",
    alt: "Logo Four",
  },
];

const Testimonials = () => {
  return (
    <Marquee direction="left" speed={60} pauseOnHover={true}>
      <div className="flex flex-row gap-4 p-2">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="w-64 p-4 border rounded border-iorange bg-transparent"
          >
            <p className="text-lg font-montesserat-bold text-black">
              {review.name}
            </p>
            <p className="text-sm font-montesserat text-[#0A1E3C]">
              {review.body}
            </p>
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export const Logos = () => {
  return (
    <Marquee direction="right" speed={60} pauseOnHover={true} className="pt-8">
      <div className="flex flex-row gap-4 p-2 bg-gray-200 opacity-80">
        {logos.map((logo, index) => (
          <div key={index} className="w-32 p-2 border rounded bg-transparent">
            <img className="object-contain" src={logo.img} />
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default Testimonials;
