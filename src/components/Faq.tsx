"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/config/faq";
import { trackFaqOpen } from "@/lib/analytics";
import { Reveal } from "./Reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number, question: string) {
    setOpenIndex((current) => {
      const next = current === index ? null : index;
      if (next !== null) trackFaqOpen(question);
      return next;
    });
  }

  return (
    <section
      id="faq"
      className="py-[clamp(3rem,6vw,5.5rem)]"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[1180px] mx-auto px-5 md:px-8">
        <Reveal>
          <h2 id="faq-heading">
            Perguntas <span className="text-brand-orange">frequentes</span>
          </h2>
        </Reveal>

        <div className="mt-8 flex flex-col gap-3 max-w-[760px]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const questionId = `faq-question-${index}`;
            const answerId = `faq-answer-${index}`;

            return (
              <Reveal key={item.question} delay={index * 40}>
                <div className="bg-brand-graphite-light border border-brand-line rounded-[6px] px-5 py-4">
                  <button
                    type="button"
                    id={questionId}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => handleToggle(index, item.question)}
                    className={`w-full text-left cursor-pointer font-bold list-none flex justify-between items-center gap-4 hover:opacity-75 focus-visible:opacity-75 ${
                      isOpen ? "text-brand-orange" : "text-white"
                    }`}
                  >
                    {item.question}
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-[1.4rem] leading-none text-brand-orange transition-transform duration-300 ease-in-out ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pt-[0.85rem] mb-0">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
