// Theme configuration for Inovatum website
// This file centralizes all styling configuration for easy maintenance

export const theme = {
  colors: {
    // Primary brand colors
    primary: {
      blue: "#3B82F6",
      purple: "#8B5CF6",
      green: "#10B981",
      orange: "#F59E0B",
      red: "#EF4444",
    },

    // Background colors
    background: {
      dark: "#0F172A", // slate-900
      darker: "#020617", // slate-950
      light: "#1E293B", // slate-800
      card: "#334155", // slate-700
    },

    // Text colors
    text: {
      primary: "#FFFFFF",
      secondary: "#CBD5E1", // slate-300
      muted: "#64748B", // slate-500
      accent: "#3B82F6",
    },

    // Interactive elements
    interactive: {
      hover: "#2563EB", // blue-600
      active: "#1D4ED8", // blue-700
      border: "#475569", // slate-600
      success: "#10B981", // emerald-500
      warning: "#F59E0B", // amber-500
      error: "#EF4444", // red-500
    },

    // Gradients
    gradients: {
      primary: "from-blue-500 to-purple-600",
      secondary: "from-purple-500 to-pink-500",
      success: "from-green-500 to-emerald-600",
      hero: "from-slate-900 via-purple-900 to-slate-900",
      card: "from-blue-500/10 to-purple-600/10",
    },
  },

  // Typography
  typography: {
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      mono: ["Fira Code", "Monaco", "monospace"],
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "3.75rem", // 60px
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
    },
  },

  // Spacing and sizing
  spacing: {
    section: {
      padding: "py-20 px-4 sm:px-6 lg:px-8",
      margin: "mb-16",
    },
    container: {
      maxWidth: "max-w-7xl mx-auto",
      padding: "px-4 sm:px-6 lg:px-8",
    },
    card: {
      padding: "p-8",
      margin: "mb-8",
      gap: "gap-8",
    },
  },

  // Animations and transitions
  animation: {
    duration: {
      fast: "0.15s",
      normal: "0.3s",
      slow: "0.5s",
      slower: "0.8s",
    },
    easing: {
      easeOut: "cubic-bezier(0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    scale: {
      hover: 1.05,
      active: 0.95,
      focus: 1.02,
    },
  },

  // Component-specific styles
  components: {
    button: {
      primary:
        "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300",
      secondary:
        "bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold rounded-full transition-all duration-300",
      success:
        "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-full transition-all duration-300",
    },
    card: {
      default:
        "bg-slate-800 border border-slate-700 hover:border-blue-500/50 rounded-xl shadow-xl transition-all duration-300",
      elevated:
        "bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-xl shadow-2xl",
      glass: "bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl",
    },
    input: {
      default:
        "bg-slate-800 border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200",
    },
  },

  // Mockup specific configurations
  mockups: {
    sizes: {
      // Increased by 10% as requested
      website: {
        width: "w-88", // was w-80, now ~10% larger
        height: "h-57", // was h-52, now ~10% larger
      },
      mobile: {
        width: "w-40", // was w-36, now ~10% larger
        height: "h-72", // was h-64, now ~10% larger
      },
    },
    colors: {
      apps: {
        taskflow: "#3B82F6",
        techstore: "#3178C6",
        analytics: "#10B981",
        chat: "#F59E0B",
      },
      websites: {
        inovatum: "#1E293B",
        ecommerce: "#7C3AED",
        portfolio: "#059669",
        blog: "#DC2626",
        saas: "#0891B2",
      },
    },
  },

  // Breakpoints for responsive design
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
};

// Helper functions for theme usage
export const getGradient = (name: keyof typeof theme.colors.gradients) => {
  return `bg-gradient-to-r ${theme.colors.gradients[name]}`;
};

export const getButtonStyle = (
  variant: keyof typeof theme.components.button,
) => {
  return theme.components.button[variant];
};

export const getCardStyle = (variant: keyof typeof theme.components.card) => {
  return theme.components.card[variant];
};

// Animation variants for Framer Motion
export const motionVariants = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },

  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },

  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },

  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 },
  },

  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

export default theme;
