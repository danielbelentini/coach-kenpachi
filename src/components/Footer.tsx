import Image from "next/image";
import { siteConfig } from "@/config/site";
import { CookiePreferencesButton } from "./CookiePreferencesButton";
import { InstagramLink } from "./InstagramLink";

const NAV_LINK_CLASSES =
  "hover:opacity-75 hover:text-brand-orange focus-visible:opacity-75 focus-visible:text-brand-orange";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-graphite-light border-t border-brand-line pt-12 pb-6">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8 grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src="/images/logo-coach-kenpachi.png"
            alt="Coach Kenpachi"
            width={180}
            height={51}
          />
          <p className="mt-4 max-w-[40ch]">
            Acompanhamento de nutrição e treinamento com planejamento
            estruturado para você executar na academia com direção clara.
          </p>
        </div>

        <nav className="flex flex-col gap-[0.6rem]" aria-label="Navegação do rodapé">
          <a href="#inicio" className={NAV_LINK_CLASSES}>Início</a>
          <a href="#consultoria" className={NAV_LINK_CLASSES}>Consultoria</a>
          <a href="#como-funciona" className={NAV_LINK_CLASSES}>Como funciona</a>
          <a href="#resultados" className={NAV_LINK_CLASSES}>Resultados</a>
          <a href="#sobre" className={NAV_LINK_CLASSES}>Sobre</a>
          <a href="#faq" className={NAV_LINK_CLASSES}>FAQ</a>
        </nav>

        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-wider text-brand-muted">
            Canal secundário
          </span>
          <InstagramLink />
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-5 md:px-8 mt-10 pt-6 border-t border-brand-line flex flex-wrap justify-between gap-2 text-[0.8rem] text-brand-muted">
        <p>
          © {year} {siteConfig.name}. Todos os direitos reservados.
        </p>
        <nav
          className="flex flex-wrap items-start gap-x-5 gap-y-2"
          aria-label="Privacidade"
        >
          <a
            href="/politica-de-privacidade/"
            className={NAV_LINK_CLASSES}
            data-track-event="navigation_click"
            data-track-section="footer"
            data-track-button="footer_politica_privacidade"
          >
            Política de Privacidade
          </a>
          <CookiePreferencesButton className={NAV_LINK_CLASSES} />
        </nav>
      </div>
    </footer>
  );
}
