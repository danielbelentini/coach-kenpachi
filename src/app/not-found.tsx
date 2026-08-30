import Link from "next/link";
import { site } from "@/lib/site-config";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-graphite-950 px-6 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand-green-400">
        Erro 404
      </p>
      <h1 className="mt-4 font-display text-4xl uppercase text-cream sm:text-5xl">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-sm font-body text-muted">
        O endereço acessado não existe ou foi movido.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-orange-600 px-6 py-3 font-display uppercase tracking-wide text-graphite-950 transition-colors hover:bg-brand-orange-500"
      >
        Voltar para {site.brandName}
      </Link>
    </main>
  );
}
