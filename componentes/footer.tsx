"use client";

import Image from "next/image";
import Link from "next/link";
// Importações estáveis do react-icons
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";

export function Footer() {
  return (
    <footer className="bg-[#4A4F54] text-white pt-16 pb-6 font-sans">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* COLUNA 1: NEWSLETTER */}
        <div className="space-y-6">
          <div className="relative w-[160px] h-[50px]">
            <Image 
              src="/images/logo-apice3-min.png" 
              alt="Ápice Prestadora de Serviços" 
              fill
              className="object-contain brightness-0 invert" 
            />
          </div>
          <div className="bg-[#002B49] p-8 rounded-sm space-y-4">
            <h3 className="font-bold text-lg leading-tight">
              Inscreva-se para receber nossa newsletter
            </h3>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-[#3A4350] border-none p-3 text-sm outline-none focus:ring-1 focus:ring-[#6EC1E4] text-white placeholder:text-gray-400"
              />
              <button className="bg-[#6EC1E4] hover:bg-[#5bb0d4] text-white font-bold py-3 uppercase text-xs transition-colors">
                Enviar
              </button>
            </div>
          </div>
        </div>

        {/* COLUNA 2: REDES E TELEFONE */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-wider text-sm opacity-80">Ligue Agora</h4>
            <p className="text-3xl font-bold text-[#6EC1E4] md:text-white transition-colors">
              (11) 2338.9008
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-wider text-sm opacity-80">Redes Sociais</h4>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/apiceadmof/" className="bg-white w-10 h-10 flex items-center justify-center rounded-sm hover:bg-[#6EC1E4] transition-colors group">
                <FaFacebookF className="w-5 h-5 text-[#4A4F54] group-hover:text-white" />
              </Link>
              <Link href="https://www.instagram.com/apiceportaria/" className="bg-white w-10 h-10 flex items-center justify-center rounded-sm hover:bg-[#6EC1E4] transition-colors group">
                <FaInstagram className="w-5 h-5 text-[#4A4F54] group-hover:text-white" />
              </Link>
            </div>
          </div>
        </div>

        {/* COLUNA 3: CONTATO (COM FONTES E ÍCONES AMPLIADOS) */}
        <div className="space-y-10">
          <h4 className="font-bold uppercase tracking-wider text-sm opacity-80">Contato</h4>
          
          {/* ITEM: EMAIL */}
          <div className="flex items-center gap-5">
            <div className="bg-[#6EC1E4] w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-md">
              <IoMailOutline className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <p className="text-[11px] text-gray-400 uppercase font-black tracking-widest leading-none mb-1">
                Email
              </p>
              <p className="text-[14px] font-medium text-white/90">
                comercial@apiceportaria.com.br
              </p>
            </div>
          </div>

          {/* ITEM: ENDEREÇO */}
          <div className="flex items-center gap-5">
            <div className="bg-[#6EC1E4] w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-md">
              <IoLocationOutline className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <p className="text-[11px] text-gray-400 uppercase font-black tracking-widest leading-none mb-1">
                Endereço
              </p>
              <p className="text-[14px] font-medium text-white/90 italic leading-snug">
                AV Dr. João Guimarães, 440 <br /> São Paulo, SP
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="max-w-[1200px] mx-auto px-4 mt-16 pt-6 border-t border-gray-600/50 text-center">
        <p className="text-[11px] text-gray-400 uppercase tracking-widest">
          © 2026 Copyrights. Todos os direitos reservados a Ápice Prestadora de Serviços Ltda.
        </p>
      </div>
    </footer>
  );
}