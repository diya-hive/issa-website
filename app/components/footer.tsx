import Link from "next/link";
import React from "react";
import { Mail, Phone } from "lucide-react";

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
          <p>GSTIN: 29AAKFI6108B1ZJ</p>
          <p className="text-center text-sm md:text-xs">
            Sy No. 519/3, 519/4, Plot No. 8(P) 1-A, KIADB Industrial Area,
            Jigani, Anekal taluk, Bengaluru, Karnataka - 560105
          </p>
        </div>
        <div className="flex flex-col items-center font-sm font-montesserat text-base md:text-sm">
          <p className="font-montesserat-bold text-xl md:text-base">
            Quick Links
          </p>
          <Link href="/about">About Us</Link>
          <Link href="/products">Products</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className="flex flex-col items-center font-sm font-montesserat text-base md:text-sm justify-evenly">
          <p className="font-montesserat-bold text-xl md:text-base">
            Get In Touch
          </p>
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+91 9620588480</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+91 9845033970</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>info@issawoodindustries.in</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
