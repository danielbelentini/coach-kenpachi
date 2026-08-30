import { site, aboutCredentials } from "@/lib/site-config";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";
import { IconClipboard } from "@/components/ui/Icons";

export function About() {
  return (
    <Section id="sobre" tone="alt">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <Reveal as="div" className="relative mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-card">
            <PlaceholderImage
              slug="about-professional"
              alt="Foto do profissional em consultório — substituir por foto real"
              width={900}
              height={1000}
              sizes="(min-width: 1024px) 380px, 70vw"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal as="div" delay={100}>
          <Eyebrow>Sobre o profissional</Eyebrow>

          <h2 className="mt-6 font-display text-3xl uppercase leading-tight text-cream sm:text-4xl">
            {site.professionalName}
          </h2>
          <p className="mt-2 font-mono text-xs uppercase tracking-wide text-brand-green-400">
            {site.credential}
          </p>

          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-muted sm:text-lg">
            Atendimento especializado em nutrição esportiva e composição
            corporal, unindo o olhar clínico da nutrição com a vivência
            prática de coach de musculação. Cada paciente passa por uma
            anamnese completa antes de qualquer plano ser desenhado —
            porque treino, rotina e histórico de saúde mudam tudo.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {aboutCredentials.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-white/10 bg-graphite-950/50 p-3.5"
              >
                <IconClipboard className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange-600" />
                <span className="font-body text-sm leading-snug text-cream/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
