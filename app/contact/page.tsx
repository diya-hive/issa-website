import { Metadata } from "next";
import { Instagram } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

import ContactForm from "./form";

export default function Contact() {
  return (
    <main className="flex flex-col">
      <div className="container flex min-h-[calc(100vh-80px)] flex-col items-center justify-between gap-8 overflow-hidden bg-alabaster p-8 md:flex-row md:py-0 ">
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
            href="https://www.instagram.com/issawoodindustries"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
            className="group flex flex-row items-center gap-x-4 text-base"
          >
            <Instagram strokeWidth={1} size={24} />
            <p className="group-hover:underline">@issawoodindustries</p>
          </a>
        </div>
        <ContactForm />
      </div>
      <div className="flex flex-col md:flex-row h-[50vh] w-screen">
        <div className="flex items-center justify-center w-screen md:w-1/2 h-1/3 md:h-full">
          <div className="flex flex-col gap-2 justify-center h-full md:h-3/4 w-full bg-iorange p-8 md:p-4">
            <p className="font-montesserat-bold text-xl md:text-4xl text-white">
              Visit Us
            </p>
            <p className="font-montesserat text-white text-sm md:text-base">
              We’d love for you to drop by and have a chat!
            </p>
            <p className="font-montesserat text-white text-sm md:text-base">
              <b>Office Address: </b>No 864/2, Trimurthy Nilaya, Beside
              Nageswara temple, Behind BBMP office, Begur, Bengaluru - 560068
            </p>
          </div>
        </div>
        <div className="w-screen md:w-1/2 h-2/3 md:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.937325043513!2d77.62656587458687!3d12.782580218995214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6960cacbfb1b%3A0x1090e9a612f16c9a!2sRaja%20Spools!5e0!3m2!1sen!2sin!4v1741616930284!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
