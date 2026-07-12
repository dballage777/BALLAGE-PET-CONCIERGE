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
        // Warm gold accent — premium, boutique
        gold: {
          50: "#fbf7ee",
          100: "#f5ebd2",
          200: "#ead4a3",
          300: "#dfb96f",
          400: "#d5a047",
          500: "#c68a35",
          600: "#a86e2b",
          700: "#875527",
          800: "#6f4525",
          900: "#5e3a22",
        },
        cream: "#faf7f1",
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
