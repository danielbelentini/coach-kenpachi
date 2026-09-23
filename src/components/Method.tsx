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
    <section
      className="py-[clamp(3rem,6vw,5.5rem)] bg-brand-green"
      aria-labelledby="method-heading"
    >
      <div className="max-w-[1180px] mx-auto px-5 md:px-8">
        <Reveal>
          <h2 id="method-heading" className="text-white">
            Um planejamento construído{" "}
            <span className="text-brand-orange">para você</span>
          </h2>
        </Reveal>

        <div className="grid gap-5 mt-8 md:grid-cols-3">
          {DIFFERENTIALS.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 80}
              className="bg-[rgba(0,0,0,0.18)] rounded-[10px] p-6"
            >
              <item.icon className="w-7 h-7 text-brand-orange mb-3" />
              <h3>{item.title}</h3>
              <p className="text-white/85">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
