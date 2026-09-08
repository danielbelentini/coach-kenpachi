"use client";

import { siteConfig } from "@/config/site";
import { trackInstagramClick } from "@/lib/analytics";

/**
 * Único pedaço interativo do rodapé. Isolado em um Client Component próprio
 * para que Footer.tsx continue sendo um Server Component (seção 19 do
 * briefing) — funções (onClick) não podem ser passadas como prop para um
 * Client Component a partir de um Server Component, mas podem ser
 * definidas aqui dentro, pois este arquivo já é "use client".
 */
export function InstagramLink() {
  return (
    <a
      href={siteConfig.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackInstagramClick("floating")}
    >
      Instagram
    </a>
  );
}
