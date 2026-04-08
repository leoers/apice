import { ServicePageTemplate } from "../componentes/ServicePageTemplate";
import { 
  // Segurança e Portaria
  FaShieldAlt, 
  FaLock, 
  FaUserLock, 
  FaVideo, 
  FaExclamationTriangle,
  
  // Zeladoria e Operacional (Novos para esta página)
  FaTools,           // Para Manutenções
  FaTasks,           // Para Coordenação de tarefas
  FaListOl,          // Para Supervisão/Checklist
  FaUserTie,         // Para Zelador/Profissional
  FaClipboardList,   // Para Relatórios de Gestão
  
  // Gestão e Atendimento
  FaMedal, 
  FaSyncAlt, 
  FaUserCheck,
  FaHeadset, 
  FaBoxes, 
  FaFileAlt, 
  FaUsers, 
  FaChartLine,
  
  // Tecnologia e Infra
  FaMicrochip, 
  FaSlidersH,
  FaMobileAlt, 
  FaRobot, 
  FaNetworkWired
} from 'react-icons/fa';

const portariaRemotaData = {
  // 1. SLIDESHOW HERO - ZELADORIA (Otimizado para Conversão e SEO)
heroSlides: [
  { 
    title: "Zeladoria para Condomínios Modernos", 
    subtitle: "Gestão eficiente e operacional para garantir um condomínio valorizado e bem cuidado em São Paulo.", 
    backgroundImage: "/images/banner-zeladoria-2-min.jpg" 
  },
  { 
    title: "Manutenção Profissional e Proativa", 
    subtitle: "Zeladores qualificados e prontos para atuar na preservação patrimonial com foco em checklists rigorosos.", 
    backgroundImage: "/images/banner-zeladoria-3-min.jpg" 
  },
  { 
    title: "Supervisão Completa do Condomínio", 
    subtitle: "Integração total de serviços para manter áreas comuns impecáveis e infraestrutura em pleno funcionamento.", 
    backgroundImage: "/images/banner-zeladoria-4-min.jpg" 
  }
],

  // 2. DESCRIÇÃO (Foco em Zeladoria, Conservação e Gestão de Facilities)
  description: {
    title: "O que é o Serviço de Zeladoria da Ápice?",
    paragraphs: [
      "O serviço de zeladoria da Ápice oferece uma gestão operacional completa e proativa para condomínios em São Paulo, garantindo a preservação patrimonial e o funcionamento impecável de todas as áreas comuns. Nossos zeladores são profissionais de alta confiança, capacitados para supervisionar equipes de limpeza, realizar manutenções preventivas e assegurar que as normas internas do condomínio sejam rigorosamente cumpridas.",
      "Diferente de uma gestão amadora, a zeladoria profissional da Ápice atua como o braço direito do síndico, coordenando prestadores de serviços externos e antecipando soluções para problemas técnicos antes que eles gerem custos elevados. Com foco em organização e eficiência, adaptamos nossa atuação às necessidades específicas de condomínios residenciais e comerciais, proporcionando um ambiente seguro, valorizado e harmonioso para todos os moradores e usuários."
    ]
  },

  // 3. BANNER CTA INTERMEDIÁRIO (Foco em Gestão, Conservação e SEO Local)
  cta: {
    title: "Zeladoria Profissional: Gestão e Manutenção Eficientes em SP",
    text: "Garanta a organização impecável e a valorização do seu condomínio com zeladores qualificados e serviços integrados. Conte com a experiência da Ápice para uma gestão predial sem falhas.",
    backgroundImage: "/images/banner-zeladoria-min_.jpg",
    buttonText: "Solicite uma Cotação" // Conectado ao link de conversão direta
  },

  // 4. COMO FUNCIONA (FEATURES - Otimizado para Zeladoria Profissional)
    featuresSection: {
      title: "Como Funciona a Zeladoria da Ápice?",
      subtitle: "Nossa Zeladoria Profissional combina atendimento humano qualificado com processos estruturados para garantir conservação e eficiência. Veja os pilares:",
      features: [
        { 
          title: "1. Supervisão de Áreas Comuns", 
          text: "Nossos zeladores monitoram halls, elevadores, áreas de lazer e garagens em São Paulo, garantindo limpeza, organização e o pleno funcionamento de toda a infraestrutura predial.", 
          icon: <FaListOl /> // Ícone de checklist/lista conforme o SVG fas-list-ol
        },
        { 
          title: "2. Manutenções Preventivas", 
          text: "Realizamos reparos básicos e preventivos, como troca de lâmpadas, ajustes em portas e supervisão de jardins, evitando que pequenos problemas se tornem grandes custos para o condomínio.", 
          icon: <FaTools /> // Ícone de ferramentas conforme o SVG fas-tools
        },
        { 
          title: "3. Coordenação de Prestadores", 
          text: "Gerenciamos a entrada e o cronograma de trabalho de prestadores de serviços externos (eletricistas, encanadores), garantindo que as manutenções ocorram com segurança e eficiência.", 
          icon: <FaTasks /> // Ícone de tarefas conforme o SVG fas-tasks
        },
        { 
          title: "4. Fiscalização de Regras", 
          text: "Atuamos como o braço direito do síndico na fiscalização do regimento interno, assegurando o cumprimento das normas do condomínio e promovendo a harmonia entre os moradores.", 
          icon: <FaUserTie /> // Ícone de profissional/zelador conforme o SVG fas-user-tie
        },
        { 
          title: "5. Relatórios de Gestão", 
          text: "Fornecemos relatórios detalhados sobre todas as atividades, manutenções realizadas e ocorrências, oferecendo total transparência para a administração e conselho do prédio.", 
          icon: <FaClipboardList /> // Ícone de prancheta conforme o SVG fas-clipboard-list
        },
        { 
          title: "6. Resposta a Emergências", 
          text: "Zeladores treinados para agir prontamente em situações críticas, coordenando ações de contenção e acionando autoridades ou assistência técnica especializada imediatamente.", 
          icon: <FaHeadset /> // Substituindo ti-headphone-alt por um ícone de suporte/comunicação
        }
      ]
    },

  // 5. BENEFÍCIOS (Foco em Conservação, Valorização e Gestão de Facilities)
    benefitsSection: {
      title: "Benefícios da Zeladoria Ápice",
      subtitle: "Nosso serviço de zeladoria profissional transforma a gestão do seu condomínio em São Paulo, oferecendo vantagens práticas e funcionais:",
      benefits: [
        { 
          title: "Gestão Proativa", 
          text: "Nossos zeladores supervisionam ativamente o condomínio, identificando e resolvendo gargalos operacionais antes que se tornem problemas graves.", 
          icon: <FaListOl /> // Representando supervisão ativa e checklist
        },
        { 
          title: "Manutenção Eficiente", 
          text: "Pequenos reparos e cuidados diários mantêm o prédio em perfeito estado, reduzindo drasticamente custos com manutenções emergenciais e corretivas.", 
          icon: <FaTools /> // Ícone de ferramentas para reparos
        },
        { 
          title: "Harmonia Condominial", 
          text: "A fiscalização rigorosa das regras internas promove um ambiente de convivência respeitoso, organizado e harmonioso para todos os moradores.", 
          icon: <FaUsers /> // Ícone de pessoas/comunidade
        },
        { 
          title: "Coordenação Integrada", 
          text: "Gerenciamento completo de prestadores de serviços externos e integração total com as equipes de limpeza e portaria para uma gestão unificada.", 
          icon: <FaNetworkWired /> // Ícone de rede/integração conforme o HTML
        },
        { 
          title: "Valorização do Imóvel", 
          text: "Um condomínio impecavelmente bem cuidado e organizado aumenta a percepção de valor patrimonial para proprietários, visitantes e o mercado imobiliário.", 
          icon: <FaChartLine /> // Ícone de crescimento/valorização
        },
        { 
          title: "Transparência e Controle", 
          text: "Relatórios regulares de atividades e comunicação direta com o síndico garantem total clareza sobre tudo o que acontece na infraestrutura do prédio.", 
          icon: <FaShieldAlt /> // Ícone de proteção/confiança (substituindo o shield_alt do HTML)
        }
      ]
    },

  // 6. POR QUE ESCOLHER (Autoridade, Qualificação e Gestão Integrada)
    whyChooseSection: {
      title: "Por que Escolher a Zeladoria da Ápice?",
      subtitle: "Nosso serviço se destaca no mercado de São Paulo pela excelência operacional, profissionais rigorosamente selecionados e supervisão constante:",
      items: [
        { 
          title: "Zeladores Qualificados", 
          text: "Nossos profissionais passam por treinamentos intensivos em manutenção técnica, gestão predial e atendimento ao cliente, garantindo um serviço de alto padrão e resolutividade no dia a dia.", 
          icon: <FaMedal /> // Representando a premiação/qualidade (award no HTML)
        },
        { 
          title: "Supervisão Contínua", 
          text: "Diferente de profissionais autônomos, nossa equipe conta com supervisores que realizam visitas técnicas regulares para garantir que os padrões de qualidade e eficiência da Ápice sejam mantidos.", 
          icon: <FaUserCheck /> // Representando a supervisão/verificação (clipboard-check no HTML)
        },
        { 
          title: "Planos Personalizados", 
          text: "Adaptamos nossos serviços às particularidades de cada condomínio em SP, criando cronogramas de manutenção e tarefas específicas que maximizam a conservação do patrimônio.", 
          icon: <FaBoxes /> // Representando organização/planos (calendar-alt no HTML)
        },
        { 
          title: "Integração Total de Serviços", 
          text: "Nossa zeladoria atua de forma integrada com os sistemas de portaria e limpeza, oferecendo uma solução de gestão unificada que simplifica a vida do síndico e reduz custos operacionais.", 
          icon: <FaSyncAlt /> // Representando a integração de fluxos (project-diagram no HTML)
        }
      ]
    },

  // 7. DEPOIMENTOS (Prova Social e Autoridade Operacional)
  testimonialsSection: {
    title: "O que Nossos Clientes Dizem",
    items: [
      { 
        text: "“Os profissionais de zeladoria da Ápice são extremamente versáteis e mantêm nosso condomínio impecável. A proatividade na manutenção preventiva evitou diversos custos extras que tínhamos anteriormente.”", 
        author: "Juliana Almeida, Síndica" 
      },
      { 
        text: "“A equipe é muito atenciosa e resolve desde a organização das áreas comuns até pequenos reparos com muita rapidez. Os moradores notaram a diferença na conservação do prédio imediatamente.”", 
        author: "Marcos Lima, Morador" 
      },
      { 
        text: "“O suporte operacional da Ápice facilitou muito a minha gestão. O zelador é bem treinado e os relatórios de ocorrências nos dão uma transparência que nunca tivemos com outras empresas.”", 
        author: "Patrícia Souza, Gestora Condominial" 
      }
    ]
  },

 // 8. FAQ (Foco em quebrar objeções e autoridade técnica em Zeladoria)
  faqSection: {
    title: "Perguntas Frequentes",
    items: [
      { 
        q: "Quais são as principais funções de um zelador da Ápice?", 
        a: "Nossos zeladores atuam na supervisão das áreas comuns, realização de pequenas manutenções preventivas, coordenação de prestadores de serviço externos, fiscalização das regras do regimento interno e suporte imediato em situações de emergência." 
      },
      { 
        q: "O serviço de zeladoria funciona 24 horas?", 
        a: "Oferecemos escalas totalmente personalizadas de acordo com a demanda do seu condomínio em São Paulo. Podemos atuar com zeladoria 24h, em horários comerciais estendidos ou em escalas específicas para finais de semana." 
      },
      { 
        q: "Como é garantida a qualificação dos profissionais?", 
        a: "Todos os nossos profissionais passam por um rigoroso processo de seleção e treinamentos periódicos que abrangem desde manutenção predial técnica e normas de segurança até gestão de conflitos e excelência no atendimento ao morador." 
      },
      { 
        q: "A zeladoria pode ser integrada com outros serviços da Ápice?", 
        a: "Sim. A maior eficiência operacional ocorre quando integramos a Zeladoria com nossos serviços de Portaria e Limpeza. Isso cria uma gestão unificada, onde todas as equipes falam a mesma língua e o síndico tem apenas um ponto de contato." 
      },
      { 
        q: "Como o zelador auxilia na redução de custos do condomínio?", 
        a: "Através da manutenção preventiva constante. Ao identificar e corrigir pequenos vazamentos ou falhas elétricas imediatamente, evitamos que o condomínio precise contratar manutenções corretivas de emergência, que são muito mais caras." 
      },
      { 
        q: "Qual o custo do serviço de zeladoria profissional?", 
        a: "O investimento varia conforme o tamanho do condomínio, a complexidade da infraestrutura e a escala desejada. Elaboramos um plano personalizado para garantir o melhor custo-benefício e eficiência para o seu prédio." 
      }
    ]
  },

  // 9. CONTATO (Conversão Direta via WhatsApp - Foco em Zeladoria)
  contactSection: {
    title: "Otimize a Gestão do seu Condomínio em São Paulo",
    text: "Interessado em elevar o padrão de conservação e segurança do seu prédio? Fale com nossos consultores agora e solicite uma cotação personalizada de zeladoria profissional sem compromisso.",
    buttonText: "Solicitar Orçamento via WhatsApp",
    whatsappLink: "https://api.whatsapp.com/send?phone=5511992945481" 
  }
};

export default function PortariaRemotaPage() {
  return <ServicePageTemplate data={portariaRemotaData} />;
}