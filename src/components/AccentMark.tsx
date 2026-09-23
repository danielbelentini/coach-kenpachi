type AccentMarkProps = {
  className?: string;
};

/**
 * Grafismo decorativo discreto: três barras diagonais ecoando o traço da
 * seta laranja do logo. Usado para enriquecer o cabeçalho de seções que,
 * de outra forma, ficariam só com texto — sem competir com a leitura
 * (seção 14 do briefing).
 */
export function AccentMark({ className = "" }: AccentMarkProps) {
  const bar = "block w-[6px] rounded-[2px] bg-brand-orange -skew-x-12";

  return (
    <span
      className={`inline-flex items-end gap-1 h-[22px] mb-3 ${className}`.trim()}
      aria-hidden="true"
    >
      <span className={`${bar} h-[45%] opacity-50`} />
      <span className={`${bar} h-full`} />
      <span className={`${bar} h-[65%] opacity-75`} />
    </span>
  );
}
