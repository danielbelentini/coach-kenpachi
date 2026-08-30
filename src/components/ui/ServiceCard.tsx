import type { ServiceItem } from "@/types/content";
import { IconClipboard, IconDumbbell, IconChart } from "@/components/ui/Icons";

const icons = {
  clipboard: IconClipboard,
  dumbbell: IconDumbbell,
  chart: IconChart,
} as const;

export function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = icons[service.icon];

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-graphite-900/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange-600/50 hover:shadow-card">
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green-900/50 text-brand-green-400 transition-colors duration-300 group-hover:bg-brand-orange-600/15 group-hover:text-brand-orange-600">
          <Icon className="h-5 w-5" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          {service.code}
        </span>
      </div>

      <h3 className="mt-6 font-display text-xl uppercase text-cream">
        {service.title}
      </h3>
      <p className="mt-3 font-body text-sm leading-relaxed text-muted">
        {service.description}
      </p>

      <ul className="mt-6 space-y-2 border-t border-white/10 pt-5">
        {service.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-2 font-body text-sm text-cream/80"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-orange-600" />
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  );
}
