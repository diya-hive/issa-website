import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-48 w-screen bg-gray-200 mb-0 font-montesserat text-sm">
      <div className="flex flex-row h-full items-center text-[#0A1E3C] justify-around">
        <div className="flex flex-col gap-1 max-w-64 font-montesserat items-start">
          <img src="/Group 18.png" className="h-20 object-contain" alt="logo" />
          <p>
            <b>GSTIN:</b>
          </p>
          <p>
            <b>CIN:</b>
          </p>
          <p>
            <b>Address: </b>Sed lacinia urna arcu, at aliquet magna, finibus
            nec.
          </p>
        </div>
        <div className="flex flex-col gap-1 font-sm font-montesserat font-sm">
          <p className="font-montesserat-bold">Quick Links</p>
          <Link href="#">About Us</Link>
          <Link href="#">Media</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact Us</Link>
        </div>
        <div className="flex flex-col gap-1 font-sm font-montesserat font-sm justify-evenly">
          <Link href="#" className="font-montesserat-bold">
            Get In Touch
          </Link>
          <Link href="#">About Us</Link>
          <Link href="#">Media</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
