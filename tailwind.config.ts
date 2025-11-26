import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
        "3xl": "1440px",
      },
    },
    extend: {
      colors: {
        background: "#050505",
        surface: "#0B0B0F",
        muted: "#1A1F2B",
        border: "#1F2937",
        primary: {
          DEFAULT: "#10B981",
          subtle: "#34D399",
          strong: "#059669",
          foreground: "#0B1113",
        },
        accent: {
          lime: "#A3E635",
          teal: "#2DD4BF",
          blue: "#38BDF8",
        },
        text: {
          DEFAULT: "#E5E7EB",
          muted: "#9CA3AF",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(16,185,129,0.25)",
        card: "0 20px 40px rgba(0,0,0,0.35)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(0deg, transparent 24%, rgba(52,211,153,0.06) 25%, rgba(52,211,153,0.06) 26%, transparent 27%, transparent 74%, rgba(52,211,153,0.06) 75%, rgba(52,211,153,0.06) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(52,211,153,0.06) 25%, rgba(52,211,153,0.06) 26%, transparent 27%, transparent 74%, rgba(52,211,153,0.06) 75%, rgba(52,211,153,0.06) 76%, transparent 77%, transparent)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
