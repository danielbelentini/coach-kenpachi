import { WhatsAppCta } from "./WhatsAppCta";

/**
 * [IMAGEM NECESSÁRIA]
 * Placeholder gerado via placehold.co. Trocar por uma imagem conceitual
 * real (nutrição esportiva, treinamento, performance) — nunca uma foto do
 * Coach aqui (briefing V2, seção 6). Ver README, seção "Como trocar a
 * imagem de fundo do Hero".
 */
const BACKGROUND_IMAGE_URL = "/images/bg-hero.jpg";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-[clamp(3rem,8vw,6rem)] pb-[clamp(2.5rem,6vw,4rem)] bg-brand-graphite bg-cover isolate bg-top-center"
      aria-labelledby="hero-heading"
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
    >
      <div
        className="absolute inset-0 z-0 top-0 h-full bg-linear-to-b from-[rgba(27,29,31,0.82)] to-[rgba(27,29,31,0.9)]"
        aria-hidden="true"
      />

      <div className="relative z-1 max-w-295 mx-auto px-5 md:px-8">
        <div className="max-w-180">
          <p className="text-brand-orange font-bold mb-3">
            Nutrição esportiva + treinamento
          </p>

          <h1 id="hero-heading">
            Nutrição e treino planejados para o seu objetivo — e para a sua
            rotina
          </h1>

          <p className="text-[1.1rem] max-w-[52ch]">
            Coach Kenpachi desenvolve um planejamento individualizado de
            nutrição e treinamento, considerando seus objetivos, sua
            rotina, suas necessidades e sua evolução ao longo do
            acompanhamento.
          </p>

          <div className="flex flex-wrap items-center gap-5 my-6">
            <WhatsAppCta
              ctaLocation="hero"
              messageKey="default"
              label="Falar com o coach no WhatsApp"
            />
            <a
              href="#consultoria"
              className="text-white underline underline-offset-4 font-semibold hover:opacity-75 hover:text-brand-orange focus-visible:opacity-75 focus-visible:text-brand-orange"
            >
              Conhecer a consultoria completa
            </a>
          </div>

          <p className="border-l-[3px] border-brand-orange pl-4 text-white text-[0.95rem] max-w-[46ch]">
            <strong className="text-brand-orange">Consultoria Completa</strong> — nutrição e treinamento
            planejados e acompanhados pelo mesmo profissional.
          </p>
        </div>
      </div>
    </section>
  );
}
