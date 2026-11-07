/**
 * Rastreamento de cliques por delegação (padrão de dataLayer D.R.A. Seguros).
 *
 * Um único listener no `document` (montado uma vez em <ClickTracker />, no
 * layout) observa cliques em links marcados com atributos `data-*` e envia
 * um evento para o `window.dataLayer`. Componentes NÃO têm onClick nem lógica
 * de tracking: para rastrear um novo link basta adicionar os atributos.
 *
 *   WhatsApp:            data-wa-section + data-wa-button
 *   Outra página / rede: data-track-event ("navigation_click" | "social_click")
 *                        + data-track-section + data-track-button
 *
 * Todo evento tem exatamente cinco parâmetros além de `event`:
 * page_name, section_name, button_name, button_label, link_url.
 *
 * Ver docs/EVENTOS.md.
 */

import { pushToDataLayer } from "@/lib/analytics";

export type ClickEventName =
  | "whatsapp_click"
  | "navigation_click"
  | "social_click";

export type ClickEventPayload = {
  event: ClickEventName;
  page_name: string;
  section_name: string;
  button_name: string;
  button_label: string;
  link_url: string;
};

/** Valores aceitos em `data-track-event`. Qualquer outro valor é ignorado. */
const TRACK_EVENTS: readonly string[] = ["navigation_click", "social_click"];

/** Hosts cujo destino é o WhatsApp. */
const WHATSAPP_HOSTS: readonly string[] = [
  "wa.me",
  "api.whatsapp.com",
  "web.whatsapp.com",
  "chat.whatsapp.com",
  "whatsapp.com",
  "www.whatsapp.com",
];

/** Remove "/index.html", ".html" e barras finais; a raiz continua "/". */
function normalizePath(pathname: string): string {
  const path = pathname
    .replace(/\/index\.html?$/i, "/")
    .replace(/\.html?$/i, "")
    .replace(/\/+$/, "");
  return path === "" ? "/" : path;
}

/**
 * Identificador estável da página, derivado do pathname no momento do clique:
 * "/" -> "home"; "/seguro-auto/" -> "seguro_auto"; "/blog/post-x" -> "blog_post_x".
 */
export function getPageName(pathname: string): string {
  let decoded = pathname;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    // pathname com escape inválido: segue com o valor original.
  }
  const path = normalizePath(decoded);
  if (path === "/") return "home";
  const name = path
    .replace(/^\/+/, "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
  return name || "home";
}

function isWhatsAppUrl(url: URL): boolean {
  if (url.protocol === "whatsapp:") return true;
  if (url.protocol !== "https:" && url.protocol !== "http:") return false;
  return WHATSAPP_HOSTS.includes(url.hostname.toLowerCase());
}

function isHttpUrl(url: URL): boolean {
  return url.protocol === "http:" || url.protocol === "https:";
}

/** `true` se o destino é OUTRA página do mesmo site (comparado com a página atual agora). */
function isOtherPageOfSite(dest: URL, current: Location): boolean {
  if (!isHttpUrl(dest)) return false;
  if (dest.origin !== current.origin) return false;
  return normalizePath(dest.pathname) !== normalizePath(current.pathname);
}

/**
 * Texto visível real do elemento, com espaços normalizados. Ignora o que não
 * é visível: `aria-hidden`, `.sr-only` (texto só para leitor de tela),
 * `hidden` e elementos com display:none / visibility:hidden.
 */
function getVisibleText(root: Element): string {
  const parts: string[] = [];

  const walk = (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      parts.push(node.textContent ?? "");
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return;

    const el = node as Element;
    if (el !== root) {
      if (el.getAttribute("aria-hidden") === "true") return;
      if (el.classList.contains("sr-only")) return;
      if (el.hasAttribute("hidden")) return;
      const style = window.getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden") return;
    }

    parts.push(" ");
    el.childNodes.forEach(walk);
    parts.push(" ");
  };

  walk(root);
  return parts.join("").replace(/\s+/g, " ").trim();
}

/**
 * `button_label`: texto visível; se não houver (ex.: botão só com ícone),
 * usa o `aria-label` que já existe no elemento. Nunca inventa um rótulo.
 */
function getButtonLabel(anchor: HTMLAnchorElement): string {
  const visible = getVisibleText(anchor);
  if (visible) return visible;
  return (anchor.getAttribute("aria-label") ?? "").replace(/\s+/g, " ").trim();
}

/** Mensagem de ajuda apenas fora de produção (nunca polui o console do visitante). */
function devWarn(message: string) {
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.warn(`[tracking] ${message}`);
  }
}

/**
 * Decide, para um link, qual evento (se algum) deve ser enviado.
 * Função pura em relação ao dataLayer: só lê o DOM e a localização.
 * Retorna `null` quando o clique NÃO deve gerar evento.
 */
export function buildClickEvent(
  anchor: HTMLAnchorElement,
  current: Location = window.location
): ClickEventPayload | null {
  const rawHref = anchor.getAttribute("href");
  if (!rawHref) return null;

  let dest: URL;
  try {
    dest = new URL(anchor.href, current.href);
  } catch {
    return null;
  }

  // Nunca rastreia e-mail, telefone, javascript: etc.
  if (!isHttpUrl(dest) && dest.protocol !== "whatsapp:") return null;

  let event: ClickEventName;
  let section: string | undefined;
  let button: string | undefined;

  if (anchor.hasAttribute("data-wa-button") || anchor.hasAttribute("data-wa-section")) {
    // WhatsApp: precisa estar marcado E realmente levar ao WhatsApp.
    if (!isWhatsAppUrl(dest)) return null;
    event = "whatsapp_click";
    section = anchor.getAttribute("data-wa-section") ?? undefined;
    button = anchor.getAttribute("data-wa-button") ?? undefined;
  } else {
    const requested = anchor.getAttribute("data-track-event");
    if (!requested || !TRACK_EVENTS.includes(requested)) {
      if (isWhatsAppUrl(dest)) {
        devWarn(
          `Link de WhatsApp sem data-wa-section/data-wa-button não será rastreado: ${dest.href}`
        );
      }
      return null;
    }
    // Link do WhatsApp não é navegação nem rede social.
    if (isWhatsAppUrl(dest)) return null;

    if (requested === "navigation_click") {
      // Âncora da mesma página (ou outro site) não é navigation_click.
      if (!isOtherPageOfSite(dest, current)) return null;
    } else if (dest.origin === current.origin) {
      // social_click é sempre um destino externo.
      return null;
    }

    event = requested as ClickEventName;
    section = anchor.getAttribute("data-track-section") ?? undefined;
    button = anchor.getAttribute("data-track-button") ?? undefined;
  }

  if (!section || !button) {
    devWarn(
      `Link marcado sem section/button (${event}): ${dest.href}. Evento não enviado.`
    );
    return null;
  }

  return {
    event,
    page_name: getPageName(current.pathname),
    section_name: section,
    button_name: button,
    button_label: getButtonLabel(anchor),
    link_url: dest.href,
  };
}

/** Garante que um mesmo evento do navegador nunca gere dois pushes. */
const handledEvents = new WeakSet<Event>();

function handleEvent(event: MouseEvent) {
  if (handledEvents.has(event)) return;

  // Clique principal em `click`; clique do meio apenas em `auxclick`.
  // Clique direito (botão 2) nunca gera evento.
  if (event.type === "click" && event.button !== 0) return;
  if (event.type === "auxclick" && event.button !== 1) return;

  const target = event.target;
  if (!(target instanceof Element)) return;

  const anchor = target.closest("a");
  if (!(anchor instanceof HTMLAnchorElement)) return;

  const payload = buildClickEvent(anchor);
  if (!payload) return;

  handledEvents.add(event);
  // Push síncrono, antes da navegação. Sem preventDefault.
  pushToDataLayer({ ...payload });
}

/**
 * Registra o listener delegado. Retorna a função de limpeza.
 * Chamar uma única vez (ver <ClickTracker /> no layout).
 */
export function initClickTracking(): () => void {
  document.addEventListener("click", handleEvent);
  document.addEventListener("auxclick", handleEvent);
  return () => {
    document.removeEventListener("click", handleEvent);
    document.removeEventListener("auxclick", handleEvent);
  };
}
