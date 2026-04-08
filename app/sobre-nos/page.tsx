"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaBullseye, FaEye, FaHeart, FaStar } from "react-icons/fa";

// --- BANNER PRINCIPAL (MANTIDO) ---
export function AboutBanner() {
  return (
    <section className="relative h-[480px] w-full bg-[#1B1F2E] overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/bg-10.jpg" 
          alt="Tecnologia e Segurança - Ápice"
          fill
          className="object-cover animate-ken-burns brightness-[0.45]"
          sizes="100vw"
          priority 
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 h-full flex flex-col justify-between py-6">
        <div className="flex flex-col items-center justify-center text-center text-white flex-grow font-sans mt-[-50px]">
          <h1 className="text-[40px] md:text-[48px] font-bold uppercase tracking-[2px] mb-4 leading-tight">
            Tecnologia e segurança ao seu lado
          </h1>
          <p className="text-[14px] md:text-[16px] font-normal tracking-[1px] opacity-90 max-w-[800px]">
            Nosso compromisso é com o seu sossego.
          </p>
        </div>
      </div>
    </section>
  );
}

// --- PÁGINA COMPLETA COM TEXTOS DA IMAGEM ---
export default function SobreNosPage() {
  return (
    <main className="font-sans">
      <AboutBanner />
      
      {/* 1. SEÇÃO: HÁ MAIS DE 10 ANOS (ATUALIZADA COM TEXTO REAL DA PARTE 1) */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[#6EC1E4] mb-2 tracking-tighter">——</div>
            <span className="text-gray-400 font-bold uppercase tracking-widest text-[13px]">SOBRE A ÁPICE</span>
            <h2 className="text-[38px] font-bold text-[#1B1F2E] mt-2 mb-6">Há mais de 10 anos</h2>
            
            <p className="text-gray-500 leading-relaxed mb-8 text-[16px]">
              Desde janeiro de 2011, a Ápice vem se posicionando entre as maiores empresas 
              prestadoras de serviços com o melhor conceito que existe no mercado, o de gerar valores. 
              Empresa que tem como serviços: Portaria Virtual e Presencial, Limpeza, Zeladoria, 
              Manutenção Predial, busca gerar valores entre ela e seus clientes.
            </p>

            <div className="flex items-start gap-4">
              <div className="text-[#6EC1E4] text-4xl mt-[-5px]">
                <FaStar />
              </div>
              <div>
                <h4 className="font-bold text-[#1B1F2E] text-[18px]">+ 100 Clientes satisfeitos</h4>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  Desde o seu nascimento a Ápice já atendeu mais de 100 clientes de diversos 
                  seguimentos, empresarial e residencial.
                </p>
              </div>
            </div>
          </div>

          {/* Lado das Imagens (Conforme o layout enviado) */}
          <div className="flex gap-4 h-[450px]">
            <div className="relative w-full rounded-sm overflow-hidden shadow-sm border border-gray-100">
                <Image 
                  src="/images/image-16.jpg" 
                  alt="Equipe Ápice em trabalho" 
                  fill 
                  className="object-cover" 
                />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO: CTA AZUL */}
      <section className="relative py-24 bg-[#6EC1E4] overflow-hidden">
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-[32px] md:text-[40px] font-bold max-w-2xl mx-auto leading-tight">
            Estamos entregando os melhores Serviços.
          </h2>
        </div>
      </section>

      {/* 3. SEÇÃO: ESSÊNCIA E COMPROMISSO (TEXTO INTEGRAL TRANSCRITO) */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            
            {/* TEXTO ESQUERDA */}
            <div className="font-sans">
              <h2 className="text-[32px] font-bold text-[#1B1F2E] mb-8 leading-tight">
                Nossa Essência e Compromisso
              </h2>
              
              <div className="text-gray-600 text-[15px] leading-[1.8] space-y-5">
                <p>
                  Na Ápice, acreditamos que a gestão de condomínios vai além da simples prestação de serviços; é sobre construir ambientes seguros, eficientes e harmoniosos. Desde a nossa fundação em janeiro de 2011, temos nos dedicado a consolidar uma reputação de excelência, posicionando-nos como uma parceira estratégica e inovadora no mercado de serviços para condomínios.
                </p>
                <p>
                  Nosso propósito central é elevar continuamente o padrão da terceirização de mão de obra, oferecendo soluções profissionais que geram valor real e duradouro para nossos clientes. Com um portfólio abrangente que inclui Administração de Condomínios, Limpeza, Zeladoria, Manutenção Predial, Portaria Presencial e Portaria Remota, cada serviço é cuidadosamente planejado e executado com o objetivo de garantir conforto, segurança, organização e controle total para sua comunidade. Nossa ambição é clara: ser a principal referência do setor, superando consistentemente as expectativas.
                </p>
                <p>
                  Essa visão é impulsionada por valores inegociáveis que permeiam cada aspecto de nossa atuação:
                </p>
              </div>

              {/* LISTA DE VALORES COM CHECK (AZUL) */}
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#6EC1E4] mt-1">✔</span>
                  <p className="text-[15px] text-gray-700">
                    <strong className="text-[#1B1F2E]">A Ética e Integridade</strong> que rege todas as nossas relações, construindo a confiança mútua.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6EC1E4] mt-1">✔</span>
                  <p className="text-[15px] text-gray-700">
                    <strong className="text-[#1B1F2E]">A Excelência e Competência</strong> que se reflete na qualidade superior e eficácia de cada entrega.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6EC1E4] mt-1">✔</span>
                  <p className="text-[15px] text-gray-700">
                    <strong className="text-[#1B1F2E]">A Inovação e Visão de Futuro</strong> que nos move a antecipar tendências e oferecer as soluções mais inteligentes e otimizadas.
                  </p>
                </li>
              </ul>
            </div>

            {/* IMAGEM DIREITA */}
            <div className="relative h-[550px] w-full rounded-sm overflow-hidden shadow-lg">
              <Image 
                src="/images/img_sobre_ 1.jpg" 
                alt="Parceria e Compromisso Ápice" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* TEXTO FINAL DA SEÇÃO (ABAIXO DO GRID) */}
          <div className="mt-12 text-gray-600 text-[15px] leading-[1.8] font-sans">
            <p>
              Na Ápice, estamos comprometidos com a otimização contínua dos processos e com a promoção do bem-estar e da tranquilidade para síndicos, moradores e para todos que se beneficiam de nossa atuação. Somos mais que uma prestadora de serviços; somos a parceria que você precisa para consolidar a qualidade, eficácia e confiança em seu condomínio.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO: MISSÃO, VISÃO E VALORES (TEXTOS REAIS DO PRINT) */}
      {/* PARTE 3: MISSÃO, VISÃO E VALORES */}
      <section className="py-24 bg-[#F9FAFB]">
        <div className="max-w-[1000px] mx-auto px-4">
          <h2 className="text-[32px] font-bold text-[#1B1F2E] mb-6">Missão, Visão e Valores</h2>
          <p className="text-gray-600 mb-12 text-[15px] leading-relaxed">
            Na Ápice, entendemos que a gestão e a manutenção de condomínios demandam não apenas serviços, mas soluções estratégicas que garantam conforto, segurança e otimização contínua. Nossa identidade é forjada por um conjunto de princípios que guiam cada ação e decisão, solidificando nossa posição como parceiros de confiança e excelência.
          </p>
          
          <div className="space-y-16">
            {/* NOSSA MISSÃO */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="text-[#6EC1E4] text-6xl shrink-0"><FaBullseye /></div>
              <div>
                <h3 className="text-[20px] font-bold text-[#1B1F2E] mb-4">Nossa Missão</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                  Nossa missão é elevar o padrão da terceirização de mão de obra, oferecendo soluções profissionais estratégicas que garantam a nossos clientes conforto, segurança, organização e controle. Nosso foco é a otimização contínua dos processos e a promoção do bem-estar e da tranquilidade para todos os que se beneficiam de nossa atuação.
                </p>
                <p className="text-gray-600 text-[15px] leading-relaxed italic border-l-4 border-[#6EC1E4] pl-4">
                  Isso significa que vamos além da simples prestação de serviços. Buscamos entender profundamente as necessidades de cada condomínio para entregar soluções personalizadas que não só atendam, mas superem as expectativas, contribuindo diretamente para a qualidade de vida e a segurança dos condôminos, síndicos e funcionários.
                </p>
              </div>
            </div>

            {/* NOSSA VISÃO */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="text-[#6EC1E4] text-6xl shrink-0"><FaEye /></div>
              <div>
                <h3 className="text-[20px] font-bold text-[#1B1F2E] mb-4">Nossa Visão</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
                  Nossa visão é <strong>ser a principal referência</strong> no mercado de serviços para condomínios, distinguindo-nos pela excelência contínua na gestão estratégica e pela capacidade de superar consistentemente as expectativas dos clientes, consolidando nossa reputação como sinônimo de qualidade, eficácia e confiança.
                </p>
                <p className="text-gray-600 text-[15px] leading-relaxed italic border-l-4 border-[#6EC1E4] pl-4">
                  Almejamos ser o nome que vem à mente quando se pensa em serviços para condomínios. Isso será alcançado através da busca incansável pela melhoria, da aplicação de abordagens inovadoras e da construção de relacionamentos duradouros baseados na performance superior e na entrega de resultados tangíveis, que garantam a paz de espírito dos nossos clientes.
                </p>
              </div>
            </div>

            {/* NOSSOS VALORES */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="text-[#6EC1E4] text-6xl shrink-0"><FaHeart /></div>
              <div className="text-gray-600 text-[15px] leading-relaxed space-y-6">
                <h3 className="text-[20px] font-bold text-[#1B1F2E] mb-4">Nossos Valores</h3>
                <p>Nossos valores são os pilares que sustentam nossa cultura e definem quem somos, como agimos e no que acreditamos. Eles refletem nosso compromisso com a excelência e com o impacto positivo que buscamos gerar.</p>
                
                <div>
                  <p className="text-[#1B1F2E] font-bold mb-2">Ética e Integridade – <span className="font-normal">Honestidade, transparência e responsabilidade inabalável constroem a confiança duradoura.</span></p>
                  <p>Na Ápice, agimos com a máxima honestidade e transparência em todas as nossas operações, desde a gestão financeira de condomínios até a comunicação diária com nossos clientes e equipes. A responsabilidade é inabalável em cada decisão, garantindo que nossas ações reflitam sempre o mais alto caráter e respeito mútuo. Acreditamos que a confiança é o pilar fundamental de qualquer parceria de sucesso, e a construímos dia após dia através de condutas íntegras e justas.</p>
                </div>

                <div>
                  <p className="text-[#1B1F2E] font-bold mb-2">Excelência e Competência – <span className="font-normal">Experiência, aprimoramento contínuo e qualidade superior para satisfação do cliente.</span></p>
                  <p>Nossa força reside na vasta experiência e no conhecimento aprofundado do setor de serviços para condomínios. Buscamos o aprimoramento contínuo de nossos colaboradores e processos, aplicando as melhores práticas e tecnologias para entregar soluções de alta qualidade. Essa dedicação à excelência e à competência nos permite não apenas atender, mas superar as expectativas, garantindo a satisfação plena e a segurança de nossos clientes em todas as frentes, da portaria remota à zeladoria e administração.</p>
                </div>

                <div>
                  <p className="text-[#1B1F2E] font-bold mb-2">Inovação e Visão de Futuro – <span className="font-normal">Antecipar necessidades com soluções inteligentes para valor e crescimento contínuo.</span></p>
                  <p>A Ápice está em constante busca por soluções inteligentes e otimizadas que agreguem valor real e duradouro. Acreditamos que o sucesso é construído pela capacidade de ir além, de antecipar necessidades e de abraçar novas ideias, seja na implementação de novas tecnologias de portaria, na otimização de rotinas de limpeza ou na gestão predial. Nosso foco na inovação impulsiona a transformação e o crescimento contínuo, garantindo que nossos serviços estejam sempre à frente das demandas do mercado e contribuam para o futuro dos condomínios que atendemos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}