import type { Metadata, Viewport } from "next";
import { Big_Shoulders_Display, Inter, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/lib/site-config";
import "./globals.css";

// Fontes auto-hospedadas via next/font: baixadas em build time e
// servidas localmente (sem requisição externa em runtime), o que
// evita layout shift e melhora performance/SEO.
const display = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.brandName} — Nutrição Esportiva e Coach de Musculação`,
    template: `%s · ${site.brandName}`,
  },
  description:
    "Nutrição esportiva individual: plano alimentar construído a partir de uma anamnese completa, com acompanhamento contínuo para quem treina sério.",
  keywords: [
    "nutricionista esportivo",
    "nutrição esportiva",
    "coach de musculação",
    "plano alimentar individual",
    "anamnese nutricional",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.siteUrl,
    title: `${site.brandName} — Nutrição Esportiva e Coach de Musculação`,
    description:
      "Plano alimentar individual, construído a partir de uma anamnese completa. Agende sua avaliação.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brandName} — Nutrição Esportiva`,
    description:
      "Plano alimentar individual, construído a partir de uma anamnese completa.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.siteUrl },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#1A1A1A",
  width: "device-width",
  initialScale: 1,
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.professionalName,
  jobTitle: "Nutricionista Esportivo",
  worksFor: { "@type": "Organization", name: site.brandName },
  areaServed: site.city,
  url: site.siteUrl,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="bg-graphite-950 font-body text-cream antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-orange-600 focus:px-4 focus:py-2 focus:font-body focus:text-sm focus:text-graphite-950"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
