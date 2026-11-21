import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [["", 1], ["/work", 0.9], ["/about", 0.8], ["/life", 0.6], ["/travel", 0.6], ["/log", 0.5]];
  return pages.map(([p, priority]) => ({ url: `${site.url}${p}`, lastModified: new Date(), changeFrequency: "monthly", priority }));
}
