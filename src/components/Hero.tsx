import { WhatsAppCta } from "./WhatsAppCta";

/**
 * [IMAGEM NECESSÁRIA]
 * Placeholder gerado via placehold.co. Trocar por uma imagem conceitual
 * real (nutrição esportiva, treinamento, performance) — nunca uma foto do
 * Coach aqui (briefing V2, seção 6). Ver README, seção "Como trocar a
 * imagem de fundo do Hero".
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
            Nutrição e treino planejados para o seu objetivo — e para a sua
            rotina
          </h1>

          <p className="hero__lead">
            Coach Kenpachi desenvolve um planejamento individualizado de
            nutrição e treinamento, considerando seus objetivos, sua
            rotina, suas necessidades e sua evolução ao longo do
            acompanhamento.
          </p>

          <div className="hero__actions">
            <WhatsAppCta
              ctaLocation="hero"
              messageKey="default"
              label="Falar com o Coach no WhatsApp"
            />
            <a href="#consultoria" className="link-inline">
              Conhecer a Consultoria Completa
            </a>
          </div>

          <p className="hero__highlight">
            <strong>Consultoria Completa</strong> — nutrição e treinamento
            planejados e acompanhados pelo mesmo profissional.
          </p>
        </div>
      </div>
    </section>
  );
}
