import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/contact",
    "/services",
    "/about",
    "/industry",
    "/faq",
  ];

  return routes.map((route) => ({
    url: `https://eudrcompliancehub.com${route}`,
    lastModified: new Date(),
  }));
}