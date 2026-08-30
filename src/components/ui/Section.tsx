import type { ReactNode } from "react";

type SectionTone = "base" | "alt";

interface SectionProps {
  id?: string;
  tone?: SectionTone;
  children: ReactNode;
  className?: string;
  /** Remove o padding horizontal/vertical padrão (para seções full-bleed, ex: CTA final) */
  noPadding?: boolean;
}

const toneClasses: Record<SectionTone, string> = {
  base: "bg-graphite-950",
  alt: "bg-graphite-800",
};

/**
 * Cada seção alterna entre dois tons de grafite para separar
 * visualmente o conteúdo sem depender de bordas ou sombras fortes.
 */
export function Section({
  id,
  tone = "base",
  children,
  className = "",
  noPadding = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${toneClasses[tone]} ${
        noPadding ? "" : "py-20 sm:py-28"
      } ${className}`}
    >
      {noPadding ? (
        children
      ) : (
        <div className="mx-auto max-w-content px-6 sm:px-8">{children}</div>
      )}
    </section>
  );
}
