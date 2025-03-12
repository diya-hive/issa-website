import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Toaster } from "sonner";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_URL ?? "https://www.issawoodindustries.in"
  ),
  title: "Issa Wood Industries | Precision Woodcraft & Spools Manufacturing",
  description:
    "With 35 years of expertise, Issa Wood Industries delivers high-quality wooden spools, bobbins, and precision woodcraft solutions. Trusted by leading industries across the country.",
  openGraph: mergeOpenGraph(),
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
        <Toaster richColors />
        <Footer />
      </body>
    </html>
  );
}
