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
      <div className="max-w-295 mx-auto px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-3">
            <h2 id="goals-heading">
              <AccentMark />
              Isso é para <span className="text-brand-orange">você</span> ?
            </h2>
            <p className="max-w-[56ch] text-[1.05rem] text-center">
              Cada pessoa chega com um objetivo diferente. O acompanhamento
              parte do que você busca e do momento em que você está.
            </p>
          </div>
        </Reveal>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center mt-6">
          {GOALS.map((goal, index) => (
            <Reveal key={goal} delay={index * 40}>
              <li className="flex w-full items-center gap-[0.6rem] rounded-[6px] border border-brand-line bg-brand-graphite-light p-4 text-center font-semibold text-white transition-colors duration-[220ms] hover:border-brand-orange sm:w-auto lg:w-[260px]">
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
