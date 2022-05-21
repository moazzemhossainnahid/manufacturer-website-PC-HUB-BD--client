module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {     
        "primary": "#FF574B",
        "secondary": "#FF556B",
        "accent": "#1FB2A6", 
        "neutral": "#191D24",   
        "base-100": "#ffff",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
}
