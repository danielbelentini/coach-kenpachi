import { useState } from "react";
export default function PricingTabs() {
  const [tab, setTab] = useState("mensal");

  const isMensal = tab === "mensal";

  return (
    <section className="w-full text-white py-16 px-4 flex justify-center" id="planos">
      <div className="w-full mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Nossos Planos
          </h2>
          {/* Linha fina centralizada */}
          <div className="w-20 h-[2px] bg-orange-500 mx-auto mt-4 mb-6" />

          <p className="text-gray-400 max-w-md mx-auto">
            Escolha a duração que melhor se adequa aos seus objetivos
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setTab("mensal")}
            className={`px-6 py-2 rounded-lg transition font-medium ${
              isMensal
                ? "bg-orange-500 text-white"
                : "bg-zinc-900 text-gray-300 hover:bg-zinc-800"
            }`}
          >
            Plano Mensal
          </button>
          <button
            onClick={() => setTab("trimestral")}
            className={`px-6 py-2 rounded-lg transition font-medium ${
              !isMensal
                ? "bg-orange-500 text-white"
                : "bg-zinc-900 text-gray-300 hover:bg-zinc-800"
            }`}
          >
            Plano Trimestral
          </button>
        </div>

        {/* Card */}
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-xl rounded-2xl border border-orange-500 p-8 bg-gradient-to-b from-zinc-900 to-black shadow-xl">
            <span className="block w-4/5 md:w-1/2 absolute uppercase -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-sm font-semibold px-4 py-1 rounded-full text-center">
              Consultoria completa
            </span>

            <div className="w-full flex justify-center">
              <div>

                <h2 className="text-3xl mb-2">Plano Completo</h2>
                <p className="text-gray-400 mb-6">
                  Consultoria atlética profissional com suporte total
                </p>

                {isMensal ? (
                  <div className="mb-6">
                    <p className="text-orange-500 text-5xl font-bold">
                      R$ 499 <span className="text-base font-normal text-gray-400">/mês</span>
                    </p>
                  </div>
                ) : (
                  <div className="mb-6">
                    <p className="text-orange-500 text-5xl font-bold">
                      R$ 1.299{" "}
                      <span className="text-base font-normal text-gray-400">/trimestre</span>
                    </p>
                    <p className="text-yellow-400 mt-2 text-sm font-medium">
                      Economize R$ 198
                    </p>
                  </div>
                )}

                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2">
                    <span className="text-orange-500">✓</span>
                    Plano nutricional personalizado e adaptável
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-500">✓</span>
                    Programação de treino completa e periodizada
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-500">✓</span>
                    Protocolo de suplementação e manipulados
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-500">✓</span>
                    Acompanhamento semanal com análises
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-500">✓</span>
                    Suporte prioritário via WhatsApp
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-500">✓</span>
                    Análise de composição física por fotos
                  </li>
                </ul>


                {isMensal ? (
                  <a href="https://cashfy.cloud/checkout?p=a4c0f341f4e045fa928238b3b3b347a7" target="_blank" rel="noopener noreferrer" className="flex justify-center w-full max-w-96 bg-blue-600 hover:bg-blue-700 transition rounded-lg py-3 font-semibold text-lg">
                    Contratar Agora
                  </a>
                ) : (
                  <a href="https://cashfy.cloud/checkout?p=0317d9e5393e0567aae92f1b777bc005" target="_blank" rel="noopener noreferrer" className="flex justify-center w-full max-w-96 bg-blue-600 hover:bg-blue-700 transition rounded-lg py-3 font-semibold text-lg">
                    Contratar Agora
                  </a>
                )}
              </div>
              
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
