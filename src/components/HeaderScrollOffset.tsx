"use client";

import { useEffect } from "react";

/**
 * Mede a altura real do header sticky e expõe como a variável CSS
 * --header-height, usada em `scroll-padding-top` (globals.css).
 *
 * Por que isso existe: um valor fixo em px (ex.: 88px) quase nunca bate
 * exatamente com a altura real do header em todos os breakpoints — sobra
 * ou falta alguns pixels, criando um gap visível ("linha dupla") entre o
 * header e o título da seção ao clicar num link do menu. Medindo a altura
 * de verdade, o espaço reservado é sempre exato.
 *
 * Não renderiza nada — é só instrumentação.
 */
export function HeaderScrollOffset() {
  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    function setOffset() {
      const height = header!.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--header-height", `${height}px`);
    }

    setOffset();

    const observer = new ResizeObserver(setOffset);
    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  return null;
}
