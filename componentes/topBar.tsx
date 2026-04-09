import { MapPin, Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export function TopBar() {
  return (
    <div className="bg-[#1a1f2c] text-gray-300 py-2 border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center text-sm">
        
        {/* Lado Esquerdo: Info de Contato */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Endereço */}
          <div className="flex items-center gap-2">
            <a 
              href="https://maps.app.goo.gl/vS6LpU7y2BTozR7z8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <MapPin size={16} className="text-white" />
              {/* O texto completo só aparece no Desktop, no Mobile fica uma versão curta */}
              <span className="hidden md:inline">Av. Dr. João Guimarães, 440 - São Paulo, SP</span>
              <span className="inline md:hidden text-xs">São Paulo, SP</span>
            </a>
          </div>

          {/* E-mail */}
          <div className="flex items-center gap-2">
            <a href="mailto:comercial@apiceportaria.com.br" className="flex items-center gap-2 hover:text-white transition">
              <Mail size={16} className="text-white" />
              {/* No mobile mostramos apenas o ícone ou uma palavra curta se preferir */}
              <span className="hidden md:inline">comercial@apiceportaria.com.br</span>
              <span className="inline md:hidden text-xs">E-mail</span>
            </a>
          </div>
        </div>

        {/* Lado Direito: Redes Sociais */}
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/apiceadmof/" target="_blank" className="hover:text-white transition"><FaFacebookF size={14} /></a>
          <a href="https://www.instagram.com/apiceportaria/" target="_blank" className="hover:text-white transition"><FaInstagram size={14} /></a>
          <a href="https://www.linkedin.com/in/apice-prestadora-de-servi%C3%A7os-b45a2920b/" target="_blank" className="hover:text-white transition"><FaLinkedinIn size={14} /></a>
        </div>

      </div>
    </div>
  );
}