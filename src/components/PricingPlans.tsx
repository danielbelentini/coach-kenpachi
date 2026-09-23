import { Reveal } from "./Reveal";

/**
 * Valores e condições exatamente como definidos no briefing V2 (seção 11).
 * Não alterar preços, economia ou selos sem uma nova instrução explícita —
 * ver seção 32 do briefing ("regras absolutas de estratégia").
 */
const PLANS = [
  {
    name: "Mensal",
    price: "R$ 499,90",
    priceSuffix: "/mês",
    perMonth: null as string | null,
    savings: null as string | null,
    badge: null as { label: string; variant: "orange" | "green" } | null,
  },
  {
    name: "Trimestral",
    price: "R$ 1.299,90",
    priceSuffix: null,
    perMonth: "R$ 433,30/mês",
    savings: "Economia de R$ 199,80",
    badge: { label: "Mais escolhido", variant: "orange" as const },
  },
  {
    name: "Semestral",
    price: "R$ 2.199,90",
    priceSuffix: null,
    perMonth: "R$ 366,65/mês",
    savings: "Economia de R$ 799,50",
    badge: { label: "Maior economia", variant: "green" as const },
  },
];

const BADGE_VARIANT_CLASSES: Record<"orange" | "green", string> = {
  orange: "bg-brand-orange",
  green: "bg-brand-green",
};

export function PricingPlans() {
  return (
    <div className="mt-12 pt-10 border-t border-brand-line">
      <Reveal>
        <h3 className="text-center mb-8">Escolha o período do seu acompanhamento</h3>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-3 md:items-stretch">
        {PLANS.map((plan, index) => (
          <Reveal
            key={plan.name}
            delay={index * 80}
            className={`relative bg-brand-graphite border rounded-[10px] px-6 py-7 text-center flex flex-col gap-[0.35rem] ${
              plan.badge ? "border-brand-orange" : "border-brand-line"
            }`}
          >
            {plan.badge && (
              <span
                className={`inline-block text-white font-bold text-[0.8rem] px-[0.85rem] py-[0.35rem] rounded-full self-center mb-2 ${
                  BADGE_VARIANT_CLASSES[plan.badge.variant]
                }`}
              >
                {plan.badge.label}
              </span>
            )}
            <h4 className="font-bold text-base uppercase tracking-[0.04em] text-brand-muted mb-1">
              {plan.name}
            </h4>
            <p className="text-white font-extrabold text-[1.6rem] mb-0">
              {plan.price}
              {plan.priceSuffix && (
                <span className="text-base font-semibold text-brand-muted ml-1">
                  {plan.priceSuffix}
                </span>
              )}
            </p>
            {plan.perMonth && (
              <p className="text-brand-muted text-[0.9rem] mb-0">{plan.perMonth}</p>
            )}
            {plan.savings && (
              <p className="text-brand-orange font-bold text-[0.85rem] mb-0">
                {plan.savings}
              </p>
            )}
          </Reveal>
        ))}
      </div>

      <p className="mt-6 text-center text-[0.85rem]">
        Parcelamento disponível. Consulte as condições pelo WhatsApp.
      </p>
    </div>
  );
}
