import type { SVGProps } from "react";

/**
 * Ícones inline como SVG puro. Mantemos como componentes simples
 * (sem biblioteca externa) para reduzir peso do bundle e evitar
 * dependência de pacotes de terceiros no build estático.
 */

export function IconWhatsApp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.02 2C6.5 2 2 6.477 2 11.976c0 1.98.577 3.83 1.573 5.394L2 22l4.79-1.548a10.03 10.03 0 0 0 5.23 1.42h.004c5.52 0 10.02-4.477 10.02-9.976C22.044 6.477 17.54 2 12.02 2Zm0 18.267h-.003a8.28 8.28 0 0 1-4.223-1.155l-.303-.18-3.146 1.017 1.033-3.062-.198-.315a8.216 8.216 0 0 1-1.267-4.396c0-4.55 3.72-8.253 8.31-8.253 2.222 0 4.31.867 5.877 2.44a8.19 8.19 0 0 1 2.432 5.822c0 4.55-3.722 8.082-8.512 8.082Z" />
    </svg>
  );
}

export function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconLinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.5 9.75h3v10.75h-3V9.75Zm6.28 0h2.88v1.47h.04c.4-.76 1.38-1.56 2.85-1.56 3.04 0 3.6 2 3.6 4.6v6.24h-3v-5.53c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93v5.62h-3V9.75Z" />
    </svg>
  );
}

export function IconYouTube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.6 7.2s-.21-1.49-.86-2.15c-.82-.86-1.74-.86-2.16-.91C15.6 4 12 4 12 4h-.01s-3.6 0-6.58.14c-.42.05-1.34.05-2.16.91C2.6 5.71 2.4 7.2 2.4 7.2S2.2 8.94 2.2 10.68v1.63c0 1.74.2 3.48.2 3.48s.21 1.49.85 2.15c.82.87 1.9.84 2.38.93 1.73.17 7.37.22 7.37.22s3.6-.01 6.59-.15c.42-.06 1.34-.06 2.16-.93.65-.66.86-2.15.86-2.15s.2-1.74.2-3.48v-1.63c0-1.74-.2-3.48-.2-3.48ZM9.98 14.6V8.8l5.6 2.91-5.6 2.9Z" />
    </svg>
  );
}

export function IconChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconClipboard(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="6" y="4" width="12" height="17" rx="1.5" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M9 10.5h6M9 14h6M9 17.5h3.5" />
    </svg>
  );
}

export function IconDumbbell(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 9v6M2.5 10.5v3M6.5 7.5v9" />
      <path d="M20 9v6M21.5 10.5v3M17.5 7.5v9" />
      <path d="M6.5 12h11" />
    </svg>
  );
}

export function IconChart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 20V10M12 20V4M20 20v-7" />
      <path d="M2.5 20h19" />
    </svg>
  );
}

export function IconQuote(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9.5 6.5c-3 1.1-5 3.9-5 7.1 0 2.7 1.8 4.4 4 4.4 1.9 0 3.3-1.4 3.3-3.3 0-1.8-1.2-3-2.9-3.1-.2 0-.4 0-.6.1.3-1.5 1.6-2.9 3.2-3.5l-2-1.7Zm9 0c-3 1.1-5 3.9-5 7.1 0 2.7 1.8 4.4 4 4.4 1.9 0 3.3-1.4 3.3-3.3 0-1.8-1.2-3-2.9-3.1-.2 0-.4 0-.6.1.3-1.5 1.6-2.9 3.2-3.5l-2-1.7Z" />
    </svg>
  );
}
