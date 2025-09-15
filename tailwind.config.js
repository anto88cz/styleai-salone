module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        violet: "#8B5CF6",
        pink: "#EC4899",
        emerald: "#10B981",
        paper: "#F8FAFC",
        graphite: "#1E293B"
      },
      spacing: {
        tablet: "30rem"
      },
      animation: {
        "fade-in": "fade-in 0.7s ease"
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        }
      }
    }
  },
  plugins: []
};