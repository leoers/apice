import { ServicePageTemplate } from "../componentes/ServicePageTemplate";
import { 
  FaShieldAlt, 
  FaMedal, 
  FaSyncAlt, 
  FaUserCheck,
  FaHeadset, 
  FaBoxes, 
  FaVideo, 
  FaExclamationTriangle, 
  FaFileAlt, 
  FaUsers, 
  FaUserLock, 
  FaMicrochip, 
  FaSlidersH,
  FaMobileAlt, 
  FaLock, 
  FaChartLine,
  FaRobot,          // Novo: Para Inteligência Artificial
  FaNetworkWired    // Novo: Para Infraestrutura/Redundância
} from 'react-icons/fa';

const portariaRemotaData = {
  // 1. SLIDESHOW HERO (Otimizado para SEO e GEO)
  heroSlides: [
    { 
      title: "Portaria Remota em São Paulo", 
      subtitle: "Tecnologia de ponta para reduzir custos em até 50% e aumentar a segurança do seu condomínio.", 
      backgroundImage: "/images/banner-port-remota-3-min.jpg" 
    },
    { 
      title: "Monitoramento 24h Especializado", 
      subtitle: "Nossa central de controle em SP garante resposta rápida e gestão de acessos via software de última geração.", 
      backgroundImage: "/images/banner-port-remota-4-min.jpg" 
    },
    { 
      title: "Gestão Inteligente de Acessos", 
      subtitle: "Liberação por QR Code, biometria e reconhecimento facial para moradores e visitantes no Morumbi e região.", 
      backgroundImage: "/images/banner-port-remota-5-min.jpg" 
    }
  ],

  // 2. DESCRIÇÃO (Otimizada para SEO, GEO e LLM - Refletindo o HTML da Seção 2)
  description: {
    title: "O que é a Portaria Remota da Ápice?",
    paragraphs: [
      "A Portaria Remota é uma solução inovadora e tecnológica que substitui a portaria presencial por um ecossistema integrado de monitoramento a distância. Utilizando câmeras de alta resolução, interfones com vídeo, sistemas de controle de acesso biométrico e Inteligência Artificial, nossa solução garante segurança máxima, eficiência operacional e uma redução de custos de até 50% para condomínios residenciais e comerciais em São Paulo.",
      "Diferentemente das portarias tradicionais, que dependem exclusivamente da presença física e estão sujeitas a falhas humanas ou rendições, a Portaria Remota da Ápice opera com uma Central de Monitoramento blindada, ativa 24h por dia. Gerenciada por profissionais altamente capacitados no Morumbi e região, nossa tecnologia oferece maior transparência, registros auditáveis em tempo real e total tranquilidade para síndicos e moradores que buscam modernizar a segurança patrimonial."
    ]
  },

  // 3. BANNER CTA INTERMEDIÁRIO (Otimizado para Conversão e SEO Local)
  cta: {
    title: "Portaria Remota: A Revolução na Gestão de Condomínios em SP",
    text: "Segurança contínua, tecnologia de ponta e economia significativa para seu condomínio. Modernize a gestão com a Ápice e reduza a taxa condominial de forma inteligente.",
    backgroundImage: "/images/banner-port-remota-min.jpg",
    buttonText: "Solicite uma Cotação" // Linkando diretamente para o gatilho do botão no HTML
  },

  // 4. COMO FUNCIONA (FEATURES - Otimizado para SEO, GEO e LLM)
  featuresSection: {
    title: "Como Funciona a Portaria Remota da Ápice?",
    subtitle: "Nossa solução combina tecnologia avançada com processos otimizados para oferecer uma experiência segura e fluida em São Paulo. Veja o passo a passo:",
    features: [
      { 
        title: "1. Monitoramento em Tempo Real", 
        text: "Câmeras de alta definição e interfones com vídeo são monitorados 24h por nossa central remota. Operadores treinados gerenciam acessos, garantindo resposta rápida a qualquer situação no Morumbi e região.", 
        icon: <FaVideo /> // Substituindo pelo ícone de vídeo correspondente ao HTML
      },
      { 
        title: "2. Controle de Acesso Avançado", 
        text: "Moradores utilizam biometria, tags RFID ou aplicativos móveis para acessar o condomínio. O sistema registra 100% das entradas e saídas, garantindo total rastreabilidade auditável.", 
        icon: <FaUserLock /> 
      },
      { 
        title: "3. Gestão de Visitantes e Prestadores", 
        text: "Visitantes são identificados via vídeo e o acesso é autorizado pelo morador via App. Prestadores de serviço têm entradas controladas com horários pré-definidos, elevando o nível de segurança patrimonial.", 
        icon: <FaUsers /> 
      },
      { 
        title: "4. Resposta a Emergências", 
        text: "Nossa central está preparada para agir imediatamente em caso de tentativas de intrusão ou falhas técnicas, contando com protocolos de pânico e redundâncias de sistema para continuidade 24/7.", 
        icon: <FaExclamationTriangle /> 
      },
      { 
        title: "5. Relatórios e Transparência", 
        text: "Síndicos acessam relatórios detalhados sobre acessos e ocorrências através de uma plataforma online segura, facilitando a gestão e auditoria do condomínio.", 
        icon: <FaFileAlt /> 
      },
      { 
        title: "6. Integração com Sistemas Existentes", 
        text: "Nossa tecnologia integra-se a sistemas de CFTV, automação predial e alarmes já instalados, maximizando o aproveitamento da infraestrutura atual do seu prédio.", 
        icon: <FaSyncAlt /> 
      }
    ]
  },

  // 5. BENEFÍCIOS (Foco em ROI, Segurança e Sustentabilidade - Atualizado via HTML)
  benefitsSection: {
    title: "Benefícios da Portaria Remota Ápice",
    subtitle: "A adoção da Portaria Remota transforma a gestão condominial em São Paulo, oferecendo vantagens tangíveis:",
    benefits: [
      { 
        title: "Redução de Custos de até 60%", 
        text: "Elimine despesas pesadas com folha de pagamento, encargos e horas extras. Nossa solução reduz em até 60% os custos operacionais da portaria.", 
        icon: <FaChartLine /> 
      },
      { 
        title: "Segurança de Alta Performance", 
        text: "Monitoramento contínuo 24h com tecnologia de ponta que minimiza falhas humanas e garante gravação integral para auditorias e segurança patrimonial.", 
        icon: <FaShieldAlt /> 
      },
      { 
        title: "Experiência Digital do Usuário", 
        text: "Acesso rápido e moderno via biometria ou smartphone. Interface intuitiva que facilita a rotina de moradores e visitantes no condomínio.", 
        icon: <FaMobileAlt /> 
      },
      { 
        title: "Sustentabilidade e Eficiência", 
        text: "Reduza o consumo de energia e a pegada ambiental do seu condomínio com uma infraestrutura tecnológica otimizada e ecológica.", 
        icon: <FaSyncAlt /> 
      },
      { 
        title: "Escalabilidade e Ajuste Local", 
        text: "Solução adaptável para prédios de pequeno a grande porte em SP, com personalização total para as necessidades específicas da sua região.", 
        icon: <FaSlidersH /> 
      },
      { 
        title: "Gestão e Transparência Total", 
        text: "Relatórios detalhados em tempo real que permitem ao síndico tomar decisões informadas com total clareza para o conselho e moradores.", 
        icon: <FaFileAlt /> 
      }
    ]
  },

  // 6. POR QUE ESCOLHER (Autoridade, IA e Infraestrutura)
  whyChooseSection: {
    title: "Por que Escolher a Portaria Remota da Ápice?",
    subtitle: "Nossa solução se destaca no mercado de São Paulo por combinar inovação tecnológica com atendimento excepcional e infraestrutura própria:",
    items: [
      { 
        title: "Tecnologia de Inteligência Artificial", 
        text: "Utilizamos algoritmos de IA para análise de vídeo em tempo real, detecção de comportamentos suspeitos e automação de processos, garantindo eficiência máxima na segurança do seu condomínio.", 
        icon: <FaRobot /> // Representando a IA citada no HTML
      },
      { 
        title: "Infraestrutura Redundante", 
        text: "Operação ininterrupta com nossa central em SP equipada com links de internet redundantes, servidores de backup e geradores próprios. Segurança 24/7, mesmo em falhas técnicas externas.", 
        icon: <FaNetworkWired /> 
      },
      { 
        title: "Suporte Técnico 24/7 Local", 
        text: "Equipe técnica de prontidão para manutenção preventiva e reparos rápidos em toda a capital paulista, garantindo assistência imediata a síndicos e moradores.", 
        icon: <FaHeadset /> 
      },
      { 
        title: "Personalização e Integração Total", 
        text: "Adaptamos nossa tecnologia às necessidades específicas do seu prédio, integrando perfeitamente com sistemas de CFTV e automação já existentes sem custos desnecessários.", 
        icon: <FaSlidersH /> 
      }
    ]
  },

  // 7. DEPOIMENTOS (Prova Social e Autoridade Local)
  testimonialsSection: {
    title: "O que Nossos Clientes Dizem",
    items: [
      { 
        text: "“A transição para a Portaria Remota da Ápice foi impecável. A redução na taxa do condomínio foi imediata e o suporte técnico é extremamente versátil e rápido.”", 
        author: "Juliana Almeida, Síndica" 
      },
      { 
        text: "“A equipe é muito atenciosa e resolve tudo com rapidez. O sistema é intuitivo e os moradores do prédio estão muito satisfeitos com a nova segurança.”", 
        author: "Marcos Lima, Morador" 
      },
      { 
        text: "“O suporte operacional facilitou muito a gestão do condomínio. Tudo está mais organizado, seguro e transparente para o conselho.”", 
        author: "Patrícia Souza, Gestora Condominial" 
      }
    ]
  },

 // 8. FAQ (Foco em quebrar objeções e autoridade técnica)
  faqSection: {
    title: "Perguntas Frequentes",
    items: [
      { 
        q: "A Portaria Remota é realmente segura?", 
        a: "Sim. Nossa solução utiliza criptografia de ponta a ponta, câmeras de alta resolução e monitoramento 24/7 por profissionais treinados em ambiente blindado. O sistema elimina o risco de o porteiro ser rendido no local." 
      },
      { 
        q: "Como o sistema funciona em caso de falha na internet ou energia?", 
        a: "Possuímos conexões redundantes (Fibra Óptica e 4G/5G) e nobreaks de alta autonomia. Em caso de queda, o sistema alterna automaticamente para a conexão secundária, garantindo operação ininterrupta 24h por dia." 
      },
      { 
        q: "Como ficam as entregas de correios e encomendas?", 
        a: "O entregador aciona a nossa central, que identifica a encomenda via câmera, registra o acesso e autoriza a entrada em uma clausura segura ou aciona o zelador/morador conforme o protocolo do condomínio." 
      },
      { 
        q: "Os moradores (especialmente idosos) precisam de treinamento?", 
        a: "Não é necessário um treinamento complexo. Nossa interface é intuitiva e utilizamos dispositivos de acesso simples (biometria/tags). Além disso, oferecemos uma sessão de onboarding para garantir a adaptação de todos." 
      },
      { 
        q: "A solução pode ser integrada a sistemas que o condomínio já possui?", 
        a: "Sim! Nossa tecnologia é compatível com a maioria dos sistemas de CFTV, alarmes e automação predial do mercado, permitindo uma integração total com a infraestrutura existente em São Paulo." 
      },
      { 
        q: "Qual o tempo médio de instalação e custo?", 
        a: "A instalação leva em média de 15 a 30 dias. Quanto ao custo, ele é personalizado conforme o tamanho do prédio, mas o ROI é rápido, visto que a redução de custos operacionais chega a 60%." 
      }
    ]
  },

  // 9. CONTATO (Conversão Direta via WhatsApp)
  contactSection: {
    title: "Economize no seu Condomínio em São Paulo",
    text: "Interessado em transformar a segurança e a gestão do seu prédio? Fale com nossos consultores e solicite um estudo de viabilidade personalizado sem compromisso.",
    buttonText: "Solicitar Orçamento via WhatsApp",
    whatsappLink: "https://api.whatsapp.com/send?phone=5511992945481" // Link direto do seu HTML
  }
};

export default function PortariaRemotaPage() {
  return <ServicePageTemplate data={portariaRemotaData} />;
}