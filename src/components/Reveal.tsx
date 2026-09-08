"use client";

import { useEffect, useRef, useState, type PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  /** Atraso opcional em ms, usado para escalonar elementos dentro de uma grade. */
  delay?: number;
}>;

/**
 * Entrada suave única quando a seção entra no viewport.
 * `prefers-reduced-motion` é tratado via CSS (ver globals.css), não aqui —
 * assim o conteúdo nunca fica escondido caso o JS falhe ao carregar.
 */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal--visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
