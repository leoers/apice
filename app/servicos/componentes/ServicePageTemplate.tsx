"use client";

import { ReactNode, useState } from "react";
import { ServiceHero } from "./ServiceHero";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Centralizando o link para manutenção fácil
const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5511992945481";

interface ServiceData {
  heroSlides: { title: string; subtitle: string; backgroundImage: string }[];
  description: { title: string; paragraphs: string[] };
  cta: { title: string; text: string; backgroundImage: string };
  featuresSection: {
    title: string;
    subtitle: string;
    features: { title: string; text: string; icon: ReactNode }[];
  };
  benefitsSection: {
    title: string;
    subtitle: string;
    benefits: { title: string; text: string; icon: ReactNode }[];
  };
  whyChooseSection: {
    title: string;
    subtitle: string;
    items: { title: string; text: string; icon: ReactNode }[];
  };
  testimonialsSection?: {
    title: string;
    items: { text: string; author: string }[];
  };
  faqSection?: {
    title: string;
    items: { q: string; a: string }[];
  };
  contactSection?: {
    title: string;
    text: string;
    buttonText: string;
  };
}

export function ServicePageTemplate({ data }: { data: ServiceData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="overflow-x-hidden font-sans bg-white">
      {/* Passando o link global para o Hero */}
      <ServiceHero banners={data.heroSlides} />

      {/* 1. Descrição */}
      <section className="py-16 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 text-center">
          <h2 className="text-[30px] font-bold text-[#1B1F2E] mb-6">{data.description.title}</h2>
          <div className="text-[#666] space-y-4 text-[16px] leading-relaxed max-w-[850px] mx-auto">
            {data.description.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* 2. Banner CTA - Atualizado para Link Externo */}
      <section className="relative w-full h-[450px] flex items-center justify-center text-white text-center overflow-hidden">
        
        {/* Imagem de Fundo Alinhada pela Base */}
        <div 
          className="absolute inset-0 z-0 bg-cover brightness-[0.3]" 
          style={{
            backgroundImage: `url(${data.cta.backgroundImage})`, 
            backgroundPosition: 'bottom'
          }} 
        />

        {/* Conteúdo Centralizado */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 w-full">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-3">
            {data.cta.title}
          </h2>
          <p className="mb-8 text-[17px] opacity-90 max-w-[750px] mx-auto">
            {data.cta.text}
          </p>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#6EC1E4] hover:bg-[#5bb0d4] px-8 py-3 font-bold uppercase text-[13px] transition-all text-white rounded-sm shadow-md"
          >
            Solicite uma Cotação
          </a>
        </div>
      </section>

      {/* 3. Como Funciona */}
      <section className="py-16 bg-[#FBFBFB]">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-[26px] font-bold text-[#1B1F2E] mb-3">{data.featuresSection.title}</h2>
            <p className="text-gray-500 max-w-[750px] mx-auto text-[14px]">{data.featuresSection.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {data.featuresSection.features.map((f, i) => (
              <div key={i} className="bg-white p-6 shadow-sm flex items-start gap-4 border border-gray-50">
                <div className="text-[#002D5B] text-[35px] shrink-0">{f.icon}</div>
                <div>
                  <h3 className="font-bold text-[#002D5B] text-[16px] mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-snug">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Benefícios */}
      <section className="py-16 bg-[#001D3D] text-white text-center">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="text-[26px] font-bold mb-3">{data.benefitsSection.title}</h2>
          <p className="text-gray-300 max-w-[750px] mx-auto text-[14px] mb-12">{data.benefitsSection.subtitle}</p>
          
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-10">
            {data.benefitsSection.benefits.map((b, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-white text-[45px] mb-4">{b.icon}</div>
                <h3 className="font-bold mb-2 text-[17px]">{b.title}</h3>
                <p className="text-gray-300 text-[13px] leading-relaxed max-w-[280px]">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Por que Escolher */}
      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-[26px] font-bold text-[#1B1F2E] mb-3">{data.whyChooseSection.title}</h2>
            <p className="text-gray-500 text-[14px]">{data.whyChooseSection.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {data.whyChooseSection.items.map((w, i) => (
              <div key={i} className="bg-[#FBFBFB] p-8 flex items-center gap-6 shadow-sm border-l-4 border-transparent hover:border-[#002D5B] transition-all">
                <div className="text-[#002D5B] text-[40px] shrink-0">{w.icon}</div>
                <div className="text-left">
                  <h3 className="font-bold text-[#002D5B] text-[17px] mb-1">{w.title}</h3>
                  <p className="text-gray-600 text-[13px] leading-snug">{w.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Depoimentos */}
      {data.testimonialsSection && (
        <section className="py-16 bg-[#FBFBFB]">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-center text-[26px] font-bold text-[#1B1F2E] mb-10">{data.testimonialsSection.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {data.testimonialsSection.items.map((d, i) => (
                <div key={i} className="bg-white p-8 shadow-sm border border-gray-100 flex flex-col justify-between">
                  <p className="text-gray-600 italic text-[14px] leading-relaxed mb-6">"{d.text}"</p>
                  <span className="font-bold text-[#002D5B] text-[14px]">— {d.author}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Perguntas Frequentes */}
      {data.faqSection && (
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-[800px] mx-auto px-4">
            <h2 className="text-center text-[26px] font-bold text-[#1B1F2E] mb-8">{data.faqSection.title}</h2>
            <div className="divide-y divide-gray-200">
              {data.faqSection.items.map((item, index) => (
                <div key={index} className="py-2">
                  <button
                    className="w-full py-4 flex justify-between items-center text-left group"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="font-bold text-[#1B1F2E] text-[15px] group-hover:text-[#002D5B] transition-colors">{item.q}</span>
                    {openIndex === index ? <FaChevronUp className="text-[12px] text-gray-400" /> : <FaChevronDown className="text-[12px] text-gray-400" />}
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 pb-4' : 'max-h-0'}`}>
                    <p className="text-gray-600 text-[14px] leading-relaxed pl-1">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Entre em Contato - Link Atualizado */}
      {data.contactSection && (
        <section className="py-16 bg-white border-t border-gray-50">
          <div className="max-w-[1100px] mx-auto px-4 text-center">
            <h2 className="text-[28px] font-bold text-[#1B1F2E] mb-6">{data.contactSection.title}</h2>
            <p className="text-gray-600 text-[16px] leading-relaxed mb-8 max-w-[700px] mx-auto">
              {data.contactSection.text}
            </p>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#6EC1E4] hover:bg-[#5bb0d4] px-10 py-3 font-bold text-white text-[14px] transition-all rounded-sm shadow-sm"
            >
              {data.contactSection.buttonText}
            </a>
          </div>
        </section>
      )}
    </main>
  );
}