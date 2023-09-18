/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'primary': '#F40404',
        'secondary': '#6C6C6C',
      },
      fontFamily: {
        'pops': ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        'container': '1144px',
      },
      backgroundImage: {
        'banner1': "url('https://i.ibb.co/hcV3Q6T/Untitled-design.png')",
        'section3': "url('https://i.ibb.co/x1v872y/Untitled-design-1.png')",
        'section4': "url('https://i.ibb.co/dgQvd0J/Untitled-design-2.png')",
        'section41': "url('https://i.ibb.co/TbmrDmC/Untitled-design-3.png')",
      }
  
    },
  },
  plugins: [],
}