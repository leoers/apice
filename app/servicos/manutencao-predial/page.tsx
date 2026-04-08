import { ServicePageTemplate } from "../componentes/ServicePageTemplate";
import { 
  FaTools, FaBuilding, FaRegFileAlt, FaMedal, FaClipboardCheck, 
  FaSlidersH, FaSearchPlus, FaBolt, FaPaintRoller, 
  FaShieldAlt, FaChartLine, FaBriefcase, FaHandSparkles, FaLeaf, 
  FaRecycle, FaCalendarCheck, FaUserCog, FaFileSignature,
  FaCheckDouble, FaSitemap, FaStopwatch, FaClipboardList
} from "react-icons/fa";

const manutencaoData = {
  // 1. SLIDESHOW HERO
  heroSlides: [
    { 
      title: "Manutenção para Condomínios Modernos", 
      subtitle: "Soluções especializadas para preservar seu patrimônio.", 
      backgroundImage: "/images/banner-manutencao-2-min.jpg" 
    },
    { 
      title: "Reparos Profissionais e Rápidos", 
      subtitle: "Técnicos capacitados para resolver qualquer problema.", 
      backgroundImage: "/images/banner-manutencao-3-min.jpg" 
    },
    { 
      title: "Sistemas Prediais Impecáveis", 
      subtitle: "Manutenção elétrica, hidráulica e muito mais.", 
      backgroundImage: "/images/banner-manutencao-4-min.jpg" 
    }
  ],

  // 2. DESCRIÇÃO - Conforme image_6dae05.png
  description: {
    title: "O que é o Serviço de Manutenção Predial?",
    paragraphs: [
      "Nosso serviço de Manutenção Predial oferece soluções completas para a preservação e o funcionamento eficiente de condomínios. Com uma equipe de profissionais especializados, realizamos reparos, manutenções preventivas e corretivas em sistemas elétricos, hidráulicos, estruturais e estéticos, garantindo a segurança e a valorização do seu patrimônio.",
      "Adaptamos nossos serviços às necessidades específicas de cada condomínio, sejam residenciais ou comerciais, com foco em qualidade, agilidade e conformidade com normas técnicas. Nossa manutenção predial é integrada com outros serviços, como zeladoria e limpeza, para proporcionar uma gestão eficiente e unificada."
    ]
  },

  // 3. BANNER CTA INTERMEDIÁRIO - Conforme image_6db166.jpg
  cta: {
    title: "Manutenção Predial: Preservação e Eficiência para Condomínios",
    text: "Mantenha seu condomínio em perfeito estado com serviços de manutenção especializados e profissionais qualificados.",
    backgroundImage: "/images/banner-manutencao-3-min.jpg" 
  },

  // 4. COMO FUNCIONA - Conforme image_6db508.png
  featuresSection: {
    title: "Como Funciona a Manutenção Predial?",
    subtitle: "Nosso serviço é estruturado para garantir a preservação do condomínio com eficiência e profissionalismo. Veja o passo a passo:",
    features: [
      { 
        title: "1. Diagnóstico Inicial", 
        text: "Realizamos uma vistoria completa para identificar necessidades de manutenção em sistemas e estruturas do condomínio.", 
        icon: <FaSearchPlus /> 
      },
      { 
        title: "2. Manutenção Preventiva", 
        text: "Executamos inspeções regulares em sistemas elétricos, hidráulicos e elevadores, evitando problemas e prolongando a vida útil dos equipamentos.", 
        icon: <FaCalendarCheck /> 
      },
      { 
        title: "3. Reparos Corretivos", 
        text: "Resolvemos falhas emergenciais, como vazamentos, curtos-circuitos ou danos estruturais, com rapidez e precisão.", 
        icon: <FaTools /> 
      },
      { 
        title: "4. Manutenção Estética", 
        text: "Realizamos pintura, reparos em fachadas e revitalização de áreas comuns, mantendo o condomínio visualmente atrativo.", 
        icon: <FaPaintRoller /> 
      },
      { 
        title: "5. Gestão de Fornecedores", 
        text: "Acompanhamos prestadores especializados, como engenheiros e técnicos, garantindo serviços de alta qualidade e conformidade.", 
        icon: <FaUserCog /> 
      },
      { 
        title: "6. Relatórios Técnicos", 
        text: "Fornecemos relatórios detalhados sobre manutenções realizadas e recomendações futuras, assegurando transparência.", 
        icon: <FaFileSignature /> 
      }
    ]
  },

  // 5. BENEFÍCIOS - Conforme image_6db5e3.png
  benefitsSection: {
    title: "Benefícios da Manutenção Predial",
    subtitle: "Nosso serviço de manutenção predial oferece vantagens que garantem a segurança, funcionalidade e valorização do condomínio:",
    benefits: [
      { 
        title: "Preservação do Patrimônio", 
        text: "Manutenções preventivas e corretivas prolongam a vida útil de sistemas e estruturas, protegendo o valor do imóvel.", 
        icon: <FaChartLine /> 
      },
      { 
        title: "Segurança Garantida", 
        text: "Inspeções regulares e reparos rápidos minimizam riscos, como falhas elétricas ou vazamentos.", 
        icon: <FaShieldAlt /> 
      },
      { 
        title: "Estética Impecável", 
        text: "Reparos em fachadas e áreas comuns mantêm o condomínio visualmente atrativo e acolhedor.", 
        icon: <FaBuilding /> 
      },
      { 
        title: "Gestão Eficiente", 
        text: "Coordenação de fornecedores e relatórios técnicos simplificam a administração do condomínio.", 
        icon: <FaClipboardCheck /> 
      },
      { 
        title: "Conformidade Técnica", 
        text: "Todos os serviços seguem normas regulamentadoras, garantindo segurança e qualidade.", 
        icon: <FaCheckDouble /> 
      },
      { 
        title: "Integração Operacional", 
        text: "Combina com serviços de zeladoria e limpeza para uma gestão unificada e otimizada.", 
        icon: <FaSitemap /> 
      }
    ]
  },

  // 6. POR QUE ESCOLHER - Conforme image_6db928.png
  whyChooseSection: {
    title: "Por que Escolher Nossa Manutenção Predial?",
    subtitle: "Nosso serviço se destaca pela expertise, agilidade e compromisso com a qualidade:",
    items: [
      { 
        title: "Técnicos Especializados", 
        text: "Nossa equipe é formada por profissionais qualificados em elétrica, hidráulica, alvenaria e outras áreas, garantindo reparos de alto padrão.", 
        icon: <FaMedal /> 
      },
      { 
        title: "Manutenção Preventiva", 
        text: "Priorizamos inspeções regulares para evitar problemas graves, reduzindo custos e aumentando a durabilidade dos sistemas.", 
        icon: <FaClipboardList /> 
      },
      { 
        title: "Atendimento Ágil", 
        text: "Resolvemos emergências com rapidez, minimizando transtornos para moradores e síndicos.", 
        icon: <FaStopwatch /> 
      },
      { 
        title: "Planos Personalizados", 
        text: "Adaptamos os serviços às necessidades do condomínio, com cronogramas e soluções sob medida.", 
        icon: <FaSlidersH /> 
      }
    ]
  },

  // 7. DEPOIMENTOS - Conforme image_6dbd27.png
  testimonialsSection: {
    title: "O que Nossos Clientes Dizem",
    items: [
      { 
        text: "“Os auxiliares de serviços gerais são extremamente versáteis e mantêm nosso condomínio impecável. Excelente serviço!”", 
        author: "Juliana Almeida, Síndica" 
      },
      { 
        text: "“A equipe é muito atenciosa e resolve desde limpezas até pequenos reparos com rapidez. Os moradores estão muito satisfeitos.”", 
        author: "Marcos Lima, Morador" 
      },
      { 
        text: "“O suporte operacional dos auxiliares facilitou muito a gestão do condomínio. Tudo está mais organizado!”", 
        author: "Patrícia Souza, Gestora Condominial" 
      }
    ]
  },

  // 8. FAQ - Atualizado conforme HTML enviado
  faqSection: {
    title: "Perguntas Frequentes",
    items: [
      { 
        q: "1. Quais tipos de manutenção são oferecidos?", 
        a: "Realizamos manutenções preventivas e corretivas em sistemas elétricos, hidráulicos, estruturais, elevadores e estética predial." 
      },
      { 
        q: "2. O serviço atende emergências?", 
        a: "Sim, oferecemos atendimento ágil para emergências, como vazamentos ou falhas elétricas, com equipes disponíveis conforme a necessidade." 
      },
      { 
        q: "3. Os profissionais são qualificados?", 
        a: "Sim, nossa equipe é formada por técnicos especializados, com treinamento contínuo e conformidade com normas técnicas." 
      },
      { 
        q: "4. O serviço pode ser integrado com outros?", 
        a: "Sim, a manutenção predial pode ser combinada com zeladoria, limpeza e outros serviços, garantindo uma gestão unificada." 
      },
      { 
        q: "5. Qual é o custo do serviço?", 
        a: "Os custos variam conforme o tamanho do condomínio e a complexidade do serviço. Entre em contato para uma proposta personalizada." 
      }
    ]
  },

  // 9. CONTATO
  contactSection: {
    title: "Solicite um Diagnóstico Gratuito",
    text: "Interessado em manter seu condomínio em perfeito estado com nossa manutenção predial? Solicite uma cotação personalizada!",
    buttonText: "Falar no WhatsApp"
  }
};

export default function ManutencaoPredialPage() {
  return <ServicePageTemplate data={manutencaoData} />;
}