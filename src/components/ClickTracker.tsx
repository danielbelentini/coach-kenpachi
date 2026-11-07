"use client";

import { useEffect } from "react";
import { initClickTracking } from "@/lib/click-tracking";

/**
 * Monta, uma única vez, o listener de clique delegado do rastreamento
 * (whatsapp_click, navigation_click, social_click). Não renderiza nada.
 * Renderizado no layout raiz — nenhum outro componente cria listeners de
 * tracking. Ver src/lib/click-tracking.ts e docs/EVENTOS.md.
 */
export function ClickTracker() {
  useEffect(() => initClickTracking(), []);
  return null;
}
