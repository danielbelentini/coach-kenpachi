export default function AboutCoach() {
  return (
    <section className="bg-black w-full text-white py-20 px-6" id="sobre">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="w-full hidden lg:block">
          <img
            src="/coach-kenpachi-share.png"
            alt="Coach em consulta com cliente"
            className="rounded-2xl w-full object-cover shadow-lg"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl mb-6">Sobre o coach</h2>

          <p className="text-gray-400 mb-8 leading-relaxed">
            <strong className="text-yellow-500">Transformar o corpo é consequência de transformar a mentalidade.</strong><br/>Coach Kenpachi, nutricionista esportivo e coach fitness, atua há mais de 5 anos ajudando pessoas comuns a alcançarem resultados extraordinários. Com uma metodologia que combina ciência, disciplina e prática real de musculação, ele prova que evolução não é promessa — é processo.<br/>Aqui não existe milagre, existe método, constância e compromisso com resultados que permanecem.
          </p>

          <ul className="space-y-6 mb-10">
            <li className="flex items-start gap-4">
              <IconMedal />
              <div>
                <p className="font-semibold">Certificado IFBB</p>
                <p className="text-gray-400 text-sm">Profissional de Fisiculturismo</p>
              </div>
            </li>

            {/* <li className="flex items-start gap-4">
              <IconUsers />
              <div>
                <p className="font-semibold">500+ Clientes</p>
                <p className="text-gray-400 text-sm">Transformações bem-sucedidas</p>
              </div>
            </li> */}

            <li className="flex items-start gap-4">
              <IconBolt />
              <div>
                <p className="font-semibold">Metodologia Científica</p>
                <p className="text-gray-400 text-sm">Baseada em evidências</p>
              </div>
            </li>
          </ul>

          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition rounded-lg py-4 px-10 font-semibold text-lg">
            Entre em contato
          </button>
        </div>
      </div>
    </section>
  );
}

/* SVG ICONS (WHITE) */

function IconMedal() {
  return (
    <svg
      className="w-6 h-6 flex-shrink-0"
      fill="none"
      stroke="white"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="8" r="5" />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.11" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg
      className="w-6 h-6 flex-shrink-0"
      fill="none"
      stroke="white"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg
      className="w-6 h-6 flex-shrink-0"
      fill="none"
      stroke="white"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  );
}
