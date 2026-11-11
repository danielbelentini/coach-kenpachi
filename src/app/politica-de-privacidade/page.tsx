import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";
import { policyMeta, privacyConfig } from "@/config/privacy";
import { CookiePreferencesButton } from "@/components/CookiePreferencesButton";

const PAGE_PATH = "/politica-de-privacidade/";

// Metadata própria: o layout raiz define canonical "/" e openGraph da Home,
// que não servem para esta página (o openGraph filho substitui o do pai).
export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Como o site ${siteConfig.name} trata dados pessoais, cookies e ferramentas de análise, conforme a LGPD.`,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: `${siteConfig.siteUrl}${PAGE_PATH}`,
    siteName: siteConfig.name,
    title: `Política de Privacidade | ${siteConfig.name}`,
    images: [
      {
        url: "/images/logo-coach-kenpachi.png",
        width: 1200,
        height: 340,
        alt: siteConfig.name,
      },
    ],
  },
  robots: { index: true, follow: true },
};

const LINK_CLASSES =
  "hover:opacity-75 hover:text-brand-orange focus-visible:opacity-75 focus-visible:text-brand-orange";
const INLINE_LINK =
  "underline underline-offset-4 text-brand-orange hover:opacity-75 focus-visible:opacity-75";

/** Campo que o responsável ainda precisa preencher (mesmo estilo dos placeholders do site). */
function Fill({ children }: { children: ReactNode }) {
  return <strong className="text-brand-orange font-bold">{children}</strong>;
}

function Section({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section aria-labelledby={`secao-${number}`} className="mt-10">
      <h2 id={`secao-${number}`} className="!text-[1.6rem]">
        {number}. {title}
      </h2>
      <div className="[&_p]:text-white/90 [&_p]:max-w-none [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_li]:text-white/90">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="border-b border-brand-line bg-brand-graphite">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 flex items-center justify-between gap-4 py-[0.85rem]">
          <a
            href="/"
            aria-label="Coach Kenpachi — página inicial"
            data-track-event="navigation_click"
            data-track-section="header"
            data-track-button="privacidade_logo"
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
          <a
            href="/"
            className="inline-flex items-center min-h-12 px-5 py-[0.6rem] rounded-[6px] font-bold text-white border-[1.5px] border-brand-line hover:border-brand-orange hover:text-brand-orange focus-visible:border-brand-orange focus-visible:text-brand-orange"
            data-track-event="navigation_click"
            data-track-section="header"
            data-track-button="privacidade_voltar_home"
          >
            Voltar para a página inicial
          </a>
        </div>
      </header>

      <main id="main-content" className="py-[clamp(2.5rem,6vw,4.5rem)]">
        <article className="max-w-[820px] mx-auto px-5 md:px-8">
          <h1>Política de Privacidade</h1>
          <p>
            Versão {policyMeta.version} · Atualizada em {policyMeta.updatedAt}
          </p>

          <Section number={1} title="Quem é o responsável por este site">
            <p>
              Este site, <strong>{siteConfig.name}</strong>, é de
              responsabilidade de:
            </p>
            <ul>
              <li>
                Nome ou razão social: <Fill>{privacyConfig.controllerName}</Fill>
              </li>
              <li>
                CPF ou CNPJ: <Fill>{privacyConfig.controllerDocument}</Fill>
              </li>
              <li>
                Canal de contato para privacidade:{" "}
                <a
                  href={privacyConfig.contactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={INLINE_LINK}
                  data-wa-section="politica_privacidade"
                  data-wa-button="politica_privacidade_whatsapp"
                >
                  {privacyConfig.contactLabel}
                </a> (WhatsApp)
              </li>
            </ul>
            <p>
              Nesta política, &ldquo;nós&rdquo; se refere a esse responsável e
              &ldquo;você&rdquo; a quem visita o site.
            </p>
          </Section>

          <Section number={2} title="Objetivo desta política">
            <p>
              Explicar, de forma simples, quais informações o site pode coletar
              quando você o visita, para que elas são usadas e quais são os seus
              direitos, de acordo com a Lei Geral de Proteção de Dados (LGPD,
              Lei nº 13.709/2018).
            </p>
            <p>
              <strong>O que esta política cobre:</strong> o que acontece
              durante a navegação neste site (cookies, tecnologias semelhantes
              e ferramentas de medição).
            </p>
            <p>
              <strong>O que ela não cobre:</strong> o tratamento de dados que
              pode ocorrer depois, durante a prestação dos serviços de nutrição
              e treinamento (por exemplo, em conversas de atendimento e na
              anamnese). Nesse momento podem ser informados dados pessoais,
              inclusive dados sensíveis relacionados à saúde, que são tratados
              conforme as finalidades e as bases legais aplicáveis a esse
              atendimento (arts. 7º e 11 da LGPD), e não com base no
              consentimento de cookies. O aceite ou a recusa de cookies neste
              site não substitui nem se confunde com essa etapa.
            </p>
          </Section>

          <Section number={3} title="Informações que podem ser coletadas na navegação">
            <p>Ao visitar o site, podem ser tratadas as seguintes informações:</p>
            <ul>
              <li>
                <strong>Dados técnicos de acesso</strong>, como endereço IP,
                data e hora, tipo de navegador e dispositivo, que podem ser
                registrados pelo provedor de hospedagem do site, como ocorre
                em servidores web em geral.
              </li>
              <li>
                <strong>Suas escolhas de cookies</strong>, guardadas no
                armazenamento local do seu navegador (data e versão da escolha).
              </li>
              <li>
                <strong>Dados de uso do site</strong>, somente se você
                autorizar cookies analíticos: páginas visitadas, cliques em
                botões de WhatsApp, em links para outras páginas e em redes
                sociais (com o nome e o texto do botão), perguntas abertas no
                FAQ e até onde a página foi rolada. Também podem ser tratados
                identificadores online, informações do dispositivo e
                localização aproximada.
              </li>
            </ul>
            <p>
              O site não possui formulários e não solicita nome, e-mail ou
              telefone. Os eventos de medição que enviamos não incluem esses
              dados.
            </p>
          </Section>

          <Section number={4} title="Para que usamos essas informações">
            <ul>
              <li>Manter o site funcionando e lembrar as suas escolhas de cookies.</li>
              <li>
                Entender como o site é usado e melhorar seu conteúdo e
                desempenho (somente com a sua autorização).
              </li>
              <li>
                Permitir que você entre em contato pelo WhatsApp, quando você
                escolher fazer isso.
              </li>
              <li>Cumprir obrigações legais, quando aplicável.</li>
            </ul>
            <p>
              <strong>Bases legais:</strong> consentimento (art. 7º, I) para
              cookies analíticos e de marketing; legítimo interesse (art. 7º,
              IX) para o funcionamento básico do site e para guardar a sua
              escolha de cookies.
            </p>
          </Section>

          <Section number={5} title="Cookies e tecnologias semelhantes">
            <p>
              Cookies e tecnologias semelhantes (como o armazenamento local do
              navegador) são pequenos registros guardados no seu dispositivo.
              Usamos três categorias:
            </p>
            <ul>
              <li>
                <strong>Necessários (sempre ativos):</strong> funcionamento
                básico do site e registro das suas escolhas de cookies.
              </li>
              <li>
                <strong>Analíticos (opcionais):</strong> medição de uso e de
                desempenho, por meio do Google Tag Manager e do Google
                Analytics 4. Costumam criar cookies como <code>_ga</code> e{" "}
                <code>_ga_*</code>.
              </li>
              <li>
                <strong>Marketing (opcionais):</strong> mensuração de campanhas
                e publicidade por ferramentas de terceiros. No momento,{" "}
                <strong>nenhuma ferramenta de marketing é utilizada</strong>{" "}
                neste site; a categoria existe para o caso de isso mudar, e
                nesse caso pediremos a sua escolha novamente.
              </li>
            </ul>
            <p>
              Cookies analíticos e de marketing <strong>começam desativados</strong>.
              As ferramentas de medição só são carregadas depois que você as
              autoriza. Se você recusar, nenhuma delas é carregada.
            </p>
            <p>
              <strong>Como mudar sua escolha:</strong> use{" "}
              <CookiePreferencesButton
                className={`${INLINE_LINK} inline`}
              />{" "}
              (também disponível no rodapé de todas as páginas) para aceitar,
              recusar ou personalizar. Ao desativar os cookies analíticos, o
              site deixa de coletar novos dados, tenta remover os cookies do
              Google e recarrega a página.
            </p>
            <p>
              Você também pode apagar ou bloquear cookies nas configurações do
              seu navegador; isso pode fazer o site pedir sua escolha de novo.
            </p>
          </Section>

          <Section number={6} title="Ferramentas de análise e mensuração">
            <p>
              Utilizamos o <strong>Google Tag Manager</strong> (gerenciador de
              tags) e o <strong>Google Analytics 4</strong> (análise de uso).
              Ambos são carregados <strong>somente se você autorizar os cookies
              analíticos</strong>. Antes disso, nenhuma requisição é feita a
              essas ferramentas.
            </p>
            <p>
              O Google atua como fornecedor dessas ferramentas e trata os dados
              conforme seus próprios termos e políticas. Esses dados podem ser
              tratados em servidores fora do Brasil.
            </p>
          </Section>

          <Section number={7} title="Links e serviços externos">
            <p>
              O site tem links para serviços de terceiros:
            </p>
            <ul>
              <li>
                <strong>WhatsApp:</strong> ao clicar em um botão de WhatsApp,
                você sai do site e abre uma conversa no aplicativo, com uma
                mensagem inicial pré-preenchida. A partir daí, a conversa é
                regida pelos termos e pela política de privacidade do WhatsApp,
                e o responsável por este site recebe o seu número e as
                mensagens que você enviar.
              </li>
              <li>
                <strong>Instagram:</strong> o link do rodapé leva ao perfil
                da marca, sujeito aos termos e à política do Instagram.
              </li>
            </ul>
            <p>
              Não controlamos esses serviços. Recomendamos ler as políticas
              deles.
            </p>
          </Section>

          <Section number={8} title="Compartilhamento de dados">
            <p>As informações podem ser compartilhadas com:</p>
            <ul>
              <li>
                <strong>Google</strong> (Tag Manager e Analytics), somente se
                você autorizar cookies analíticos;
              </li>
              <li>
                <strong>Provedor de hospedagem</strong> do site, que opera a
                infraestrutura onde o site está publicado;
              </li>
              <li>
                <strong>WhatsApp e Instagram</strong>, apenas quando você
                escolhe usar esses serviços;
              </li>
              <li>
                <strong>Autoridades</strong>, quando houver obrigação legal.
              </li>
            </ul>
          </Section>

          <Section number={9} title="Armazenamento, segurança e retenção">
            <ul>
              <li>
                <strong>Sua escolha de cookies:</strong> fica guardada no seu
                navegador até você apagá-la ou até a versão do consentimento
                mudar, quando pediremos uma nova escolha.
              </li>
              <li>
                <strong>Dados do Google Analytics:</strong> mantidos pelo
                período configurado na ferramenta - os dados de eventos e usuários utilizados nos relatórios e recursos de exploração do Google Analytics 4 são mantidos pelo período padrão de retenção da ferramenta, de 2 meses, uma vez que não houve alteração manual dessa configuração.
              </li>
              <li>
                <strong>Segurança:</strong> o site utiliza conexão HTTPS, com certificado SSL, para proteger a comunicação entre o navegador do visitante e o servidor. A hospedagem é realizada na plataforma Hostinger, que disponibiliza recursos de segurança para sua infraestrutura. São adotadas boas práticas para a administração e manutenção do site, visando reduzir riscos de acesso não autorizado e comprometimento das informações.
              </li>
            </ul>
          </Section>

          <Section number={10} title="Seus direitos (LGPD)">
            <p>
              Nos termos do art. 18 da LGPD, você pode solicitar, a qualquer
              momento:
            </p>
            <ul>
              <li>confirmação de que tratamos seus dados;</li>
              <li>acesso aos dados;</li>
              <li>correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>
                anonimização, bloqueio ou eliminação de dados desnecessários,
                excessivos ou tratados em desconformidade com a lei;
              </li>
              <li>portabilidade dos dados, nos termos da regulamentação;</li>
              <li>eliminação dos dados tratados com base no seu consentimento;</li>
              <li>
                informações sobre com quem os dados foram compartilhados;
              </li>
              <li>
                informação sobre a possibilidade de não consentir e sobre as
                consequências da recusa;
              </li>
              <li>
                revogação do consentimento, que no caso dos cookies você faz
                sozinho pelas &ldquo;Preferências de cookies&rdquo;.
              </li>
            </ul>
            <p>
              Você também pode apresentar reclamação à Autoridade Nacional de
              Proteção de Dados (ANPD).
            </p>
          </Section>

          <Section number={11} title="Como pedir informações, correção ou exclusão">
            <p>
              Envie sua solicitação pelo canal indicado na seção 12, informando
              o que deseja. Podemos pedir informações para confirmar quem você
              é antes de atender o pedido. Dados de medição do Google Analytics
              costumam ser associados a identificadores do navegador, e não ao
              seu nome, o que pode limitar a nossa capacidade de localizá-los;
              nesse caso, apagar os cookies e revogar o consentimento é a forma
              mais direta de interromper novas coletas.
            </p>
          </Section>

          <Section number={12} title="Contato para assuntos de privacidade">
            <p>
              Por enquanto, o contato é feito pelo WhatsApp{" "}
              <a
                href={privacyConfig.contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={INLINE_LINK}
                data-wa-section="politica_privacidade"
                data-wa-button="politica_privacidade_contato_whatsapp"
              >
                {privacyConfig.contactLabel}
              </a>
              .
            </p>
          </Section>

          <Section number={13} title="Atualizações desta política">
            <p>
              Podemos atualizar esta política para refletir mudanças no site,
              nas ferramentas utilizadas ou na lei. A versão e a data de
              atualização ficam no topo desta página. Se a mudança for
              relevante para os cookies, pediremos a sua escolha novamente.
            </p>
          </Section>

          <p className="mt-12">
            <a
              href="/"
              className={INLINE_LINK}
              data-track-event="navigation_click"
              data-track-section="privacidade"
              data-track-button="privacidade_rodape_voltar_home"
            >
              ← Voltar para a página inicial
            </a>
          </p>
        </article>
      </main>

      <footer className="bg-brand-graphite-light border-t border-brand-line py-6">
        <div className="max-w-[1180px] mx-auto px-5 md:px-8 flex flex-wrap justify-between gap-2 text-[0.8rem] text-brand-muted">
          <p className="m-0">
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <nav aria-label="Privacidade" className="flex flex-wrap gap-x-5 gap-y-2">
            <a
              href={PAGE_PATH}
              aria-current="page"
              className="text-brand-orange"
            >
              Política de Privacidade
            </a>
            <CookiePreferencesButton className={LINK_CLASSES} />
          </nav>
        </div>
      </footer>
    </>
  );
}
