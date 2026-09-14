import { AccentMark } from "./AccentMark";
import { IconCheck } from "./Icons";
import { Reveal } from "./Reveal";

const GOALS = [
  "Emagrecimento",
  "Ganho de massa muscular",
  "Hipertrofia",
  "Redução de gordura",
  "Performance",
  "Ganho de força",
  "Voltar a treinar",
];

export function Goals() {
  return (
    <section id="objetivos" className="section goals" aria-labelledby="goals-heading">
      <div className="container">
        <Reveal>
          <AccentMark />
          <h2 id="goals-heading">
            Isso é para <span className="text-accent">você</span>?
          </h2>
          <p className="section__lead">
            Cada pessoa chega com um objetivo diferente. O acompanhamento
            parte do que você busca e do momento em que você está.
          </p>
        </Reveal>

        <ul className="goals__grid">
          {GOALS.map((goal, index) => (
            <Reveal key={goal} delay={index * 40}>
              <li className="goals__item">
                <IconCheck className="goals__item-icon" />
                <span>{goal}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
