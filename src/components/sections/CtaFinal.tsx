import { buildWhatsAppLink } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { ThinDivider } from "@/components/ui/ThinDivider";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";

export function CtaFinal() {
  return (
    <section className="relative isolate overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 -z-10">
        <PlaceholderImage
          slug="cta-background"
          alt="Ambiente de treino — substituir por foto real de fundo"
          width={1800}
          height={950}
          className="h-full w-full object-cover"
        />
        {/* overlay para garantir contraste do texto sobre a foto */}
        <div className="absolute inset-0 bg-graphite-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/60 to-graphite-950/30" />
      </div>

      <Reveal
        as="div"
        className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center sm:px-8"
      >
        <h2 className="font-display text-3xl uppercase leading-tight text-cream sm:text-5xl">
          Sua próxima fase começa com uma avaliação de verdade
        </h2>

        <ThinDivider className="mt-8" tone="orange" />

        <p className="mt-8 max-w-md font-body text-base leading-relaxed text-muted sm:text-lg">
          Agende sua anamnese completa e receba um plano alimentar
          construído para o seu treino, sua rotina e seu objetivo.
        </p>

        <Button
          href={buildWhatsAppLink()}
          size="lg"
          className="mt-10"
          gtmId="whatsapp_cta_final"
        >
          Agendar minha avaliação
        </Button>
      </Reveal>
    </section>
  );
}
