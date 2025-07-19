import { motion } from "framer-motion";
import { useState } from "react";
import {
  Globe,
  Smartphone,
  Monitor,
  ShoppingCart,
  Zap,
  ArrowRight,
} from "lucide-react";
import { theme, motionVariants } from "@/lib/theme";
import { ServiceModal } from "./ServiceModal";

export const ConsultancySection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const servicesData = [
    {
      icon: Globe,
      title: "Sites Profissionais",
      description: "Presença digital que impressiona seus clientes",
      features: [
        "Design moderno",
        "Totalmente responsivo",
        "Otimizado para vendas",
      ],
      color: "from-blue-500 to-cyan-500",
      delay: 0,
      details: {
        process: [
          "Análise do seu negócio e concorrentes",
          "Criação do design personalizado",
          "Desenvolvimento responsivo",
          "Testes e otimizações",
          "Lançamento e treinamento",
        ],
        technologies: [
          "React",
          "Next.js",
          "TailwindCSS",
          "TypeScript",
          "Framer Motion",
        ],
        deliverables: [
          "Site completo responsivo",
          "Painel administrativo",
          "Integração com Google Analytics",
          "Otimização SEO",
          "Manual de uso",
          "Suporte por 3 meses",
        ],
        timeline: "15 a 30 dias",
        price: "A partir de R$ 2.500",
      },
    },
    {
      icon: Smartphone,
      title: "Aplicativos",
      description: "Conecte-se com seus clientes na palma da mão",
      features: [
        "iOS e Android",
        "Interface intuitiva",
        "Notificações inteligentes",
      ],
      color: "from-green-500 to-emerald-500",
      delay: 0.2,
      details: {
        process: [
          "Definição dos requisitos e funcionalidades",
          "Criação do protótipo interativo",
          "Desenvolvimento nativo ou híbrido",
          "Testes em dispositivos reais",
          "Publicação nas lojas oficiais",
        ],
        technologies: [
          "React Native",
          "Flutter",
          "Firebase",
          "Push Notifications",
          "APIs REST",
        ],
        deliverables: [
          "App para iOS e Android",
          "Painel de administração",
          "Sistema de notificações",
          "Analytics integrado",
          "Documentação técnica",
          "Suporte pós-lançamento",
        ],
        timeline: "45 a 90 dias",
        price: "A partir de R$ 8.000",
      },
    },
    {
      icon: Monitor,
      title: "Sistemas Empresariais",
      description: "Automatize e organize todos os processos da sua empresa",
      features: ["Gestão completa", "Relatórios avançados", "Integração total"],
      color: "from-purple-500 to-pink-500",
      delay: 0.4,
      details: {
        process: [
          "Levantamento dos processos atuais",
          "Modelagem do sistema personalizado",
          "Desenvolvimento e integrações",
          "Testes e validação com usuários",
          "Implantação e treinamento da equipe",
        ],
        technologies: [
          "Node.js",
          "PostgreSQL",
          "Redis",
          "Docker",
          "AWS",
          "Microserviços",
        ],
        deliverables: [
          "Sistema web completo",
          "Dashboard executivo",
          "Relatórios automatizados",
          "Integração com sistemas existentes",
          "Backup automatizado",
          "Suporte e manutenção",
        ],
        timeline: "90 a 180 dias",
        price: "A partir de R$ 15.000",
      },
    },
    {
      icon: ShoppingCart,
      title: "Lojas Virtuais",
      description: "Venda online 24/7 com segurança e facilidade",
      features: [
        "Pagamentos seguros",
        "Gestão de estoque",
        "Marketing integrado",
      ],
      color: "from-orange-500 to-red-500",
      delay: 0.6,
      details: {
        process: [
          "Planejamento da arquitetura do e-commerce",
          "Design focado em conversão",
          "Desenvolvimento com segurança",
          "Integração com gateways de pagamento",
          "Lançamento e estratégias de marketing",
        ],
        technologies: [
          "Shopify",
          "WooCommerce",
          "Stripe",
          "PayPal",
          "Google Shopping",
          "Facebook Ads",
        ],
        deliverables: [
          "Loja virtual completa",
          "Sistema de pagamentos",
          "Gestão de produtos e estoque",
          "Painel de vendas e relatórios",
          "SEO otimizado",
          "Integração com redes sociais",
        ],
        timeline: "30 a 60 dias",
        price: "A partir de R$ 5.000",
      },
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Text */}
      <motion.div
        {...motionVariants.fadeIn}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Transformamos suas ideias em realidade digital
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          Nossa equipe especializada desenvolve soluções completas para
          impulsionar o crescimento da sua empresa. Do planejamento ao
          lançamento, cuidamos de cada detalhe.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: service.delay }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
                       className="group relative cursor-pointer"
            onClick={() => {
              setSelectedService(service);
              setIsModalOpen(true);
            }}
          >
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 h-full relative overflow-hidden">
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: service.delay + 0.1 + featureIndex * 0.1,
                      }}
                      className="flex items-center text-gray-300"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Learn More */}
                <button
                  onClick={() => {
                    setSelectedService(service);
                    setIsModalOpen(true);
                  }}
                  className="flex items-center text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300 hover:text-blue-400"
                >
                  <span>Saiba mais</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Service Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </div>
  );
};
