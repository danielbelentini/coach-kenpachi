"use client";

import { buildWhatsAppUrl, type WhatsAppMessageKey } from "@/config/site";
import { trackWhatsAppClick, type CtaLocation } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "floating";

type WhatsAppCtaProps = {
  ctaLocation: CtaLocation;
  label?: string;
  messageKey?: WhatsAppMessageKey;
  variant?: Variant;
  className?: string;
};

/**
 * Único componente responsável por gerar links de WhatsApp.
 * Todos os CTAs da página (contextuais e o botão flutuante) usam este
 * componente, garantindo que a conversão principal seja sempre a mesma ação.
 */
export function WhatsAppCta({
  ctaLocation,
  label = "Falar no WhatsApp",
  messageKey = "default",
  variant = "primary",
  className = "",
}: WhatsAppCtaProps) {
  const href = buildWhatsAppUrl(messageKey);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp btn-whatsapp--${variant} ${className}`.trim()}
      onClick={() => trackWhatsAppClick(ctaLocation)}
      aria-label={variant === "floating" ? label : undefined}
    >
      <WhatsAppIcon />
      <span className={variant === "floating" ? "sr-only" : undefined}>
        {label}
      </span>
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.77.46 3.49 1.34 5.01L2 22l5.13-1.34a9.96 9.96 0 004.9 1.25h.01c5.52 0 10-4.48 10-10S17.56 2 12.04 2zm0 18.19a8.19 8.19 0 01-4.18-1.14l-.3-.18-3.04.8.81-2.97-.2-.3a8.19 8.19 0 118.9 3.79z" />
    </svg>
  );
}
