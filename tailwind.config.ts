import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg":"url('/img/hero-home.webp')",
      },
      content:{
        'logo-before':"url('/img/par-ici.webp')"
      },
      colors:{
        'primary':"#F05423",
        'secondary':"#0C2249",
        'dark-secondary':"#042b87"
      },
      container:{
        center:true,
        padding:{
        DEFAULT:"1rem",
        sm: '1rem',
        lg: '2rem',
        }
      }
    },
  },
  plugins: [],
};
export default config;
