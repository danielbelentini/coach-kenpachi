"use client";

import { FAQ_ITEMS } from "@/config/faq";
import { trackFaqOpen } from "@/lib/analytics";
import { Reveal } from "./Reveal";

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
