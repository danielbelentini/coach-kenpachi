import logo from "../../assets/logo-coach-kenpachi.png";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center text-neutral-400" id="footer">
      <div className="container mx-auto px-6 py-5">
        {/* Top content 
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">
              Coach Kenpachi
            </h3>
            <p className="text-sm">
              Consultoria Atlética Premium
            </p>
          </div>

          
          <div>
            <h4 className="text-white font-medium mb-3">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition">Dieta Personalizada</li>
              <li className="hover:text-white transition">Treino Customizado</li>
              <li className="hover:text-white transition">Suplementação</li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-white font-medium mb-3">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition">WhatsApp</li>
              <li className="hover:text-white transition">Email</li>
              <li className="hover:text-white transition">Instagram</li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-white font-medium mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition">Privacidade</li>
              <li className="hover:text-white transition">Termos</li>
            </ul>
          </div>
        </div>*/}

        {/* Divider 
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />*/}

        {/* Bottom */}
        <div className="w-full flex justify-center pb-5">
          <img src={logo} alt="Logo Coach Kenpachi" className="w-32 h-auto" />
        </div>
        <div className="text-center text-sm text-white">
          
          © 2026 Coach Kenpachi. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}