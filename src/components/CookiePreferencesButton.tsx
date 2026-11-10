"use client";

import { openCookiePreferences } from "@/lib/consent";

/**
 * Botão "Preferências de cookies" (rodapé). Reabre a central de
 * personalização, onde o visitante altera ou revoga o consentimento.
 * Isolado em um Client Component para que o Footer continue sendo um
 * Server Component.
 */
export function CookiePreferencesButton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`bg-transparent border-0 p-0 cursor-pointer text-left ${className}`.trim()}
      onClick={openCookiePreferences}
    >
      Preferências de cookies
    </button>
  );
}
