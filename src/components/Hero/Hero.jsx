import heroImg from "../../assets/hero.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full px-6 text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          
          {/* Left content */}
          <div>
            <span className="inline-block mb-6 rounded-full bg-orange-500 px-4 py-1 text-sm font-semibold">
              Consultoria Atlética Premium
            </span>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight">
              Transforme seu{" "}
              <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-purple-500 bg-clip-text text-transparent">
                corpo
              </span>{" "}
              e mente
            </h1>

            <p className="mt-6 max-w-xl text-gray-300 text-base sm:text-lg">
              Consultoria profissional em dieta, treino, suplementação e ergogênicos.
              Formado em Nutrição com pós-graduação em Fisiculturismo.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 transition">
                Conhecer Planos
                <span>→</span>
              </button>

              <button className="rounded-lg border border-orange-500 px-6 py-3 font-semibold text-orange-400 hover:bg-orange-500 hover:text-black transition">
                Saiba Mais
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 max-w-lg gap-6">
              <div>
                <p className="text-4xl font-black text-yellow-400 text-center">300+</p>
                <p className="text-sm text-gray-400 text-center">Clientes Transformados</p>
              </div>

              <div>
                <p className="text-4xl font-black text-yellow-400 text-center">4+</p>
                <p className="text-sm text-gray-400 text-center">Anos de Experiência</p>
              </div>

              <div>
                <p className="text-4xl font-black text-yellow-400 text-center">98%</p>
                <p className="text-sm text-gray-400 text-center">Taxa de Satisfação</p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative hidden lg:flex justify-center">
            <img
              src={heroImg}
              alt="Consultor"
              className="max-h-[600px] w-auto object-cover rounded-xl shadow-2xl"
            />

            {/* Badge */}
            <div className="absolute -bottom-4 -right-6 bg-zinc-900/90 backdrop-blur px-4 py-3 rounded-xl flex items-center gap-3 shadow-lg">
              <span className="text-yellow-400 text-xl">🏅</span>
              <div>
                <p className="text-sm font-semibold">Certificado IFBB</p>
                <p className="text-xs text-gray-400">Profissional</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-orange-400 animate-bounce z-20">
        <a href="#servicos" className="w-10 h-10 flex justify-center hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down text-[#ff6b35]" data-loc="client/src/pages/Home.tsx:103"><path d="m6 9 6 6 6-6"></path></svg>
        </a>
      </div>
    </section>
  );
}
