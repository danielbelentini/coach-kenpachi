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
  return (
    <span className={`accent-mark ${className}`.trim()} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}
