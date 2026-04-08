import { ServicePageTemplate } from "../componentes/ServicePageTemplate";
import { 
  FaSprayCan, FaTools, FaBoxes, FaUserTie, FaComments, FaFileAlt, 
  FaListUl, FaHandSparkles, FaHeadset, FaSitemap, FaHeart, 
  FaClipboardCheck, FaAward, FaSyncAlt, FaProjectDiagram 
} from "react-icons/fa";

const auxiliarData = {
  // 1. SLIDESHOW HERO
  heroSlides: [
    { 
      title: "Suporte Versátil para Condomínios", 
      subtitle: "Auxiliares prontos para atender todas as necessidades operacionais.", 
      backgroundImage: "/images/banner-aux-limpeza-min.jpg" 
    },
    { 
      title: "Manutenção e Limpeza Eficientes", 
      subtitle: "Profissionais capacitados para tarefas diárias.", 
      backgroundImage: "/images/banner-aux-limpeza-2-min_.jpg" 
    },
    { 
      title: "Gestão Operacional Completa", 
      subtitle: "Soluções integradas para um condomínio impecável.", 
      backgroundImage: "/images/banner-aux-limpeza-3-min.jpg" 
    }
  ],

  // 2. DESCRIÇÃO
  description: {
    title: "O que é o Serviço de Auxiliar de Serviços Gerais?",
    paragraphs: [
      "Nosso serviço de Auxiliar de Serviços Gerais oferece suporte operacional versátil para condomínios, abrangendo tarefas como limpeza, pequenas manutenções, organização de áreas comuns e apoio logístico. Nossos auxiliares são profissionais capacitados que trabalham para manter o condomínio funcional, limpo e bem cuidado, atendendo às demandas diárias com eficiência.",
      "Com uma abordagem flexível, adaptamos o serviço às necessidades específicas de cada condomínio, sejam residenciais ou comerciais. Nossa equipe atua em sinergia com outros serviços, como zeladoria e portaria, garantindo um ambiente organizado, seguro e valorizado para moradores e visitantes."
    ]
  },

  // 3. BANNER CTA INTERMEDIÁRIO
  cta: {
    title: "Auxiliar de Serviços Gerais: Suporte Versátil para Condomínios",
    text: "Garanta a eficiência operacional do seu condomínio com auxiliares qualificados para diversas tarefas.",
    backgroundImage: "/images/bg-servicoss.jpg"
  },

  // 4. COMO FUNCIONA
  featuresSection: {
    title: "Como Funciona o Serviço de Auxiliar de Serviços Gerais?",
    subtitle: "Nosso serviço é estruturado para oferecer suporte prático e eficiente em diversas áreas do condomínio. Veja o passo a passo:",
    features: [
      { 
        title: "1. Limpeza de Áreas Comuns", 
        text: "Auxiliares realizam a limpeza de halls, elevadores, escadas, garagens e áreas de lazer, mantendo o condomínio impecável.", 
        icon: <FaSprayCan /> 
      },
      { 
        title: "2. Pequenas Manutenções", 
        text: "Executam reparos simples, como troca de lâmpadas, pintura de pequenos danos e ajustes em mobiliário, garantindo funcionalidade.", 
        icon: <FaTools /> 
      },
      { 
        title: "3. Apoio Logístico", 
        text: "Gerenciam a entrega de correspondências, organizam depósitos e apoiam a logística de eventos ou obras no condomínio.", 
        icon: <FaBoxes /> 
      },
      { 
        title: "4. Suporte a Zeladoria", 
        text: "Colaboram com zeladores na supervisão de áreas comuns, prestadores de serviços e cumprimento de normas do condomínio.", 
        icon: <FaUserTie /> 
      },
      { 
        title: "5. Atendimento aos Moradores", 
        text: "Oferecem suporte direto aos moradores, atendendo solicitações e garantindo um ambiente acolhedor e organizado.", 
        icon: <FaComments /> 
      },
      { 
        title: "6. Relatórios Operacionais", 
        text: "Fornecemos relatórios sobre atividades realizadas, permitindo que síndicos acompanhem o desempenho do serviço.", 
        icon: <FaFileAlt /> 
      }
    ]
  },

  // 5. BENEFÍCIOS (CORRIGIDO: Colocado dentro de benefitsSection)
  benefitsSection: {
    title: "Benefícios do Auxiliar de Serviços Gerais",
    subtitle: "Agilidade e versatilidade para elevar a qualidade do seu condomínio:",
    benefits: [
      { title: "Versatilidade Operacional", text: "Auxiliares realizam múltiplas tarefas, desde limpeza até pequenas manutenções, otimizando a gestão do condomínio.", icon: <FaListUl /> },
      { title: "Ambiente Impecável", text: "Áreas comuns limpas e organizadas promovem bem-estar e valorizam o empreendimento.", icon: <FaHandSparkles /> },
      { title: "Suporte Proativo", text: "Profissionais atentos identificam e resolvem pequenas questões antes que se tornem problemas maiores.", icon: <FaHeadset /> },
      { title: "Integração com Outros Serviços", text: "Atuam em sinergia com zeladoria, portaria e limpeza, garantindo uma gestão unificada.", icon: <FaSitemap /> },
      { title: "Atendimento Humanizado", text: "Auxiliares oferecem suporte direto aos moradores, criando um ambiente acolhedor e funcional.", icon: <FaHeart /> },
      { title: "Transparência", text: "Relatórios detalhados permitem que síndicos acompanhem as atividades e resultados do serviço.", icon: <FaClipboardCheck /> }
    ]
  },

  // 6. POR QUE ESCOLHER
  whyChooseSection: {
    title: "Por que Escolher Nosso Serviço de Auxiliar de Serviços Gerais?",
    subtitle: "Nosso serviço se destaca pela versatilidade, profissionalismo e atendimento personalizado:",
    items: [
      { title: "Profissionais Capacitados", text: "Nossos auxiliares são treinados em limpeza, manutenção básica e atendimento, garantindo um serviço de qualidade.", icon: <FaAward /> },
      { title: "Supervisão Rigorosa", text: "Supervisores acompanham o desempenho dos auxiliares, assegurando padrões elevados de eficiência e organização.", icon: <FaClipboardCheck /> },
      { title: "Flexibilidade de Tarefas", text: "Adaptamos o serviço às demandas do seu condomínio, com cronogramas e funções ajustadas para máxima produtividade.", icon: <FaSyncAlt /> },
      { title: "Integração Operacional", text: "Nossos auxiliares trabalham em conjunto com outros serviços condominiais, oferecendo uma solução completa e integrada.", icon: <FaProjectDiagram /> }
    ]
  },

  // 7. DEPOIMENTOS
  testimonialsSection: {
    title: "O que Nossos Clientes Dizem",
    items: [
      { text: "“Os auxiliares de serviços gerais são extremamente versáteis e mantêm nosso condomínio impecável. Excelente serviço!”", author: "Juliana Almeida, Síndica" },
      { text: "“A equipe é muito atenciosa e resolve desde limpezas até pequenos reparos com rapidez.”", author: "Marcos Lima, Morador" },
      { text: "“O suporte operacional dos auxiliares facilitou muito a gestão do condomínio. Tudo está mais organizado!”", author: "Patrícia Souza, Gestora Condominial" }
    ]
  },

  // 8. FAQ
  faqSection: {
    title: "Perguntas Frequentes",
    items: [
      { q: "1. Quais tarefas os auxiliares de serviços gerais realizam?", a: "Eles fazem limpeza de áreas comuns, pequenas manutenções, apoio logístico, suporte à zeladoria e atendimento aos moradores." },
      { q: "2. O serviço está disponível 24 horas?", a: "Oferecemos escalas personalizadas, que podem incluir auxiliares 24/7 ou em horários específicos, conforme a necessidade do condomínio." },
      { q: "3. Os auxiliares são treinados?", a: "Sim, nossos auxiliares passam por treinamentos regulares em limpeza, manutenção básica, segurança e atendimento ao cliente." },
      { q: "4. O serviço pode ser integrado com outros?", a: "Sim, nossos auxiliares trabalham em conjunto com zeladoria, portaria e limpeza, garantindo uma gestão condominial unificada." },
      { q: "5. Qual é o custo do serviço?", a: "Os custos variam conforme o tamanho do condomínio e a escala desejada. Entre em contato para uma proposta personalizada." }
    ]
  },

  // 9. CONTATO
  contactSection: {
    title: "Entre em Contato",
    text: "Interessado em otimizar as operações do seu condomínio com nossos auxiliares de serviços gerais? Solicite uma cotação personalizada!",
    buttonText: "Falar no WhatsApp"
  }
};

export default function AuxiliarPage() {
  return <ServicePageTemplate data={auxiliarData} />;
}