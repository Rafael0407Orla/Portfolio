/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandPrimary: "#00C0FD",
        brandSecondary: "#E70FAA",
        brandTertirary: "#42446E",
        brandText: "#666666",
        brandBlack: "#000000",
        brandSucess: "#018C0F",
        brandProcess: "#F08624",
        brandWhite: "#ffffff",
      },
    },
  },
  plugins: [],
};
