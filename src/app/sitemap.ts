import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Necessário com "output: export": sem isso, o Next.js falha o build ao
// gerar /sitemap.xml pelo mesmo motivo do robots.ts (ver comentário lá).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
