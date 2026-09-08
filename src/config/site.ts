/**
 * Configuração central do site.
 *
 * Tudo que pode mudar sem alterar a estrutura da página (número de WhatsApp,
 * mensagens pré-preenchidas, links de redes sociais, domínio) fica aqui.
 * Nenhum componente deve ter número de telefone ou URL "hardcoded" fora
 * deste arquivo.
 *
 * [VALIDAR COM O CLIENTE]: número de WhatsApp, Instagram e domínio final
 * abaixo são placeholders e precisam ser substituídos antes da publicação.
 */

export const siteConfig = {
  name: "Coach Kenpachi",
  shortName: "Kenpachi",
  title: "Coach Kenpachi — Consultoria de Nutrição e Treinamento",
  description:
    "Acompanhamento integrado de nutrição e treinamento com Coach Kenpachi. Planejamento estruturado para você executar na academia com direção clara.",

  // [VALIDAR COM O CLIENTE] — domínio definitivo de publicação.
  siteUrl: "https://www.coachkenpachi.com.br",

  // [VALIDAR COM O CLIENTE] — número em formato internacional, apenas dígitos.
  whatsappNumber: "5500000000000",

  // [VALIDAR COM O CLIENTE] — perfil oficial do Instagram.
  instagramUrl: "https://instagram.com/coachkenpachi",

  whatsappMessages: {
    default:
      "Olá! Vim pela página do Coach Kenpachi e quero saber mais sobre a Consultoria Completa.",
    consultancy:
      "Olá! Quero saber mais sobre a Consultoria Completa do Coach Kenpachi.",
    nutrition:
      "Olá! Tenho interesse no acompanhamento de Nutrição com o Coach Kenpachi.",
    training:
      "Olá! Tenho interesse no acompanhamento de Treinamento com o Coach Kenpachi.",
    results:
      "Olá! Vi os resultados na página do Coach Kenpachi e quero saber mais.",
    final:
      "Olá! Quero começar meu acompanhamento com o Coach Kenpachi.",
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
