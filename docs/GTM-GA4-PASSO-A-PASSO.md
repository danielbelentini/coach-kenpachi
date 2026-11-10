# GTM e GA4 — passo a passo (Coach Kenpachi)

Container GTM: `GTM-KK7FKGT5` · Propriedade/ID da métrica GA4: `G-XXXXXXXXXX` (a informar).

Este roteiro configura, na sua conta, os três eventos do padrão
(`whatsapp_click`, `navigation_click`, `social_click`) com os cinco parâmetros
(`page_name`, `section_name`, `button_name`, `button_label`, `link_url`).
Os nomes de menu abaixo seguem a interface em português; onde a tela pode ter
mudado, está marcado com **[conferir na tela]**.

> Nada aqui foi validado no GTM nem no GA4: o código foi testado só no
> navegador (leitura do `dataLayer`). A validação nas ferramentas do Google
> é feita na sua conta, seguindo os passos 5 e 6.

## Importante: o GTM só carrega com consentimento

O site só carrega o GTM depois que o visitante aceita os **cookies analíticos**
(barra de cookies ou "Preferências de cookies" no rodapé). Por isso:

- Para **testar** (Preview/Tag Assistant e DebugView), abra o site e clique em
  **Aceitar todos** (ou ative "Cookies analíticos") antes de esperar que o
  GTM conecte. Se o Preview não conectar, é porque o consentimento ainda não foi
  dado. Se você recusou antes, use "Preferências de cookies" no rodapé.
- O site já envia o estado do **Google Consent Mode v2** ao `dataLayer`
  (`analytics_storage`, `ad_storage`, `ad_user_data`, `ad_personalization`).
  Se quiser uma segunda camada dentro do GTM, em cada tag use
  **Configurações avançadas → Configurações de consentimento** e exija
  `analytics_storage` nas tags do GA4. **[conferir na tela]**
- Os comandos `consent` não são eventos de análise: não crie acionador para eles.

## 0. Antes de começar

1. Faça o deploy do site com `NEXT_PUBLIC_GTM_ID=GTM-KK7FKGT5` (passo 8). Sem isso
   o GTM não é injetado e o Preview não conecta.
2. No GTM, em **Variáveis → Variáveis incorporadas → Configurar**, ative a
   variável **Evento** (`{{Event}}`). Ative também **Page Hostname**
   (**Nome do host da página**), usada no passo 4.

## 1. Variáveis de camada de dados (DLV)

Em **Variáveis → Variáveis definidas pelo usuário → Nova**, tipo **Variável da
camada de dados**, **Versão 2**. Crie cinco:

| Nome da variável no GTM | Nome da variável da camada de dados |
| ----------------------- | ----------------------------------- |
| `DLV - page_name`       | `page_name`                         |
| `DLV - section_name`    | `section_name`                      |
| `DLV - button_name`     | `button_name`                       |
| `DLV - button_label`    | `button_label`                      |
| `DLV - link_url`        | `link_url`                          |

Deixe **Valor padrão** em branco.

## 2. Tag do Google (configuração do GA4)

Se o container ainda não tem, crie em **Tags → Nova → Tag do Google**
**[conferir na tela: antes se chamava "Configuração do GA4"]**:

- **ID da tag**: o ID da métrica (use a variável do passo 4).
- **Acionamento**: **Initialization - All Pages**.

## 3. Acionador de evento personalizado

Uma única regra cobre os três eventos, com regex ancorada (evita sobreposição):

**Acionadores → Novo → Evento personalizado**

- **Nome**: `CE - cliques padrão`
- **Nome do evento**: `^(whatsapp_click|navigation_click|social_click)$`
- Marque **Usar correspondência de regex**.
- **Este acionador é disparado em**: **Todos os eventos personalizados**.

> Se preferir uma tag por evento, crie três acionadores com o nome exato do
> evento (sem regex) e uma tag para cada. Não misture as duas abordagens: é
> assim que surge a duplicidade (um evento disparando duas tags).

## 4. Tag de evento do GA4

**Tags → Nova → Google Analytics: Evento do GA4** **[conferir na tela]**:

- **Nome**: `GA4 - evento cliques padrão`
- **ID da métrica** (ou tag de configuração): a variável do passo abaixo.
- **Nome do evento**: `{{Event}}`
- **Parâmetros do evento** (um por linha):

| Nome do parâmetro | Valor                |
| ----------------- | -------------------- |
| `page_name`       | `{{DLV - page_name}}`    |
| `section_name`    | `{{DLV - section_name}}` |
| `button_name`     | `{{DLV - button_name}}`  |
| `button_label`    | `{{DLV - button_label}}` |
| `link_url`        | `{{DLV - link_url}}`     |

- **Acionamento**: `CE - cliques padrão`.

### ID da métrica: homologação x produção

Crie uma variável em **Variáveis → Nova → Tabela de pesquisa** chamada
`GA4 - ID da métrica`:

- **Variável de entrada**: `{{Page Hostname}}`
- Linhas: `<host de produção>` → `G-<produção>`; `<host de homologação>` → `G-<homologação>`.
- Habilite **Definir valor padrão** com o ID de **homologação** (assim nada
  vai para a produção por engano).

Use `{{GA4 - ID da métrica}}` na Tag do Google (passo 2) e na tag de evento.
O domínio de produção do site ainda está como `[VALIDAR COM O CLIENTE]` em
`src/config/site.ts`; preencha o host real aqui quando for definido.

## 5. Teste no Preview do GTM

1. **Visualizar** (Preview) no GTM e informe a URL do site (homologação).
2. Clique em cada botão de WhatsApp e no Instagram do rodapé.
3. Em cada evento no resumo do Tag Assistant confira:
   - evento `whatsapp_click` / `social_click` aparece **uma vez por clique**;
   - a tag `GA4 - evento cliques padrão` aparece em **Tags Fired**;
   - na aba **Data Layer**, os cinco parâmetros e `event`;
   - na aba **Variables**, as cinco DLV com valor.
4. Clique com o botão do meio em um botão de WhatsApp: deve gerar um evento.
5. Clique em um link do menu (âncora `#...`): **não** deve gerar evento.

## 6. Teste no DebugView do GA4

1. Com o Preview ativo, abra **Admin → Visualização de dados → DebugView**
   **[conferir na tela: o caminho do menu pode variar]**.
2. Confirme os eventos `whatsapp_click` e `social_click` com os parâmetros.
3. **Duplicidade de `navigation_click` no DebugView pode ser só do modo
   Preview.** Neste site (página única) esse evento não dispara hoje, mas vale
   para quando houver outras páginas: confirme fora do Preview (Relatórios em
   tempo real) antes de mexer no código ou no GTM.
4. Observação: o GA4 pode coletar sozinho um evento `click` com o parâmetro
   `link_url` se a **Medição otimizada → Cliques de saída** estiver ligada.
   É um evento diferente (`click`) dos três do padrão; confira em
   **Fluxo de dados → Medição otimizada** **[conferir na tela]** se isso não
   atrapalha seus relatórios.

Quando estiver tudo certo: no GTM, **Enviar → Publicar** (informe o nome e a
descrição da versão).

## 7. Dimensões personalizadas no GA4 (escopo Evento)

**Admin → Visualização de dados → Definições personalizadas → Dimensões
personalizadas → Criar dimensão personalizada** **[conferir na tela]**. Crie
quatro, todas com **Escopo: Evento**:

| Nome da dimensão | Parâmetro do evento |
| ---------------- | ------------------- |
| `page_name`      | `page_name`         |
| `section_name`   | `section_name`      |
| `button_name`    | `button_name`       |
| `button_label`   | `button_label`      |

`link_url` não precisa virar dimensão (não pedido no padrão). Dimensões novas só
passam a aparecer nos relatórios depois de algumas horas e não são retroativas.

## 8. Variável de ambiente no host (Netlify) e novo deploy

1. Netlify → **Site configuration → Environment variables** **[conferir na tela]**.
2. Crie `NEXT_PUBLIC_GTM_ID` = `GTM-KK7FKGT5` (escopo que inclui **Builds**).
3. **Deploys → Trigger deploy → Deploy site** (ou *Clear cache and deploy site*).
   Variáveis `NEXT_PUBLIC_*` são **gravadas no build**: sem novo deploy a
   mudança não entra no site.
4. Verifique: abra o site, veja o `gtm.js?id=GTM-KK7FKGT5` na aba Network e
   `window.dataLayer` no console.

Para trocar entre homologação e produção, use a tabela de pesquisa do passo 4
(por host). O container GTM é o mesmo; muda apenas o ID da métrica do GA4.

## Eventos que já existiam e não são do padrão

`faq_interaction` (parâmetro `faq_question`) e `scroll_depth` (parâmetro
`scroll_percentage`) continuam sendo enviados ao `dataLayer`, mas **não são
cobertos** pela tag acima. Se quiser mandá-los ao GA4, crie acionadores e
tags próprios, separados, para não misturar com o padrão.
