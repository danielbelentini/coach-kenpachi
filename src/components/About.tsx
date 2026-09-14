import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="sobre" className="section about" aria-labelledby="about-heading">
      <div className="container about__grid">
        <Reveal className="about__photo-wrapper">
          {/*
            [IMAGEM REAL DO COACH — INSERIR]
            A fotografia ainda será produzida (briefing V2, seção 6). Nenhuma
            imagem foi gerada por IA para representar o Coach. Ao adicionar
            a foto real, substituir este placeholder por um
            <Image src="/images/coach-kenpachi.jpg" alt="Coach Kenpachi" .../>
          */}
          <div className="about__photo-placeholder">
            <span>[IMAGEM REAL DO COACH — INSERIR]</span>
          </div>
        </Reveal>

        <div className="about__content">
          <Reveal>
            <h2 id="about-heading">
              Sobre o Coach <span className="text-accent">Kenpachi</span>
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="about__text">
              <p>
                Formado em Nutrição, com especialização em Body Building
                Coach e mais de 5 anos de atuação no mercado, o Coach
                Kenpachi trabalha com nutrição esportiva e planejamento de
                treinamento de musculação.
              </p>
              <p>
                Seu trabalho parte de uma ideia simples: cada pessoa
                precisa de uma estratégia que faça sentido para seus
                objetivos e para a própria rotina.
              </p>
              <p>
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
