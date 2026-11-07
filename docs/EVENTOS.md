# Eventos de Analytics (GA4 via GTM)

Este projeto segue o **padrão de rastreamento via dataLayer** usado nos sites
e landing pages dos parceiros (padrão D.R.A. Seguros). A estrutura dos
eventos é **idêntica em todos os sites**: mesmos nomes de evento, mesmos
cinco parâmetros e mesma forma de marcar os links. Não altere nomes nem
adicione parâmetros aqui sem alterar o padrão nos demais sites.

- Container GTM deste site: `GTM-KK7FKGT5` (variável `NEXT_PUBLIC_GTM_ID`).
- Instalação do GTM: `src/components/GoogleTagManager.tsx` (não faz parte do
  rastreamento de cliques e não foi alterada).
- Rastreamento de cliques: `src/lib/click-tracking.ts` + `src/components/ClickTracker.tsx`.
- Envio ao `dataLayer`: `src/lib/analytics.ts` (`pushToDataLayer`).

## Eventos do padrão

| Evento             | Quando dispara                                                                                           |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| `whatsapp_click`   | Todo botão ou link que leva ao WhatsApp.                                                                 |
| `navigation_click` | Link que leva a **outra página** do site. Âncoras da mesma página **não** disparam.                      |
| `social_click`     | Links de redes sociais (destino externo).                                                                |

**`navigation_click` compara a página de destino com a página atual _no momento
do clique_.** Um link para `/#sobre` clicado em `/servicos` conta; o mesmo
link clicado na Home não conta (é âncora da mesma página). A comparação usa o
`pathname` (ignora barra final, `/index.html` e `.html`).

## Parâmetros (exatamente cinco, além de `event`)

| Parâmetro      | Descrição                                                                                                                                                                  |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page_name`    | Identificador estável da página, derivado da URL no momento do clique. `/` → `home`; `/seguro-auto/` → `seguro_auto`; `/blog/post-x/` → `blog_post_x` (minúsculas, sem acento). |
| `section_name` | Identificador estável da seção (`header`, `hero`, `faq`, `footer`, `cta_final`...). Vem de `data-wa-section` / `data-track-section`.                                         |
| `button_name`  | Identificador funcional **único por elemento**. Vem de `data-wa-button` / `data-track-button`. Desktop e menu mobile (quando forem elementos distintos) têm nomes distintos. |
| `button_label` | Texto **visível** real do elemento no momento do clique, com espaços normalizados. Sem texto visível (ex.: ícone), usa o `aria-label` existente. Nunca é inventado.          |
| `link_url`     | URL completa do `href`, preservando parâmetros e UTMs.                                                                                                                     |

Exemplo de payload enviado ao `dataLayer`:

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "whatsapp_click",
  page_name: "home",
  section_name: "hero",
  button_name: "hero_whatsapp",
  button_label: "Falar com o coach no WhatsApp",
  link_url: "https://wa.me/5511949080965?text=..."
});
```

## Como funciona

- **Um único listener de clique por delegação** (`document`), montado uma vez
  no layout por `<ClickTracker />`. Nenhum botão tem `onClick` de tracking e
  não há lógica duplicada nos componentes.
- Cada link recebe **apenas atributos de marcação**:
  - WhatsApp: `data-wa-section` e `data-wa-button`.
  - Outra página e redes sociais: `data-track-event`, `data-track-section` e
    `data-track-button`.
- Valores de `data-track-event` diferentes de `navigation_click` e
  `social_click` são **ignorados** (inclusive `whatsapp_click`: WhatsApp só
  usa `data-wa-*`).
- O link de WhatsApp só dispara se estiver marcado **e** o destino for
  realmente o WhatsApp (`wa.me`, `api.whatsapp.com`, `web.whatsapp.com`,
  `chat.whatsapp.com`, `whatsapp.com` ou `whatsapp:`).
- O `dataLayer` é inicializado sem substituir um array existente
  (`window.dataLayer = window.dataLayer || []`) e nunca é reinicializado.
- **Sem `preventDefault`.** O push é síncrono, antes da navegação, sem atrasar
  o redirecionamento.
- Um clique gera **um** evento. Clique do meio (`auxclick`, apenas botão 1)
  também é tratado, sem duplicar. Clique direito não gera evento.
- Não são rastreados: `mailto:`, `tel:`, âncoras da mesma página, nem
  qualquer elemento que não seja WhatsApp, outra página ou rede social.
- Nenhum dado pessoal é enviado.
- Fora de produção (`NODE_ENV !== "production"`), o console avisa quando um link
  de WhatsApp está sem marcação ou quando um link marcado está sem
  `section`/`button`. Em produção nada é escrito no console.

## Como rastrear um novo link

**WhatsApp** (pelo componente `WhatsAppCta`, informe `section` e `button`):

```tsx
<WhatsAppCta section="faq" button="faq_whatsapp" label="Tirar dúvidas no WhatsApp" />
```

Ou em um `<a>` comum:

```html
<a href="https://wa.me/..." data-wa-section="faq" data-wa-button="faq_whatsapp">...</a>
```

**Outra página do site** (só dispara se o destino for outra página no momento do clique):

```html
<a href="/politica-de-privacidade/"
   data-track-event="navigation_click"
   data-track-section="footer"
   data-track-button="footer_politica_privacidade">Política de privacidade</a>
```

**Rede social**:

```html
<a href="https://www.instagram.com/..." target="_blank" rel="noopener noreferrer"
   data-track-event="social_click"
   data-track-section="footer"
   data-track-button="footer_instagram">Instagram</a>
```

Para itens de menu, use ids estáveis (ex.: `trackId`) para formar o
`button_name` (`header_nav_${trackId}`), em vez de depender do texto.

## Elementos rastreados neste site

| Evento           | `page_name` | `section_name`  | `button_name`            | `button_label`                    |
| ---------------- | ----------- | --------------- | ------------------------ | --------------------------------- |
| `whatsapp_click` | `home`      | `header`        | `header_whatsapp`        | Fale com o Coach                  |
| `whatsapp_click` | `home`      | `hero`          | `hero_whatsapp`          | Falar com o coach no WhatsApp     |
| `whatsapp_click` | `home`      | `consultoria`   | `consultoria_whatsapp`   | Quero começar minha Consultoria   |
| `whatsapp_click` | `home`      | `como_funciona` | `como_funciona_whatsapp` | Falar com o Coach no WhatsApp     |
| `whatsapp_click` | `home`      | `outras_formas` | `nutricao_whatsapp`      | Falar sobre Nutrição              |
| `whatsapp_click` | `home`      | `outras_formas` | `treinamento_whatsapp`   | Falar sobre Treinamento           |
| `whatsapp_click` | `home`      | `cta_final`     | `cta_final_whatsapp`     | Falar com o Coach no WhatsApp     |
| `whatsapp_click` | `home`      | `floating`      | `floating_whatsapp`      | Falar no WhatsApp agora (`aria-label`: o texto do botão é só para leitor de tela) |
| `social_click`   | `home`      | `footer`        | `footer_instagram`       | Instagram                         |

O botão "Fale com o Coach" (`header_whatsapp`) só aparece a partir do
breakpoint `header`; no mobile o cabeçalho não tem botão de WhatsApp (o botão
flutuante cobre esse caso).

### Não rastreados (de propósito)

Esta é uma página única: **todos os links de navegação são âncoras da mesma
página** e, pelo padrão, não disparam evento.

- Logo do cabeçalho (`#inicio`).
- Menu principal: Consultoria, Como funciona, Resultados, Sobre, FAQ (`#...`).
- Menu do rodapé: Início, Consultoria, Como funciona, Resultados, Sobre, FAQ (`#...`).
- Link "Conhecer a consultoria completa" no Hero (`#consultoria`).
- Link "Pular para o conteúdo principal" (`#main-content`).

O menu principal usa o mesmo elemento no desktop e no mobile (só muda o CSS),
então não há `button_name` separado por dispositivo. Se o site ganhar outras
páginas, basta marcar os links com `data-track-event="navigation_click"`
(use `href` com caminho completo, ex.: `/#sobre`).

Não há links externos que não sejam WhatsApp ou rede social, nem `mailto:`.

## Eventos fora do padrão (já existentes neste projeto)

Estes dois eventos já existiam e **não foram alterados**. Não fazem parte do
padrão de cliques e não têm os cinco parâmetros.

### `faq_interaction`

Disparado quando o visitante abre uma pergunta do FAQ.

| Parâmetro      | Descrição                |
| -------------- | ------------------------ |
| `faq_question` | Texto da pergunta aberta |

### `scroll_depth`

Disparado uma única vez por marco de rolagem (25%, 50%, 75%, 100%).

| Parâmetro           | Descrição               |
| ------------------- | ----------------------- |
| `scroll_percentage` | `25`, `50`, `75` ou `100` |

## Histórico de mudanças do padrão

- `whatsapp_click`: o parâmetro `cta_location` foi **removido**. Os valores
  anteriores viraram `section_name` (e `button_name`, único por botão).
- `instagram_click` foi **substituído** por `social_click`.

## Configuração no GTM/GA4

Resumo (passo a passo completo em [`GTM-GA4-PASSO-A-PASSO.md`](GTM-GA4-PASSO-A-PASSO.md)):

1. Variáveis de camada de dados (`DLV`) para `page_name`, `section_name`,
   `button_name`, `button_label` e `link_url`.
2. Um acionador de **Evento personalizado** por evento (`whatsapp_click`,
   `navigation_click`, `social_click`).
3. Tags de evento do GA4 com `{{Event}}` como nome do evento e os cinco
   parâmetros.
4. No GA4, dimensões personalizadas (escopo **Evento**) para `page_name`,
   `section_name`, `button_name` e `button_label`.
5. Variável `NEXT_PUBLIC_GTM_ID=GTM-KK7FKGT5` no ambiente de build do host
   (Netlify), seguida de **novo deploy** (variáveis `NEXT_PUBLIC_*` são
   gravadas no build).

Atenção: duplicidade de `navigation_click` no DebugView pode ser só do modo
Preview do GTM; confirme fora dele. Se duas tags dispararem para o mesmo
evento, revise acionadores com regex sobrepostos.
