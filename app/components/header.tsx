import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 h-16 w-full bg-gray-200 shadow-md font-montesserat-bold text-xs md:text-base z-50">
      <div className="flex h-full items-center justify-between px-4 md:px-12 text-[#0A1E3C]">
        <a href="/">
          <img
            src="/Group18.png"
            className="h-10 md:h-12 object-contain"
            alt="logo"
          />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/about">About Us</Link>
          <Link href="/products">Products</Link>
          {/* <Link href="/blog">Blog</Link> */}
          <Link
            href="/contact"
            className="bg-amber-600 p-2 rounded text-white text-base hover:opacity-80 duration-300"
          >
            Contact Us
          </Link>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="p-6">
              <nav className="flex flex-col gap-4 text-sm font-montesserat items-center">
                <a href="/">
                  <img
                    src="/Group18.png"
                    className="h-14 object-contain bg-center"
                    alt="logo"
                  />
                </a>
                <Link href="/about">About Us</Link>
                <Link href="/products">Products</Link>
                {/* <Link href="/blog">Blog</Link> */}
                <Link href="/contact">
                  <button className="bg-amber-600 p-2 rounded text-white text-sm w-64">
                    Contact Us
                  </button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
