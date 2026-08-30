interface ThinDividerProps {
  className?: string;
  tone?: "orange" | "green" | "cream";
}

const toneClasses: Record<NonNullable<ThinDividerProps["tone"]>, string> = {
  orange: "bg-brand-orange-600",
  green: "bg-brand-green-400",
  cream: "bg-cream/40",
};

/**
 * Linha fina com pequenas marcas nas pontas, lembrando uma régua de
 * medição — o elemento de assinatura visual da página, ecoando a
 * ideia de anamnese/avaliação individual do profissional.
 */
export function ThinDivider({ className = "", tone = "orange" }: ThinDividerProps) {
  return (
    <div
      className={`flex items-center justify-center gap-2 ${className}`}
      aria-hidden="true"
    >
      <span className={`h-2 w-px ${toneClasses[tone]}`} />
      <span className={`h-px w-16 sm:w-24 ${toneClasses[tone]}`} />
      <span className={`h-2 w-px ${toneClasses[tone]}`} />
    </div>
  );
}
