import Image from "next/image";
import { siteConfig } from "@/config/site";
import { InstagramLink } from "./InstagramLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <Image
            src="/images/logo-coach-kenpachi.png"
            alt="Coach Kenpachi"
            width={180}
            height={51}
          />
          <p>
            Acompanhamento de nutrição e treinamento com planejamento
            estruturado para você executar na academia com direção clara.
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Navegação do rodapé">
          <a href="#inicio">Início</a>
          <a href="#consultoria">Consultoria</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#resultados">Resultados</a>
          <a href="#sobre">Sobre</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="site-footer__secondary">
          <span>Canal secundário</span>
          <InstagramLink />
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>
          © {year} {siteConfig.name}. Todos os direitos reservados.
        </p>
        <p className="site-footer__note">
          [VALIDAR COM O CLIENTE: CNPJ/registro profissional, se aplicável]
        </p>
      </div>
    </footer>
  );
}
