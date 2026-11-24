import { MetadataRoute } from "next";
import { SITE_URL } from "@/src/lib/seo/constants";

const PUBLIC_PATHS = [
  "",
  "/about",
  "/services",
  "/industry",
  "/faq",
  "/contact",
  "/privacy-policy",
  "/terms-and-services",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PUBLIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));
}