import { WhatsAppCta } from "./WhatsAppCta";

/**
 * Botão flutuante — atalho persistente para quem já está convencido.
 * Não substitui os CTAs contextuais das seções.
 * Respeita área segura do dispositivo (notch / home indicator) e sobe a
 * altura da barra de cookies (--cookie-bar-height) enquanto ela estiver
 * aberta, para nunca ficar coberto por ela.
 */
export function FloatingWhatsApp() {
  return (
    <div className="fixed z-[900] right-[max(1.25rem,env(safe-area-inset-right))] bottom-[calc(max(1.25rem,env(safe-area-inset-bottom))+var(--cookie-bar-height,0px))] transition-[bottom] duration-200">
      <WhatsAppCta
        section="floating"
        button="floating_whatsapp"
        variant="floating"
        label="Falar no WhatsApp agora"
      />
    </div>
  );
}
