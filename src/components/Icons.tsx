type IconProps = {
  className?: string;
};

/**
 * Ícones simples, desenhados como formas geométricas genéricas (linha única,
 * flat), sem uso de nenhum pacote de ícones de terceiros — mantém a
 * identidade "limpa, flat, sofisticada" pedida na seção 14 do briefing e
 * evita qualquer questão de licenciamento.
 */

export function IconCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.5 12.5l3 3 6-6" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconGraduation({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path d="M2 8.5L12 4l10 4.5-10 4.5-10-4.5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 10.5v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 9v6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v5.5l4 2.2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLayers({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path d="M12 3l9 5-9 5-9-5 9-5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3 13l9 5 9-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function IconApple({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        d="M15.5 8.2c-1-.9-2.2-.9-3-.4-.8-.5-2-.5-3 .4-1.4 1.3-1.6 4.4.4 7.2 1 1.4 1.9 2.2 2.6 2.2s1.6-.8 2.6-2.2c2-2.8 1.8-5.9.4-7.2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12.5 7.5c0-1.2.8-2 2-2.2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconDumbbell({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path d="M6 9v6M4 10.5v3M20 10.5v3M18 9v6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path d="M6 12h12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
