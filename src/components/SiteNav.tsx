"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#consultoria", label: "Consultoria" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#resultados", label: "Resultados" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Scroll spy: destaca o item da seção visível no momento.
  useEffect(() => {
    const navHrefs = new Set<string>(NAV_ITEMS.map((item) => item.href));

    // Observa TODAS as seções da página (não só as que têm item de menu).
    // Isso é necessário para "limpar" o destaque quando o visitante está
    // em Hero, Goals, Approach, Method, Outras Formas ou CTA final —
    // seções sem link no menu. Sem isso, o último item observado
    // continua marcado como ativo mesmo depois de rolar de volta para
    // uma seção sem link (ex.: "Consultoria" ficava preso ativo ao
    // voltar para o Hero).
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("#main-content > section")
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const href = `#${entry.target.id}`;
          setActive(navHrefs.has(href) ? href : "");
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Trava o scroll do body quando o menu mobile está aberto.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="site-nav-menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
        <span className={`nav-toggle__icon ${open ? "is-open" : ""}`} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <nav
        id="site-nav-menu"
        className={`site-nav ${open ? "site-nav--open" : ""}`}
        aria-label="Navegação principal"
      >
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={active === item.href ? "is-active" : ""}
                aria-current={active === item.href ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
