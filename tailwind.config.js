/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primaryColor:"#FAE3B6",
        buttonHover:"#FDBB57",
        fashionColor:"#FEECC8",
        footerColor:"#CFA485",
        inactiveColor:"#C4C4C4"
      },

      backgroundImage: {
        sweater: "url('../../assets/newCollection3.png')",
        
      },
      fontFamily: {
        pop: ["Poppins"],
        frank:["'Frank Ruhl Libre', serif"],
        pod:["Podkova"],
       
    },
    width: {
      container: '1310px',
    }
    },
  },
  plugins: [],
}

