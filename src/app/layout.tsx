import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/shared/Header";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "../components/shared/Footer";
import CookieBanner from "../components/shared/CookieBanner";
import { SiteJsonLd } from "@/src/lib/seo/json-ld";
import {
  DEFAULT_OG_IMAGE,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  SITE_NAME,
  SITE_URL,
} from "@/src/lib/seo/constants";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s`,
  },
  icons: {
    icon: "/faviconV2.png",
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col bg-white">
        <SiteJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        {<CookieBanner />}
        <Footer />
      </body>
    </html>
  );
}