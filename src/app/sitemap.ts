import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { siteConfig } from "@/lib/config";

const routes = [
  "",
  "/about",
  "/resume",
  "/work/sprint-performance",
  "/work/sla-management",
  "/work/replicoo",
  "/work/twish",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${siteConfig.siteUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.7,
      });
    }
  }
  return entries;
}
