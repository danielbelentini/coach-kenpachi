import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";

/**
 * [IMAGEM NECESSÁRIA]
 * Placeholder gerado via placehold.co, só para guiar enquadramento e
 * contraste do overlay. Troque pela foto real (ambiente de treino, coach
 * em ação, academia) antes de publicar — ver README, seção "Como trocar a
 * imagem de fundo do CTA final".
 */
const BACKGROUND_IMAGE_URL = "https://placehold.co/1920x1080/2a2d30/2a2d30";

export function FinalCta() {
  return (
    <section
      className="section final-cta"
      aria-labelledby="final-cta-heading"
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
    >
      <div className="final-cta__overlay" aria-hidden="true" />

      <div className="container final-cta__inner">
        <Reveal>
          <h2 id="final-cta-heading">
            Pronto para <span className="text-accent">começar</span>?
          </h2>
          <p>
            Fale agora pelo WhatsApp com Coach Kenpachi e entenda como o
            acompanhamento pode se encaixar no seu objetivo.
          </p>
          <WhatsAppCta
            ctaLocation="final"
            messageKey="final"
            label="Falar no WhatsApp"
          />
        </Reveal>
      </div>
    </section>
  );
}
