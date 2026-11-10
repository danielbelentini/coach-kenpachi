/**
 * Camada única de analytics (GA4 via Google Tag Manager).
 *
 * Nenhum componente deve chamar `window.dataLayer` diretamente — todos usam
 * as funções abaixo, para manter os eventos documentados e consistentes.
 *
 * Cliques (whatsapp_click, navigation_click, social_click) NÃO passam por
 * funções de componentes: são capturados por um único listener delegado
 * (src/lib/click-tracking.ts), a partir de atributos data-* nos links.
 * Aqui ficam o `pushToDataLayer` compartilhado e os eventos que não são
 * cliques em links (faq_interaction e scroll_depth).
 * Ver docs/EVENTOS.md para a lista completa de eventos implementados.
 *
 * Consentimento: NENHUM evento é enviado ao dataLayer sem autorização para
 * cookies analíticos (ver src/lib/consent.ts). Eventos ocorridos antes do
 * aceite são descartados, nunca enfileirados — assim o GTM, ao ser carregado
 * após o aceite, não processa cliques anteriores ao consentimento.
 */

import { hasAnalyticsConsent } from "@/lib/consent";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

/**
 * Envia um evento ao dataLayer sem nunca substituir um array existente
 * (o GTM cria/usa o mesmo `window.dataLayer`). Só envia com consentimento
 * analítico; sem ele, o evento é descartado.
 */
export function pushToDataLayer(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!hasAnalyticsConsent()) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/** Interação com um item do FAQ (abrir uma pergunta). */
export function trackFaqOpen(question: string) {
  pushToDataLayer({ event: "faq_interaction", faq_question: question });
}

/** Marco de profundidade de rolagem (25/50/75/100%). */
export function trackScrollDepth(percentage: 25 | 50 | 75 | 100) {
  pushToDataLayer({ event: "scroll_depth", scroll_percentage: percentage });
}
