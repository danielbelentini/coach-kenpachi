import type { Metadata, Viewport } from "next";
import { Anton } from "next/font/google";
import { siteConfig } from "@/config/site";
import {
  GoogleTagManagerNoScript,
  GoogleTagManagerScript,
} from "@/components/GoogleTagManager";
import "./globals.css";

/**
 * Fonte de destaque usada apenas nos H2 (títulos principais de seção).
 * `next/font/google` baixa e self-hospeda o arquivo no momento do build —
 * nenhuma chamada à rede acontece em produção, mantendo compatibilidade
 * total com o Static Export.
 */
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/images/logo-coach-kenpachi.png",
        width: 1200,
        height: 340,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/logo-coach-kenpachi.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1b1d1f",
};

// Schema.org: apenas dados que o briefing sustenta (nome, descrição, imagem, url).
// Nenhum dado de avaliação, endereço ou telefone foi inventado.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}/images/logo-coach-kenpachi.png`,
  sameAs: [siteConfig.instagramUrl],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={anton.variable}>
      <head>
        <GoogleTagManagerScript />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <GoogleTagManagerNoScript />
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
