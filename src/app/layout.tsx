import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/shared/Header";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "../components/shared/Footer";
import CookieBanner from "../components/shared/CookieBanner";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "EUDR",
  description: "EUDR Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        {<CookieBanner/>}
        <Footer/>
      </body>
    </html>
  );
}