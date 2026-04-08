import { MapPin, Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export function TopBar() {
  return (
    <div className="bg-[#1a1f2c] text-gray-300 py-2 hidden md:block border-b border-white/10">
      {/* Ajuste aqui: troquei container por max-w-[1200px] e mx-auto */}
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center text-sm">
        
        {/* Lado Esquerdo: Info de Contato */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-white-400" />
            <span>Av. Dr. João Guimarães, 440 - São Paulo, SP</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-white-400" />
            <a href="mailto:comercial@apiceportaria.com.br" className="hover:text-white transition">
              comercial@apiceportaria.com.br
            </a>
          </div>
        </div>

        {/* Lado Direito: Redes Sociais */}
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/apiceadmof/" className="hover:text-white transition"><FaFacebookF size={16} /></a>
          <a href="https://www.instagram.com/apiceportaria/" className="hover:text-white transition"><FaInstagram size={16} /></a>
          <a href="https://www.linkedin.com/in/apice-prestadora-de-servi%C3%A7os-b45a2920b/" className="hover:text-white transition"><FaLinkedinIn size={16} /></a>
          {/* <a href="#" className="hover:text-white transition"><FaXTwitter size={16} /></a>
          <a href="#" className="hover:text-white transition"><FaYoutube size={16} /></a> */}
        </div>

      </div>
    </div>
  );
}