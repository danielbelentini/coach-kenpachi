/**
 * Camada única de analytics (GA4 via Google Tag Manager).
 *
 * Nenhum componente deve chamar `window.dataLayer` diretamente — todos usam
 * as funções abaixo, para manter os eventos documentados e consistentes.
 *
 * Evento principal: `whatsapp_click`, sempre com `cta_location`.
 * Ver docs/EVENTOS.md para a lista completa de eventos implementados.
 */

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export type CtaLocation =
  | "header"
  | "hero"
  | "consultancy"
  | "results"
  | "nutrition"
  | "training"
  | "final"
  | "floating";

function pushToDataLayer(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/** Evento principal de conversão: clique em qualquer CTA de WhatsApp. */
export function trackWhatsAppClick(ctaLocation: CtaLocation) {
  pushToDataLayer({ event: "whatsapp_click", cta_location: ctaLocation });
}

/** Clique no link secundário do Instagram (canal secundário, não concorre com o WhatsApp). */
export function trackInstagramClick(ctaLocation: CtaLocation) {
  pushToDataLayer({ event: "instagram_click", cta_location: ctaLocation });
}

/** Interação com um item do FAQ (abrir uma pergunta). */
export function trackFaqOpen(question: string) {
  pushToDataLayer({ event: "faq_interaction", faq_question: question });
}
