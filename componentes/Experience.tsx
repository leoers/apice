"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Componente do Next.js

const stats = [
  { value: 99, label: "Qualidade<br/>do Trabalho" },
  { value: 60, label: "Redução<br/>de Custos" },
];

const services = [
  {
    title: "Portaria Remota",
    content: "Segurança avançada com monitoramento 24h e controle de acesso tecnológico para condomínios em São Paulo, garantindo redução de custos e maior eficiência operacional.",
    link: "/servicos/portaria-remota"
  },
  {
    title: "Portaria Física",
    content: "Equipe especializada em recepção e controle de acesso presencial. Profissionais treinados para a gestão segura de fluxos de pedestres e veículos em áreas residenciais e comerciais.",
    link: "/servicos/portaria-presencial"
  },
  {
    title: "Limpeza de Condomínios",
    content: "Serviços de higienização profissional e conservação predial com cronogramas personalizados, garantindo ambientes limpos, organizados e valorização do patrimônio.",
    link: "/servicos/limpeza-condominios"
  },
  {
    title: "Auxiliar de Serviços Gerais",
    content: "Soluções completas de suporte operacional para manutenção da ordem e limpeza contínua de áreas comuns, com profissionais capacitados para diversas demandas condominiais.",
    link: "/servicos/auxiliar-servicos-gerais"
  },
  {
    title: "Manutenção Predial",
    content: "Gestão de manutenção preventiva e corretiva para sistemas elétricos, hidráulicos e mecânicos, focada em evitar falhas graves e reduzir gastos inesperados com reparos.",
    link: "/servicos/manutencao-predial"
  },
  {
    title: "Zeladoria Profissional",
    content: "Gestão técnica e supervisão direta das rotinas de manutenção e limpeza, assegurando que todas as normas de segurança e funcionamento do condomínio sejam rigorosamente seguidas.",
    link: "/servicos/zeladoria-condominios"
  }
];

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* TÍTULO DA SEÇÃO */}
        <div className="mb-12">
          <span className="text-[#6EC1E4] text-[13px] font-bold uppercase tracking-[2px]">
            Benefícios e Soluções da Empresa
          </span>
          <h2 className="text-4xl font-bold text-[#1B1F2E] mt-2">
            Construindo Experiência
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* 1. COLUNA DA IMAGEM (ESQUERDA) */}
          <div className="md:col-span-3">
            <div className="relative w-full h-[400px] bg-gray-100 rounded-sm overflow-hidden shadow-sm">
               {/* AJUSTE FEITO AQUI: Adicionada a imagem da Ápice */}
               <Image 
                 src="/images/image-1-1-min.jpg" // Caminho correto para a pasta public
                 alt="Construindo Experiência Ápice Soluções Integradas" // Alt otimizado para SEO
                 fill // Preenche o container relativo
                 className="object-cover" // Garante que a imagem cubra a área sem distorcer
                 sizes="(max-width: 768px) 100vw, 25vw" // Otimização de carregamento
               /> 
            </div>
          </div>

          {/* 2. COLUNA DOS CÍRCULOS (CENTRO) */}
          <div className="md:col-span-3 flex flex-col items-center gap-16 pt-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64" cy="64" r="58"
                      stroke="#f3f4f6" strokeWidth="3" fill="transparent"
                    />
                    <motion.circle
                      cx="64" cy="64" r="58"
                      stroke="#6EC1E4" strokeWidth="3" fill="transparent"
                      strokeDasharray="364.4"
                      initial={{ strokeDashoffset: 364.4 }}
                      whileInView={{ strokeDashoffset: 364.4 - (364.4 * stat.value) / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </svg>
                  <span className="absolute text-3xl font-bold text-[#1B1F2E]">{stat.value}%</span>
                </div>
                <h3 
                  className="mt-4 font-bold text-[#1B1F2E] text-sm leading-tight uppercase" 
                  dangerouslySetInnerHTML={{ __html: stat.label }} 
                />
              </div>
            ))}
          </div>

          {/* 3. COLUNA DO ACCORDION (DIREITA) */}
          <div className="md:col-span-6 space-y-2">
            {services.map((service, index) => (
              <div key={index} className="border border-gray-100 rounded-sm overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className={`w-full flex items-center justify-between p-4 text-left transition-colors ${
                    openIndex === index ? "bg-white" : "bg-[#F9FAFB]"
                  }`}
                >
                  <span className="font-bold text-[#1B1F2E] text-[15px]">{service.title}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-4 h-4 text-gray-800" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-800" />
                  )}
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ height: openIndex === index ? "auto" : 0 }}
                  className="overflow-hidden bg-white"
                >
                  <div className="p-5 pt-2 space-y-4">
                    <p className="text-gray-500 text-[14px] leading-relaxed">
                      {service.content}
                    </p>
                    <Link 
                      href={service.link}
                      className="inline-block bg-[#6EC1E4] text-white px-5 py-2.5 text-[11px] font-bold uppercase rounded-sm hover:brightness-110 transition-all"
                    >
                      Veja Mais
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}