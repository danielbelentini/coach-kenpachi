# Eventos de Analytics (GA4 via GTM)

Toda a instrumentação passa por `src/lib/analytics.ts`, que envia eventos
para `window.dataLayer`. O GTM (configurado em `NEXT_PUBLIC_GTM_ID`) fica
responsável por encaminhar esses eventos ao GA4.

## Evento principal

### `whatsapp_click`

Disparado em **todo** clique em um botão de WhatsApp da página (contextual
ou flutuante). É o evento de conversão principal do site.

| Parâmetro      | Descrição                              | Valores possíveis                                                                 |
| -------------- | --------------------------------------- | ---------------------------------------------------------------------------------- |
| `cta_location` | Onde o clique aconteceu                 | `header`, `hero`, `consultancy`, `results`, `nutrition`, `training`, `final`, `floating` |

Exemplo do payload enviado ao `dataLayer`:

```text
event: whatsapp_click
cta_location: hero
```

## Eventos adicionais

### `instagram_click`

Clique no link secundário do Instagram (rodapé). Usa o mesmo parâmetro
`cta_location` para indicar a origem do clique.

### `faq_interaction`

Disparado quando o visitante abre uma pergunta do FAQ.

| Parâmetro      | Descrição                    |
| -------------- | ----------------------------- |
| `faq_question` | Texto da pergunta aberta      |

## Configuração no GTM/GA4

No container do GTM, criar:

1. Uma tag GA4 Event com nome do evento `whatsapp_click`, disparada em um
   gatilho de Evento Personalizado `whatsapp_click`, enviando o parâmetro
   `cta_location` como parâmetro de evento do GA4.
2. Repetir o processo para `instagram_click` e `faq_interaction`.

`[VALIDAR COM O CLIENTE]`: criação do container GTM, do stream do GA4 e
configuração das tags acima é uma etapa manual no painel do Google, fora
do escopo do código deste repositório.
