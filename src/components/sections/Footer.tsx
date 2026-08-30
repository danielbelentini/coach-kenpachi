import { navLinks, socialLinks, site } from "@/lib/site-config";
import {
  IconInstagram,
  IconWhatsApp,
  IconLinkedIn,
  IconYouTube,
} from "@/components/ui/Icons";

const socialIcons = {
  instagram: IconInstagram,
  whatsapp: IconWhatsApp,
  linkedin: IconLinkedIn,
  youtube: IconYouTube,
} as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-graphite-900 pt-16 pb-8">
      <div className="mx-auto max-w-content px-6 sm:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg uppercase tracking-wide text-cream">
              {site.brandName}
            </p>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-muted">
              Nutrição esportiva individual, da anamnese ao acompanhamento
              contínuo.
            </p>
          </div>

          <nav aria-label="Links de navegação do rodapé">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-green-400">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-cream/80 transition-colors hover:text-brand-orange-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand-green-400">
              Redes sociais
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-cream/80 transition-colors duration-200 hover:border-brand-orange-600 hover:text-brand-orange-600"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <p className="mt-6 font-body text-sm text-muted">{site.city}</p>
            <a
              href={`mailto:${site.email}`}
              className="font-body text-sm text-cream/80 transition-colors hover:text-brand-orange-600"
            >
              {site.email}
            </a>
          </div>
        </div>

        <p className="pt-6 text-center font-mono text-[11px] text-muted">
          © {year} {site.brandName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
