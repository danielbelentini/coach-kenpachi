export default function Testmonials() {
  return (
    <section className="w-full bg-black text-white py-16 px-4" id="cases">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Transformações Reais
          </h2>
          {/* Linha fina centralizada */}
          <div className="w-20 h-[2px] bg-orange-500 mx-auto mt-4 mb-6" />

          <p className="text-gray-400 max-w-md mx-auto">
            Resultados de clientes que confiaram no processo
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div className="mt-16" id="mais-transformacoes">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                nome: "Marcos",
                descricao: "Ganho de massa e redução de gordura",
                tempo: "Resultado em 16 semanas",
                imagem: "testmonial-02.jpg",
              },
              {
                nome: "Daniel",
                descricao: "Musculatura definida",
                tempo: "Resultado em 12 semanas",
                imagem: "testmonial-03.jpg",
              },
              {
                nome: "Marcelo",
                descricao: "Redução de peso e ganho de massa",
                tempo: "Resultado em 8 meses",
                imagem: "testmonial-04.jpg",
              },
              {
                nome: "Neto",
                descricao: "Redução de gordura e aumento de massa muscular",
                tempo: "Resultado em 8 meses",
                imagem: "testmonial-05.jpg",
              },
              {
                nome: "Felipe",
                descricao: "Redução de gordura e aumento de massa muscular",
                tempo: "Resultado em 6 meses",
                imagem: "testmonial-06.jpg",
              },
              {
                nome: "Daniel",
                descricao: "Pós bartiatrico com manutenção de peso e ganho de massa muscular",
                tempo: "Resultado em 3 anos e meio",
                imagem: "testmonial-07.jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  group
                  bg-neutral-900
                  rounded-2xl
                  border border-neutral-800
                  overflow-hidden
                  hover:border-orange-500
                  hover:shadow-lg hover:shadow-orange-500/10
                  transition-transform duration-300 hover:scale-[1.02]
                  hover:cursor-default
                "
              >
                {/* Imagem */}
                <div className="aspect-[4/3] bg-black overflow-hidden">
                  <img
                    src={`/images/${item.imagem}`}
                    alt={item.nome}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2">
                    {item.nome}
                  </h4>

                  <p className="text-orange-500 font-medium mb-1">
                    {item.descricao}
                  </p>

                  <p className="text-sm text-gray-400">
                    {item.tempo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
