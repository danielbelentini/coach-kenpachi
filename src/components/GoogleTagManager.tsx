import type { ConsentChoices, StoredConsent } from "@/lib/consent";

/**
 * Google Tag Manager — carregado SOMENTE após consentimento analítico.
 *
 * Diferente de antes, o GTM não é mais injetado no <head> a cada visita:
 * este módulo (chamado por <ConsentManager />) só insere o script depois
 * que o visitante autoriza cookies analíticos. Sem consentimento, nenhum
 * request ao googletagmanager.com é feito. O bloco <noscript> do GTM foi
 * removido de propósito: sem JavaScript não há como registrar o
 * consentimento, e o iframe carregaria o GTM sem autorização.
 *
 * O ID vem de NEXT_PUBLIC_GTM_ID (gravado no build). Se não estiver definido,
 * nada é carregado (ambientes de desenvolvimento/homologação sem GTM).
 *
 * Google Consent Mode v2: antes do script, o estado inicial é "denied" e,
 * em seguida, atualizado para o que o visitante autorizou. Ao revogar o
 * consentimento analítico depois do GTM carregado, o estado vai para
 * "denied", os cookies do Google (_ga*, _gid, _gcl_*) são removidos e a
 * página recarrega — o script já carregado não pode ser "descarregado".
 *
 * Marketing: nenhuma ferramenta de marketing (ex.: Meta Pixel) está
 * implementada. O estado de marketing só é repassado ao Consent Mode
 * (ad_storage, ad_user_data, ad_personalization). Ao adicionar uma
 * ferramenta, ela deve ser carregada somente quando
 * `consent.marketing === true` (ver docs/CONSENTIMENTO.md).
 */

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GTM_SCRIPT_ID = "gtm-script";

type ConsentState = "granted" | "denied";

/**
 * Equivalente ao `gtag()` oficial: o Consent Mode exige que o objeto
 * `arguments` (e não um array) seja enviado ao dataLayer.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments as unknown as Record<string, unknown>);
}

function toState(value: boolean): ConsentState {
  return value ? "granted" : "denied";
}

function consentParams(choices: ConsentChoices) {
  return {
    analytics_storage: toState(choices.analytics),
    ad_storage: toState(choices.marketing),
    ad_user_data: toState(choices.marketing),
    ad_personalization: toState(choices.marketing),
  };
}

export function isGoogleTagManagerLoaded(): boolean {
  return (
    typeof document !== "undefined" &&
    document.getElementById(GTM_SCRIPT_ID) !== null
  );
}

function loadGoogleTagManager(choices: ConsentChoices) {
  if (!GTM_ID || isGoogleTagManagerLoaded()) return;

  gtag("consent", "default", consentParams({ analytics: false, marketing: false }));
  gtag("consent", "update", consentParams(choices));
  // Mesmo "gtm.start" do snippet oficial, sem substituir o dataLayer existente.
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  const script = document.createElement("script");
  script.id = GTM_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`;
  document.head.appendChild(script);
}

/** Remove cookies do Google (GA4/GTM) no host e nos domínios pais. */
function clearGoogleCookies() {
  const names = document.cookie
    .split(";")
    .map((part) => part.split("=")[0].trim())
    .filter((name) => /^(_ga|_gid|_gat|_gcl_|_gac_)/.test(name));
  if (names.length === 0) return;

  const labels = window.location.hostname.split(".");
  const domains: (string | null)[] = [null];
  for (let i = 0; i < labels.length - 1; i++) {
    const domain = labels.slice(i).join(".");
    domains.push(domain, `.${domain}`);
  }

  const expired = "expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = domain
        ? `${name}=; ${expired}; domain=${domain}`
        : `${name}=; ${expired}`;
    }
  }
}

/**
 * Aplica o consentimento às ferramentas do Google:
 * - analítico autorizado e GTM ainda não carregado → carrega o GTM;
 * - analítico autorizado e GTM já carregado → só atualiza o Consent Mode;
 * - analítico não autorizado e GTM carregado (revogação) → nega, limpa e recarrega;
 * - analítico não autorizado e GTM não carregado → não faz nada (nada é carregado).
 * Idempotente: chamar mais de uma vez nunca duplica o script.
 */
export function applyGoogleConsent(consent: StoredConsent | null) {
  if (typeof window === "undefined") return;

  const analytics = consent?.analytics === true;
  const loaded = isGoogleTagManagerLoaded();

  if (analytics) {
    if (loaded && consent) {
      gtag("consent", "update", consentParams(consent));
    } else if (consent) {
      loadGoogleTagManager(consent);
    }
    return;
  }

  if (loaded) {
    gtag("consent", "update", consentParams({ analytics: false, marketing: false }));
    clearGoogleCookies();
    window.location.reload();
  }
}
