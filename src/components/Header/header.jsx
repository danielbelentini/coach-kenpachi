import { useState } from "react";
import { useActiveSection } from "../../context/ScrollSpyContext";
import logo from "../../assets/logo-coach-kenpachi.png";

const MENU = [
  { label: "Serviços", id: "servicos" },
  { label: "Cases", id: "cases" },
  { label: "Planos", id: "planos" },
  { label: "Sobre", id: "sobre" },
];

export default function Header() {
  const activeSection = useActiveSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerHeight = 80;
    const y =
      section.getBoundingClientRect().top +
      window.scrollY -
      headerHeight;

    window.scrollTo({ top: y, behavior: "smooth" });
    setMobileOpen(false); // fecha menu mobile
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <img
          src={logo}
          alt="Coach Kenpachi"
          className="h-9 w-auto cursor-pointer"
          onClick={() => scrollToSection("servicos")}
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {MENU.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative text-sm font-medium transition
                ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }
              `}
            >
              {item.label}

              {activeSection === item.id && (
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-yellow-500 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollToSection("planos")}
          className="hidden md:block bg-blue-600 hover:bg-blue-500 transition text-white text-sm font-medium px-5 py-2.5 rounded-lg"
        >
          Conhecer Planos
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-white"
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur">
          <div className="flex flex-col h-full px-6 pt-6">
            {/* Top */}
            <div className="flex justify-between items-center mb-10">
              <img src={logo} alt="Coach Kenpachi" className="h-8" />
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white text-2xl"
                aria-label="Fechar menu"
              >
                ✕
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col gap-6">
              {MENU.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-lg font-medium transition text-white">
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile CTA */}
            <button
              onClick={() => scrollToSection("planos")}
              className="mt-auto mb-10 bg-blue-600 hover:bg-blue-500 transition text-white font-medium py-3 rounded-xl"
            >
              Conhecer Planos
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
