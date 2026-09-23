import { IconApple, IconDumbbell } from "./Icons";
import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";

export function OtherServices() {
  return (
    <section
      className="py-[clamp(3rem,6vw,5.5rem)] bg-brand-graphite-light"
      aria-labelledby="other-services-heading"
    >
      <div className="max-w-[1180px] mx-auto px-5 md:px-8">
        <Reveal>
          <h2 id="other-services-heading">
            Quer trabalhar apenas uma <span className="text-brand-orange">das frentes</span>?
          </h2>
          <p className="max-w-[56ch] text-[1.05rem]">
            Também é possível contratar o acompanhamento de nutrição ou o
            planejamento de treinamento separadamente.
          </p>
        </Reveal>

        <div className="grid gap-5 mt-8 sm:grid-cols-2">
          <Reveal className="bg-brand-graphite border border-brand-line rounded-[6px] p-6">
            <IconApple className="w-[26px] h-[26px] text-brand-orange mb-3" />
            <h3>Nutrição</h3>
            <p>A partir de R$ 399,90</p>
            <p>
              Acompanhamento de nutrição esportiva individualizado, de
              acordo com seus objetivos e sua rotina.
            </p>
            <WhatsAppCta
              ctaLocation="nutricao"
              messageKey="nutricao"
              variant="secondary"
              label="Falar sobre Nutrição"
              className="mt-3"
            />
          </Reveal>

          <Reveal delay={80} className="bg-brand-graphite border border-brand-line rounded-[6px] p-6">
            <IconDumbbell className="w-[26px] h-[26px] text-brand-orange mb-3" />
            <h3>Treinamento</h3>
            <p>A partir de R$ 299,90</p>
            <p>
              Planejamento individualizado de treinamento de musculação
              para você executar na academia.
            </p>
            <WhatsAppCta
              ctaLocation="treinamento"
              messageKey="treinamento"
              variant="secondary"
              label="Falar sobre Treinamento"
              className="mt-3"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
