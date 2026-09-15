import { AccentMark } from "./AccentMark";
import { Reveal } from "./Reveal";

/**
 * [DEPOIMENTO REAL — INSERIR]
 * [IMAGEM ANTES/DEPOIS — INSERIR COM AUTORIZAÇÃO]
 *
 * Cada item vira um "case" horizontal em largura ampla (duas fotos +
 * texto ao lado), com posição alternada entre imagem e texto. O Case
 * Marcelo é o único com conteúdo real (autorizado — briefing V2, seção
 * 14); os demais são placeholders prontos para receber depoimentos com
 * autorização. Para adicionar um novo case, duplique um item deste array.
 *
 * As fotos já são elementos <img> reais (placeholder visual, não uma
 * caixa de texto) — para inserir a foto definitiva, troque apenas o
 * "src" de cada uma pelo arquivo real. A legenda "Antes"/"Depois"
 * continua sendo texto HTML separado (figcaption), nunca embutida na
 * imagem.
 */
const CASES = [
  {
    id: "marcelo",
    label: "Case Marcelo",
    title: "Mais de 20 kg eliminados em 6 meses",
    paragraphs: [
      "Marcelo iniciou o acompanhamento buscando mudar sua composição corporal e sua rotina. Ao longo de seis meses, o trabalho envolveu alimentação, treinamento e mudanças de rotina, com ajustes de acordo com sua evolução e dificuldades.",
      "Ao final do período, foram mais de 20 kg eliminados, além de melhora nos resultados apresentados nos exames acompanhados durante o processo.",
    ],
    beforeAlt: "Foto de antes do Marcelo — imagem provisória, será substituída pela foto real",
    afterAlt: "Foto de depois do Marcelo — imagem provisória, será substituída pela foto real",
  },
  {
    id: "placeholder-2",
    label: null,
    title: null,
    paragraphs: null,
    beforeAlt: "Foto de antes do cliente — placeholder, inserir com autorização",
    afterAlt: "Foto de depois do cliente — placeholder, inserir com autorização",
  },
  {
    id: "placeholder-3",
    label: null,
    title: null,
    paragraphs: null,
    beforeAlt: "Foto de antes do cliente — placeholder, inserir com autorização",
    afterAlt: "Foto de depois do cliente — placeholder, inserir com autorização",
  },
];

export function Results() {
  return (
    <section id="resultados" className="section results" aria-labelledby="results-heading">
      <div className="container">
        <Reveal>
          <AccentMark />
          <h2 id="results-heading">
            Resultados <span className="text-accent">reais</span>. Histórias
            reais.
          </h2>
          <p className="section__lead">
            Cada pessoa começa de um ponto diferente. Conheça algumas das
            evoluções de clientes que confiaram no acompanhamento do Coach
            Kenpachi.
          </p>
        </Reveal>

        <div className="results__cases">
          {CASES.map((item, index) => (
            <Reveal
              key={item.id}
              delay={80 + index * 80}
              className={`results__case ${index % 2 === 1 ? "results__case--reverse" : ""}`.trim()}
            >
              <div className="results__case-photos">
                <figure className="results__case-photo">
                  <img
                    src="https://placehold.co/450x600/26292c/26292c"
                    alt={item.beforeAlt}
                    className="results__case-photo-placeholder"
                    width={450}
                    height={600}
                  />
                  <figcaption>Antes</figcaption>
                </figure>
                <figure className="results__case-photo">
                  <img
                    src="https://placehold.co/450x600/26292c/26292c"
                    alt={item.afterAlt}
                    className="results__case-photo-placeholder"
                    width={450}
                    height={600}
                  />
                  <figcaption>Depois</figcaption>
                </figure>
              </div>

              <div className="results__case-content">
                {item.label && item.title && item.paragraphs ? (
                  <>
                    <p className="results__case-label">{item.label}</p>
                    <h3>{item.title}</h3>
                    {item.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </>
                ) : (
                  <p className="results__case-pending">
                    [DEPOIMENTO REAL — INSERIR]
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
