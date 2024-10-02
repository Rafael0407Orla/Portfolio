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
      padding: {
        "custom-v": "24px",
        "custom-h": "16px",
        "custom-v-md": "32px",
        "custom-h-md": "24x",
        "custom-v-lg": "48px",
        "custom-h-lg": "32px",
      },
    },
  },
  plugins: [],
};
