import { AccentMark } from "./AccentMark";
import { Reveal } from "./Reveal";

/**
 * [DEPOIMENTO REAL — INSERIR]
 * [IMAGEM ANTES/DEPOIS — INSERIR COM AUTORIZAÇÃO]
 *
 * Estrutura pronta para receber depoimentos e imagens reais de outros
 * clientes, apenas quando houver autorização de uso (briefing V2, seção 6
 * e seção 14). Nenhum depoimento foi inventado. Para adicionar um novo,
 * duplique um item deste array e substitua os placeholders.
 */
const TESTIMONIAL_SLOTS = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
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

        {/* Case Marcelo — autorizado para uso de imagens e dados (briefing V2, seção 14). */}
        <Reveal delay={80}>
          <article className="results__case">
            <div className="results__case-photos">
              <div className="results__case-photo">
                <span>[IMAGEM ANTES/DEPOIS — INSERIR COM AUTORIZAÇÃO]</span>
                <p>Antes</p>
              </div>
              <div className="results__case-photo">
                <span>[IMAGEM ANTES/DEPOIS — INSERIR COM AUTORIZAÇÃO]</span>
                <p>Depois</p>
              </div>
            </div>

            <div className="results__case-content">
              <p className="results__case-label">Case Marcelo</p>
              <h3>Mais de 20 kg eliminados em 6 meses</h3>
              <p>
                Marcelo iniciou o acompanhamento buscando mudar sua
                composição corporal e sua rotina. Ao longo de seis meses, o
                trabalho envolveu alimentação, treinamento e mudanças de
                rotina, com ajustes de acordo com sua evolução e
                dificuldades.
              </p>
              <p>
                Ao final do período, foram mais de 20 kg eliminados, além de
                melhora nos resultados apresentados nos exames acompanhados
                durante o processo.
              </p>
            </div>
          </article>
        </Reveal>

        {/* Depoimentos — estrutura pronta para receber conteúdo real. */}
        <div className="results__grid">
          {TESTIMONIAL_SLOTS.map((slot, index) => (
            <Reveal
              key={slot.id}
              delay={160 + index * 80}
              className="results__card results__card--placeholder"
            >
              <div className="results__card-photo">
                <span>[IMAGEM ANTES/DEPOIS — INSERIR COM AUTORIZAÇÃO]</span>
              </div>
              <p className="results__card-quote">
                [DEPOIMENTO REAL — INSERIR]
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
