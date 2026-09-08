import Script from "next/script";

/**
 * Google Tag Manager.
 *
 * O ID vem de uma única variável de ambiente (NEXT_PUBLIC_GTM_ID), definida
 * no momento do build. Se não for definida, nenhum script é injetado —
 * evita tags "mortas" em ambientes de desenvolvimento/homologação.
 *
 * [VALIDAR COM O CLIENTE]: criar o container GTM e definir o ID antes do build de produção.
 */
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export function GoogleTagManagerScript() {
  if (!GTM_ID) return null;

  return (
    <Script id="gtm-init" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}

export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
