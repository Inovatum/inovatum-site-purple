import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";
import { theme } from "@/lib/theme";

// Code snippets that will be "typed"
const codeLines = [
  "// Desenvolvendo seu Site",
  "// Desenvolvendo seu Aplicativo",
];

// Simple typewriter hook
const useTypewriter = (text: string, speed = 80) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return displayText;
};

interface CodeAnimationProps {
  onProgress?: (progress: number) => void;
}

export const CodeAnimation = ({ onProgress }: CodeAnimationProps) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const currentLineText = useTypewriter(codeLines[currentLineIndex] || "", 50);

  useEffect(() => {
    const progress = ((currentLineIndex + 1) / codeLines.length) * 100;
    onProgress?.(progress);
  }, [currentLineIndex, onProgress]);

  useEffect(() => {
    if (
      currentLineText === codeLines[currentLineIndex] &&
      currentLineIndex < codeLines.length - 1
    ) {
      setTimeout(() => {
        setDisplayedLines((prev) => [...prev, currentLineText]);
        setCurrentLineIndex((prev) => prev + 1);
      }, 200);
    } else if (
      currentLineIndex === codeLines.length - 1 &&
      currentLineText === codeLines[currentLineIndex]
    ) {
      setDisplayedLines((prev) => [...prev, currentLineText]);
    }
  }, [currentLineText, currentLineIndex]);

  const getSyntaxHighlight = (line: string) => {
    if (line.includes("//")) return "text-green-400";
    if (line.includes("const") || line.includes("return"))
      return "text-blue-400";
    if (line.includes("<") || line.includes(">")) return "text-red-400";
    if (line.includes("'") || line.includes('"')) return "text-yellow-400";
    return "text-gray-300";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="bg-gray-900 rounded-lg p-3 font-mono text-sm w-[484px] shadow-2xl border border-slate-700 mx-auto"
      style={{ minHeight: "100px" }}
    >
      {/* Terminal Header */}
      <div className="flex items-center mb-2 space-x-1">
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <Terminal className="h-3 w-3 text-gray-400 ml-1" />
        <span className="text-gray-400 text-[0.6rem]">
          inovatum-platform.tsx
        </span>
      </div>

      {/* Code Lines */}
      <div className="space-y-1 overflow-hidden">
        {displayedLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex"
          >
            <span className="text-gray-600 mr-3 select-none w-5 text-right text-xs">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <span className={getSyntaxHighlight(line)}>{line}</span>
          </motion.div>
        ))}

        {currentLineIndex < codeLines.length && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex"
          >
            <span className="text-gray-600 mr-3 select-none w-5 text-right text-xs">
              {(displayedLines.length + 1).toString().padStart(2, "0")}
            </span>
            <span className={getSyntaxHighlight(currentLineText)}>
              {currentLineText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-blue-400 font-bold"
              >
                |
              </motion.span>
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};
