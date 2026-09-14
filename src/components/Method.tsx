import { IconCheck, IconGraduation, IconLayers } from "./Icons";
import { Reveal } from "./Reveal";

const DIFFERENTIALS = [
  {
    icon: IconLayers,
    title: "Individualização de verdade",
    text: "Seu planejamento considera objetivos, rotina, necessidades, preferências, limitações e evolução.",
  },
  {
    icon: IconCheck,
    title: "Consistência sem extremismo",
    text: "A proposta é construir uma estratégia que você consiga aplicar de forma consistente, sem depender de restrições desnecessárias ou mudanças radicais.",
  },
  {
    icon: IconGraduation,
    title: "Teoria aplicada à prática",
    text: "Conhecimento técnico é transformado em orientações que possam fazer sentido na rotina e no processo de cada cliente.",
  },
];

export function Method() {
  return (
    <section className="section method" aria-labelledby="method-heading">
      <div className="container">
        <Reveal>
          <h2 id="method-heading">
            Um planejamento construído{" "}
            <span className="text-accent">para você</span>
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
