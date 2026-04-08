"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function IntroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[900px] mx-auto px-4 text-center">
        {/* Título com animação de subida */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[#6EC1E4] text-3xl md:text-4xl font-bold mb-8"
        >
          Ápice: Gestão e Terceirização de Serviços para Condomínios em São Paulo.
        </motion.h2>

        {/* Texto descritivo */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-[#7A7A7A] text-lg md:text-xl leading-relaxed mb-12"
        >
          Com mais de uma década de experiência, a Ápice é referência em terceirização de serviços, 
          elevando a gestão condominial a um novo patamar de eficiência e segurança. Oferecemos um 
          ecossistema de soluções integradas, desenhado para otimizar custos operacionais e 
          valorizar o patrimônio. Da tecnologia avançada em Portaria Remota e Monitoramento 24h 
          até o rigor técnico em Limpeza, Zeladoria e Manutenção Predial, garantimos ambientes 
          seguros, impecáveis e em pleno funcionamento.
        </motion.p>

        {/* Botão CTA com Target Blank e Pointer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          {/* Adicionado target="_blank" para abrir em nova aba */}
          <Link 
            href="https://api.whatsapp.com/send?phone=5511953851752" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block"
          >
            <motion.button
              whileHover={{ 
                scale: 1.08,
                backgroundColor: "#6EC1E4",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#78c1e3] text-white font-bold py-4 px-10 rounded-sm shadow-lg uppercase tracking-wider text-sm cursor-pointer"
            >
              Solicite um Orçamento
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}