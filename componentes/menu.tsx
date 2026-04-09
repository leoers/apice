"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha o menu ao redimensionar a tela para evitar bugs visuais
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        className={`w-full z-[100] transition-all duration-300 ease-in-out sticky ${
          isScrolled
            ? "bg-[#1B1F2E] shadow-lg py-3 top-0"
            : "bg-transparent py-5 top-[60px] -mb-[120px]"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo-apice3-min.png"
                alt="Ápice"
                width={80}
                height={50}
                priority
              />
            </Link>
          </div>

          {/* Links do Menu - Desktop */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-white font-bold text-sm hover:text-[#6EC1E4] transition-colors uppercase">
              Home
            </Link>
            
            <Link href="/sobre-nos" className="text-white font-bold text-sm hover:text-[#6EC1E4] transition-colors uppercase">
              Sobre Nós
            </Link>

            {/* Menu Serviços com Dropdown Desktop */}
            <div className="relative group">
              <Link 
                href="#" 
                className="text-white font-bold text-sm hover:text-[#6EC1E4] transition-colors uppercase flex items-center gap-1 py-2"
              >
                Serviços
                <FaChevronDown className="text-[10px] group-hover:rotate-180 transition-transform duration-300" />
              </Link>

              <div className="absolute left-0 mt-0 w-64 bg-[#1B1F2E] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[110] border-t-2 border-[#6EC1E4]">
                <div className="flex flex-col py-2">
                  <Link href="/servicos/auxiliar-servicos-gerais" className="px-6 py-3 text-white text-[13px] font-bold uppercase hover:bg-[#6EC1E4] hover:text-[#1B1F2E] transition-colors">Auxiliar de Serviços Gerais</Link>
                  <Link href="/servicos/limpeza-condominios" className="px-6 py-3 text-white text-[13px] font-bold uppercase hover:bg-[#6EC1E4] hover:text-[#1B1F2E] transition-colors">Limpeza de Condomínios</Link>
                  <Link href="/servicos/manutencao-predial" className="px-6 py-3 text-white text-[13px] font-bold uppercase hover:bg-[#6EC1E4] hover:text-[#1B1F2E] transition-colors">Manutenção Predial</Link>
                  <Link href="/servicos/portaria-presencial" className="px-6 py-3 text-white text-[13px] font-bold uppercase hover:bg-[#6EC1E4] hover:text-[#1B1F2E] transition-colors">Portaria Presencial</Link>
                  <Link href="/servicos/portaria-remota" className="px-6 py-3 text-white text-[13px] font-bold uppercase hover:bg-[#6EC1E4] hover:text-[#1B1F2E] transition-colors">Portaria Remota</Link>
                  <Link href="/servicos/zeladoria-condominios" className="px-6 py-3 text-white text-[13px] font-bold uppercase hover:bg-[#6EC1E4] hover:text-[#1B1F2E] transition-colors">Zeladoria de Condomínios</Link>
                </div>
              </div>
            </div>

            <Link href="/blog" className="text-white font-bold text-sm hover:text-[#6EC1E4] transition-colors uppercase">
              Blog
            </Link>
            
            <Link href="/contato" className="text-white font-bold text-sm hover:text-[#6EC1E4] transition-colors uppercase">
              Contato
            </Link>
          </div>

          {/* Telefone / CTA - Oculto no Mobile */}
          <div className="hidden md:flex items-center text-white space-x-3">
            <div className="bg-[#6EC1E4] p-2 rounded-full">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] opacity-80 uppercase">Ligue Agora</span>
              <span className="font-bold text-sm">(11) 2338.9008</span>
            </div>
          </div>

          {/* Botão Hambúrguer - Visível apenas no Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 focus:outline-none z-[160]"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Lateral (Drawer) */}
        <div
          className={`fixed top-0 right-0 h-full w-[280px] bg-[#1B1F2E] shadow-2xl z-[150] transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col pt-24 px-8 space-y-6">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-white font-bold text-lg uppercase hover:text-[#6EC1E4]">
              Home
            </Link>
            <Link href="/sobre-nos" onClick={() => setIsOpen(false)} className="text-white font-bold text-lg uppercase hover:text-[#6EC1E4]">
              Sobre Nós
            </Link>
            
            <div className="flex flex-col space-y-4">
              <span className="text-[#6EC1E4] font-bold text-xs uppercase tracking-wider">Nossos Serviços</span>
              <div className="flex flex-col space-y-3 pl-2 border-l border-gray-700">
                <Link href="/servicos/auxiliar-servicos-gerais" onClick={() => setIsOpen(false)} className="text-white text-sm uppercase opacity-80 hover:opacity-100">Auxiliar de Serviços Gerais</Link>
                <Link href="/servicos/limpeza-condominios" onClick={() => setIsOpen(false)} className="text-white text-sm uppercase opacity-80 hover:opacity-100">Limpeza</Link>
                <Link href="/servicos/manutencao-predial" onClick={() => setIsOpen(false)} className="text-white text-sm uppercase opacity-80 hover:opacity-100">Manutenção</Link>
                <Link href="/servicos/portaria-remota" onClick={() => setIsOpen(false)} className="text-white text-sm uppercase opacity-80 hover:opacity-100">Portaria Remota</Link>
              </div>
            </div>

            <Link href="/blog" onClick={() => setIsOpen(false)} className="text-white font-bold text-lg uppercase hover:text-[#6EC1E4]">
              Blog
            </Link>
            <Link href="/contato" onClick={() => setIsOpen(false)} className="text-white font-bold text-lg uppercase hover:text-[#6EC1E4]">
              Contato
            </Link>
          </div>
        </div>

        {/* Overlay (Fundo escuro ao abrir o menu) */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-[140] md:hidden transition-opacity"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </nav>
    </>
  );
}