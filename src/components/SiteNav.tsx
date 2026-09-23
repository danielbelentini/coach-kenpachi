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
        className="header:hidden bg-none border-none text-white p-2 cursor-pointer"
        aria-expanded={open}
        aria-controls="site-nav-menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
        <span className="flex flex-col gap-[5px] w-6" aria-hidden="true">
          <span
            className={`block h-0.5 bg-current transition-transform duration-[220ms] ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 bg-current transition-opacity duration-[220ms] ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 bg-current transition-transform duration-[220ms] ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <nav
        id="site-nav-menu"
        className={`fixed inset-[64px_0_0_0] bg-brand-graphite py-8 px-5 md:px-8 transition-all duration-[220ms] header:static header:inset-auto header:bg-transparent header:p-0 header:opacity-100 header:translate-y-0 header:pointer-events-auto ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        aria-label="Navegação principal"
      >
        <ul className="flex flex-col gap-5 text-xl font-semibold header:flex-row header:gap-7 header:text-[0.95rem]">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.href;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`hover:opacity-75 focus-visible:opacity-75 header:inline-block header:py-1 header:border-b-2 header:border-transparent header:hover:text-brand-orange header:hover:opacity-75 header:focus-visible:text-brand-orange header:focus-visible:opacity-75 ${
                    isActive
                      ? "text-brand-orange header:border-brand-orange"
                      : ""
                  }`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
