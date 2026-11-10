"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  OPEN_PREFERENCES_EVENT,
  getConsent,
  getConsentSnapshot,
  saveConsent,
  subscribeConsent,
  type ConsentChoices,
} from "@/lib/consent";
import { applyGoogleConsent } from "@/components/GoogleTagManager";

const POLICY_HREF = "/politica-de-privacidade/";

const BUTTON_BASE =
  "inline-flex items-center justify-center font-bold rounded-[6px] min-h-12 px-6 py-[0.8rem] cursor-pointer text-center";
// Aceitar e Recusar têm exatamente o mesmo estilo: nenhuma opção é induzida.
const BUTTON_EQUAL =
  "bg-brand-orange text-white hover:bg-brand-orange-dark focus-visible:bg-brand-orange-dark";
const BUTTON_SECONDARY =
  "bg-transparent text-white border-[1.5px] border-brand-line hover:border-brand-orange hover:text-brand-orange focus-visible:border-brand-orange focus-visible:text-brand-orange";

const NONE: ConsentChoices = { analytics: false, marketing: false };

type StoredConsentOrNone = ReturnType<typeof getConsentSnapshot> | undefined;

/**
 * Barra de consentimento + central de personalização de cookies.
 *
 * - Aparece quando não há escolha válida (primeira visita ou nova versão).
 * - Categorias opcionais nunca vêm ativadas.
 * - É também quem aplica o consentimento ao GTM: o script só é carregado
 *   após autorização analítica e é neutralizado na revogação
 *   (ver src/components/GoogleTagManager.tsx).
 * - Reaberta pelo botão "Preferências de cookies" do rodapé.
 *
 * Renderizado uma vez no layout raiz. Ver docs/CONSENTIMENTO.md.
 */
export function ConsentManager() {
  // `undefined` = ainda não hidratou no navegador (nada é exibido);
  // `null` = sem escolha válida; objeto = escolha registrada.
  // useSyncExternalStore também acompanha mudanças feitas em outras abas.
  const consent = useSyncExternalStore<StoredConsentOrNone>(
    subscribeConsent,
    getConsentSnapshot,
    () => undefined
  );
  const [panelOpen, setPanelOpen] = useState(false);
  const [draft, setDraft] = useState<ConsentChoices>(NONE);

  const barRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Aplica o consentimento ao GTM sempre que ele muda (inclui a 1ª leitura).
  // Idempotente: nunca duplica o script (ver applyGoogleConsent).
  useEffect(() => {
    if (consent !== undefined) applyGoogleConsent(consent);
  }, [consent]);

  // Botão "Preferências de cookies" do rodapé reabre a central.
  useEffect(() => {
    const openPanel = () => {
      const stored = getConsent();
      setDraft(
        stored
          ? { analytics: stored.analytics, marketing: stored.marketing }
          : NONE
      );
      setPanelOpen(true);
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, openPanel);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, openPanel);
  }, []);

  // <dialog> nativo: foco preso no modal, Esc fecha, foco volta ao botão de origem.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (panelOpen && !dialog.open) dialog.showModal();
    if (!panelOpen && dialog.open) dialog.close();
  }, [panelOpen]);

  const showBar = consent === null;

  // Informa a altura da barra ao resto da página (--cookie-bar-height) para que
  // o botão flutuante do WhatsApp suba e nunca fique coberto.
  useEffect(() => {
    const root = document.documentElement;
    const bar = barRef.current;
    if (!showBar || !bar) {
      root.style.removeProperty("--cookie-bar-height");
      return;
    }
    const update = () =>
      root.style.setProperty("--cookie-bar-height", `${bar.offsetHeight}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(bar);
    return () => {
      observer.disconnect();
      root.style.removeProperty("--cookie-bar-height");
    };
  }, [showBar]);

  function choose(choices: ConsentChoices) {
    saveConsent(choices);
    setPanelOpen(false);
  }

  function openCustomize() {
    setDraft(NONE);
    setPanelOpen(true);
  }

  return (
    <>
      {showBar && (
        <div
          ref={barRef}
          role="region"
          aria-label="Aviso de cookies"
          className="fixed inset-x-0 bottom-0 z-[950] bg-brand-graphite-light border-t border-brand-line"
        >
          <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <p className="m-0 text-white text-[0.95rem] max-w-[70ch]">
              Usamos cookies e tecnologias semelhantes para o funcionamento do
              site e, com a sua permissão, para entender como ele é utilizado e
              medir seu desempenho. Você pode aceitar, recusar ou personalizar.
              Saiba mais na{" "}
              <a
                href={POLICY_HREF}
                className="underline underline-offset-4 text-brand-orange hover:opacity-75 focus-visible:opacity-75"
              >
                Política de Privacidade
              </a>
              .
            </p>
            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                type="button"
                className={`${BUTTON_BASE} ${BUTTON_EQUAL} flex-1 sm:flex-none`}
                onClick={() => choose({ analytics: true, marketing: true })}
              >
                Aceitar todos
              </button>
              <button
                type="button"
                className={`${BUTTON_BASE} ${BUTTON_EQUAL} flex-1 sm:flex-none`}
                onClick={() => choose(NONE)}
              >
                Recusar
              </button>
              <button
                type="button"
                className={`${BUTTON_BASE} ${BUTTON_SECONDARY} w-full sm:w-auto`}
                onClick={openCustomize}
              >
                Personalizar
              </button>
            </div>
          </div>
        </div>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby="cookie-panel-title"
        className="m-auto w-[calc(100%-2rem)] max-w-[600px] max-h-[calc(100dvh-2rem)] p-0 rounded-[6px] border border-brand-line bg-brand-graphite-light text-white overflow-y-auto backdrop:bg-black/70"
        onClose={() => setPanelOpen(false)}
        onClick={(event) => {
          // Clique no fundo escurecido (o próprio <dialog>) fecha sem salvar.
          if (event.target === event.currentTarget) setPanelOpen(false);
        }}
      >
        <div className="p-5 md:p-7">
          <h2
            id="cookie-panel-title"
            className="!text-[1.6rem] !mb-2"
          >
            Preferências de cookies
          </h2>
          <p className="text-[0.95rem]">
            Escolha quais categorias você autoriza. Você pode mudar ou revogar
            sua escolha a qualquer momento pelo link &ldquo;Preferências de
            cookies&rdquo; no rodapé. Detalhes na{" "}
            <a
              href={POLICY_HREF}
              className="underline underline-offset-4 text-brand-orange hover:opacity-75 focus-visible:opacity-75"
            >
              Política de Privacidade
            </a>
            .
          </p>

          <ul className="list-none p-0 m-0 flex flex-col gap-4">
            <li className="border border-brand-line rounded-[6px] p-4">
              <div className="flex items-center justify-between gap-4">
                <h3 className="!mb-0">Cookies necessários</h3>
                <span className="text-[0.8rem] font-bold text-brand-muted whitespace-nowrap">
                  Sempre ativos
                </span>
              </div>
              <p className="mt-2 mb-0 text-[0.9rem]">
                Garantem o funcionamento básico do site e guardam as suas
                escolhas de cookies no armazenamento local do navegador. Não
                podem ser desativados.
              </p>
            </li>

            <li className="border border-brand-line rounded-[6px] p-4">
              <label className="flex items-center justify-between gap-4 cursor-pointer">
                <h3 className="!mb-0">Cookies analíticos</h3>
                <input
                  type="checkbox"
                  className="h-6 w-6 shrink-0 accent-brand-orange cursor-pointer"
                  checked={draft.analytics}
                  onChange={(event) =>
                    setDraft({ ...draft, analytics: event.target.checked })
                  }
                  aria-describedby="cookie-analytics-desc"
                />
              </label>
              <p id="cookie-analytics-desc" className="mt-2 mb-0 text-[0.9rem]">
                Ajudam a entender como o site é usado e a medir seu
                desempenho, por meio do Google Tag Manager e do Google
                Analytics 4. Só são carregados se você permitir.
              </p>
            </li>

            <li className="border border-brand-line rounded-[6px] p-4">
              <label className="flex items-center justify-between gap-4 cursor-pointer">
                <h3 className="!mb-0">Cookies de marketing</h3>
                <input
                  type="checkbox"
                  className="h-6 w-6 shrink-0 accent-brand-orange cursor-pointer"
                  checked={draft.marketing}
                  onChange={(event) =>
                    setDraft({ ...draft, marketing: event.target.checked })
                  }
                  aria-describedby="cookie-marketing-desc"
                />
              </label>
              <p id="cookie-marketing-desc" className="mt-2 mb-0 text-[0.9rem]">
                Servem para medir campanhas e publicidade com ferramentas de
                terceiros, como o Meta Pixel. No momento, este site não usa
                nenhuma ferramenta de marketing; a sua escolha fica registrada
                caso isso mude.
              </p>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              className={`${BUTTON_BASE} ${BUTTON_EQUAL} flex-1`}
              onClick={() => choose(draft)}
            >
              Salvar minhas preferências
            </button>
            <button
              type="button"
              className={`${BUTTON_BASE} ${BUTTON_EQUAL} flex-1`}
              onClick={() => choose({ analytics: true, marketing: true })}
            >
              Aceitar todos
            </button>
            <button
              type="button"
              className={`${BUTTON_BASE} ${BUTTON_EQUAL} flex-1`}
              onClick={() => choose(NONE)}
            >
              Recusar opcionais
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
