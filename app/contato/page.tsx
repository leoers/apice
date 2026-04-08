"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function ContatoPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = {
      nome: e.target.nome.value,
      email: e.target.email.value,
      telefone: e.target.telefone.value,
      mensagem: e.target.mensagem.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        e.target.reset();
      } else {
        setStatus("Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      setStatus("Erro de conexão. Tente mais tarde.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header da Página */}
      <section className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
        <img 
          src="/images/bg-9.jpg" 
          className="absolute inset-0 w-full h-full object-cover brightness-[0.5]"
          alt="Banner Contato"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-[40px] md:text-[56px] font-bold uppercase tracking-[4px]">
            Contato
          </h1>
          <div className="w-20 h-1 bg-[#6EC1E4] mx-auto mt-4"></div>
        </div>
      </section>

      {/* 2. Mapa (Agora logo abaixo do Header) */}
      <section className="w-full h-[450px] grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.123456789!2d-46.7265!3d-23.6145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM2JzUyLjIiUyA0NsKwNDMnMzUuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy"
          title="Localização Ápice"
        ></iframe>
      </section>

      {/* 3. Seção de Informações e Formulário */}
      <section className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Lado Esquerdo: Texto e Infos */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-[32px] font-bold text-[#1B1F2E] mb-6">Conheça</h2>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                Nossa missão é tornar o dia a dia dos edifícios e empresas mais leves, 
                com mais profissionalismo e atender uma demanda de mercado que a cada 
                dia que passa fica mais escassa.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#6EC1E4] group-hover:bg-[#6EC1E4] group-hover:text-white transition-all">
                  <FaPhoneAlt size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Ligue Agora</p>
                  <p className="text-[18px] font-semibold text-[#1B1F2E]">+55 (11) 2338.9008</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#6EC1E4] group-hover:bg-[#6EC1E4] group-hover:text-white transition-all">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">E-mail</p>
                  <p className="text-[18px] font-semibold text-[#1B1F2E]">comercial@apiceadm.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-[#6EC1E4] group-hover:bg-[#6EC1E4] group-hover:text-white transition-all">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Endereço</p>
                  <p className="text-[17px] font-semibold text-[#1B1F2E]">Av. Dr. João Guimarães, 440 - SP</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <a href="https://www.facebook.com/apiceadmof/" target="_blank" className="w-10 h-10 bg-gray-400 hover:bg-[#3b5998] text-white flex items-center justify-center transition-colors">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/apiceportaria/" target="_blank" className="w-10 h-10 bg-gray-400 hover:bg-[#e1306c] text-white flex items-center justify-center transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Lado Direito: Formulário */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border-t-4 border-[#6EC1E4]">
              <h3 className="text-[24px] font-bold text-[#1B1F2E] mb-8">Solicite um Orçamento</h3>
              
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="text-[13px] font-bold uppercase tracking-wider text-gray-500 mb-2 block">Nome Completo *</label>
                  <input 
                    name="nome"
                    required
                    type="text" 
                    className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:border-[#6EC1E4] focus:outline-none transition-colors"
                    placeholder="Digite seu nome..."
                  />
                </div>

                <div>
                  <label className="text-[13px] font-bold uppercase tracking-wider text-gray-500 mb-2 block">E-mail *</label>
                  <input 
                    name="email"
                    required
                    type="email" 
                    className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:border-[#6EC1E4] focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="text-[13px] font-bold uppercase tracking-wider text-gray-500 mb-2 block">Telefone *</label>
                  <input 
                    name="telefone"
                    required
                    type="text" 
                    className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:border-[#6EC1E4] focus:outline-none transition-colors"
                    placeholder="(11) 00000-0000"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-[13px] font-bold uppercase tracking-wider text-gray-500 mb-2 block">Sua Mensagem</label>
                  <textarea 
                    name="mensagem"
                    required
                    rows={4}
                    className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:border-[#6EC1E4] focus:outline-none transition-colors resize-none"
                    placeholder="Como podemos ajudar seu condomínio?"
                  ></textarea>
                </div>

                <div className="md:col-span-2 pt-4">
                  <button 
                    disabled={loading}
                    type="submit"
                    className="bg-[#1B1F2E] text-white px-10 py-4 font-bold uppercase tracking-[2px] hover:bg-[#6EC1E4] transition-all duration-300 shadow-lg disabled:opacity-50"
                  >
                    {loading ? "Enviando..." : "Enviar Agora"}
                  </button>
                  {status && (
                    <p className={`mt-4 font-bold ${status.includes("sucesso") ? "text-[#6EC1E4]" : "text-red-500"}`}>
                      {status}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}