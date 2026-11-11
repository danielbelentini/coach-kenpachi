import { siteConfig } from "@/config/site";

/**
 * Dados da Política de Privacidade.
 *
 * Nada aqui foi inventado: o projeto só tem nome da marca, WhatsApp,
 * Instagram e domínio. O que falta está marcado com [PREENCHER] e aparece
 * em destaque (laranja) na página, para o responsável completar.
 */

/** Versão e data de vigência do TEXTO da política (diferente de CONSENT_VERSION). */
export const policyMeta = {
  version: "1.0",
  updatedAt: "20 de novembro de 2026",
} as const;

export const privacyConfig = {
  // [PREENCHER] — dados do responsável (pessoa física ou jurídica).
  controllerName: "Mauricio Donizete de Castro",
  controllerDocument: "432.924.738-02",
  brandName: siteConfig.name,

  // Canal de privacidade provisório: o WhatsApp já usado no site.
  contactLabel: formatBrazilianPhone(siteConfig.whatsappNumber),
  contactUrl: `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Olá! Gostaria de falar sobre privacidade e proteção de dados pessoais."
  )}`,

  // [PREENCHER] — dependem de configurações da conta do Google / do responsável.
  analyticsRetention:
    "[PREENCHER: período de retenção de dados configurado no Google Analytics 4]",
  securityMeasures:
    "[PREENCHER: medidas de segurança efetivamente adotadas pelo responsável]",
} as const;

function formatBrazilianPhone(number: string): string {
  const match = number.match(/^55(\d{2})(\d{5})(\d{4})$/);
  return match ? `+55 ${match[1]} ${match[2]}-${match[3]}` : `+${number}`;
}
