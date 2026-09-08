"use client";

import { trackFaqOpen } from "@/lib/analytics";
import { Reveal } from "./Reveal";

const FAQ_ITEMS = [
  {
    question: "A Consultoria Completa serve para iniciantes?",
    answer:
      "Sim. O acompanhamento é pensado para pessoas com objetivos diferentes e níveis de experiência diferentes, não apenas para quem já treina há muito tempo.",
  },
  {
    question:
      "Qual a diferença entre a Consultoria Completa e contratar nutrição ou treinamento separadamente?",
    answer:
      "Na Consultoria Completa, nutrição e treinamento são planejados de forma integrada pelo mesmo profissional. Nas modalidades isoladas, você recebe acompanhamento apenas de uma das frentes.",
  },
  {
    question: "Coach Kenpachi é personal trainer?",
    answer:
      "Não. Coach Kenpachi elabora o planejamento de treinamento para você executar na academia seguindo as orientações — ele não realiza o acompanhamento presencial dos treinos.",
  },
  {
    question: "Como funciona o primeiro contato?",
    answer:
      "O primeiro contato é feito pelo WhatsApp, onde você explica seu objetivo e recebe as próximas orientações.",
  },
  {
    question: "Quanto tempo leva para ver evolução?",
    answer:
      "Isso varia de pessoa para pessoa e depende de diversos fatores individuais. [VALIDAR COM O CLIENTE]",
  },
  {
    question: "Qual o valor do investimento?",
    answer:
      "Os valores são apresentados diretamente na conversa pelo WhatsApp, pois variam conforme o serviço escolhido. [VALIDAR COM O CLIENTE]",
  },
];

export function Faq() {
  return (
    <section id="faq" className="section faq" aria-labelledby="faq-heading">
      <div className="container">
        <Reveal>
          <h2 id="faq-heading">
            Perguntas <span className="text-accent">frequentes</span>
          </h2>
        </Reveal>

        <div className="faq__list">
          {FAQ_ITEMS.map((item, index) => (
            <Reveal key={item.question} delay={index * 40}>
              <details
                className="faq__item"
                onToggle={(event) => {
                  if ((event.target as HTMLDetailsElement).open) {
                    trackFaqOpen(item.question);
                  }
                }}
              >
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
