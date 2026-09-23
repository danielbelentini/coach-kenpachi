"use client";

import { FAQ_ITEMS } from "@/config/faq";
import { trackFaqOpen } from "@/lib/analytics";
import { Reveal } from "./Reveal";

export function Faq() {
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
          {FAQ_ITEMS.map((item, index) => (
            <Reveal key={item.question} delay={index * 40}>
              <details
                className="group bg-brand-graphite-light border border-brand-line rounded-[6px] px-5 py-4"
                onToggle={(event) => {
                  if ((event.target as HTMLDetailsElement).open) {
                    trackFaqOpen(item.question);
                  }
                }}
              >
                <summary className="cursor-pointer font-bold text-white list-none flex justify-between items-center gap-4 hover:opacity-75 focus-visible:opacity-75 [&::-webkit-details-marker]:hidden after:content-['+'] after:text-brand-orange after:text-[1.4rem] after:shrink-0 group-open:after:content-['−']">
                  {item.question}
                </summary>
                <p className="mt-[0.85rem] mb-0">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
