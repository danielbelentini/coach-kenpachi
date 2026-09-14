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
    <section id="consultoria" className="section consultancy" aria-labelledby="consultancy-heading">
      <div className="container">
        <Reveal>
          <span className="badge badge--orange">Principal acompanhamento</span>
          <h2 id="consultancy-heading">
            Consultoria <span className="text-accent">Completa</span>
          </h2>
          <p className="section__lead">
            Nutrição e treinamento planejados de forma individualizada, com
            acompanhamento do mesmo profissional.
          </p>
        </Reveal>

        <div className="consultancy__grid">
          {PILLARS.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} className="consultancy__card">
              <item.icon className="consultancy__card-icon" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <PricingPlans />
        </Reveal>

        <Reveal delay={280}>
          <div className="consultancy__cta">
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
