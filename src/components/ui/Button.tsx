import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: "md" | "lg";
  /**
   * Identificador estável para rastreamento no GTM/GA4.
   * Renderizado como atributo `data-gtm-id`, lido pela variável JS
   * customizada já configurada (sobe a árvore do DOM até encontrá-lo).
   * Convenção sugerida: "whatsapp_hero", "whatsapp_cta_final", etc.
   */
  gtmId?: string;
  external?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  // Texto grafite (não branco) sobre laranja: contraste ~4.5:1, AA compliant.
  primary:
    "bg-brand-orange-600 text-graphite-950 hover:bg-brand-orange-500 focus-visible:bg-brand-orange-500 shadow-card",
  secondary:
    "bg-transparent text-cream border border-cream/30 hover:border-brand-green-400 hover:text-brand-green-400",
  ghost: "bg-transparent text-cream hover:text-brand-orange-600",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  gtmId,
  external,
  className = "",
  ...rest
}: ButtonProps) {
  const isExternal = external ?? /^https?:\/\//.test(href);

  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full font-display uppercase tracking-wide",
    "transition-all duration-200 ease-out",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange-600",
    "active:scale-[0.97]",
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(" ");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        data-gtm-id={gtmId}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} data-gtm-id={gtmId} {...rest}>
      {children}
    </Link>
  );
}
