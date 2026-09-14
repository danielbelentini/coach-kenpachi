/**
 * Configuração central do site.
 *
 * Tudo que pode mudar sem alterar a estrutura da página (número de WhatsApp,
 * mensagens pré-preenchidas, links de redes sociais, domínio) fica aqui.
 * Nenhum componente deve ter número de telefone ou URL "hardcoded" fora
 * deste arquivo.
 */

export const siteConfig = {
  name: "Coach Kenpachi",
  shortName: "Kenpachi",
  title: "Coach Kenpachi — Consultoria de Nutrição e Treinamento",
  description:
    "Acompanhamento integrado de nutrição e treinamento com Coach Kenpachi. Planejamento estruturado para você executar na academia com direção clara.",

  // [VALIDAR COM O CLIENTE] — domínio definitivo de publicação.
  siteUrl: "https://www.coachkenpachi.com.br",

  // Número de WhatsApp Business fornecido no briefing V2.
  whatsappNumber: "5511949080965",

  // [LINK DO INSTAGRAM — INSERIR]
  // Deixado vazio de propósito: nenhum link foi fornecido no briefing V2.
  // Enquanto estiver vazio, o rodapé mostra o texto placeholder em vez de
  // um link quebrado ou inventado (ver src/components/InstagramLink.tsx).
  instagramUrl: "",

  // Mensagens pré-preenchidas definidas no briefing V2 (seção 19).
  // "default" é reutilizada em Hero, Consultoria e CTA final, pois o
  // briefing usa o mesmo texto nos três lugares.
  whatsappMessages: {
    default:
      "Olá, Coach! Conheci seu trabalho pela página e gostaria de saber mais sobre a Consultoria Completa. Meu objetivo é:",
    nutricao:
      "Olá, Coach! Conheci seu trabalho pela página e gostaria de saber mais sobre o acompanhamento de Nutrição. Meu objetivo é:",
    treinamento:
      "Olá, Coach! Conheci seu trabalho pela página e gostaria de saber mais sobre o planejamento de Treinamento. Meu objetivo é:",
  },
} as const;

export type WhatsAppMessageKey = keyof typeof siteConfig.whatsappMessages;

/**
 * Monta a URL do WhatsApp (wa.me) com mensagem pré-preenchida.
 * Centralizado aqui para permitir trocar número/mensagens sem tocar em componentes.
 */
export function buildWhatsAppUrl(messageKey: WhatsAppMessageKey = "default") {
  const text = encodeURIComponent(siteConfig.whatsappMessages[messageKey]);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}
