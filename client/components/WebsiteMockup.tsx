import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { theme } from "@/lib/theme";

interface WebsiteMockupProps {
  show: boolean;
}

// Multiple website configurations
const websites = [
  {
    id: "inovatum",
    name: "Inovatum",
    url: "inovatum.com",
    theme: "slate",
    logo: "INOVATUM",
    tagline: "Transformação Digital Empresarial",
    description: "Soluções corporativas escaláveis",
    ctaText: "Contato",
    ctaColor: "bg-blue-600",
    services: [
      { icon: "🏢", title: "Enterprise", tech: "Cloud, DevOps" },
      { icon: "📊", title: "Analytics", tech: "BI, Data Science" },
      { icon: "🚀", title: "Automation", tech: "AI, ML, RPA" },
    ],
  },
  {
    id: "platform",
    name: "InovatumOS",
    url: "platform.inovatum.com",
    theme: "purple",
    logo: "INOVATUM.OS",
    tagline: "Plataforma Corporativa",
    description: "Sistema integrado de gestão",
    ctaText: "Demo",
    ctaColor: "bg-purple-600",
    services: [
      { icon: "🏗️", title: "Infrastructure", tech: "Kubernetes, AWS" },
      { icon: "🔒", title: "Security", tech: "Zero Trust, SOC" },
      { icon: "📈", title: "Growth", tech: "CRM, Sales Ops" },
    ],
  },
  {
    id: "suite",
    name: "Business Suite",
    url: "suite.inovatum.com",
    theme: "green",
    logo: "BUSINESS.SUITE",
    tagline: "Ecossistema Empresarial",
    description: "Ferramentas integradas",
    ctaText: "Acesso",
    ctaColor: "bg-green-600",
    services: [
      { icon: "💼", title: "ERP", tech: "SAP, Oracle" },
      { icon: "🤝", title: "CRM", tech: "Salesforce, HubSpot" },
      { icon: "📊", title: "BI", tech: "Power BI, Tableau" },
    ],
  },
  {
    id: "consulting",
    name: "Consulting",
    url: "consulting.inovatum.com",
    theme: "red",
    logo: "CONSULTING",
    tagline: "Consultoria Estratégica",
    description: "Transformação digital corporativa",
    ctaText: "Consultoria",
    ctaColor: "bg-red-600",
    services: [
      { icon: "🎯", title: "Strategy", tech: "Digital Transform" },
      { icon: "⚡", title: "Performance", tech: "Optimization" },
      { icon: "🔧", title: "Implementation", tech: "DevOps, Cloud" },
    ],
  },
  {
    id: "cloud",
    name: "CloudOps",
    url: "cloud.inovatum.com",
    theme: "cyan",
    logo: "CLOUD.OPS",
    tagline: "Infraestrutura em Nuvem",
    description: "Soluções escaláveis e seguras",
    ctaText: "Deploy",
    ctaColor: "bg-cyan-600",
    services: [
      { icon: "☁️", title: "Cloud Native", tech: "AWS, Azure, GCP" },
      { icon: "🛡️", title: "Security", tech: "WAF, IAM, SIEM" },
      { icon: "📡", title: "Monitoring", tech: "APM, Observability" },
    ],
  },
];

const getThemeColors = (theme: string) => {
  const themes = {
    slate: {
      header: "bg-slate-800",
      hero: "bg-gradient-to-r from-purple-500 to-blue-500",
      accent: "text-blue-600",
    },
    purple: {
      header: "bg-purple-800",
      hero: "bg-gradient-to-r from-purple-600 to-pink-500",
      accent: "text-purple-600",
    },
    green: {
      header: "bg-green-800",
      hero: "bg-gradient-to-r from-green-500 to-emerald-500",
      accent: "text-green-600",
    },
    red: {
      header: "bg-red-800",
      hero: "bg-gradient-to-r from-red-500 to-pink-500",
      accent: "text-red-600",
    },
    cyan: {
      header: "bg-cyan-800",
      hero: "bg-gradient-to-r from-cyan-500 to-blue-500",
      accent: "text-cyan-600",
    },
  };
  return themes[theme as keyof typeof themes] || themes.slate;
};

export const WebsiteMockup = ({ show }: WebsiteMockupProps) => {
  const [currentSite, setCurrentSite] = useState(0);
  const [elements, setElements] = useState<string[]>([]);

  // Detect mobile for performance optimization
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    if (show) {
      const delay = isMobile ? 500 : 1000; // Faster on mobile
      const timers = [
        setTimeout(() => setElements((prev) => [...prev, "header"]), delay),
        setTimeout(() => setElements((prev) => [...prev, "hero"]), delay * 1.5),
        setTimeout(
          () => setElements((prev) => [...prev, "content"]),
          delay * 2,
        ),
        setTimeout(
          () => setElements((prev) => [...prev, "footer"]),
          delay * 2.5,
        ),
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [show, isMobile]);

  // Auto rotate websites
  useEffect(() => {
    if (show && elements.length >= 4) {
      const rotationInterval = isMobile ? 6000 : 4000; // Slower rotation on mobile
      const interval = setInterval(() => {
        setCurrentSite((prev) => (prev + 1) % websites.length);
      }, rotationInterval);
      return () => clearInterval(interval);
    }
  }, [show, elements.length, isMobile]);

  if (!show) return null;

  const currentWebsite = websites[currentSite];
  const themeColors = getThemeColors(currentWebsite.theme);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-[461px] h-[230px] bg-white rounded-lg shadow-2xl overflow-hidden border-2 border-gray-200 relative"
    >
      {/* Browser Header */}
      <div className="h-6 bg-gray-100 flex items-center px-2 space-x-1 border-b">
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <div className="ml-2 text-xs text-gray-600 bg-white px-2 py-0.5 rounded flex-1 max-w-32">
          {currentWebsite.url}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSite}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: isMobile ? 0.3 : 0.5 }}
          className="h-full p-3 space-y-2"
        >
          {/* Header */}
          <AnimatePresence>
            {elements.includes("header") && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex justify-between items-center p-2 ${themeColors.header} rounded text-white`}
              >
                <div className="text-sm font-bold">{currentWebsite.logo}</div>
                <div className="flex space-x-2 text-xs">
                  <span>Platform</span>
                  <span>Solutions</span>
                  <span>Enterprise</span>
                  <span>Support</span>
                </div>
                <div
                  className={`w-14 h-4 ${currentWebsite.ctaColor} rounded text-[0.5rem] flex items-center justify-center text-white font-bold`}
                >
                  {currentWebsite.ctaText}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hero Section */}
          <AnimatePresence>
            {elements.includes("hero") && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="grid grid-cols-2 gap-3"
              >
                <div className="space-y-2">
                  <div className="text-sm font-bold text-gray-800">
                    {currentWebsite.tagline.split(" ").map((word, index) => (
                      <span
                        key={index}
                        className={
                          index === 1 ? themeColors.accent : "text-gray-800"
                        }
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </div>
                  <div className="text-[0.6rem] text-gray-600">
                    {currentWebsite.description}
                  </div>
                  <div
                    className={`w-16 h-3 ${currentWebsite.ctaColor} rounded text-[0.5rem] flex items-center justify-center text-white font-bold`}
                  >
                    {currentWebsite.ctaText}
                  </div>
                  <div className="flex -space-x-1">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 ${themeColors.hero} rounded-full border border-white text-[0.4rem] flex items-center justify-center text-white`}
                      >
                        {i + 1}
                      </div>
                    ))}
                    <span className="text-[0.5rem] text-gray-500 ml-2">
                      Enterprise clients
                    </span>
                  </div>
                </div>
                <div
                  className={`${themeColors.hero} rounded-lg p-2 relative opacity-90`}
                >
                  <div className="w-12 h-8 bg-white/20 rounded border border-white/30 mb-1">
                    <div className="w-full h-1.5 bg-white/30 rounded-t flex items-center px-1">
                      <div className="w-0.5 h-0.5 bg-red-400 rounded-full"></div>
                      <div className="w-0.5 h-0.5 bg-yellow-400 rounded-full ml-0.5"></div>
                      <div className="w-0.5 h-0.5 bg-green-400 rounded-full ml-0.5"></div>
                    </div>
                    <div className="p-1 space-y-0.5">
                      <div className="w-full h-0.5 bg-white/50 rounded"></div>
                      <div className="w-2/3 h-0.5 bg-white/40 rounded"></div>
                    </div>
                  </div>
                  <div className="w-6 h-10 bg-white/20 rounded-lg border border-white/30 absolute top-1 right-1">
                    <div className="w-full h-1 bg-white/30 rounded-t-lg"></div>
                    <div className="p-0.5 space-y-0.5">
                      <div className="w-full h-0.5 bg-white/50 rounded"></div>
                      <div className="w-2/3 h-0.5 bg-white/40 rounded"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Services */}
          <AnimatePresence>
            {elements.includes("content") && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-3 gap-1"
              >
                {currentWebsite.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 p-2 rounded text-center border"
                  >
                    <div className="text-sm">{service.icon}</div>
                    <div className="text-[0.5rem] text-gray-700 font-medium">
                      {service.title}
                    </div>
                    <div className="text-[0.4rem] text-gray-500">
                      {service.tech}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer */}
          <AnimatePresence>
            {elements.includes("footer") && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="h-4 bg-gray-800 rounded flex items-center justify-center"
              >
                <div className="text-[0.5rem] text-white">
                  © 2024 {currentWebsite.name} - Enterprise Solutions
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
