import { siteConfig } from "@/config/site";

/**
 * Link do Instagram no rodapé.
 *
 * Rastreamento: apenas atributos de marcação (data-track-*). O evento
 * social_click é enviado pelo listener delegado em src/lib/click-tracking.ts.
 *
 * [LINK DO INSTAGRAM — INSERIR]
 * Nenhum link foi fornecido no briefing V2. Enquanto siteConfig.instagramUrl
 * estiver vazio, mostramos o placeholder como texto simples em vez de um
 * link quebrado ou inventado.
 */
export function InstagramLink() {
  if (!siteConfig.instagramUrl) {
    return (
      <span className="text-brand-orange font-bold text-xs normal-case tracking-normal">
        [LINK DO INSTAGRAM — INSERIR]
      </span>
    );
  }

  return (
    <a
      href={siteConfig.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-75 hover:text-brand-orange focus-visible:opacity-75 focus-visible:text-brand-orange"
      data-track-event="social_click"
      data-track-section="footer"
      data-track-button="footer_instagram"
    >
      Instagram
    </a>
  );
}
