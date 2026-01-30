import { useState } from "react";
import logo from "../../assets/logo-coach-kenpachi.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="h-20 fixed top-0 z-50 w-full border-b border-b-zinc-600 after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-85 after:-z-0">
      <div className="h-full mx-auto flex max-w-7xl items-center justify-between px-6 py-2 z-10 relative">

        {/* Logo */}
        <div className="flex items-center">
          <div className="flex">
            <img src={logo} alt="Coach Kenpachi" className="w-36" />
          </div>
        </div>

        {/* Menu Desktop */}
        <nav className="hidden items-center gap-10 md:flex">
          <a
            href="#servicos"
            className="text-base font-bold transition ease-in-out text-zinc-400 hover:text-white" 
          >
            Serviços
          </a>
          <a href="#cases" className="text-base font-bold transition ease-in-out text-zinc-400 hover:text-white">
            Cases
          </a>
          <a href="#planos" className="text-base font-bold transition ease-in-out text-zinc-400 hover:text-white">
            Planos
          </a>
          <a href="#sobre" className="text-base font-bold transition ease-in-out text-zinc-400 hover:text-white">
            Sobre
          </a>
        </nav>

        {/* Botão */}
        <a
          href="#planos"
          className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 md:block font-700"
        >
          Conhecer Planos
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1 md:hidden"
        >
          <span className="h-[2px] w-6 bg-white" />
          <span className="h-[2px] w-6 bg-white" />
          <span className="h-[2px] w-6 bg-white" />
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="bg-black px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-6">
            <a href="#servicos" className="text-white">
              <strong>Serviços</strong>
            </a>
            <a href="#cases" className="text-zinc-400">
              Cases
            </a>
            <a href="#planos" className="text-zinc-400">
              Planos
            </a>
            <a href="#sobre" className="text-zinc-400">
              Sobre
            </a>

            <a
              href="#planos"
              className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white"
            >
              Conhecer Planos
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
