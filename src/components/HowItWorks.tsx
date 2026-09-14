import { WhatsAppCta } from "./WhatsAppCta";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    title: "Anamnese",
    text: "Após a contratação, você responde uma anamnese completa sobre seus objetivos, rotina, alimentação, experiência, preferências e outros aspectos importantes para o planejamento.",
  },
  {
    title: "Seu planejamento é elaborado",
    text: "Com essas informações, o Coach desenvolve seu planejamento individualizado de nutrição e treinamento. Se necessário, ele entra em contato pelo WhatsApp para entender melhor algum ponto.",
  },
  {
    title: "Você coloca o planejamento em prática",
    text: "Você executa o treinamento na academia seguindo as orientações recebidas, enquanto sua evolução e suas dificuldades ajudam a direcionar os próximos ajustes.",
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
            O acompanhamento começa entendendo você antes de definir o
            planejamento.
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

        <Reveal delay={320}>
          <div className="how-it-works__cta">
            <WhatsAppCta
              ctaLocation="como_funciona"
              messageKey="default"
              label="Falar com o Coach no WhatsApp"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
