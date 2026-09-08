/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gera HTML/CSS/JS estático em /out — nenhum servidor Node é necessário em produção.
  output: "export",

  // Sem servidor de otimização de imagens em produção estática.
  images: {
    unoptimized: true,
  },

  // Facilita publicar em subpastas de servidores tradicionais, se necessário.
  trailingSlash: true,

  reactStrictMode: true,
};

export default nextConfig;
