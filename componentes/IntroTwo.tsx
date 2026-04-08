"use client";

import { motion } from "framer-motion";

export function ServicesBanner() {
  return (
    <section 
      className="bg-[#6EC1E4] h-[400px] flex items-center justify-center relative overflow-hidden"
      style={{ 
        // Substitua pelo caminho correto da imagem do elemento gráfico
        backgroundImage: "url('/images/bg-2.png')", 
        backgroundPosition: "left center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain" // Ou ajuste para 'auto' se quiser o tamanho original
      }}
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-white text-4xl md:text-6xl font-bold text-center px-4 leading-tight tracking-tight"
      >
        Estamos entregando os <br /> melhores Serviços.
      </motion.h2>
    </section>
  );
}