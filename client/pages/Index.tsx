import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Code,
  Users,
  Zap,
  ArrowRight,
  Monitor,
  Smartphone,
  CheckCircle,
  Star,
  MessageCircle,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { theme, motionVariants } from "@/lib/theme";

// Import our components
import { CodeAnimation } from "@/components/CodeAnimation";
import { WebsiteMockup } from "@/components/WebsiteMockup";
import { MobileAppMockup } from "@/components/MobileAppMockup";
import { ContactForm, WhatsAppButton } from "@/components/ContactForm";
import {
  FloatingCodeParticles,
  MagneticButton,
  MorphingShapes,
  TextReveal,
  GlitchText,
  Card3D,
  SparkleEffect,
} from "@/components/InnovativeAnimations";
import { ConsultancySection } from "@/components/ConsultancySection";

export default function Index() {
  const [showWebsite, setShowWebsite] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const [codeProgress, setCodeProgress] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowWebsite(true), 2000);
    const timer2 = setTimeout(() => setShowMobile(true), 6000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleCodeProgress = (progress: number) => {
    setCodeProgress(progress);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <MorphingShapes />
      <FloatingCodeParticles />

      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection
        showWebsite={showWebsite}
        showMobile={showMobile}
        codeProgress={codeProgress}
        onCodeProgress={handleCodeProgress}
      />

      {/* Platform Section */}
      <PlatformSection />

      {/* Company Section */}
      <CompanySection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Header Component
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Soluções", href: "#solucoes" },
    { name: "Plataforma", href: "#plataforma" },
    { name: "Empresa", href: "#empresa" },
    { name: "Contato", href: "#contato" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className={theme.spacing.container.maxWidth}>
        <div className={`${theme.spacing.container.padding} py-4`}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              {...motionVariants.slideInLeft}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="h-4 w-4 md:h-6 md:w-6 text-white" />
              </div>
              <GlitchText
                text="Inovatum"
                className="text-lg md:text-xl font-bold"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-current transform transition duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transform transition duration-300 ${mobileMenuOpen ? "opacity-0" : "my-1"}`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transform transition duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pt-4 border-t border-slate-700"
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block py-3 text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
interface HeroSectionProps {
  showWebsite: boolean;
  showMobile: boolean;
  codeProgress: number;
  onCodeProgress: (progress: number) => void;
}

const HeroSection = ({
  showWebsite,
  showMobile,
  codeProgress,
  onCodeProgress,
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
      <div className={theme.spacing.container.maxWidth}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:pr-8 space-y-4 md:space-y-6 lg:space-y-8">
            <TextReveal
              text="Inovatum: Transformação Digital Empresarial"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            />

            <motion.p
              {...motionVariants.fadeIn}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              Somos uma startup de tecnologia especializada em soluções
              empresariais escaláveis. Nossa plataforma integrada acelera a
              transformação digital de empresas com IA, automação e cloud
              computing.
            </motion.p>

            <motion.div
              {...motionVariants.fadeIn}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <WhatsAppButton />
            </motion.div>
          </div>

          {/* Right Side - Enhanced Animation */}
          <div className="relative">
            <SparkleEffect className="absolute inset-0" />

            <div className="space-y-8">
              {/* Code Editor - NO PULSE RING */}
              <motion.div
                {...motionVariants.scaleIn}
                transition={{ delay: 0.5 }}
                className="relative"
              >
                <CodeAnimation onProgress={onCodeProgress} />
              </motion.div>

              {/* Devices with improved spacing */}
              <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-start gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{
                    opacity: showWebsite ? 1 : 0,
                    x: showWebsite ? 0 : -30,
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <Card3D>
                    <WebsiteMockup show={showWebsite} />
                  </Card3D>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{
                    opacity: showMobile ? 1 : 0,
                    x: showMobile ? 0 : 30,
                  }}
                  transition={{ duration: 0.8 }}
                >
                  <Card3D>
                    <MobileAppMockup show={showMobile} />
                  </Card3D>
                </motion.div>
              </div>

              {/* Status with enhanced animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: codeProgress > 80 ? 1 : 0, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 text-center relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative flex items-center justify-center space-x-3 text-green-400">
                  <CheckCircle className="h-6 w-6" />
                  <span className="font-mono text-lg font-semibold">
                    ✅ Sistema empresarial em produção! 🚀
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section Component - REMOVED 3D TILT, ONLY SCALE
const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "Plataforma Digital",
      description:
        "Soluções empresariais integradas com IA, automação e analytics em tempo real para acelerar sua transformação digital",
      features: ["Cloud-Native", "IA Integrada", "API-First"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "Apps Corporativos",
      description:
        "Aplicações mobile e web para equipes empresariais com foco em produtividade, colaboração e gestão de processos",
      features: ["React Native", "PWA", "Offline-First"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Automação Inteligente",
      description:
        "RPA, Machine Learning e integração de sistemas para otimizar operações e reduzir custos operacionais",
      features: ["RPA", "ML/AI", "Integrações"],
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="solucoes"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
    >
      <div className={theme.spacing.container.maxWidth}>
        <motion.div
          {...motionVariants.fadeIn}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <TextReveal
            text="Nossas Soluções Empresariais"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
          />
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Plataforma completa de transformação digital para empresas que
            buscam inovação, eficiência e crescimento escalável
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }} // ONLY SCALE, NO TILT
              className="group"
            >
              <Card className="bg-slate-800/90 backdrop-blur-sm border-slate-700 hover:border-blue-500/50 transition-all duration-300 h-full relative overflow-hidden">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                <CardContent className="p-8 relative">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.2 + featureIndex * 0.1,
                        }}
                        className="flex items-center text-blue-300"
                      >
                        <CheckCircle className="h-4 w-4 mr-3 text-green-500" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Platform Section Component - Elegant Consultancy
const PlatformSection = () => {
  return (
    <section
      id="plataforma"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
    >
      <div className={theme.spacing.container.maxWidth}>
        <motion.div
          {...motionVariants.fadeIn}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <TextReveal
            text="Nossa Consultoria"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
          />
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Desenvolvemos soluções digitais completas para impulsionar o
            crescimento da sua empresa
          </p>
        </motion.div>

        <ConsultancySection />
      </div>
    </section>
  );
};

// Company Section Component
const CompanySection = () => {
  const team = [
    {
      name: "Equipe Técnica",
      description: "4 desenvolvedores experientes",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Expertise",
      description: "10+ anos em transformação digital",
      icon: Star,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Missão",
      description: "Acelerar o crescimento empresarial",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="empresa"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
    >
      <div className={theme.spacing.container.maxWidth}>
        <motion.div
          {...motionVariants.fadeIn}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <TextReveal
            text="Sobre a Inovatum"
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
          />
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Startup de tecnologia focada em soluções empresariais inovadoras
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {team.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <item.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.name}
              </h3>
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...motionVariants.fadeIn}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Fundada com o propósito de democratizar a transformação digital, a
            Inovatum combina expertise técnica com visão estratégica para
            entregar soluções que realmente fazem a diferença no crescimento dos
            nossos clientes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section id="contato" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className={theme.spacing.container.maxWidth}>
        <motion.div
          {...motionVariants.fadeIn}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <TextReveal
            text="Pronto para transformar sua empresa?"
            className="text-3xl md:text-4xl font-bold mb-6"
          />
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Acelere sua transformação digital com nossas soluções empresariais.
            Solicite uma demo da nossa plataforma e veja como podemos
            impulsionar seu negócio.
          </p>
        </motion.div>

        <ContactForm />

        {/* Additional Contact Info */}
        <motion.div
          {...motionVariants.fadeIn}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-gray-400">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span>Demo em 24 horas</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
            <div className="flex items-center space-x-2 text-gray-400">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Consultoria gratuita</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Users className="h-5 w-5 text-blue-500" />
              <span>Suporte dedicado</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-800/50">
      <div className={theme.spacing.container.maxWidth}>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            {...motionVariants.fadeIn}
            className="flex items-center space-x-2 mb-4 md:mb-0"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold">Inovatum</span>
          </motion.div>

          <motion.div
            {...motionVariants.fadeIn}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-6 text-gray-400"
          >
            <MagneticButton className="hover:text-white transition-colors">
              contato@inovatum.com
            </MagneticButton>
            <MagneticButton className="hover:text-white transition-colors">
              +55 (11) 9999-9999
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          {...motionVariants.fadeIn}
          transition={{ delay: 0.4 }}
          className="mt-8 pt-8 border-t border-slate-700 text-center text-gray-400"
        >
          <p>
            © 2024 Inovatum. Todos os direitos reservados. Transformação
            digital empresarial.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
