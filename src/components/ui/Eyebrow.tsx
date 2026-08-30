interface EyebrowProps {
  children: string;
  className?: string;
}

/**
 * Pequena etiqueta em fonte mono, como uma tag de rótulo em uma
 * ficha de avaliação. Usada como "olho" acima dos títulos de seção.
 */
export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-brand-green-400/30 bg-brand-green-900/40 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-green-400 ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-orange-600" />
      {children}
    </span>
  );
}
