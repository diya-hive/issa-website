import Marquee from "react-fast-marquee";
import React from "react";

const reviews = [
  {
    name: "Bhimashankar S Marath",
    title:
      "Assistant Manager (Purchase) - Unimech Aerospace & Manufacturing Ltd",
    body: "Issa Wood Industries excels in both quality and delivery. Their products are top-notch, and their service is very reliable. I would 100% recommend Issa Wood Industries.",
  },
  {
    name: "Madhusudhan N",
    title: "Distribution Warehouse (Merch) - Sigma Aldrich Chemicals Pvt Ltd",
    body: "We have been business partners since 2018, and we source their Pine Wood Pallets. The responsiveness to our urgent requirements, queries and calls have been very efficient. The product quality and delivery performance is excellent. I definitely recommend Issa Wood Industries",
  },
  {
    name: "Shiji Shreedhar",
    title: "Manager (Operations) - Fabritech Engineering",
    body: "Issa Wood Industries provides outstanding customised pallets for our needs. They are quick and efficient with their service. It is an enjoyable experience to work with such a reliable and professional team. Overall, excellent quality and timely delivery!",
  },
  {
    name: "Lourdu Swamy",
    title: "Deputy Manager (Procurement) - CIE Automotive India Limited",
    body: "All products are of good quality and the service is excellent in terms of delivery and communication. I definitely recommend Issa Wood Industries as a reliable business partner.",
  },
  {
    name: "Manjunath P",
    title: "Supply Chain Management - Tata Advanced Systems Limited ",
    body: "As a repeated customer, I can confidently say that Issa Wood Industries consistently delivers excellent products and services. The team is always friendly and helpful, and their products are top-notch. I've already recommended them to many others, and I will continue to do so!",
  },
];

const logos = [
  {
    img: "/ClientLogos/CIE.jpg",
    alt: "CIE",
  },
  {
    img: "/ClientLogos/Fabritech.jpeg",
    alt: "Fabritech",
  },
  {
    img: "/ClientLogos/Hindalco.jpeg",
    alt: "Hindalco",
  },
  {
    img: "/ClientLogos/Maini.jpeg",
    alt: "Maini",
  },
  {
    img: "/ClientLogos/Merck.JPG",
    alt: "Merck",
  },
  {
    img: "/ClientLogos/Mylan.png",
    alt: "Mylan",
  },
  {
    img: "/ClientLogos/SEP.jpeg",
    alt: "SEP",
  },
  {
    img: "/ClientLogos/Serena.png",
    alt: "Serena",
  },
  {
    img: "/ClientLogos/SFO.jpeg",
    alt: "SFO",
  },
  {
    img: "/ClientLogos/SigmaAldrich.jpg",
    alt: "SigmaAldrich",
  },
  {
    img: "/ClientLogos/Stelis.png",
    alt: "Stelis",
  },
  {
    img: "/ClientLogos/Steriscience.png",
    alt: "Steriscience",
  },
  {
    img: "/ClientLogos/Tata.jpg",
    alt: "Tata",
  },
  {
    img: "/ClientLogos/Unimech.jpeg",
    alt: "Unimech",
  },
];

const Testimonials = () => {
  return (
    <Marquee direction="left" speed={60} pauseOnHover={true}>
      <div className="flex flex-row gap-4 p-2">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="w-lg p-4 border rounded border-iorange bg-transparent"
          >
            <p className="text-lg font-montesserat-bold text-black">
              {review.name}
            </p>
            <b className="text-sm font-montesserat text-black">
              {review.title}
            </b>
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
      <div className="flex flex-row gap-4 p-2">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-32 h-32 flex items-center justify-center border rounded bg-white overflow-hidden"
          >
            <img
              className="object-contain w-full h-full"
              src={logo.img}
              alt={logo.alt}
            />
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default Testimonials;
