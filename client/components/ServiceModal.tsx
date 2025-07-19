import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Star, Zap } from "lucide-react";

interface Service {
  title: string;
  description: string;
  features: string[];
  color: string;
  details: {
    process: string[];
    technologies: string[];
    deliverables: string[];
    timeline: string;
    price: string;
  };
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

export const ServiceModal = ({
  isOpen,
  onClose,
  service,
}: ServiceModalProps) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 sm:inset-8 md:inset-12 lg:inset-16 bg-slate-900 rounded-2xl border border-slate-700 z-50 overflow-hidden"
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className={`bg-gradient-to-r ${service.color} p-6 relative`}>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-white/90 text-lg">{service.description}</p>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Process */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Zap className="h-5 w-5 mr-2 text-blue-400" />
                        Nosso Processo
                      </h3>
                      <ul className="space-y-3">
                        {service.details.process.map((step, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + index * 0.1 }}
                            className="flex items-start text-gray-300"
                          >
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                              <span className="text-white text-xs font-bold">
                                {index + 1}
                              </span>
                            </div>
                            {step}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Star className="h-5 w-5 mr-2 text-yellow-400" />
                        Tecnologias
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.details.technologies.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + index * 0.05 }}
                            className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-sm border border-slate-700"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Deliverables */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-400" />O
                        que você recebe
                      </h3>
                      <ul className="space-y-3">
                        {service.details.deliverables.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="flex items-center text-gray-300"
                          >
                            <CheckCircle className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Timeline & Price */}
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">
                            Prazo de Entrega
                          </h4>
                          <p className="text-gray-300">
                            {service.details.timeline}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">
                            Investimento
                          </h4>
                          <p className="text-2xl font-bold text-blue-400">
                            {service.details.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 text-center"
                >
                  <button
                    className={`bg-gradient-to-r ${service.color} text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-transform duration-200 shadow-lg`}
                  >
                    Solicitar Orçamento Gratuito
                  </button>
                  <p className="text-gray-400 text-sm mt-3">
                    Resposta em até 24 horas • Sem compromisso
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
