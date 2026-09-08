import { Reveal } from "./Reveal";

const STEPS = [
  {
    title: "Contato inicial",
    text: "Você entra em contato pelo WhatsApp e explica seu objetivo atual.",
  },
  {
    title: "Planejamento",
    text: "Coach Kenpachi elabora o planejamento de nutrição e treinamento com base no seu objetivo.",
  },
  {
    title: "Execução e acompanhamento",
    text: "Você executa o treino na academia seguindo a orientação recebida, com acompanhamento e ajustes ao longo do processo.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section how-it-works" aria-labelledby="how-heading">
      <div className="container">
        <Reveal>
          <h2 id="how-heading">
            Como <span className="text-accent">funciona</span>
          </h2>
          <p className="section__lead">
            Um caminho simples, do primeiro contato ao acompanhamento
            contínuo.
          </p>
        </Reveal>

        <ol className="how-it-works__list">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 100}>
              <li className="how-it-works__item">
                <span className="how-it-works__index" aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <p className="section__footnote">
          Cadência de contato, plataforma utilizada e periodicidade dos
          ajustes: [VALIDAR COM O CLIENTE]
        </p>
      </div>
    </section>
  );
}
