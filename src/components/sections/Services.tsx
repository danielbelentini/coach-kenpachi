import { services } from "@/lib/site-config";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
    <Section id="servicos" tone="base">
      <Reveal as="div" className="mx-auto max-w-2xl text-center">
        <Eyebrow>Como funciona o acompanhamento</Eyebrow>
        <h2 className="mt-6 font-display text-3xl uppercase leading-tight text-cream sm:text-4xl">
          Serviços oferecidos
        </h2>
        <p className="mt-4 font-body text-base leading-relaxed text-muted sm:text-lg">
          Da avaliação inicial ao ajuste fino do plano — um processo
          pensado para quem treina com consistência e quer resultado
          real, não uma dieta genérica de internet.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal as="div" key={service.code} delay={i * 90} className="h-full">
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
