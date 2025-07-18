import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Monitor,
  ShoppingCart,
  Zap,
  ArrowRight,
} from "lucide-react";
import { theme, motionVariants } from "@/lib/theme";

export const ConsultancySection = () => {
  const services = [
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
    },
    {
      icon: Monitor,
      title: "Sistemas Empresariais",
      description: "Automatize e organize todos os processos da sua empresa",
      features: ["Gestão completa", "Relatórios avançados", "Integração total"],
      color: "from-purple-500 to-pink-500",
      delay: 0.4,
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
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: service.delay }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="group relative"
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
                <div className="flex items-center text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                  <span>Saiba mais</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Process Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-8 md:p-12 border border-slate-700/50"
      >
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Como trabalhamos
          </h3>
          <p className="text-gray-300 text-lg">
            Um processo simples e transparente para garantir o sucesso do seu
            projeto
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Análise",
              description: "Entendemos suas necessidades e objetivos",
              icon: "🎯",
            },
            {
              step: "02",
              title: "Planejamento",
              description: "Criamos a estratégia ideal para seu projeto",
              icon: "📋",
            },
            {
              step: "03",
              title: "Desenvolvimento",
              description: "Construímos sua solução com qualidade",
              icon: "⚡",
            },
            {
              step: "04",
              title: "Entrega",
              description: "Lançamos e acompanhamos os resultados",
              icon: "🚀",
            },
          ].map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg">
                {process.icon}
              </div>
              <div className="text-blue-400 font-bold text-sm mb-2">
                ETAPA {process.step}
              </div>
              <h4 className="text-white font-semibold mb-2">{process.title}</h4>
              <p className="text-gray-400 text-sm">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        viewport={{ once: true }}
        className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 md:p-12 border border-blue-500/30"
      >
        <Zap className="h-16 w-16 text-blue-400 mx-auto mb-6" />
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Pronto para acelerar seu crescimento?
        </h3>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Cada dia sem uma presença digital forte é uma oportunidade perdida.
          Vamos construir juntos o futuro da sua empresa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <span className="text-blue-400 font-medium">
            ✓ Consultoria gratuita
          </span>
          <span className="text-green-400 font-medium">
            ✓ Orçamento sem compromisso
          </span>
          <span className="text-purple-400 font-medium">
            ✓ Suporte dedicado
          </span>
        </div>
      </motion.div>
    </div>
  );
};
