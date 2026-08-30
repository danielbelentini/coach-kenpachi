"use client";

import { useState } from "react";
import { IconChevronDown } from "@/components/ui/Icons";

export function FaqAccordionItem({
  question,
  answer,
  id,
}: {
  question: string;
  answer: string;
  id: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${id}`;
  const buttonId = `faq-button-${id}`;

  return (
    <div className="border-b border-white/10 py-5">
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 text-left font-body text-base text-cream transition-colors hover:text-brand-orange-600 sm:text-lg"
        >
          {question}
          <IconChevronDown
            className={`h-5 w-5 shrink-0 text-brand-green-400 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pt-3 pr-8 font-body text-sm leading-relaxed text-muted sm:text-[15px]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
