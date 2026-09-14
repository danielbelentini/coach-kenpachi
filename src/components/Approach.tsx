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
    <section className="section approach" aria-labelledby="approach-heading">
      <div className="container">
        <Reveal>
          <AccentMark />
          <h2 id="approach-heading">
            Mais do que seguir um <span className="text-accent">protocolo</span>
          </h2>
          <p className="section__lead">
            Um planejamento só faz sentido quando consegue acompanhar a
            pessoa que está colocando ele em prática.
          </p>
        </Reveal>

        <div className="approach__blocks">
          {BLOCKS.map((block, index) => (
            <Reveal key={block.title} delay={index * 80} className="approach__block">
              <h3>{block.title}</h3>
              <p>{block.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={280}>
          <div className="approach__quote">
            <p className="approach__quote-title">
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
