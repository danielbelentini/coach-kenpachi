interface PlaceholderImageProps {
  /** Nome do arquivo em /public/images, sem extensão. Ex: "hero-professional" */
  slug: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  /** Above the fold: carrega imediatamente e com prioridade. Default: false (lazy). */
  priority?: boolean;
  sizes?: string;
}

/**
 * Imagem com fallback progressivo: tenta servir WebP e recua para
 * JPG em navegadores/situações sem suporte. Basta substituir os
 * arquivos em /public/images pelo mesmo nome (mantendo .webp e .jpg)
 * para trocar qualquer foto de placeholder por uma foto real —
 * nenhum componente precisa mudar.
 */
export function PlaceholderImage({
  slug,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes,
}: PlaceholderImageProps) {
  return (
    // A tag <picture> em si não tem tamanho próprio (é inline por padrão),
    // então repetimos as classes de dimensão nela também — garante que
    // o <img> com object-cover realmente preencha o contêiner pai
    // (ex: fundo full-bleed do CTA ou avatar circular pequeno).
    <picture className={`block ${className}`}>
      <source srcSet={`/images/${slug}.webp`} type="image/webp" />
      <source srcSet={`/images/${slug}.jpg`} type="image/jpeg" />
      <img
        src={`/images/${slug}.jpg`}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        sizes={sizes}
        className={`h-full w-full ${className}`}
      />
    </picture>
  );
}
