import { IconApple, IconDumbbell, IconLayers } from "./Icons";
import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";

const INCLUDES = [
  {
    icon: IconApple,
    title: "Planejamento de nutrição",
    text: "Orientação alimentar alinhada ao seu objetivo, ajustada ao longo do acompanhamento.",
  },
  {
    icon: IconDumbbell,
    title: "Planejamento de treinamento",
    text: "Estrutura de treino para você executar na academia, com orientação clara sobre a progressão.",
  },
  {
    icon: IconLayers,
    title: "Acompanhamento integrado",
    text: "Nutrição e treino planejados pelo mesmo profissional, evitando desencontros entre as duas frentes.",
  },
];

export function Consultancy() {
  return (
    <section id="consultoria" className="section consultancy" aria-labelledby="consultancy-heading">
      <div className="container">
        <Reveal>
          <span className="badge">Principal solução</span>
          <h2 id="consultancy-heading">
            Consultoria <span className="text-accent">Completa</span>
          </h2>
          <p className="section__lead">
            O acompanhamento mais completo de Coach Kenpachi: nutrição e
            treinamento planejados de forma integrada, por um único
            profissional, para pessoas que querem orientação estruturada com
            um objetivo definido.
          </p>
        </Reveal>

        <div className="consultancy__grid">
          {INCLUDES.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} className="consultancy__card">
              <item.icon className="consultancy__card-icon" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <div className="consultancy__cta">
            <WhatsAppCta
              ctaLocation="consultancy"
              messageKey="consultancy"
              label="Quero a Consultoria Completa"
            />
            <p className="consultancy__cta-note">
              Valores e formato de acompanhamento são apresentados diretamente
              na conversa. [VALIDAR COM O CLIENTE]
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
