import { IconApple, IconDumbbell } from "./Icons";
import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";

export function OtherServices() {
  return (
    <section className="section other-services" aria-labelledby="other-services-heading">
      <div className="container">
        <Reveal>
          <h2 id="other-services-heading">
            Outras formas de <span className="text-accent">acompanhamento</span>
          </h2>
          <p className="section__lead">
            Para quem prefere começar por uma frente específica, sem o
            acompanhamento integrado da Consultoria Completa.
          </p>
        </Reveal>

        <div className="other-services__grid">
          <Reveal className="other-services__card">
            <IconApple className="other-services__card-icon" />
            <h3>Nutrição</h3>
            <p>Acompanhamento de nutrição esportiva de forma isolada.</p>
            <WhatsAppCta
              ctaLocation="nutrition"
              messageKey="nutrition"
              variant="secondary"
              label="Falar sobre Nutrição"
            />
          </Reveal>

          <Reveal delay={80} className="other-services__card">
            <IconDumbbell className="other-services__card-icon" />
            <h3>Treinamento</h3>
            <p>Planejamento de treinamento de musculação de forma isolada.</p>
            <WhatsAppCta
              ctaLocation="training"
              messageKey="training"
              variant="secondary"
              label="Falar sobre Treinamento"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
