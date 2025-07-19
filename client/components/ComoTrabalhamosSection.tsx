import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { theme, motionVariants } from "@/lib/theme";
import { TextReveal } from "./InnovativeAnimations";

export const ComoTrabalhamosSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className={theme.spacing.container.maxWidth}>
        <motion.div
          {...motionVariants.fadeIn}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <TextReveal
            text="Como trabalhamos"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
          />
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Um processo simples e transparente para garantir o sucesso do seu
            projeto
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-8 md:p-12 border border-slate-700/50"
        >
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
                transition={{ delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg">
                  {process.icon}
                </div>
                <div className="text-blue-400 font-bold text-sm mb-2">
                  ETAPA {process.step}
                </div>
                <h4 className="text-white font-semibold mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-400 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 md:p-12 border border-blue-500/30"
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
    </section>
  );
};
