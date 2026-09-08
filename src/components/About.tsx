import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="sobre" className="section about" aria-labelledby="about-heading">
      <div className="container about__grid">
        <Reveal className="about__photo-wrapper">
          {/*
            [IMAGEM NECESSÁRIA]
            Foto real do Coach Kenpachi (rosto, meio corpo ou ambiente de
            trabalho). Nenhuma imagem de pessoa foi inventada — este é um
            espaço reservado pronto para receber o arquivo definitivo.
            Ao adicionar a foto real, substituir este placeholder por um
            <Image src="/images/coach-kenpachi.jpg" alt="Coach Kenpachi" .../>
          */}
          <div className="about__photo-placeholder">
            <span>[IMAGEM NECESSÁRIA]</span>
            <p>Foto do Coach Kenpachi</p>
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
                Formado em Nutrição e com mais de 5 anos de experiência,
                Coach Kenpachi atua com acompanhamento de nutrição esportiva
                e planejamento de treinamento de musculação.
              </p>
              <p>
                Sua abordagem combina base teórica com aplicação prática no
                dia a dia de cada aluno, ajustando o planejamento conforme a
                evolução do processo.
              </p>
              <p className="about__placeholder">
                [VALIDAR COM O CLIENTE: nome completo, trajetória
                profissional e filosofia de trabalho em mais detalhes]
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
