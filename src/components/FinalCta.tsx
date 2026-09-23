import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";

/**
 * [IMAGEM NECESSÁRIA]
 * Placeholder gerado via placehold.co, só para guiar enquadramento e
 * contraste do overlay. Troque pela foto/imagem definitiva antes de
 * publicar — ver README, seção "Como trocar a imagem de fundo do CTA
 * final".
 */
const BACKGROUND_IMAGE_URL = "https://placehold.co/1920x1080/2a2d30/2a2d30";

export function FinalCta() {
  return (
    <section
      className="relative text-center py-[clamp(3rem,6vw,5.5rem)] bg-brand-graphite-light bg-cover bg-center isolate"
      aria-labelledby="final-cta-heading"
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
    >
      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-[rgba(27,29,31,0.82)] to-[rgba(27,29,31,0.9)]"
        aria-hidden="true"
      />

      <div className="relative z-[1] max-w-[640px] mx-auto flex flex-col items-center gap-4">
        <Reveal>
          <h2 id="final-cta-heading" className="text-white">
            Pronto para <span className="text-brand-orange">começar</span>?
          </h2>
          <p className="text-white">
            Fale pelo WhatsApp com o Coach Kenpachi, conte qual é o seu
            objetivo e entenda como o acompanhamento pode se encaixar na
            sua rotina.
          </p>
          <WhatsAppCta
            ctaLocation="final"
            messageKey="default"
            label="Falar com o Coach no WhatsApp"
          />
        </Reveal>
      </div>
    </section>
  );
}
