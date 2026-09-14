import { IconApple, IconDumbbell } from "./Icons";
import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";

export function OtherServices() {
  return (
    <section className="section other-services" aria-labelledby="other-services-heading">
      <div className="container">
        <Reveal>
          <h2 id="other-services-heading">
            Quer trabalhar apenas uma <span className="text-accent">das frentes</span>?
          </h2>
          <p className="section__lead">
            Também é possível contratar o acompanhamento de nutrição ou o
            planejamento de treinamento separadamente.
          </p>
        </Reveal>

        <div className="other-services__grid">
          <Reveal className="other-services__card">
            <IconApple className="other-services__card-icon" />
            <h3>Nutrição</h3>
            <p className="other-services__price">A partir de R$ 399,90</p>
            <p>
              Acompanhamento de nutrição esportiva individualizado, de
              acordo com seus objetivos e sua rotina.
            </p>
            <WhatsAppCta
              ctaLocation="nutricao"
              messageKey="nutricao"
              variant="secondary"
              label="Falar sobre Nutrição"
            />
          </Reveal>

          <Reveal delay={80} className="other-services__card">
            <IconDumbbell className="other-services__card-icon" />
            <h3>Treinamento</h3>
            <p className="other-services__price">A partir de R$ 299,90</p>
            <p>
              Planejamento individualizado de treinamento de musculação
              para você executar na academia.
            </p>
            <WhatsAppCta
              ctaLocation="treinamento"
              messageKey="treinamento"
              variant="secondary"
              label="Falar sobre Treinamento"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
