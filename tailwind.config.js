/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        workSans: "Work Sans",
        inter: "Inter",
        PlusJakartaSans: "Plus Jakarta Sans"
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