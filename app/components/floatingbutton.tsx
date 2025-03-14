import Link from "next/link";
import React from "react";
import { MessageSquareMore } from "lucide-react";

const FloatingButton = () => {
  return (
    <Link
      href="/contact"
      aria-label="Contact Us"
      className="fixed bottom-10 right-10 z-[999] hover:scale-105 size-14 bg-iorange flex items-center justify-center rounded-full transition-transform"
    >
      <MessageSquareMore color={"white"} size={24} />
    </Link>
  );
};

export default FloatingButton;
