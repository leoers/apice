"use client";

import NextImage from "next/image"; // Você definiu o nome como NextImage aqui

export function AboutIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[#6EC1E4] font-bold text-sm uppercase">Quem Somos</span>
          <h2 className="text-4xl font-bold text-[#1B1F2E] mt-2 mb-6">Há mais de 10 anos</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Atuamos desde 2011 focados em oferecer as melhores soluções para condomínios...
          </p>
          <div className="flex items-start gap-4">
            <div className="text-[#6EC1E4] text-3xl">★</div>
            <div>
              <h4 className="font-bold text-[#1B1F2E]">+ 150 Clientes satisfeitos</h4>
              <p className="text-gray-500 text-sm">Confiança conquistada através de trabalho sério.</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-80 rounded-sm overflow-hidden shadow-lg">
            {/* AJUSTE: Mudei de <Image /> para <NextImage /> */}
            <NextImage src="/images/team-1.jpg" fill className="object-cover" alt="Equipe" />
          </div>
          <div className="relative h-80 rounded-sm overflow-hidden shadow-lg mt-8">
            {/* AJUSTE: Mudei de <Image /> para <NextImage /> */}
            <NextImage src="/images/team-2.jpg" fill className="object-cover" alt="Reunião" />
          </div>
        </div>
      </div>
    </section>
  );
}