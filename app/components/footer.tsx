import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="md:h-48 w-screen bg-gray-200 mb-0 font-montesserat text-sm ">
      <div className="flex flex-col md:flex-row h-full items-center text-[#0A1E3C] justify-around gap-4">
        <div className="flex flex-col items-center text-base md:text-sm max-w-64 font-montesserat gap-2">
          <img
            src="/Group18.png"
            className="h-20 object-contain p-2"
            alt="logo"
          />
          <p>GSTIN: 123456789</p>
          <p>CIN: 123456789</p>
          <p className="text-center text-sm md:text-xs">
            Sed lacinia urna arcu, at aliquet magna, finibus nec.
          </p>
        </div>
        <div className="flex flex-col items-center font-sm font-montesserat text-base md:text-sm">
          <p className="font-montesserat-bold text-xl md:text-base">
            Quick Links
          </p>
          <Link href="#">About Us</Link>
          <Link href="#">Media</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact Us</Link>
        </div>
        <div className="flex flex-col items-center font-sm font-montesserat text-base md:text-sm justify-evenly">
          <p className="font-montesserat-bold text-xl md:text-base">
            Get In Touch
          </p>
          <Link href="/about">About Us</Link>
          <Link href="#">Media</Link>
          <Link href="#">Blog</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
