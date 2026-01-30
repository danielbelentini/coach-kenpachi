export default function OurServices() {
  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Nossos Serviços
          </h2>

          {/* Linha fina centralizada */}
          <div className="w-20 h-[2px] bg-orange-500 mx-auto mt-4 mb-6" />

          <p className="text-gray-400 max-w-md mx-auto">
            Consultoria completa para transformação atlética
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Card */}
          <div className="rounded-3xl p-8 bg-gradient-to-b from-blue-600 to-blue-900 shadow-xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <span className="text-4xl mb-6 block">🍎</span>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Consultoria em Dieta
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Estratégias nutricionais personalizadas, alinhadas aos seus objetivos e rotina.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-3xl p-8 bg-gradient-to-b from-blue-600 to-blue-900 shadow-xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <span className="text-4xl mb-6 block">🏋️‍♂️</span>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Programação de Treino
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Treinos estruturados com progressão, periodização e foco total em performance.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-3xl p-8 bg-gradient-to-b from-blue-600 to-blue-900 shadow-xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <span className="text-4xl mb-6 block">🧪</span>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Suplementação
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Recomendações de suplementos baseadas em evidências científicas.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-3xl p-8 bg-gradient-to-b from-blue-600 to-blue-900 shadow-xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <span className="text-4xl mb-6 block">⚡</span>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Otimização de Performance
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Orientação ética, segura e baseada em evidências para maximizar resultados.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
