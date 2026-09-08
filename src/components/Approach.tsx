import { AccentMark } from "./AccentMark";
import { Reveal } from "./Reveal";

export function Approach() {
  return (
    <section className="section approach" aria-labelledby="approach-heading">
      <div className="container approach__inner">
        <Reveal>
          <AccentMark />
          <h2 id="approach-heading">
            Por que um acompanhamento <span className="text-accent">estruturado</span>
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="approach__text">
            <p>
              Treinar e se alimentar por conta própria funciona até certo
              ponto. Sem acompanhamento contínuo, é comum perder clareza
              sobre progressão de treino, ajustes de rotina e como a
              alimentação se conecta ao resultado que você busca.
            </p>
            <p>
              A proposta do Coach Kenpachi é orientar esse processo: ele
              elabora o planejamento de nutrição e treinamento, e você o
              executa na academia seguindo essa orientação — com
              acompanhamento e ajustes ao longo do caminho.
            </p>
            <p className="approach__note">
              Importante: O acompanhamento é feito à distância: Coach 
              Kenpachi elabora o planejamento e orienta a execução dos 
              treinos na academia. Ele não acompanha presencialmente a 
              execução dos exercícios.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
