import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Issa Wood Industries | Precision Woodcraft & Spools Manufacturing",
  description:
    "With 35 years of expertise, Issa Wood Industries delivers high-quality wooden spools, bobbins, and precision woodcraft solutions. Trusted by leading industries across the country.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
