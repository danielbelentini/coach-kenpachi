import { AccentMark } from "./AccentMark";
import { IconCheck } from "./Icons";
import { Reveal } from "./Reveal";

const GOALS = [
  "Emagrecimento",
  "Ganho de massa muscular",
  "Hipertrofia",
  "Redução de gordura",
  "Melhora de performance",
  "Ganho de força",
  "Retorno aos treinos",
  "Evolução física estruturada",
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
            Não existe um único perfil de pessoa que busca acompanhamento.
            Se o seu objetivo é um dos abaixo, um planejamento estruturado
            pode ajudar — independentemente do seu nível de experiência.
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
