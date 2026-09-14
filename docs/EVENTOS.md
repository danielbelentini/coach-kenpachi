# Eventos de Analytics (GA4 via GTM)

Toda a instrumentação passa por `src/lib/analytics.ts`, que envia eventos
para `window.dataLayer`. O GTM (configurado em `NEXT_PUBLIC_GTM_ID`) fica
responsável por encaminhar esses eventos ao GA4.

## Evento principal

### `whatsapp_click`

Disparado em **todo** clique em um botão de WhatsApp da página (contextual
ou flutuante). É o evento de conversão principal do site.

| Parâmetro      | Descrição                | Valores possíveis (briefing V2, seção 23)                                                              |
| -------------- | -------------------------- | -------------------------------------------------------------------------------------------------------- |
| `cta_location` | Onde o clique aconteceu    | `hero`, `consultoria`, `como_funciona`, `nutricao`, `treinamento`, `final`, `floating`, `header` (extra) |

Exemplo do payload enviado ao `dataLayer`:

```text
event: whatsapp_click
cta_location: hero
```

`header` não está na lista sugerida pelo briefing, mas foi mantido porque
o botão "Fale com o Coach" no cabeçalho também gera um clique real de
WhatsApp que vale medir.

## Eventos adicionais

### `instagram_click`

Clique no link do Instagram no rodapé (só existe quando
`siteConfig.instagramUrl` estiver preenchido).

### `faq_interaction`

Disparado quando o visitante abre uma pergunta do FAQ.

| Parâmetro      | Descrição                    |
| -------------- | ----------------------------- |
| `faq_question` | Texto da pergunta aberta      |

### `scroll_depth`

Disparado uma única vez por marco de rolagem da página (25%, 50%, 75%,
100%) — estrutura preparada conforme briefing V2, seção 23.

| Parâmetro          | Descrição                          |
| ------------------- | ------------------------------------ |
| `scroll_percentage` | `25`, `50`, `75` ou `100`            |

## Configuração no GTM/GA4

No container do GTM, criar:

1. Uma tag GA4 Event com nome do evento `whatsapp_click`, disparada em um
   gatilho de Evento Personalizado `whatsapp_click`, enviando o parâmetro
   `cta_location` como parâmetro de evento do GA4.
2. Repetir o processo para `instagram_click`, `faq_interaction` e
   `scroll_depth`.

`[VALIDAR COM O CLIENTE]`: criação do container GTM, do stream do GA4 e
configuração das tags acima é uma etapa manual no painel do Google, fora
do escopo do código deste repositório.
