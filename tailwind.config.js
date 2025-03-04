/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DDEB9D", // Main color (dark green) for buttons and key UI elements
        secondary: "#A0C878", // Secondary color (light blue) for tags and subtle UI elements
        accent: "#27667B", // Accent color (yellow) for highlights and ratings
        bgSoft: "#143D60",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Set Roboto as the default sans-serif font
      },
    },
  },
  plugins: [import("daisyui")],
};
