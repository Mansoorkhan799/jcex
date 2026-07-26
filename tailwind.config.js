/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FF6A00",
          dark: "#E55F00",
          soft: "#FFF4EB",
        },
        navy: {
          950: "#061530",
          900: "#0A2A5C",
          800: "#0D3A8A",
          700: "#1246B0",
          600: "#1A56C5",
          500: "#2B6DE0",
          100: "#E8EFFC",
          50: "#F3F6FC",
        },
        /* Keep teal aliases mapped to navy so legacy class names still work during migration */
        teal: {
          950: "#061530",
          900: "#0A2A5C",
          800: "#0D3A8A",
          700: "#1246B0",
          600: "#1A56C5",
          500: "#2B6DE0",
          100: "#E8EFFC",
        },
        coral: {
          DEFAULT: "#FF6A00",
          dark: "#E55F00",
        },
        ink: {
          DEFAULT: "#0B1220",
          soft: "#334155",
          mute: "#64748B",
        },
        paper: {
          DEFAULT: "#F5F7FB",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(10, 42, 92, 0.28)",
        lift: "0 18px 50px -18px rgba(11, 18, 32, 0.3)",
      },
    },
  },
  plugins: [],
};
