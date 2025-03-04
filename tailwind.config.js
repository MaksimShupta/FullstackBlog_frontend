/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DDEB9D", // Main color 
        secondary: "#A0C878", // Secondary color 
        accent: "#27667B", // Accent color 
        accent2: "#143D60", // Accent 2 color
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Set Roboto as the default sans-serif font
      },
    },
  },
  plugins: [import("daisyui")],
};
