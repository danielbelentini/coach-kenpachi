import Image from "next/image";
import { SiteNav } from "./SiteNav";
import { WhatsAppCta } from "./WhatsAppCta";

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#inicio" className="site-header__brand" aria-label="Coach Kenpachi — página inicial">
          <Image
            src="/images/logo-coach-kenpachi.png"
            alt="Coach Kenpachi"
            width={220}
            height={62}
            priority
            className="site-header__logo"
          />
        </a>

        <SiteNav />

        <div className="site-header__cta">
          <WhatsAppCta
            ctaLocation="header"
            variant="secondary"
            label="Fale com o Coach"
          />
        </div>
      </div>
    </header>
  );
}
