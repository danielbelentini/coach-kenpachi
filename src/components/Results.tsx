import { AccentMark } from "./AccentMark";
import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";

/**
 * [CONTEÚDO NECESSÁRIO]
 * O briefing indica que existem depoimentos reais, registros de evolução e
 * um estudo de caso detalhado — mas o conteúdo bruto (textos, fotos, números)
 * não foi fornecido junto a este arquivo. Os cartões abaixo são um template
 * pronto para receber esse material; nenhum depoimento ou resultado foi
 * inventado.
 */
const TESTIMONIAL_SLOTS = [1, 2, 3];

export function Results() {
  return (
    <section id="resultados" className="section results" aria-labelledby="results-heading">
      <div className="container">
        <Reveal>
          <AccentMark />
          <h2 id="results-heading">
            <span className="text-accent">Resultados</span> reais
          </h2>
          <p className="section__lead">
            Depoimentos e evolução de alunos acompanhados por Coach Kenpachi.
          </p>
        </Reveal>

        <div className="results__grid">
          {TESTIMONIAL_SLOTS.map((slot, index) => (
            <Reveal key={slot} delay={index * 80} className="results__card results__card--placeholder">
              <p className="results__placeholder-label">[CONTEÚDO NECESSÁRIO]</p>
              <p>
                Espaço reservado para depoimento real de aluno (texto, e
                registro de evolução, quando disponível).
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={280}>
          <div className="results__case-study">
            <h3>Estudo de caso</h3>
            <p className="results__placeholder-label">[CONTEÚDO NECESSÁRIO]</p>
            <p>
              Espaço reservado para o estudo de caso real citado no briefing,
              cobrindo situação inicial, objetivo, acompanhamento e evolução
              — sem transformar esse caso individual em promessa
              generalizada.
            </p>
          </div>
        </Reveal>

        <Reveal delay={360}>
          <div className="results__cta">
            <WhatsAppCta
              ctaLocation="results"
              messageKey="results"
              label="Falar com Coach Kenpachi"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
