import type { TestimonialItem } from "@/types/content";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { IconQuote } from "@/components/ui/Icons";

export function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-graphite-950/50 p-7 transition-colors duration-300 hover:border-brand-green-400/40">
      <IconQuote className="h-6 w-6 text-brand-orange-600/70" />

      <blockquote className="mt-4 flex-1 font-body text-[15px] leading-relaxed text-cream/90">
        &ldquo;{item.quote}&rdquo;
      </blockquote>

      <p className="mt-5 font-mono text-[11px] uppercase tracking-wide text-brand-green-400">
        {item.result}
      </p>

      <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5">
        <PlaceholderImage
          slug={item.avatar}
          alt={`Foto de ${item.name} — substituir por foto real`}
          width={80}
          height={80}
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <p className="font-body text-sm font-medium text-cream">{item.name}</p>
          <p className="font-body text-xs text-muted">{item.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
