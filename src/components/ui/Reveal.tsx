"use client";

import type { ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}

/**
 * Revela o conteúdo com um leve fade + translate ao entrar na tela.
 * Usa a classe utilitária `.reveal` (ver globals.css), que já
 * respeita `prefers-reduced-motion` via useInView.
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}: RevealProps) {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isInView ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: isInView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
