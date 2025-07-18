import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Code, Zap, Rocket, Star, Sparkles } from "lucide-react";

// Floating Code Particles
export const FloatingCodeParticles = () => {
  const codeSnippets = ["</>", "{}", "[]", "();", "=>", "&&", "||", "++", "--"];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
          className="absolute text-blue-400/30 font-mono text-lg font-bold"
        >
          {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
        </motion.div>
      ))}
    </div>
  );
};

// Magnetic Button Effect
interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const MagneticButton = ({
  children,
  className = "",
  onClick,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const button = ref.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  };

  const handleMouseLeave = () => {
    const button = ref.current;
    if (!button) return;
    button.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.button
      ref={ref}
      className={`transition-transform duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

// Morphing Shapes Background
export const MorphingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${20 + i * 30}%`,
            top: `${10 + i * 25}%`,
          }}
          animate={{
            borderRadius: [
              "60% 40% 30% 70%",
              "30% 60% 70% 40%",
              "50% 50% 50% 50%",
              "60% 40% 30% 70%",
            ],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className={`w-32 h-32 opacity-10 ${
              i === 0
                ? "bg-gradient-to-r from-blue-500 to-purple-500"
                : i === 1
                  ? "bg-gradient-to-r from-purple-500 to-pink-500"
                  : "bg-gradient-to-r from-green-500 to-blue-500"
            }`}
            style={{
              borderRadius: "60% 40% 30% 70%",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Text Reveal Animation
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TextReveal = ({
  text,
  className = "",
  delay = 0,
}: TextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const words = text.split(" ");

  return (
    <motion.div ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.1,
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Glitch Effect
interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover="hover"
      initial="initial"
    >
      <motion.span
        variants={{
          initial: { x: 0 },
          hover: {
            x: [-1, 1, -1, 1, 0],
            transition: { duration: 0.3 },
          },
        }}
        className="relative z-10"
      >
        {text}
      </motion.span>
      <motion.span
        variants={{
          initial: { opacity: 0, x: 0 },
          hover: {
            opacity: [0, 0.7, 0],
            x: [0, -2, 2, 0],
            transition: { duration: 0.3 },
          },
        }}
        className="absolute top-0 left-0 text-red-500 z-0"
        style={{ textShadow: "2px 0 0 red" }}
      >
        {text}
      </motion.span>
      <motion.span
        variants={{
          initial: { opacity: 0, x: 0 },
          hover: {
            opacity: [0, 0.7, 0],
            x: [0, 2, -2, 0],
            transition: { duration: 0.3, delay: 0.1 },
          },
        }}
        className="absolute top-0 left-0 text-blue-500 z-0"
        style={{ textShadow: "-2px 0 0 blue" }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

// Loading DNA Animation
export const DNALoader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-12 h-16">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-blue-500 rounded-full"
            style={{
              left: `${Math.sin((i * Math.PI) / 4) * 20 + 20}px`,
              top: `${i * 2}px`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`right-${i}`}
            className="absolute w-3 h-3 bg-purple-500 rounded-full"
            style={{
              left: `${-Math.sin((i * Math.PI) / 4) * 20 + 20}px`,
              top: `${i * 2}px`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1 + 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// 3D Card Effect - REDUCED for startup look
interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export const Card3D = ({ children, className = "" }: Card3DProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // REDUCED rotation effect - was /10, now /25 for less tilt
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-out cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
};

// Sparkle Effect
interface SparkleProps {
  className?: string;
}

export const SparkleEffect = ({ className = "" }: SparkleProps) => {
  return (
    <div className={`relative ${className}`}>
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          <Sparkles className="h-4 w-4 text-yellow-400" />
        </motion.div>
      ))}
    </div>
  );
};
