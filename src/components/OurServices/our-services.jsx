export default function OurServices() {
  return (
    <section className="w-full py-24 px-6" id="servicos">
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
            <div className="text-4xl mb-6 flex justify-center w-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-apple" data-loc="client/src/pages/Home.tsx:122"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path><path d="M10 2c1 .5 2 2 2 5"></path></svg>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Consultoria em Dieta
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Estratégias nutricionais personalizadas, alinhadas aos seus objetivos e rotina.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-3xl p-8 bg-gradient-to-b from-blue-600 to-blue-900 shadow-xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-4xl mb-6 flex justify-center w-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dumbbell" data-loc="client/src/pages/Home.tsx:128"><path d="M14.4 14.4 9.6 9.6"></path><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"></path><path d="m21.5 21.5-1.4-1.4"></path><path d="M3.9 3.9 2.5 2.5"></path><path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"></path></svg>

            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Programação de Treino
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Treinos estruturados com progressão, periodização e foco total em performance.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-3xl p-8 bg-gradient-to-b from-blue-600 to-blue-900 shadow-xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-4xl mb-6 flex justify-center w-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap" data-loc="client/src/pages/Home.tsx:134"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Suplementação
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Recomendações de suplementos baseadas em evidências científicas.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-3xl p-8 bg-gradient-to-b from-blue-600 to-blue-900 shadow-xl text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-4xl mb-6 flex justify-center w-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award" data-loc="client/src/pages/Home.tsx:140"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
            </div>
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
