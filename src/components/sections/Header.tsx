"use client";

import { useState } from "react";
import { useScrolled } from "@/hooks/useScrolled";
import { navLinks, site, buildWhatsAppLink } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { IconMenu, IconClose } from "@/components/ui/Icons";

export function Header() {
  const scrolled = useScrolled(16);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-graphite-950/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
          : "bg-graphite-950/30 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#hero"
          className="font-display text-lg uppercase tracking-wide text-cream"
        >
          {site.brandName}
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-body text-sm text-cream/85 transition-colors hover:text-cream"
            >
              {link.label}
              <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-brand-orange-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href={buildWhatsAppLink()}
            size="md"
            gtmId="whatsapp_header"
          >
            Agendar avaliação
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="text-cream md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-white/10 bg-graphite-950/95 px-6 py-6 backdrop-blur-md md:hidden"
          aria-label="Navegação mobile"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-body text-base text-cream/90"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            href={buildWhatsAppLink()}
            size="md"
            gtmId="whatsapp_header_mobile"
            className="mt-6 w-full"
          >
            Agendar avaliação
          </Button>
        </nav>
      )}
    </header>
  );
}
