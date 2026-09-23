import Image from "next/image";
import { HeaderScrollOffset } from "./HeaderScrollOffset";
import { SiteNav } from "./SiteNav";
import { WhatsAppCta } from "./WhatsAppCta";

export function Header() {
  return (
    <header className="sticky top-0 z-[800] bg-[rgba(27,29,31,0.92)] backdrop-blur-[6px] border-b border-brand-line">
      <HeaderScrollOffset />
      <div className="max-w-[1180px] mx-auto px-5 md:px-8 flex items-center justify-between gap-4 py-[0.85rem]">
        <a
          href="#inicio"
          aria-label="Coach Kenpachi — página inicial"
        >
          <Image
            src="/images/logo-coach-kenpachi.png"
            alt="Coach Kenpachi"
            width={220}
            height={62}
            priority
            className="w-40 md:w-[200px] h-auto"
          />
        </a>

        <SiteNav />

        <div className="hidden header:block">
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
