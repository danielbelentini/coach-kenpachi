import { heroStats, site, buildWhatsAppLink } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-graphite-950 pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* textura de grade sutil ao fundo, ecoando o motivo de "ficha" */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F2F0EC 1px, transparent 1px), linear-gradient(to bottom, #F2F0EC 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-content gap-14 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
        <Reveal as="div" className="max-w-xl">
          <Eyebrow>Nutrição esportiva individual</Eyebrow>

          <h1 className="mt-6 font-display text-[2.75rem] uppercase leading-[1.02] tracking-tight text-cream sm:text-6xl">
            Sua dieta não deveria ser
            <span className="text-brand-orange-600"> igual a de ninguém.</span>
          </h1>

          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-muted">
            {site.tagline}. Cada plano nasce de uma anamnese completa —
            histórico, treino, exames e objetivo — antes de qualquer
            cardápio ser montado.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href={buildWhatsAppLink()} size="lg" gtmId="whatsapp_hero">
              Agendar minha avaliação
            </Button>
            <Button href="#servicos" variant="secondary" size="lg">
              Ver como funciona
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl text-cream sm:text-3xl">
                  {stat.value}
                </dd>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal as="div" delay={120} className="relative mx-auto w-full max-w-md">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-card">
            <PlaceholderImage
              slug="hero-professional"
              alt="Foto do profissional em ambiente de atendimento — substituir por foto real"
              width={900}
              height={1100}
              priority
              sizes="(min-width: 1024px) 420px, 80vw"
              className="h-full w-full object-cover"
            />
          </div>

          {/* card flutuante estilo "ficha" — elemento de assinatura */}
          <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-xl border border-white/10 bg-graphite-900/95 p-4 shadow-card backdrop-blur sm:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-green-400">
              Ficha de avaliação
            </p>
            <ul className="mt-3 space-y-1.5 font-mono text-[11px] text-cream/90">
              <li className="flex justify-between">
                <span className="text-muted">Anamnese</span>
                <span>completa</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted">Plano</span>
                <span>individual</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted">Ajuste</span>
                <span>contínuo</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
