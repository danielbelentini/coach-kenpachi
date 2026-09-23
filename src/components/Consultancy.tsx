import { IconApple, IconDumbbell, IconLayers } from "./Icons";
import { PricingPlans } from "./PricingPlans";
import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";

const PILLARS = [
  {
    icon: IconApple,
    title: "Nutrição personalizada",
    text: "Planejamento alimentar construído de acordo com seus objetivos, rotina, alimentação, preferências e necessidades.",
  },
  {
    icon: IconDumbbell,
    title: "Treinamento personalizado",
    text: "Planejamento de treinamento de musculação desenvolvido de acordo com seus objetivos, experiência, rotina, disponibilidade e prioridades.",
  },
  {
    icon: IconLayers,
    title: "Acompanhamento integrado",
    text: "Nutrição e treinamento pensados em conjunto para que a estratégia acompanhe sua evolução.",
  },
];

export function Consultancy() {
  return (
    <section
      id="consultoria"
      className="py-[clamp(3rem,6vw,5.5rem)] bg-gradient-to-b from-brand-graphite to-brand-graphite-light border-t border-b border-brand-line"
      aria-labelledby="consultancy-heading"
    >
      <div className="max-w-[1180px] mx-auto px-5 md:px-8">
        <Reveal>
          <span className="inline-block text-white font-bold text-[0.8rem] px-[0.85rem] py-[0.35rem] rounded-full mb-4 bg-brand-orange">
            Principal acompanhamento
          </span>
          <h2 id="consultancy-heading">
            Consultoria <span className="text-brand-orange">Completa</span>
          </h2>
          <p className="max-w-[56ch] text-[1.05rem]">
            Nutrição e treinamento planejados de forma individualizada, com
            acompanhamento do mesmo profissional.
          </p>
        </Reveal>

        <div className="grid gap-5 my-10 md:grid-cols-3">
          {PILLARS.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 80}
              className="bg-brand-graphite border border-brand-line border-t-[3px] border-t-brand-orange rounded-[10px] p-6"
            >
              <item.icon className="w-7 h-7 text-brand-orange mb-3" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <PricingPlans />
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-10 flex justify-center">
            <WhatsAppCta
              ctaLocation="consultoria"
              messageKey="default"
              label="Quero começar minha Consultoria"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
