import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="sobre"
      className="py-[clamp(3rem,6vw,5.5rem)] bg-brand-green"
      aria-labelledby="about-heading"
    >
      <div className="max-w-[1180px] mx-auto px-5 md:px-8 grid gap-8 items-center about:grid-cols-[0.85fr_1.15fr] about:gap-12">
        <Reveal className="flex justify-center">
          {/*
            [IMAGEM REAL DO COACH — INSERIR]
            A fotografia ainda será produzida (briefing V2, seção 6). Nenhuma
            imagem foi gerada por IA para representar o Coach. Este é um
            placeholder real (não uma foto de banco de imagens) — quando a
            foto estiver pronta, troque apenas o "src" abaixo pelo arquivo
            definitivo (ex.: "/images/coach-kenpachi.jpg"). Nenhuma outra
            mudança é necessária.
          */}
          <img
            src="https://placehold.co/480x600/1b1d1f/1b1d1f"
            alt="Foto do Coach Kenpachi — imagem provisória, será substituída pela foto real"
            className="w-full max-w-[320px] aspect-[4/5] border border-brand-line rounded-[10px] object-cover block"
            width={480}
            height={600}
          />
        </Reveal>

        <div className="max-w-[560px]">
          <Reveal>
            <h2 id="about-heading" className="text-white">
              Sobre o Coach <span className="text-brand-orange">Kenpachi</span>
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div>
              <p className="text-white">
                Formado em Nutrição, com especialização em Body Building
                Coach e mais de 5 anos de atuação no mercado, o Coach
                Kenpachi trabalha com nutrição esportiva e planejamento de
                treinamento de musculação.
              </p>
              <p className="text-white">
                Seu trabalho parte de uma ideia simples: cada pessoa
                precisa de uma estratégia que faça sentido para seus
                objetivos e para a própria rotina.
              </p>
              <p className="text-white">
                Por isso, seus planejamentos são individualizados e podem
                ser adaptados conforme a evolução e as necessidades de cada
                cliente.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
