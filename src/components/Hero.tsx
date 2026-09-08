import { WhatsAppCta } from "./WhatsAppCta";

/**
 * [IMAGEM NECESSÁRIA]
 * Placeholder gerado via placehold.co, só para guiar enquadramento e
 * contraste do overlay. Troque pela foto real (coach, ambiente de treino)
 * antes de publicar — ver README, seção "Como trocar a imagem de fundo do
 * Hero".
 */
const BACKGROUND_IMAGE_URL = "https://placehold.co/1920x1080/1b1d1f/1b1d1f";

export function Hero() {
  return (
    <section
      id="inicio"
      className="hero"
      aria-labelledby="hero-heading"
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
    >
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">Nutrição esportiva + treinamento</p>

          <h1 id="hero-heading">
            Um planejamento único de nutrição e treino, feito para o seu
            objetivo
          </h1>

          <p className="hero__lead">
            Coach Kenpachi acompanha sua evolução com um planejamento
            integrado — você executa na academia seguindo uma orientação
            clara, com ajustes ao longo do processo.
          </p>

          <div className="hero__actions">
            <WhatsAppCta
              ctaLocation="hero"
              messageKey="default"
              label="Falar no WhatsApp"
            />
            <a href="#consultoria" className="link-inline">
              Conhecer a Consultoria Completa
            </a>
          </div>

          <p className="hero__highlight">
            <strong>Consultoria Completa:</strong> nutrição e treinamento
            acompanhados por um único profissional.
          </p>
        </div>
      </div>
    </section>
  );
}
