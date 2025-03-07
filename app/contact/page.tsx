import { Metadata } from "next";
import { Instagram } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

import ContactForm from "./form";

export default function Contact() {
  return (
    <main className="container flex min-h-[calc(100vh-80px)] flex-col items-center justify-between gap-8 overflow-hidden bg-alabaster p-8 md:flex-row md:py-0 ">
      <div className="flex w-full shrink-0 flex-col gap-2 md:w-2/5 md:gap-4 font-montesserat">
        <h1 className="font-montesserat-bold text-4xl text-iblue md:text-5xl">
          Get In Touch
        </h1>
        <p className="text-iblue text-base md:text-lg">
          Need to get in touch with us? Either fill out the form with your
          inquiry or reach out to us by email or phone.
        </p>

        <a
          href="tel:+919035511921"
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="no-referrer"
          className="group mt-6 flex flex-row items-center gap-x-4 text-base"
        >
          <Phone strokeWidth={1} size={24} />
          <p className="group-hover:underline"> +91 90355 11921</p>
        </a>
        <a
          href="mailto:info@issawoodindutries.in"
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="no-referrer"
          className="group flex flex-row items-center gap-x-4 text-base"
        >
          <Mail strokeWidth={1} size={24} />
          <p className="group-hover:underline">info@issawoodindutries.in </p>
        </a>
        <a
          href="https://www.instagram.com/issa.wood"
          target="_blank"
          rel="noopener noreferrer"
          referrerPolicy="no-referrer"
          className="group flex flex-row items-center gap-x-4 text-base"
        >
          <Instagram strokeWidth={1} size={24} />
          <p className="group-hover:underline">@issa.wood</p>
        </a>
      </div>
      <ContactForm />
    </main>
  );
}
