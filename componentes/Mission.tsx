"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function MissionCTA() {
  return (
    // AJUSTE: O 'clip-path' garante que o conteúdo fixo só apareça dentro deste box
    <section 
      className="relative h-[450px] w-full overflow-hidden z-0"
      style={{ clipPath: "inset(0 0 0 0)" }} 
    >
      
      {/* --- IMAGEM DE FUNDO FIXA --- */}
      {/* Agora ela está limitada ao 'clip-path' da seção pai */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <Image
          src="/images/bg-servicoss.jpg"
          alt="Fachada de condomínio Ápice em São Paulo"
          fill
          className="object-cover object-center md:object-[center_20%]" // Ajuste de foco
          quality={90}
          priority
        />
        {/* Overlay para contraste */}
        <div className="absolute inset-0 bg-[#494F52]/80 mix-blend-multiply" />
      </div>

      {/* --- CONTEÚDO CENTRALIZADO --- */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 text-center h-full flex flex-col items-center justify-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white text-4xl md:text-5xl font-bold mb-12 leading-tight max-w-[800px] mx-auto"
        >
          Nossa missão é proteger seu bem e muito mais
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <Link 
            href="/contato" 
            className="inline-block"
          >
            <motion.button
              whileHover={{ scale: 1.08, backgroundColor: "#6EC1E4" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#6EC1E4] text-white font-bold py-4 px-12 rounded-sm shadow-xl uppercase tracking-widest text-sm cursor-pointer"
            >
              Orçamento
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}