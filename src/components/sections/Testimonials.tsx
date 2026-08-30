import { testimonials } from "@/lib/site-config";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <Section id="depoimentos" tone="alt">
      <Reveal as="div" className="mx-auto max-w-2xl text-center">
        <Eyebrow>Resultado de quem treina sério</Eyebrow>
        <h2 className="mt-6 font-display text-3xl uppercase leading-tight text-cream sm:text-4xl">
          Depoimentos
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, i) => (
          <Reveal as="div" key={item.name} delay={i * 90} className="h-full">
            <TestimonialCard item={item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
