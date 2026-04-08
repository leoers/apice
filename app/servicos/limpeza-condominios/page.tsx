import { ServicePageTemplate } from "../componentes/ServicePageTemplate";
import { 
  FaHandSparkles, FaClock, FaShieldVirus, FaLeaf, FaUsers, FaBroom, FaTools, FaBuilding, 
  FaRegFileAlt, FaMedal, FaRecycle, FaClipboardCheck, FaBriefcase, FaChartLine, FaSlidersH,
  FaSearchPlus // Ícone para supervisão/lupa
} from "react-icons/fa";

const limpezaData = {
  // 1. SLIDESHOW HERO
  heroSlides: [
    { 
      title: "Ambientes Impecáveis para Condomínios", 
      subtitle: "Limpeza profissional para valorizar seu condomínio.", 
      backgroundImage: "/images/banner-limpeza-min.jpg" 
    },
    { 
      title: "Equipes Treinadas para Excelência", 
      subtitle: "Profissionais qualificados garantem limpeza de alto padrão.", 
      backgroundImage: "/images/banner-aux-limpeza-2-min_.jpg" 
    }
  ],

  // 2. DESCRIÇÃO
  description: {
    title: "O que é a Limpeza de Condomínios?",
    paragraphs: [
      "Nosso serviço de Limpeza de Condomínios oferece uma solução completa para manter áreas comuns impecáveis, promovendo bem-estar e valorização do seu empreendimento. Com equipes treinadas, produtos sustentáveis e processos otimizados, garantimos limpeza de alto padrão em halls, elevadores, áreas de lazer, fachadas e outros espaços compartilhados.",
      "Diferentemente de serviços genéricos, nossa abordagem é personalizada, adaptada às necessidades específicas de cada condomínio, sejam residenciais ou comerciais. Utilizamos técnicas modernas e produtos ecológicos para assegurar um ambiente limpo, seguro e sustentável, com supervisão contínua para manter a qualidade."
    ]
  },

  // 3. BANNER CTA INTERMEDIÁRIO
  cta: {
    title: "Limpeza de Condomínios: Ambientes Impecáveis e Sustentáveis",
    text: "Transforme seu condomínio com serviços de limpeza profissional, equipes qualificadas e práticas sustentáveis.",
    backgroundImage: "/images/bg-servicoss.jpg"
  },

  // 4. COMO FUNCIONA
  featuresSection: {
    title: "Como Funciona a Limpeza de Condomínios?",
    subtitle: "Nosso serviço é estruturado para oferecer eficiência, qualidade e transparência. Veja como funciona:",
    features: [
      { 
        title: "1. Planejamento Personalizado", 
        text: "Realizamos um diagnóstico das necessidades do condomínio, definindo cronogramas e áreas prioritárias, como halls, elevadores e áreas de lazer.", 
        icon: <FaRegFileAlt /> 
      },
      { 
        title: "2. Equipes Qualificadas", 
        text: "Nossos profissionais são treinados em técnicas de limpeza e uso de equipamentos modernos, garantindo resultados consistentes.", 
        icon: <FaMedal /> 
      },
      { 
        title: "3. Produtos Sustentáveis", 
        text: "Utilizamos produtos ecológicos e biodegradáveis, minimizando o impacto ambiental e protegendo a saúde dos moradores.", 
        icon: <FaRecycle /> 
      },
      { 
        title: "4. Limpeza de Áreas Comuns", 
        text: "Cuidamos de halls, escadas, elevadores, áreas de lazer, garagens e fachadas, com atenção aos detalhes para um ambiente impecável.", 
        icon: <FaBuilding /> 
      },
      { 
        title: "5. Supervisão e Qualidade", 
        text: "Supervisores realizam inspeções regulares para garantir que os padrões de limpeza sejam mantidos, com relatórios para os síndicos.", 
        icon: <FaClipboardCheck /> 
      },
      { 
        title: "6. Manutenção Preventiva", 
        text: "Além da limpeza, identificamos e reportamos necessidades de manutenção, como reparos em pisos ou paredes, para preservar o condomínio.", 
        icon: <FaTools /> 
      }
    ]
  },

  // 5. BENEFÍCIOS
  benefitsSection: {
    title: "Benefícios da Limpeza de Condomínios",
    subtitle: "Nosso serviço de limpeza profissional oferece vantagens que elevam a qualidade de vida e a valorização do seu condomínio:",
    benefits: [
      { 
        title: "Ambientes Impecáveis", 
        text: "Áreas comuns limpas e organizadas, promovendo bem-estar e uma imagem positiva do condomínio.", 
        icon: <FaHandSparkles /> 
      },
      { 
        title: "Sustentabilidade", 
        text: "Uso de produtos ecológicos e práticas sustentáveis, reduzindo o impacto ambiental e protegendo a saúde dos moradores.", 
        icon: <FaLeaf /> 
      },
      { 
        title: "Profissionalismo", 
        text: "Equipes treinadas e supervisionadas garantem resultados consistentes, com atenção aos detalhes.", 
        icon: <FaBriefcase /> 
      },
      { 
        title: "Personalização", 
        text: "Planos adaptados às necessidades do condomínio, com cronogramas flexíveis para atender diferentes perfis e tamanhos.", 
        icon: <FaSlidersH /> 
      },
      { 
        title: "Valorização do Imóvel", 
        text: "Um condomínio bem cuidado aumenta a percepção de valor, beneficiando proprietários e moradores.", 
        icon: <FaChartLine /> 
      },
      { 
        title: "Gestão Simplificada", 
        text: "Relatórios detalhados e supervisão contínua permitem que síndicos acompanhem o serviço com transparência.", 
        icon: <FaClipboardCheck /> 
      }
    ]
  },

  // 6. POR QUE ESCOLHER
  whyChooseSection: {
    title: "Por que Escolher Nossa Limpeza de Condomínios?",
    subtitle: "Nosso serviço se destaca pela qualidade, sustentabilidade e atendimento personalizado:",
    items: [
      { 
        title: "Equipes Treinadas", 
        text: "Nossos profissionais recebem treinamento contínuo em técnicas de limpeza, segurança e atendimento, garantindo um serviço de excelência.", 
        icon: <FaMedal /> 
      },
      { 
        title: "Produtos Ecológicos", 
        text: "Utilizamos produtos biodegradáveis e de baixa toxicidade, priorizando a saúde dos moradores e a sustentabilidade ambiental.", 
        icon: <FaRecycle /> 
      },
      { 
        title: "Supervisão Rigorosa", 
        text: "Supervisores realizam inspeções regulares para garantir a qualidade do serviço, com relatórios detalhados para os síndicos.", 
        icon: <FaSearchPlus /> 
      },
      { 
        title: "Planos Personalizados", 
        text: "Adaptamos nossos serviços às necessidades específicas do condomínio, com cronogramas e frequências ajustados para máxima eficiência.", 
        icon: <FaSlidersH /> 
      }
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

  // 8. FAQ (ATUALIZADO COM OS TEXTOS EXTRAÍDOS DO HTML)
  faqSection: {
    title: "Perguntas Frequentes",
    items: [
      { 
        q: "1. Que tipo de áreas são limpas no serviço?", 
        a: "Cuidamos de halls, elevadores, escadas, áreas de lazer, garagens, fachadas e outros espaços comuns, com planos personalizados para cada condomínio." 
      },
      { 
        q: "2. Os produtos de limpeza são seguros?", 
        a: "Sim, utilizamos produtos ecológicos, biodegradáveis e de baixa toxicidade, garantindo segurança para moradores, pets e o meio ambiente." 
      },
      { 
        q: "3. A equipe de limpeza é treinada?", 
        a: "Sim, nossos profissionais passam por treinamentos regulares em técnicas de limpeza, uso de equipamentos e práticas de segurança." 
      },
      { 
        q: "4. Posso personalizar o cronograma de limpeza?", 
        a: "Sim, oferecemos planos flexíveis, com frequências e horários ajustados às necessidades do seu condomínio." 
      },
      { 
        q: "5. Qual é o custo do serviço?", 
        a: "Os custos variam conforme o tamanho do condomínio e a frequência do serviço. Entre em contato para uma proposta personalizada." 
      }
    ]
  },

  // 9. CONTATO
  contactSection: {
    title: "Entre em Contato",
    text: "Interessado em manter seu condomínio impecável? Solicite uma cotação personalizada!",
    buttonText: "Clique aqui"
  }
};

export default function LimpezaPage() {
  return <ServicePageTemplate data={limpezaData} />;
}