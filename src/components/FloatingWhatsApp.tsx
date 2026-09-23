import { WhatsAppCta } from "./WhatsAppCta";

/**
 * Botão flutuante — atalho persistente para quem já está convencido.
 * Não substitui os CTAs contextuais das seções.
 * Respeita área segura do dispositivo (notch / home indicator).
 */
export function FloatingWhatsApp() {
  return (
    <div className="fixed z-[900] right-[max(1.25rem,env(safe-area-inset-right))] bottom-[max(1.25rem,env(safe-area-inset-bottom))]">
      <WhatsAppCta
        ctaLocation="floating"
        variant="floating"
        label="Falar no WhatsApp agora"
      />
    </div>
  );
}
