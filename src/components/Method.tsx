import { IconClock, IconGraduation, IconLayers } from "./Icons";
import { Reveal } from "./Reveal";

const DIFFERENTIALS = [
  {
    icon: IconGraduation,
    title: "Formação em Nutrição",
    text: "Base técnica em nutrição esportiva aplicada ao planejamento alimentar.",
  },
  {
    icon: IconClock,
    title: "Mais de 5 anos de experiência",
    text: "Atuação consolidada com acompanhamento de nutrição e treinamento.",
  },
  {
    icon: IconLayers,
    title: "Abordagem teórico-prática",
    text: "Fundamentação técnica aplicada de forma prática à rotina de cada aluno.",
  },
];

export function Method() {
  return (
    <section className="section method" aria-labelledby="method-heading">
      <div className="container">
        <Reveal>
          <h2 id="method-heading">
            O que torna esse acompanhamento{" "}
            <span className="text-accent">diferente</span>
          </h2>
        </Reveal>

        <div className="method__grid">
          {DIFFERENTIALS.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} className="method__card">
              <item.icon className="method__card-icon" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
