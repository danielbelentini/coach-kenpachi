import { WhatsAppCta } from "./WhatsAppCta";

/**
 * Botão flutuante — atalho persistente para quem já está convencido.
 * Não substitui os CTAs contextuais das seções.
 * Respeita área segura do dispositivo (notch / home indicator) via CSS.
 */
export function FloatingWhatsApp() {
  return (
    <div className="floating-whatsapp">
      <WhatsAppCta
        ctaLocation="floating"
        variant="floating"
        label="Falar no WhatsApp agora"
      />
    </div>
  );
}
