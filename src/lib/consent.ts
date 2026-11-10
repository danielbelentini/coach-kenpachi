/**
 * Consentimento de cookies (LGPD) — armazenamento e leitura das escolhas.
 *
 * Tudo roda no navegador (compatível com `output: 'export'`): as escolhas
 * ficam no localStorage, junto com a data e a versão da política de
 * consentimento aceita. Categorias opcionais NUNCA começam ativadas.
 *
 * Para pedir uma nova escolha a todos os visitantes (ex.: mudança relevante
 * na política ou nova ferramenta de análise/marketing), aumente
 * CONSENT_VERSION: o consentimento salvo com outra versão é tratado como
 * inexistente e a barra volta a aparecer.
 *
 * Ver docs/CONSENTIMENTO.md.
 */

export const CONSENT_VERSION = "1.0";
export const CONSENT_STORAGE_KEY = "kenpachi_cookie_consent";
/** Evento do navegador que reabre a central de preferências (usado pelo rodapé). */
export const OPEN_PREFERENCES_EVENT = "kenpachi:open-cookie-preferences";

export type ConsentChoices = {
  analytics: boolean;
  marketing: boolean;
};

export type StoredConsent = ConsentChoices & {
  /** Cookies necessários: sempre ativos. */
  necessary: true;
  version: string;
  /** Data/hora (ISO 8601) em que a escolha foi registrada. */
  timestamp: string;
};

// Se o localStorage estiver indisponível (modo privado restrito, bloqueio),
// a escolha vale apenas na aba atual, em memória.
let memoryFallback: string | null = null;

function readRaw(): string | null {
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY) ?? memoryFallback;
  } catch {
    return memoryFallback;
  }
}

function parse(raw: string | null): StoredConsent | null {
  if (!raw) return null;
  try {
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== "object") return null;
    const v = value as Record<string, unknown>;
    if (
      v.version !== CONSENT_VERSION ||
      typeof v.analytics !== "boolean" ||
      typeof v.marketing !== "boolean" ||
      typeof v.timestamp !== "string" ||
      Number.isNaN(Date.parse(v.timestamp))
    ) {
      return null;
    }
    return {
      necessary: true,
      version: v.version,
      timestamp: v.timestamp,
      analytics: v.analytics,
      marketing: v.marketing,
    };
  } catch {
    return null;
  }
}

/** Consentimento válido (versão atual) ou `null` se ainda não houve escolha. */
export function getConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  return parse(readRaw());
}

let snapshotRaw: string | null | undefined;
let snapshotValue: StoredConsent | null = null;

/**
 * Versão com referência estável de `getConsent()`, para `useSyncExternalStore`:
 * devolve o MESMO objeto enquanto o valor guardado não mudar.
 */
export function getConsentSnapshot(): StoredConsent | null {
  const raw = readRaw();
  if (raw !== snapshotRaw) {
    snapshotRaw = raw;
    snapshotValue = parse(raw);
  }
  return snapshotValue;
}

/** `true` somente se o visitante autorizou cookies analíticos. */
export function hasAnalyticsConsent(): boolean {
  return getConsent()?.analytics === true;
}

type Listener = () => void;
const listeners = new Set<Listener>();

/** Registra e notifica a escolha. Recusar/revogar = salvar tudo `false`. */
export function saveConsent(choices: ConsentChoices): StoredConsent {
  const consent: StoredConsent = {
    necessary: true,
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    analytics: choices.analytics === true,
    marketing: choices.marketing === true,
  };
  const raw = JSON.stringify(consent);
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, raw);
  } catch {
    memoryFallback = raw;
  }
  listeners.forEach((listener) => listener());
  return consent;
}

/**
 * Assina mudanças de consentimento: escolhas feitas nesta aba e em outras
 * abas do mesmo navegador (evento `storage`).
 */
export function subscribeConsent(listener: Listener): () => void {
  listeners.add(listener);

  const onStorage = (event: StorageEvent) => {
    if (event.key === CONSENT_STORAGE_KEY || event.key === null) {
      listener();
    }
  };
  window.addEventListener("storage", onStorage);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

/** Reabre a central de preferências (botão "Preferências de cookies" do rodapé). */
export function openCookiePreferences() {
  window.dispatchEvent(new CustomEvent(OPEN_PREFERENCES_EVENT));
}
