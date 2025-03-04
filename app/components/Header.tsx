import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky h-14 w-screen bg-gray-200 mt-0 font-montesserat-bold text-sm">
      <div className="flex h-full items-center text-[#0A1E3C]">
        <img
          src="/Group 18.png"
          className="h-12 object-contain pl-16 pr-72"
          alt="logo"
        />
        <div className="flex flex-row w-full items-center justify-end gap-8 pr-32">
          <Link href="#">About Us</Link>
          <Link href="#">Media</Link>
          <Link href="#">Blog</Link>
          <button>
            <Link href="#" className="bg-amber-600 p-2 rounded text-white">
              Contact Us
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
