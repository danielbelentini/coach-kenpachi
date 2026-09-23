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
    <section
      id="resultados"
      className="py-[clamp(3rem,6vw,5.5rem)]"
      aria-labelledby="results-heading"
    >
      <div className="max-w-[1180px] mx-auto px-5 md:px-8">
        <Reveal>
          <AccentMark />
          <h2 id="results-heading">
            Resultados <span className="text-brand-orange">reais</span>. Histórias
            reais.
          </h2>
          <p className="max-w-[56ch] text-[1.05rem]">
            Cada pessoa começa de um ponto diferente. Conheça algumas das
            evoluções de clientes que confiaram no acompanhamento do Coach
            Kenpachi.
          </p>
        </Reveal>

        <div className="flex flex-col gap-7 mt-10">
          {CASES.map((item, index) => (
            <Reveal
              key={item.id}
              delay={80 + index * 80}
              className={`flex flex-col gap-6 bg-brand-graphite-light border border-brand-line rounded-[10px] p-6 case:items-center case:gap-10 case:p-9 ${
                index % 2 === 1 ? "case:flex-row-reverse" : "case:flex-row"
              }`}
            >
              <div className="flex gap-4 w-full case:w-[46%] case:max-w-[460px] case:shrink-0">
                <figure className="flex-1 m-0 flex flex-col gap-[0.6rem]">
                  <img
                    src="https://placehold.co/450x600/26292c/26292c"
                    alt={item.beforeAlt}
                    className="w-full aspect-[3/4] border border-brand-line rounded-[6px] object-cover block"
                    width={450}
                    height={600}
                  />
                  <figcaption className="text-center font-bold text-[0.8rem] uppercase tracking-[0.04em] text-white">
                    Antes
                  </figcaption>
                </figure>
                <figure className="flex-1 m-0 flex flex-col gap-[0.6rem]">
                  <img
                    src="https://placehold.co/450x600/26292c/26292c"
                    alt={item.afterAlt}
                    className="w-full aspect-[3/4] border border-brand-line rounded-[6px] object-cover block"
                    width={450}
                    height={600}
                  />
                  <figcaption className="text-center font-bold text-[0.8rem] uppercase tracking-[0.04em] text-white">
                    Depois
                  </figcaption>
                </figure>
              </div>

              <div className="flex-1 min-w-0">
                {item.label && item.title && item.paragraphs ? (
                  <>
                    <p className="text-brand-orange font-bold text-[0.85rem] mb-[0.35rem]">
                      {item.label}
                    </p>
                    <h3 className="mb-3">{item.title}</h3>
                    {item.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </>
                ) : (
                  <p className="text-brand-orange font-bold text-[0.9rem] mb-0">
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
