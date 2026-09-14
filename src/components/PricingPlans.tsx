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

export function PricingPlans() {
  return (
    <div className="pricing">
      <Reveal>
        <h3 className="pricing__heading">Escolha o período do seu acompanhamento</h3>
      </Reveal>

      <div className="pricing__grid">
        {PLANS.map((plan, index) => (
          <Reveal
            key={plan.name}
            delay={index * 80}
            className={`pricing__card ${plan.badge ? "pricing__card--highlighted" : ""}`.trim()}
          >
            {plan.badge && (
              <span className={`badge badge--${plan.badge.variant}`}>
                {plan.badge.label}
              </span>
            )}
            <h4 className="pricing__plan-name">{plan.name}</h4>
            <p className="pricing__price">
              {plan.price}
              {plan.priceSuffix && (
                <span className="pricing__price-suffix">{plan.priceSuffix}</span>
              )}
            </p>
            {plan.perMonth && <p className="pricing__per-month">{plan.perMonth}</p>}
            {plan.savings && <p className="pricing__savings">{plan.savings}</p>}
          </Reveal>
        ))}
      </div>

      <p className="pricing__note">
        Parcelamento disponível. Consulte as condições pelo WhatsApp.
      </p>
    </div>
  );
}
