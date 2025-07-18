import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CanvasConsultancyProps {
  className?: string;
}

export const CanvasConsultancy = ({
  className = "",
}: CanvasConsultancyProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentService, setCurrentService] = useState(0);

  const services = [
    {
      title: "Sites Corporativos",
      description: "Desenvolvemos sites modernos e responsivos",
      icon: "🌐",
      color: "#3B82F6",
      elements: [
        {
          type: "rect",
          x: 50,
          y: 50,
          width: 300,
          height: 200,
          color: "#3B82F6",
        },
        {
          type: "rect",
          x: 70,
          y: 70,
          width: 260,
          height: 30,
          color: "#1E40AF",
        },
        {
          type: "rect",
          x: 70,
          y: 120,
          width: 80,
          height: 80,
          color: "#60A5FA",
        },
        {
          type: "rect",
          x: 170,
          y: 120,
          width: 160,
          height: 20,
          color: "#93C5FD",
        },
        {
          type: "rect",
          x: 170,
          y: 150,
          width: 120,
          height: 15,
          color: "#DBEAFE",
        },
        {
          type: "rect",
          x: 170,
          y: 175,
          width: 140,
          height: 15,
          color: "#DBEAFE",
        },
      ],
    },
    {
      title: "Apps Mobile",
      description: "Aplicativos nativos e híbridos",
      icon: "📱",
      color: "#10B981",
      elements: [
        {
          type: "rounded-rect",
          x: 150,
          y: 50,
          width: 120,
          height: 200,
          color: "#10B981",
          radius: 20,
        },
        {
          type: "rect",
          x: 160,
          y: 70,
          width: 100,
          height: 15,
          color: "#047857",
        },
        {
          type: "rect",
          x: 160,
          y: 100,
          width: 30,
          height: 30,
          color: "#34D399",
        },
        {
          type: "rect",
          x: 200,
          y: 100,
          width: 60,
          height: 10,
          color: "#6EE7B7",
        },
        {
          type: "rect",
          x: 200,
          y: 120,
          width: 40,
          height: 8,
          color: "#A7F3D0",
        },
        {
          type: "rect",
          x: 160,
          y: 150,
          width: 100,
          height: 8,
          color: "#A7F3D0",
        },
        {
          type: "rect",
          x: 160,
          y: 170,
          width: 80,
          height: 8,
          color: "#A7F3D0",
        },
        {
          type: "rect",
          x: 160,
          y: 190,
          width: 100,
          height: 8,
          color: "#A7F3D0",
        },
      ],
    },
    {
      title: "Sistemas Web",
      description: "Plataformas e dashboards complexos",
      icon: "💻",
      color: "#8B5CF6",
      elements: [
        {
          type: "rect",
          x: 30,
          y: 40,
          width: 340,
          height: 220,
          color: "#8B5CF6",
        },
        {
          type: "rect",
          x: 50,
          y: 60,
          width: 60,
          height: 180,
          color: "#7C3AED",
        },
        {
          type: "rect",
          x: 130,
          y: 60,
          width: 220,
          height: 40,
          color: "#A78BFA",
        },
        {
          type: "rect",
          x: 130,
          y: 120,
          width: 100,
          height: 60,
          color: "#C4B5FD",
        },
        {
          type: "rect",
          x: 250,
          y: 120,
          width: 100,
          height: 60,
          color: "#DDD6FE",
        },
        {
          type: "rect",
          x: 130,
          y: 200,
          width: 220,
          height: 40,
          color: "#A78BFA",
        },
      ],
    },
    {
      title: "E-commerce",
      description: "Lojas virtuais completas",
      icon: "🛒",
      color: "#F59E0B",
      elements: [
        {
          type: "rect",
          x: 50,
          y: 50,
          width: 300,
          height: 200,
          color: "#F59E0B",
        },
        {
          type: "rect",
          x: 70,
          y: 70,
          width: 260,
          height: 30,
          color: "#D97706",
        },
        {
          type: "rect",
          x: 70,
          y: 120,
          width: 80,
          height: 80,
          color: "#FCD34D",
        },
        {
          type: "rect",
          x: 170,
          y: 120,
          width: 80,
          height: 80,
          color: "#FCD34D",
        },
        {
          type: "rect",
          x: 270,
          y: 120,
          width: 60,
          height: 80,
          color: "#FDE68A",
        },
        {
          type: "rect",
          x: 70,
          y: 220,
          width: 80,
          height: 20,
          color: "#FEF3C7",
        },
        {
          type: "rect",
          x: 170,
          y: 220,
          width: 80,
          height: 20,
          color: "#FEF3C7",
        },
      ],
    },
    {
      title: "Automação",
      description: "Integrações e workflows inteligentes",
      icon: "⚡",
      color: "#EF4444",
      elements: [
        { type: "circle", x: 100, y: 100, radius: 20, color: "#EF4444" },
        { type: "circle", x: 200, y: 80, radius: 15, color: "#F87171" },
        { type: "circle", x: 300, y: 120, radius: 18, color: "#FCA5A5" },
        { type: "circle", x: 150, y: 180, radius: 12, color: "#FECACA" },
        { type: "circle", x: 250, y: 200, radius: 16, color: "#FEE2E2" },
        { type: "line", x1: 120, y1: 100, x2: 185, y2: 80, color: "#DC2626" },
        { type: "line", x1: 215, y1: 80, x2: 282, y2: 120, color: "#DC2626" },
        { type: "line", x1: 120, y1: 115, x2: 138, y2: 168, color: "#DC2626" },
        { type: "line", x1: 162, y1: 180, x2: 234, y2: 200, color: "#DC2626" },
      ],
    },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = 400;
    canvas.height = 300;

    let animationProgress = 0;
    const targetProgress = 1;
    const animationSpeed = 0.02;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background
      ctx.fillStyle = "#1E293B";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const currentServiceData = services[currentService];
      const elementsToShow = Math.floor(
        animationProgress * currentServiceData.elements.length,
      );

      // Draw elements progressively
      currentServiceData.elements
        .slice(0, elementsToShow + 1)
        .forEach((element, index) => {
          const elementProgress = Math.min(
            1,
            Math.max(
              0,
              animationProgress * currentServiceData.elements.length - index,
            ),
          );

          ctx.save();
          ctx.globalAlpha = elementProgress;

          if (element.type === "rect") {
            ctx.fillStyle = element.color;
            const width = element.width * elementProgress;
            const height = element.height * elementProgress;
            ctx.fillRect(element.x, element.y, width, height);
          } else if (element.type === "rounded-rect") {
            ctx.fillStyle = element.color;
            const width = element.width * elementProgress;
            const height = element.height * elementProgress;
            const radius = (element as any).radius || 10;

            ctx.beginPath();
            ctx.roundRect(element.x, element.y, width, height, radius);
            ctx.fill();
          } else if (element.type === "circle") {
            ctx.fillStyle = element.color;
            const radius = (element as any).radius * elementProgress;
            ctx.beginPath();
            ctx.arc(
              (element as any).x,
              (element as any).y,
              radius,
              0,
              2 * Math.PI,
            );
            ctx.fill();
          } else if (element.type === "line") {
            ctx.strokeStyle = element.color;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo((element as any).x1, (element as any).y1);
            const x2 =
              (element as any).x1 +
              ((element as any).x2 - (element as any).x1) * elementProgress;
            const y2 =
              (element as any).y1 +
              ((element as any).y2 - (element as any).y1) * elementProgress;
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }

          ctx.restore();
        });

      // Progress animation
      if (animationProgress < targetProgress) {
        animationProgress += animationSpeed;
        requestAnimationFrame(animate);
      } else {
        // Reset animation after a pause
        setTimeout(() => {
          animationProgress = 0;
          requestAnimationFrame(animate);
        }, 1500);
      }
    };

    animate();

    // Cycle through services
    const serviceInterval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
      animationProgress = 0;
    }, 4000);

    return () => {
      clearInterval(serviceInterval);
    };
  }, [currentService]);

  return (
    <div className={`relative ${className}`}>
      <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Canvas Animation */}
          <div className="relative">
            <canvas
              ref={canvasRef}
              className="w-full h-auto max-w-[400px] mx-auto rounded-lg shadow-2xl border border-slate-600"
              style={{ aspectRatio: "4/3" }}
            />
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-2xl">{services[currentService].icon}</span>
            </div>
          </div>

          {/* Service Info */}
          <motion.div
            key={currentService}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {services[currentService].title}
              </h3>
              <p className="text-gray-300 text-lg">
                {services[currentService].description}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white">
                O que entregamos:
              </h4>
              <ul className="space-y-2">
                {[
                  "Design responsivo e moderno",
                  "Código limpo e otimizado",
                  "Integração com APIs",
                  "Testes e documentação",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Service Indicators */}
            <div className="flex space-x-2">
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentService
                      ? "bg-blue-500 scale-125"
                      : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-xl text-gray-300 mb-4">
            <strong className="text-white">Consultoria completa:</strong> Da
            ideia ao deploy
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400">
            <span className="px-3 py-1 bg-slate-700 rounded-full">
              Análise de Requisitos
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full">
              Arquitetura
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full">
              Desenvolvimento
            </span>
            <span className="px-3 py-1 bg-slate-700 rounded-full">
              Deploy & Manutenção
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
