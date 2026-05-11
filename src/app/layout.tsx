import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/shared/Header";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "../components/shared/Footer";
import CookieBanner from "../components/shared/CookieBanner";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL("https://eudrcompliancehub.com"),
title: "Consultanță conformitate EUDR și soluții de due diligence | EUDR Compliance Hub",

description:
  "Servicii specializate de consultanță EUDR, due diligence, trasabilitate și soluții de conformitate pentru companii.",
   keywords: [
    "EUDR compliance",
    "EUDR consulting",
    "EUDR consultant",
    "EUDR due diligence",
    "EUDR traceability",
    "EUDR risk assessment",
    "EU deforestation regulation",
    "EUDR services",
    "EUDR compliance solutions",
    "EUDR România",
    "legislație EUDR România",
  ],
  openGraph: {
    title: "EUDR Compliance Consulting & Due Diligence Solutions | EUDR Compliance Hub",
    description: "Expert EUDR consulting and compliance solutions for businesses navigating EU Deforestation Regulation requirements.",
    url: "https://eudrcompliancehub.com",
    siteName: "EUDR Compliance Hub",
    
    images: [
      {
        url: "/eudrLogo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
   icons: {
    icon: "/faviconV2.png",
  },

  twitter: {
    card: "summary_large_image",
  },
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