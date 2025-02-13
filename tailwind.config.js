/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Archivo: "Archivo",
        workSans: "Work Sans",
        inter: "Inter",
        PlusJakartaSans: "Plus Jakarta Sans",
        Poppins: "Poppins",
        SourceSerif: "Source Serif 4"
      },
      maxWidth: {
        pageMaxWidth: "1220px",
        maxScreen: "1800px"
      },
      backgroundImage: {
        heroImage: "url('../src/assets/imgs/heroImage.png')",
      },
      backgroundColor: {
        blueBackground: "#4B6BFB"
      }
    },
  },
  plugins: [],
}