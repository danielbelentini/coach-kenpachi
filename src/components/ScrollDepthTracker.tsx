"use client";

import { useEffect, useRef } from "react";
import { trackScrollDepth } from "@/lib/analytics";

const MILESTONES = [25, 50, 75, 100] as const;

/**
 * Estrutura preparada para GA4/GTM (briefing V2, seção 23): dispara
 * scroll_depth uma única vez por marco (25/50/75/100%) conforme o
 * visitante rola a página. Não renderiza nada — é só instrumentação.
 */
export function ScrollDepthTracker() {
  const firedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    function handleScroll() {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const scrolledPercentage =
        (window.scrollY / scrollableHeight) * 100;

      for (const milestone of MILESTONES) {
        if (
          scrolledPercentage >= milestone &&
          !firedRef.current.has(milestone)
        ) {
          firedRef.current.add(milestone);
          trackScrollDepth(milestone);
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
