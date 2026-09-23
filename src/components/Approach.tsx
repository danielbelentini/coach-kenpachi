import { AccentMark } from "./AccentMark";
import { Reveal } from "./Reveal";

const BLOCKS = [
  {
    title: "Seu objetivo",
    text: "O planejamento começa entendendo onde você quer chegar e o que precisa ser trabalhado para isso.",
  },
  {
    title: "Sua rotina",
    text: "Alimentação e treinamento são pensados considerando sua realidade, disponibilidade, preferências e necessidades.",
  },
  {
    title: "Sua evolução",
    text: "O acompanhamento permite observar o processo e adaptar a estratégia conforme suas necessidades e dificuldades.",
  },
];

export function Approach() {
  return (
    <section
      className="py-[clamp(3rem,6vw,5.5rem)] bg-brand-graphite-light"
      aria-labelledby="approach-heading"
    >
      <div className="max-w-[1180px] mx-auto px-5 md:px-8">
        <Reveal>
          <AccentMark />
          <h2 id="approach-heading">
            Mais do que seguir um <span className="text-brand-orange">protocolo</span>
          </h2>
          <p className="max-w-[56ch] text-[1.05rem]">
            Um planejamento só faz sentido quando consegue acompanhar a
            pessoa que está colocando ele em prática.
          </p>
        </Reveal>

        <div className="grid gap-5 my-10 md:grid-cols-3">
          {BLOCKS.map((block, index) => (
            <Reveal
              key={block.title}
              delay={index * 80}
              className="bg-brand-graphite border border-brand-line border-t-[3px] border-t-brand-orange rounded-[10px] p-6"
            >
              <h3>{block.title}</h3>
              <p>{block.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={280}>
          <div className="max-w-[640px] border-l-[3px] border-brand-orange pl-5">
            <p className="text-white font-bold text-[1.15rem] mb-2">
              Consistência e disciplina sem extremismo.
            </p>
            <p>
              A proposta é construir uma estratégia que faça sentido para
              você e que possa ser aplicada de forma consistente.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
