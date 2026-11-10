# Consentimento de cookies e Política de Privacidade

Implementa, nesta landing page, o mesmo comportamento de consentimento usado
nos demais sites: **GTM e `dataLayer` só funcionam com consentimento analítico**.
Tudo roda no navegador, compatível com `output: 'export'` (sem servidor).

## Como funciona

| Situação do visitante                    | GTM / GA4                                  | Eventos no `dataLayer`        |
| ---------------------------------------- | ------------------------------------------ | ----------------------------- |
| Sem escolha registrada (1ª visita)       | **Não carrega** (nenhum request ao Google) | **Descartados**               |
| Aceitou todos / só analíticos            | Carrega **1 vez**                          | Enviados normalmente          |
| Recusou                                  | **Não carrega**                            | Descartados                   |
| Só marketing                             | **Não carrega** (não há ferramenta de marketing) | Descartados             |
| Revogou depois de aceitar                | Consentimento negado, cookies `_ga*`/`_gid`/`_gcl_*` removidos e a página **recarrega sem GTM** | Descartados |
| Versão do consentimento mudou / dado inválido | Tratado como "sem escolha": a barra volta | Descartados            |

- Categorias opcionais (analíticos, marketing) **nunca** começam ativadas.
- Aceitar e Recusar têm o mesmo estilo visual (nenhum é induzido).
- O consentimento é sincronizado entre abas do mesmo navegador.
- Se o `localStorage` estiver indisponível, a escolha vale só na aba atual.

## Arquivos

| Arquivo                                   | Função                                                                                   |
| ----------------------------------------- | ---------------------------------------------------------------------------------------- |
| `src/lib/consent.ts`                      | Lê/grava a escolha no `localStorage` (versão, data ISO, categorias) e avisa mudanças.    |
| `src/components/ConsentManager.tsx`       | Barra de cookies + central de personalização (`<dialog>`), e aplica o consentimento ao GTM. Montado uma vez no layout. |
| `src/components/GoogleTagManager.tsx`     | Carrega o GTM só após consentimento; Consent Mode v2; revogação (limpa cookies e recarrega). |
| `src/components/CookiePreferencesButton.tsx` | Botão "Preferências de cookies" (rodapé e Política).                                  |
| `src/lib/analytics.ts`                    | `pushToDataLayer` descarta eventos sem consentimento analítico.                          |
| `src/config/privacy.ts`                   | Dados da Política (responsável, contato) e campos `[PREENCHER]`.                         |
| `src/app/politica-de-privacidade/page.tsx`| Página `/politica-de-privacidade/` (gerada como HTML estático).                          |

Armazenamento: chave `kenpachi_cookie_consent` no `localStorage`:

```json
{ "necessary": true, "version": "1.0", "timestamp": "2026-11-10T12:00:00.000Z",
  "analytics": true, "marketing": false }
```

## Google Consent Mode v2

Antes do script do GTM, o site envia `consent default` (tudo `denied`) e
`consent update` com o que foi autorizado (`analytics_storage`,
`ad_storage`, `ad_user_data`, `ad_personalization`). Esses comandos não são
eventos de análise (ver `docs/EVENTOS.md`).

O bloco `<noscript>` do GTM foi **removido**: sem JavaScript não há como
registrar o consentimento e o iframe carregaria o GTM sem autorização.

## Pedir uma nova escolha a todos

Aumente `CONSENT_VERSION` em `src/lib/consent.ts` (ex.: `"1.1"`). Quem tem
consentimento com outra versão volta a ver a barra. Faça isso, por exemplo, ao
adicionar uma ferramenta de análise ou marketing, ou ao mudar a Política de
forma relevante. A versão do **texto** da política fica em
`src/config/privacy.ts` (`policyMeta`) e é independente.

## Adicionar uma ferramenta de marketing no futuro (ex.: Meta Pixel)

Não existe nenhuma hoje. Ao adicionar, carregue o script **somente** quando
`getConsent()?.marketing === true` (e escute `subscribeConsent` para reagir a
mudanças), atualize a Política (seções 5, 6 e 8) e aumente `CONSENT_VERSION`.
O GTM só carrega com consentimento **analítico**; se o Pixel for instalado
pelo GTM, o acionador/consentimento da tag no GTM deve exigir `ad_storage`, e a
condição de carga do GTM em `applyGoogleConsent` precisa ser revista.

## Botão flutuante do WhatsApp

Enquanto a barra estiver aberta, ela publica sua altura em
`--cookie-bar-height` (no `<html>`); `FloatingWhatsApp` soma esse valor ao seu
`bottom`, então o botão nunca fica coberto. Sem a barra, a variável é removida.

## Política de Privacidade — o que falta preencher

Campos `[PREENCHER]` (aparecem em laranja na página; configurados em
`src/config/privacy.ts` e na seção 2 da página):

- Nome completo ou razão social do responsável.
- CPF ou CNPJ do responsável.
- Período de retenção configurado no Google Analytics 4.
- Medidas de segurança efetivamente adotadas.
- (Opcional) termo ou aviso específico do atendimento/anamnese.

Contato de privacidade: provisoriamente o WhatsApp do site
(`siteConfig.whatsappNumber`). O texto não afirma nenhuma prática que o código
não implemente. **Recomenda-se revisão jurídica** antes de publicar.
