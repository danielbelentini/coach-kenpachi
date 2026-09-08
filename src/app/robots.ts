import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Necessário com "output: export": sem isso, o Next.js falha o build ao
// gerar /robots.txt porque a rota de metadata não sabe que deve ser
// renderizada estaticamente uma única vez no build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
