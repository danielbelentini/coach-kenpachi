"use client";

import { siteConfig } from "@/config/site";
import { trackInstagramClick } from "@/lib/analytics";

/**
 * Único pedaço interativo do rodapé. Isolado em um Client Component próprio
 * para que Footer.tsx continue sendo um Server Component — funções
 * (onClick) não podem ser passadas como prop para um Client Component a
 * partir de um Server Component, mas podem ser definidas aqui dentro, pois
 * este arquivo já é "use client".
 *
 * [LINK DO INSTAGRAM — INSERIR]
 * Nenhum link foi fornecido no briefing V2. Enquanto siteConfig.instagramUrl
 * estiver vazio, mostramos o placeholder como texto simples em vez de um
 * link quebrado ou inventado.
 */
export function InstagramLink() {
  if (!siteConfig.instagramUrl) {
    return <span className="site-footer__pending">[LINK DO INSTAGRAM — INSERIR]</span>;
  }

  return (
    <a
      href={siteConfig.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackInstagramClick("footer")}
    >
      Instagram
    </a>
  );
}
