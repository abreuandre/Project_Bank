import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme"; // ⬅️ Importa as cores padrão

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        ...defaultTheme.colors, // ⬅️ Aqui você reintroduz as cores padrão, como `white`
        fill: {
          1: "rgba(255, 255, 255, 0.10)",
        },
        bankGradient: "#0179FE",
        // ... as outras cores personalizadas que você já tem
      },
      // ... restante da sua configuração
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;