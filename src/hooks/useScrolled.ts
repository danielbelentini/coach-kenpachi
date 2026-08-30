"use client";

import { useEffect, useState } from "react";

/**
 * Retorna `true` assim que a página é rolada além de `threshold` pixels.
 * Usado pelo header fixo para trocar de transparente para sólido.
 */
export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
