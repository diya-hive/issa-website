import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky h-14 w-screen bg-gray-200 mt-0 font-montesserat-bold text-xs md:text-sm">
      <div className="flex h-full items-center text-[#0A1E3C]">
        <a href="/">
          <img
            src="/Group18.png"
            className="hidden md:block h-12 object-contain pl-12"
            alt="logo"
          />
        </a>
        <div className="flex flex-row w-full items-center justify-evenly md:justify-end gap-2 md:gap-8 md:pr-32">
          <Link href="/about">About Us</Link>
          <Link href="#">Media</Link>
          <Link href="#">Blog</Link>
          <Link href="/contact">
            <button className="bg-amber-600 p-2 rounded text-white text-xs">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
