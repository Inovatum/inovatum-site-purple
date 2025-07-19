"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react" // Import useRef
import { Terminal } from "lucide-react"

const codeLines = ["// Desenvolvendo seu Site", "// Desenvolvendo seu Aplicativo"]

// Refatorado useTypewriter para maior robustez no reset
const useTypewriter = (text: string, speed = 80) => {
  const [displayText, setDisplayText] = useState("")
  const currentIndexRef = useRef(0) // Usar ref para o índice
  const intervalRef = useRef<NodeJS.Timeout | null>(null) // Usar ref para o ID do intervalo

  useEffect(() => {
    // 1. Limpar qualquer intervalo existente para evitar vazamentos ou digitação duplicada
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // 2. Resetar o estado para a nova linha de texto
    setDisplayText("")
    currentIndexRef.current = 0

    // 3. Iniciar a digitação da nova linha, se houver texto
    if (text.length > 0) {
      intervalRef.current = setInterval(() => {
        setDisplayText((prev) => {
          const nextChar = text[currentIndexRef.current]
          if (nextChar === undefined) {
            // Se terminou de digitar a linha, limpar o intervalo
            if (intervalRef.current) clearInterval(intervalRef.current)
            return prev // Retorna o texto finalizado
          }
          currentIndexRef.current += 1 // Avança para o próximo caractere
          return prev + nextChar // Adiciona o próximo caractere
        })
      }, speed)
    }

    // Função de limpeza: garante que o intervalo seja limpo ao desmontar ou ao mudar a dependência 'text'
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [text, speed]) // Este efeito roda apenas quando 'text' ou 'speed' mudam

  return displayText
}

interface CodeAnimationProps {
  onProgress?: (progress: number) => void
}

export const CodeAnimation = ({ onProgress }: CodeAnimationProps) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const currentLineText = useTypewriter(codeLines[currentLineIndex] || "", 50)
  // Ref para controlar se a linha atual já foi adicionada
  const lineAddedRef = useRef(false)

  useEffect(() => {
    const progress = ((currentLineIndex + 1) / codeLines.length) * 100
    onProgress?.(progress)
  }, [currentLineIndex, onProgress, codeLines.length]) // Adicionado codeLines.length para completude

  useEffect(() => {
    const isFinished = currentLineText === codeLines[currentLineIndex]
    if (!isFinished) {
      lineAddedRef.current = false // Ainda digitando, resetar flag
      return
    }
    // Só adiciona se ainda não adicionou essa linha
    if (!lineAddedRef.current) {
      setDisplayedLines((prev) => [...prev, currentLineText])
      lineAddedRef.current = true
      if (currentLineIndex < codeLines.length - 1) {
        setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1)
        }, 200)
      }
    }
  }, [currentLineText, currentLineIndex, codeLines.length]) // Adicionado codeLines.length para completude

  const getSyntaxHighlight = (line: string) => {
    if (line.includes("//")) return "text-green-400"
    if (line.includes("const") || line.includes("return")) return "text-blue-400"
    if (line.includes("<") || line.includes(">")) return "text-red-400"
    if (line.includes("'") || line.includes('"')) return "text-yellow-400"
    return "text-gray-300"
  }

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
        <span className="text-gray-400 text-[0.6rem]">inovatum-platform.tsx</span>
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
        {/* Linha que está sendo digitada */}
        {currentLineIndex < codeLines.length && !lineAddedRef.current && (
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex">
            <span className="text-gray-600 mr-3 select-none w-5 text-right text-xs">
              {(displayedLines.length + 1).toString().padStart(2, "0")}
            </span>
            <span className={getSyntaxHighlight(currentLineText)}>
              {currentLineText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                className="text-blue-400 font-bold"
              >
                |
              </motion.span>
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
