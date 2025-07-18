import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Send,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { theme } from "@/lib/theme";

interface ContactFormProps {
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

export const ContactForm = ({ className = "" }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setStatus({
        type: "error",
        message: "Por favor, informe seu nome.",
      });
      return false;
    }

    if (!formData.email.trim()) {
      setStatus({
        type: "error",
        message: "Por favor, informe seu email.",
      });
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Por favor, informe um email válido.",
      });
      return false;
    }

    if (!formData.message.trim()) {
      setStatus({
        type: "error",
        message: "Por favor, escreva sua mensagem.",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus({
      type: "loading",
      message: "Enviando mensagem...",
    });

    try {
      // Simulate API call - replace with actual email service
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would integrate with your email service
      // Example: EmailJS, Nodemailer, SendGrid, etc.

      console.log("Form submitted:", formData);

      setStatus({
        type: "success",
        message: "Mensagem enviada com sucesso! Responderemos em breve.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Erro ao enviar mensagem. Tente novamente.",
      });
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`max-w-2xl mx-auto ${className}`}
    >
      <motion.div
        className="bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl"
        whileHover={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center mb-4">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
            >
              <Mail className="h-8 w-8 text-white" />
            </motion.div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Fale Conosco</h3>
          <p className="text-gray-300">
            Envie sua mensagem e nossa equipe entrará em contato em breve
          </p>
        </motion.div>

        {/* Status Message */}
        {status.type !== "idle" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
              status.type === "success"
                ? "bg-green-900/30 border border-green-500/30 text-green-400"
                : status.type === "error"
                  ? "bg-red-900/30 border border-red-500/30 text-red-400"
                  : "bg-blue-900/30 border border-blue-500/30 text-blue-400"
            }`}
          >
            {status.type === "success" && (
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
            )}
            {status.type === "error" && (
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
            )}
            {status.type === "loading" && (
              <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin flex-shrink-0" />
            )}
            <span className="text-sm font-medium">{status.message}</span>
          </motion.div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name Input */}
            <motion.div variants={inputVariants} whileFocus="focus">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <User className="h-4 w-4 inline mr-2" />
                Nome *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Seu nome completo"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div variants={inputVariants} whileFocus="focus">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <Mail className="h-4 w-4 inline mr-2" />
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="seu@email.com"
              />
            </motion.div>
          </div>

          {/* Subject Input */}
          <motion.div variants={inputVariants} whileFocus="focus">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Assunto
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Assunto da sua mensagem"
            />
          </motion.div>

          {/* Message Textarea */}
          <motion.div variants={inputVariants} whileFocus="focus">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              <MessageSquare className="h-4 w-4 inline mr-2" />
              Mensagem *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Conte-nos sobre seu projeto ou dúvida..."
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              type="submit"
              disabled={status.type === "loading"}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3"
            >
              {status.type === "loading" ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Enviando...</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>Enviar Mensagem</span>
                </>
              )}
            </Button>
          </motion.div>
        </form>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-6 border-t border-slate-700 text-center"
        >
          <p className="text-sm text-gray-400">
            Ou entre em contato diretamente:{" "}
            <a
              href="mailto:contato@inovatum.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              contato@inovatum.com
            </a>{" "}
            |{" "}
            <a
              href="tel:+5511999999999"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              (11) 99999-9999
            </a>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// WhatsApp Contact Button Component
export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre os serviços da Inovatum.",
    );
    const whatsappUrl = `https://wa.me/5511999999999?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-full group flex items-center justify-center space-x-3"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageSquare className="h-6 w-6" />
      <span>Falar no WhatsApp</span>
      <motion.div
        className="ml-2"
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        →
      </motion.div>
    </motion.button>
  );
};
