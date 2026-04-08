"use client";

import NextImage from "next/image"; // Importando como NextImage para evitar conflitos

export function AboutCTA() {
  return (
    <section className="relative py-24 bg-[#6EC1E4] overflow-hidden">
      {/* Marca d'água da logo à esquerda */}
      <div className="absolute left-[-50px] top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <NextImage 
          src="/logo-icon.png" 
          width={400} 
          height={400} 
          alt="Watermark" 
        />
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto leading-tight">
          Estamos entregando os melhores Serviços.
        </h2>
      </div>
    </section>
  );
}