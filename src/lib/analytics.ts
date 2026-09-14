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

/**
 * Valores definidos no briefing V2 (seção 23), em português, para bater
 * exatamente com o que for configurado como gatilho no GTM/GA4.
 * "header" foi mantido como valor extra (não listado no briefing) porque o
 * botão do cabeçalho também é um clique real de WhatsApp que vale medir.
 */
export type CtaLocation =
  | "header"
  | "hero"
  | "consultoria"
  | "como_funciona"
  | "resultados"
  | "nutricao"
  | "treinamento"
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
export function trackInstagramClick(location: "footer") {
  pushToDataLayer({ event: "instagram_click", cta_location: location });
}

/** Interação com um item do FAQ (abrir uma pergunta). */
export function trackFaqOpen(question: string) {
  pushToDataLayer({ event: "faq_interaction", faq_question: question });
}

/** Marco de profundidade de rolagem (25/50/75/100%). */
export function trackScrollDepth(percentage: 25 | 50 | 75 | 100) {
  pushToDataLayer({ event: "scroll_depth", scroll_percentage: percentage });
}
