# Landing Page — Nutrição Esportiva & Coach de Musculação

Landing page de conversão construída em **Next.js 14 (App Router) + React + TypeScript + Tailwind CSS**, com **export 100% estático** — gera uma pasta `/out` com HTML, CSS e JS puros, sem depender de um servidor Node.js.

---

## 1. Rodando o projeto

Pré-requisito: [Node.js](https://nodejs.org) 18.18+ instalado na sua máquina (não no servidor de hospedagem — só para gerar os arquivos).

```bash
# instalar dependências
npm install

# ambiente de desenvolvimento (http://localhost:3000)
npm run dev

# gerar a versão estática de produção
npm run build
```

Depois do `npm run build`, os arquivos finais ficam em **`/out`**. É essa pasta inteira que você envia para a hospedagem (FTP, painel de hospedagem, Netlify, Vercel, Cloudflare Pages, etc.) — qualquer servidor de arquivos estáticos serve.

> **Importante:** o build baixa as fontes do Google Fonts (`next/font/google`) automaticamente e as empacota localmente — por isso é necessário ter internet disponível **no momento do build**, mas o site publicado não faz nenhuma chamada externa em runtime.

---

## 2. O que editar antes de publicar

Praticamente todo o conteúdo do site está centralizado em **um único arquivo**:

```
src/lib/site-config.ts
```

Lá você troca:
- `site.professionalName`, `site.credential`, `site.brandName`
- `site.whatsappNumber` (formato: `55` + DDD + número, só dígitos) e a mensagem padrão
- `site.email`, `site.city`, `site.siteUrl` (domínio final, usado em SEO/sitemap)
- `navLinks`, `socialLinks`
- `heroStats`, `aboutCredentials`
- `services` (cards da seção "Serviços oferecidos")
- `testimonials` (depoimentos)
- `faqItems` (perguntas frequentes — já sai com dados estruturados FAQPage para o Google)

Nenhum componente React precisa ser tocado para atualizar textos, número de WhatsApp ou links.

### Trocando as fotos

Todas as imagens estão em `public/images/` como placeholders gerados na paleta da marca (para você ver o layout funcionando). Para substituir por fotos reais, **basta sobrescrever os arquivos com o mesmo nome**, mantendo as duas versões (WebP + JPG/PNG):

| Arquivo | Onde aparece | Proporção sugerida |
|---|---|---|
| `hero-professional.webp/.jpg` | Foto principal do Hero | retrato, ~900×1100 |
| `about-professional.webp/.jpg` | Seção "Sobre" | retrato, ~900×1000 |
| `cta-background.webp/.jpg` | Fundo do CTA final | paisagem, ~1800×950 |
| `testimonial-1/2/3.webp/.jpg` | Avatares dos depoimentos | quadrada, ~400×400 |
| `og-image.jpg` | Preview ao compartilhar o link (WhatsApp/redes) | 1200×630 |

O componente `PlaceholderImage` (`src/components/ui/PlaceholderImage.tsx`) já usa `<picture>` com **WebP como formato principal e JPG como fallback automático** — não precisa de nenhuma lógica extra para isso funcionar em navegadores mais antigos.

### Rastreamento (GTM/GA4)

O componente `Button` (`src/components/ui/Button.tsx`) aceita a prop `gtmId`, que vira o atributo `data-gtm-id` no HTML final — o mesmo padrão que você já usa no GTM (variável JS que sobe a árvore do DOM até achar `data-gtm-id`). Os IDs já aplicados nos botões de WhatsApp da página:

- `whatsapp_header` / `whatsapp_header_mobile`
- `whatsapp_hero`
- `whatsapp_faq`
- `whatsapp_cta_final`

Basta configurar as tags/triggers no GTM para esses IDs (ou ajustar os nomes diretamente no código, se preferir outra convenção).

---

## 3. Estrutura do projeto

```
src/
  app/
    layout.tsx        → metadata, SEO, fontes, dados estruturados (schema.org Person)
    page.tsx           → monta as seções na ordem final
    globals.css        → Tailwind + scroll suave + animações de entrada
    robots.ts           → robots.txt gerado no build
    sitemap.ts          → sitemap.xml gerado no build
  components/
    sections/           → Header, Hero, About, Services, Testimonials, Faq, CtaFinal, Footer
    ui/                  → Button, PlaceholderImage, Section, Eyebrow, ThinDivider,
                           ServiceCard, TestimonialCard, FaqAccordionItem, Icons, Reveal
  hooks/
    useInView.ts         → dispara animação de entrada ao rolar (respeita prefers-reduced-motion)
    useScrolled.ts        → controla a transição do header fixo
  lib/
    site-config.ts         → TODO o conteúdo editável do site
  types/
    content.ts               → tipos TypeScript do conteúdo
```

---

## 4. Decisões técnicas relevantes

- **Performance:** fontes auto-hospedadas via `next/font` (zero requisição externa em runtime, sem layout shift), imagens com `loading="lazy"` (exceto a do Hero, carregada com prioridade), sem bibliotecas de animação pesadas — só CSS + um `IntersectionObserver` leve.
- **Acessibilidade:** skip link para o conteúdo principal, contraste verificado (WCAG AA) em todas as combinações de texto sobre fundo — inclusive o botão laranja usa texto grafite (não branco) porque dá o contraste correto —, FAQ com `aria-expanded`/`aria-controls` operável por teclado, `prefers-reduced-motion` respeitado em todas as animações.
- **SEO:** metadata completa (title/description/Open Graph/Twitter Card), `sitemap.xml` e `robots.txt` gerados automaticamente, dados estruturados JSON-LD (`Person` no layout e `FAQPage` na seção de dúvidas), hierarquia de headings (H1 único no Hero, H2 por seção, H3 nos itens).
- **CRO:** header fixo sempre com CTA de WhatsApp visível, prova social (números no Hero + depoimentos com resultado destacado), FAQ tratando objeções reais antes do CTA final, CTA final reforçando a conversão depois de toda a página ter respondido as dúvidas.
