import { ServicePageTemplate } from "../componentes/ServicePageTemplate";
import { 
  FaShieldAlt, FaMedal, FaSyncAlt, FaUserCheck,
  FaHeadset, FaBoxes, FaVideo, FaExclamationTriangle, 
  FaFileAlt, FaUsers, FaUserLock, FaMicrochip, FaSlidersH
} from "react-icons/fa";

const portariaData = {
  // 1. SLIDESHOW HERO
  heroSlides: [
    { 
      title: "Portaria Presencial no Morumbi", 
      subtitle: "Segurança e hospitalidade com porteiros qualificados para condomínios modernos.", 
      backgroundImage: "/images/banner-port-prese-2-min__.jpg" 
    },
    { 
      title: "Controle de Acesso Especializado", 
      subtitle: "Atendimento personalizado e rigoroso protocolo de segurança patrimonial.", 
      backgroundImage: "/images/banner-port-prese-3-min_.jpg" 
    },
    { 
      title: "Gestão Integrada de Facilidades", 
      subtitle: "Soluções completas de portaria, zeladoria e limpeza em São Paulo.", 
      backgroundImage: "/images/banner-port-prese-4-min_.jpg" 
    }
  ],

  // 2. DESCRIÇÃO
  description: {
    title: "O que é a Portaria Presencial?",
    paragraphs: [
      "A Portaria Presencial é a solução tradicional que combina a presença física de porteiros altamente treinados com processos rigorosos de controle de acesso e atendimento. Ideal para condomínios que valorizam o contato humano, nossa portaria presencial no Morumbi oferece segurança, hospitalidade e eficiência na gestão de entradas e saídas de moradores, visitantes e prestadores de serviços.",
      "Nossos porteiros passam por treinamentos regulares, incluindo técnicas de segurança, atendimento ao cliente e gerenciamento de conflitos, garantindo um serviço profissional e confiável. Com a Portaria Presencial, seu condomínio mantém a essência do atendimento humano, complementado por protocolos modernos de segurança e gestão."
    ]
  },

  // 3. BANNER CTA INTERMEDIÁRIO
  cta: {
    title: "Portaria Presencial: Segurança e Atendimento Humano",
    text: "Ofereça aos moradores do seu condomínio a confiança de um atendimento personalizado com profissionais qualificados.",
    backgroundImage: "/images/banner-port-prese-3-min.jpg" 
  },

  // 4. COMO FUNCIONA (FEATURES)
  featuresSection: {
    title: "Como Funciona a Portaria Presencial?",
    subtitle: "Nossa Portaria Presencial combina atendimento humano com processos estruturados para garantir segurança e eficiência. Veja como funciona:",
    features: [
      { 
        title: "1. Controle de Acesso Rigoroso", 
        text: "Nossos porteiros verificam a identidade de visitantes e prestadores de serviços, garantindo que apenas pessoas autorizadas acessem o condomínio.", 
        icon: <FaShieldAlt /> 
      },
      { 
        title: "2. Atendimento Personalizado", 
        text: "Os porteiros oferecem um atendimento cordial e profissional, criando uma experiênia acolhedora para moradores e visitantes.", 
        icon: <FaHeadset /> 
      },
      { 
        title: "3. Gestão de Correspondências", 
        text: "Recebimento, organização e entrega de correspondências e encomendas, com registros detalhados para maior transparência.", 
        icon: <FaBoxes /> 
      },
      { 
        title: "4. Monitoramento Local", 
        text: "Os porteiros monitoram a entrada e áreas comuns, utilizando sistemas de CFTV quando disponíveis, para garantir a segurança do condomínio.", 
        icon: <FaVideo /> 
      },
      { 
        title: "5. Resposta a Emergências", 
        text: "Nossos profissionais são treinados para lidar com situações de emergência, como acionamento de autoridades ou suporte inicial em incidentes.", 
        icon: <FaExclamationTriangle /> 
      },
      { 
        title: "6. Relatórios de Atividades", 
        text: "Síndicos recebem relatórios periódicos sobre acessos, ocorrências e atividades da portaria, garantindo transparência e controle.", 
        icon: <FaFileAlt /> 
      }
    ]
  },

  // 5. BENEFÍCIOS
  benefitsSection: {
    title: "Benefícios da Portaria Presencial",
    subtitle: "A Portaria Presencial oferece uma abordagem tradicional com benefícios modernos para a gestão do seu condomínio:",
    benefits: [
      { 
        title: "Atendimento Humano", 
        text: "Porteiros qualificados proporcionam uma experiência acolhedora, promovendo confiança e proximidade com os moradores.", 
        icon: <FaUsers /> 
      },
      { 
        title: "Segurança Confiável", 
        text: "A presença física de porteiros reduz riscos de intrusões e permite respostas imediatas a situações suspeitas.", 
        icon: <FaUserLock /> 
      },
      { 
        title: "Flexibilidade Operacional", 
        text: "Equipes podem ser escaladas conforme as necessidades do condomínio, com turnos 24/7 ou horários personalizados.", 
        icon: <FaSlidersH /> 
      },
      { 
        title: "Gestão de Correspondências", 
        text: "Recebimento e organização de encomendas, com comunicação direta aos moradores, otimizando a logística interna.", 
        icon: <FaBoxes /> 
      },
      { 
        title: "Supervisão Local", 
        text: "Porteiros monitoram áreas comuns e garantem o cumprimento das regras do condomínio, promovendo ordem e harmonia.", 
        icon: <FaVideo /> 
      },
      { 
        title: "Integração com Tecnologia", 
        text: "Possibilidade de combinar a portaria presencial com sistemas de CFTV, interfones e controles de acesso para maior eficiência.", 
        icon: <FaMicrochip /> 
      }
    ]
  },

  // 6. POR QUE ESCOLHER
  whyChooseSection: {
    title: "Por que Escolher Nossa Portaria Presencial?",
    subtitle: "Nossa solução de Portaria Presencial combina profissionalismo, treinamento rigoroso e atendimento de excelência:",
    items: [
      { 
        title: "Porteiros Qualificados", 
        text: "Nossos profissionais passam por treinamentos regulares em segurança, atendimento ao cliente e gestão de conflitos, garantindo um serviço de alta qualidade.", 
        icon: <FaMedal /> 
      },
      { 
        title: "Supervisão Contínua", 
        text: "Supervisores realizam visitas regulares para garantir que os padrões de atendimento e segurança sejam mantidos em alto nível.", 
        icon: <FaUserCheck /> 
      },
      { 
        title: "Flexibilidade de Escalas", 
        text: "Oferecemos escalas personalizadas, com opções de turnos diurnos, noturnos ou 24/7, adaptadas às necessidades do seu condomínio.", 
        icon: <FaSyncAlt /> 
      },
      { 
        title: "Integração com Tecnologia", 
        text: "Nossos porteiros podem operar sistemas de CFTV, interfones e controles de acesso, combinando o melhor do atendimento humano com tecnologia moderna.", 
        icon: <FaMicrochip /> 
      }
    ]
  },

  // 7. DEPOIMENTOS
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

  // 8. FAQ - Atualizado conforme os textos fornecidos
  faqSection: {
    title: "Perguntas Frequentes",
    items: [
      { 
        q: "1. Como é garantida a segurança com a Portaria Presencial?", 
        a: "Nossos porteiros são treinados em técnicas de segurança e vigilância, além de seguir protocolos rigorosos de controle de acesso, garantindo a proteção do condomínio." 
      },
      { 
        q: "2. Os porteiros trabalham 24 horas?", 
        a: "Sim, oferecemos escalas 24/7 ou personalizadas, com equipes preparadas para cobrir turnos diurnos, noturnos ou conforme a necessidade do condomínio." 
      },
      { 
        q: "3. Os porteiros recebem treinamento?", 
        a: "Sim, todos os porteiros passam por treinamentos regulares em segurança, atendimento ao cliente e gestão de conflitos, além de atualizações periódicas." 
      },
      { 
        q: "4. É possível integrar a portaria presencial com tecnologia?", 
        a: "Sim, nossos porteiros podem operar sistemas de CFTV, interfones e controles de acesso, complementando o atendimento humano com tecnologia moderna." 
      },
      { 
        q: "5. Qual é o custo do serviço?", 
        a: "Os custos variam conforme o tamanho do condomínio e a escala desejada. Entre em contato para uma proposta personalizada." 
      }
    ]
  },

  // 9. CONTATO
  contactSection: {
    title: "Proteja seu Patrimônio no Morumbi",
    text: "Interessado em elevar o nível de segurança do seu condomínio com nossa Portaria Presencial? Solicite uma cotação personalizada!",
    buttonText: "Conversar com Especialista"
  }
};

export default function PortariaPresencialPage() {
  return <ServicePageTemplate data={portariaData} />;
}