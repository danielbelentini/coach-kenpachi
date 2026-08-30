/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gera a pasta /out com HTML/CSS/JS puramente estáticos.
  // Necessário porque o servidor de hospedagem não roda Node.js.
  output: "export",

  // next/image exige um servidor de otimização por padrão.
  // Como o build é estático, desligamos a otimização em runtime
  // (as imagens já são servidas como arquivos estáticos otimizados).
  images: {
    unoptimized: true,
  },

  // Garante que cada rota vire uma pasta com index.html
  // (ex: /sobre -> /sobre/index.html), o formato mais compatível
  // com hospedagens estáticas simples (Apache/Nginx sem rewrites).
  trailingSlash: true,

  reactStrictMode: true,
};

module.exports = nextConfig;
