import { AccentMark } from "./AccentMark";
import { IconCheck } from "./Icons";
import { Reveal } from "./Reveal";

const GOALS = [
  "Emagrecimento",
  "Ganho de massa muscular",
  "Hipertrofia",
  "Redução de gordura",
  "Performance",
  "Ganho de força",
  "Voltar a treinar",
];

export function Goals() {
  return (
    <section
      id="objetivos"
      className="py-[clamp(3rem,6vw,5.5rem)]"
      aria-labelledby="goals-heading"
    >
      <div className="max-w-[1180px] mx-auto px-5 md:px-8">
        <Reveal>
          <AccentMark />
          <h2 id="goals-heading">
            Isso é para <span className="text-brand-orange">você</span>?
          </h2>
          <p className="max-w-[56ch] text-[1.05rem]">
            Cada pessoa chega com um objetivo diferente. O acompanhamento
            parte do que você busca e do momento em que você está.
          </p>
        </Reveal>

        <ul className="grid grid-cols-2 sm:grid-cols-3 goals:grid-cols-4 gap-[0.85rem] mt-10">
          {GOALS.map((goal, index) => (
            <Reveal key={goal} delay={index * 40}>
              <li className="flex items-center justify-center gap-[0.6rem] bg-brand-graphite-light border border-brand-line rounded-[6px] p-4 font-semibold text-white text-center transition-colors duration-[220ms] hover:border-brand-orange">
                <IconCheck className="w-5 h-5 shrink-0 text-brand-orange" />
                <span>{goal}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
