import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";

export function AboutMVA() {
  const itens = [
    {
      title: "Nossa Missão",
      icon: <FaBullseye />,
      text: "Nossa missão é elevar o padrão de segurança de nossos clientes através de soluções estratégicas..."
    },
    {
      title: "Nossa Visão",
      icon: <FaEye />,
      text: "Ser reconhecida como a empresa de referência tecnológica em administração e portaria em SP..."
    },
    {
      title: "Nossos Valores",
      icon: <FaHeart />,
      text: "Ética, integridade, inovação contínua e foco total na satisfação do cliente e do condomínio."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[900px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1B1F2E] mb-16 uppercase tracking-wider">
          Missão, Visão e Valores
        </h2>
        <div className="space-y-12">
          {itens.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start bg-white p-8 rounded-sm shadow-sm border-l-4 border-[#6EC1E4]">
              <div className="text-[#6EC1E4] text-5xl shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-[#1B1F2E] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}