# Landing Page — Coach Kenpachi

Landing page de conversão para Coach Kenpachi (Consultoria Completa de
nutrição + treinamento), construída em **Next.js + React + TypeScript com
Static Export**. O resultado do build é HTML/CSS/JS puro — não depende de
Node.js, banco de dados ou backend em produção.

## 1. Estrutura do projeto

```text
kenpachi/
├── docs/
│   └── EVENTOS.md              # Documentação dos eventos GA4/GTM
├── public/
│   └── images/
│       └── logo-coach-kenpachi.png
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Metadata, JSON-LD, GTM, skip-link
│   │   ├── page.tsx             # Composição das seções da landing page
│   │   ├── globals.css          # Tokens de marca, layout, acessibilidade
│   │   ├── sitemap.ts           # Gera sitemap.xml estático no build
│   │   └── robots.ts            # Gera robots.txt estático no build
│   ├── components/              # Um componente por seção da página
│   ├── config/
│   │   └── site.ts              # WhatsApp, mensagens, links — config central
│   └── lib/
│       └── analytics.ts         # Camada única de eventos GA4/GTM
├── next.config.mjs               # output: 'export', images.unoptimized
├── package.json
└── tsconfig.json
```

## 2. Instalar dependências

Requer **Node.js 20.9 ou superior** apenas em desenvolvimento/build (não em
produção — Node 18 chegou ao fim do suporte e não é mais compatível com o
Next.js 16).

```bash
npm install
```

Se você atualizou este projeto a partir de uma instalação anterior, apague
`node_modules` e `package-lock.json` antes de reinstalar, para não herdar
versões antigas e transitivas (é a causa mais comum dos avisos de
`deprecated` do npm):

```bash
rm -rf node_modules package-lock.json
npm install
```

## 3. Rodar localmente

```bash
npm run dev
```

Acesse `http://localhost:3000`.

## 4. Configurar variáveis de ambiente (opcional)

Copie `.env.example` para `.env.local` e preencha o ID do GTM, se já
disponível:

```bash
cp .env.example .env.local
```

Antes de publicar, ajuste também os placeholders em
`src/config/site.ts` (número de WhatsApp, Instagram, domínio final).

## 5. Build de produção (Static Export)

```bash
npm run build
```

O build gera a pasta estática em:

```text
out/
```

Esse é o conteúdo que deve ser publicado — apenas HTML, CSS, JS e imagens.

## 6. Publicar em servidor tradicional

1. Rode `npm run build`.
2. Copie **todo o conteúdo da pasta `out/`** (não a pasta em si) para a
   raiz pública do servidor (ex.: `public_html/`, `www/`, ou a raiz do
   domínio no seu provedor de hospedagem).
3. Nenhuma configuração de servidor Node é necessária — qualquer servidor
   de arquivos estáticos (Apache, Nginx, hospedagem compartilhada, CDN)
   funciona.

### Critério de aceitação

> Se eu pegar somente os arquivos gerados pelo build estático (`out/`) e
> enviar para um servidor tradicional, a página funcionará?

**Sim.** O projeto não usa Server Actions, API Routes, middleware
dependente de servidor, banco de dados ou autenticação server-side.

## 7. Dependências utilizadas e justificativa

| Pacote | Versão | Motivo |
| --- | --- | --- |
| `next` | `^16.3.3` | Framework exigido pelo briefing, com suporte nativo a Static Export. Versão em **Active LTS**, recebendo patches de segurança mensais. |
| `react` / `react-dom` | `^19.2.0` | Exigidos pelo Next.js 16 (que requer React 19+). |
| `typescript` | `^6.0.3` | Tipagem estática, exigida pelo briefing. Versão estável (a 7.0, com compilador nativo, ainda tem API limitada para algumas ferramentas — 6.x é a escolha mais estável hoje). |
| `@types/node`, `@types/react`, `@types/react-dom` | mais recentes | Tipos compatíveis com Node 20+/22 e React 19. |
| `eslint` | `^9.20.0` | Qualidade de código em desenvolvimento (não entra no bundle final). ESLint 8 está fora de manutenção. |
| `eslint-config-next` | `^16.3.3` | Config oficial do Next.js, já no formato *flat config* (`eslint.config.mjs`) — o comando `next lint` foi removido a partir da v16. |

Nenhuma biblioteca de UI, animação, ou formulário foi adicionada — todas as
interações (menu, scroll spy, FAQ, reveal ao rolar) foram implementadas
com React e APIs nativas do navegador (`IntersectionObserver`, elemento
`<details>`), conforme a seção 26 do briefing (evitar dependências
desnecessárias).

### Sobre os avisos de `npm warn deprecated`

Os avisos de pacotes descontinuados (`inflight`, `glob@7`, `rimraf@3`,
`@humanwhocodes/*`, etc.) e o aviso de vulnerabilidade de segurança do
`next@14.2.16` vinham das versões antigas fixadas neste projeto:

- **`next@14.2.16`**: Next.js 14 chegou ao fim do suporte em 26/10/2025 e
  não recebe mais correções de segurança. Corrigido atualizando para
  `next@^16.3.3` (Active LTS).
- **`eslint@8.57.0`**: ESLint 8 está fora de manutenção; suas dependências
  internas (`glob@7`, `rimraf@3`, `inflight`) são as que geravam os avisos
  de *memory leak*/depreciação. Corrigido atualizando para `eslint@^9.20.0`
  com o novo formato *flat config* (`eslint.config.mjs`).

Depois de instalar com as versões atuais, `npm install` não deve mais
exibir esses avisos. Novos avisos de depreciação podem surgir com o tempo
— rode `npm outdated` periodicamente para revisar.

## 8. Checklist de SEO técnico

- [x] Um único `<h1>` (no Hero).
- [x] Hierarquia de `<h2>`/`<h3>` refletindo a estrutura real do conteúdo.
- [x] `title` e `meta description` centralizados em `src/config/site.ts`.
- [x] `canonical` configurado via `alternates.canonical`.
- [x] Open Graph e Twitter Card configurados.
- [x] `sitemap.xml` e `robots.txt` gerados automaticamente no build.
- [x] `alt text` em todas as imagens (logo).
- [x] Schema.org (`ProfessionalService`) com apenas dados reais e sustentados pelo briefing.
- [ ] `[VALIDAR COM O CLIENTE]`: domínio final em `siteConfig.siteUrl` antes de publicar.

## 9. Checklist de acessibilidade

- [x] HTML semântico (`header`, `nav`, `main`, `section`, `footer`).
- [x] Skip link para o conteúdo principal.
- [x] Foco visível (`:focus-visible`) em toda a página.
- [x] Contraste alto entre texto e fundo (branco/laranja sobre grafite).
- [x] FAQ implementado com `<details>`/`<summary>` nativos (sem ARIA customizado).
- [x] Áreas de toque de no mínimo 44–48px nos CTAs e botão flutuante.
- [x] `prefers-reduced-motion` respeitado (reveal e scroll suave desativados).
- [x] Nenhuma `div` clicável substituindo botão/link — todos os CTAs são `<a>` ou `<button>` semânticos.

## 10. Checklist de performance

- [x] Sem bibliotecas de UI externas. Corpo de texto usa fontes do sistema; os títulos H2 usam a fonte **Anton** (Google Fonts), carregada via `next/font/google` — o arquivo é baixado e self-hospedado **no momento do build** (requer internet só durante `npm run build`/`npm run dev`; o site publicado não faz nenhuma chamada à rede para isso).
- [x] Static Export — sem SSR, sem custo de servidor por requisição.
- [x] Apenas os componentes com interação real usam `"use client"` (nav, FAQ, reveal, botões de WhatsApp).
- [x] Imagem do logo usa `next/image` com carregamento prioritário apenas no Header.
- [x] Sem animações contínuas, parallax ou efeitos 3D.

## 11. Pontos que precisam ser validados com o cliente

Marcados no código como `[VALIDAR COM O CLIENTE]` ou `[CONTEÚDO NECESSÁRIO]`:

- Número real de WhatsApp (`src/config/site.ts`).
- URL do Instagram e domínio final de publicação.
- Nome completo do coach, formação detalhada e trajetória (seção Sobre).
- Foto real do Coach Kenpachi para a seção Sobre (`[IMAGEM NECESSÁRIA]` — ver nota abaixo).
- Depoimentos reais, registros de evolução e o estudo de caso citado no briefing (seção Resultados).
- Etapas, cadência e plataforma exatas do acompanhamento (seção Como Funciona).
- Prazo de evolução e valores de investimento (FAQ).
- ID do container do Google Tag Manager (`.env.local`).
- Registro profissional/CNPJ para o rodapé, se aplicável.

## 12. Como adicionar a foto real do Coach (seção Sobre)

Hoje a seção Sobre mostra um placeholder tracejado com o texto
`[IMAGEM NECESSÁRIA]`. Quando a foto estiver disponível:

1. Coloque o arquivo em `public/images/coach-kenpachi.jpg` (ou `.png`/`.webp`).
2. Em `src/components/About.tsx`, troque o bloco `<div className="about__photo-placeholder">...</div>` por:

   ```tsx
   <Image
     src="/images/coach-kenpachi.jpg"
     alt="Coach Kenpachi"
     width={480}
     height={600}
     className="about__photo"
   />
   ```

   (não esqueça de importar `Image` de `"next/image"` no topo do arquivo).
3. Opcionalmente, ajuste `.about__photo-placeholder` em `globals.css` para
   `.about__photo` (borda sólida em vez de tracejada, `object-fit: cover`).

## 13. Como trocar a imagem de fundo do CTA final

A seção final (antes do rodapé) usa uma imagem de fundo com overlay escuro
para garantir contraste do texto. Hoje ela aponta para um placeholder
gerado em [placehold.co](https://placehold.co), só para servir de guia de
enquadramento — **precisa ser substituída antes de publicar**.

1. Escolha uma imagem real (ambiente de treino, academia, ou o próprio
   coach em ação) e coloque o arquivo em `public/images/`, por exemplo
   `public/images/cta-background.jpg`.
2. Em `src/components/FinalCta.tsx`, troque a constante:

   ```tsx
   const BACKGROUND_IMAGE_URL = "/images/cta-background.jpg";
   ```

3. O overlay escuro (`.final-cta__overlay` em `globals.css`) já está
   ajustado para dar bom contraste ao texto branco sobre praticamente
   qualquer foto; ajuste a opacidade do gradiente ali caso a imagem
   escolhida seja muito clara ou muito "poluída" visualmente.

## 14. Como trocar a imagem de fundo do Hero

O Hero (topo da página) segue o mesmo padrão do CTA final: imagem de fundo
+ overlay escuro para manter o texto e o botão laranja com bom contraste.
Hoje aponta para um placeholder do placehold.co.

1. Coloque a imagem real em `public/images/`, por exemplo
   `public/images/hero-background.jpg`.
2. Em `src/components/Hero.tsx`, troque a constante:

   ```tsx
   const BACKGROUND_IMAGE_URL = "/images/hero-background.jpg";
   ```

3. O overlay (`.hero__overlay` em `globals.css`) usa o mesmo gradiente do
   CTA final; ajuste a opacidade ali se a foto escolhida for muito clara.

## 15. Troubleshooting

### `error TS5102: Option 'baseUrl' is deprecated...`

A partir do TypeScript 6.0 (instalado na atualização de dependências deste
projeto), a opção `baseUrl` do `tsconfig.json` foi descontinuada e o
compilador trata isso como erro fatal de build, não apenas aviso.

**Já corrigido neste projeto**: removemos `baseUrl` do `tsconfig.json`. Com
`"moduleResolution": "bundler"`, os `paths` (`@/*`) são resolvidos
diretamente em relação à pasta onde está o `tsconfig.json`, então não é
necessário declarar `baseUrl` — o alias `@/...` continua funcionando
normalmente em todo o projeto.

Se esse erro aparecer de novo no futuro (por exemplo, após adicionar outro
`tsconfig.json` em uma subpasta), remova `baseUrl` de lá também e confirme
que os caminhos em `paths` começam com `./`.

### `Error: Failed to collect page data for /robots.txt`

Rotas de metadata geradas por código (`robots.ts`, `sitemap.ts`) precisam
declarar explicitamente que são estáticas quando o projeto usa
`"output": "export"` — sem isso, o Next.js falha o build com esse erro
genérico (a mensagem real, `force-static`/`revalidate` não configurado,
costuma ficar escondida atrás desse wrapper).

**Já corrigido neste projeto**: adicionamos `export const dynamic = "force-static";`
no topo de `src/app/robots.ts` e `src/app/sitemap.ts`. Se você criar novas
rotas de metadata (`opengraph-image.tsx`, `icon.tsx`, etc.), adicione a
mesma linha nelas também.
