import { faqItems, buildWhatsAppLink } from "@/lib/site-config";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FaqAccordionItem } from "@/components/ui/FaqAccordionItem";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Faq() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Section id="faq" tone="base">
      {/* Rich results de FAQ no Google — reforça SEO e a página como fonte de resposta */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal as="div">
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <h2 className="mt-6 font-display text-3xl uppercase leading-tight text-cream sm:text-4xl">
            Ainda com
            <br />
            dúvidas?
          </h2>
          <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-muted sm:text-base">
            Se sua pergunta não estiver aqui, chama no WhatsApp — respondo
            pessoalmente.
          </p>
          <Button
            href={buildWhatsAppLink(
              "Olá! Tenho uma dúvida antes de agendar minha avaliação."
            )}
            variant="secondary"
            className="mt-6"
            gtmId="whatsapp_faq"
          >
            Perguntar no WhatsApp
          </Button>
        </Reveal>

        <Reveal as="div" delay={100}>
          {faqItems.map((item, i) => (
            <FaqAccordionItem
              key={item.question}
              id={String(i)}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
