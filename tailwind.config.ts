import type { Config } from "tailwindcss";

// Paleta derivada da identidade visual da cliente:
// verde-petróleo (primária), grafite (fundo, tema escuro) e laranja
// queimado (secundária/CTA). Cada tom foi verificado para manter
// contraste AA sobre o respectivo fundo (ver comentários abaixo).
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#1A1A1A", // fundo base (hero, FAQ)
          900: "#212120", // fundo do rodapé (mais escuro que as seções)
          800: "#2C2C2A", // fundo alternado das seções (o grafite da paleta)
          700: "#3A3A37",
          600: "#4E4E4A",
        },
        brand: {
          green: {
            900: "#085041", // verde-petróleo da paleta (uso em fundos/bordas)
            700: "#0E6753", // hover de fundo verde
            400: "#3FA98A", // verde claro — texto/links sobre fundo escuro (contraste 6:1)
          },
          orange: {
            600: "#D85A30", // laranja queimado da paleta (CTA)
            500: "#E8734A", // hover do CTA
          },
        },
        cream: "#F2F0EC", // branco quente para textos principais
        muted: "#B8B6B0", // texto secundário sobre fundo escuro
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.6s ease forwards",
        marquee: "marquee 28s linear infinite",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 12px 30px -14px rgba(0,0,0,0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
