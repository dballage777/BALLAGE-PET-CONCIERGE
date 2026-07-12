import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Deep evergreen — trust, calm, veterinary professionalism
        forest: {
          50: "#f2f6f4",
          100: "#dfe9e3",
          200: "#bcd3c6",
          300: "#8fb5a2",
          400: "#5f927c",
          500: "#3f7460",
          600: "#2d5c4b",
          700: "#264a3d",
          800: "#213c33",
          900: "#1c322b",
          950: "#0d1c17",
        },
        // Warm honey-amber accent — friendly, sunny, still premium
        gold: {
          50: "#fdf7ec",
          100: "#faebcb",
          200: "#f3d38f",
          300: "#ecb85a",
          400: "#e6a133",
          500: "#d98722",
          600: "#bd6a1b",
          700: "#9c4f1c",
          800: "#7f3f1d",
          900: "#68351b",
        },
        cream: "#fbf6ec",
        ink: "#1f2624",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px rgba(28, 50, 43, 0.08)",
        card: "0 2px 12px rgba(28, 50, 43, 0.06)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
