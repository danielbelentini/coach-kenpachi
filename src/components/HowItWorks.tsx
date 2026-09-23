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
    <section
      id="como-funciona"
      className="py-[clamp(3rem,6vw,5.5rem)]"
      aria-labelledby="how-heading"
    >
      <div className="max-w-[1180px] mx-auto px-5 md:px-8">
        <Reveal>
          <h2 id="how-heading">
            Como <span className="text-brand-orange">funciona</span>
          </h2>
          <p className="max-w-[56ch] text-[1.05rem]">
            O acompanhamento começa entendendo você antes de definir o
            planejamento.
          </p>
        </Reveal>

        <ol className="grid gap-6 mt-10 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 100}>
              <li className="flex gap-4 items-start">
                <span
                  className="shrink-0 w-10 h-10 rounded-full bg-brand-orange text-white font-extrabold grid place-items-center"
                  aria-hidden="true"
                >
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
          <div className="mt-10 flex justify-center">
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
