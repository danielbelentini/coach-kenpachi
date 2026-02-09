import { useScrollToSection } from "../../hooks/useScrollToSection";

export default function CTAInline() {
  const scrollToSection = useScrollToSection();
  
  return (
    <section className="w-full bg-gradient-to-br from-black via-zinc-900 to-black py-24 px-6" id="cta">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl text-white mb-6 font-black">Escolha seu plano agora</h2>

        <p className="text-gray-300 text-lg md:text-xl mb-10">
          Comece sua transformação hoje e alcance seus objetivos com consultoria profissional
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <button className="bg-blue-600 hover:bg-blue-700 transition rounded-lg py-4 px-10 font-semibold text-lg text-white" onClick={() => scrollToSection("planos")}>
            Conhecer Planos
          </button>

          <a href="https://wa.me/5511949080965?text=Ol%C3%A1%2C%20quero%20saber%20sobre%20a%20consultoria" target="_blank" className="sm:flex inline-flex justify-center bg-transparent border border-white/20 hover:border-white/40 transition rounded-lg py-4 px-10 font-semibold text-lg text-blue-400 hover:text-blue-300">
            WhatsApp
          </a>
        </div>

        <p className="text-sm text-gray-400">Responderemos em até 24 horas</p>
      </div>
    </section>
  );
}