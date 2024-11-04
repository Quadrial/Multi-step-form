const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "hsl(228, 45%, 44%)",
        Marineblue: "hsl(213, 96%, 18%)",
        Purplishblue: "hsl(243, 100%, 62%)",
        Pastelblue: "hsl(228, 100%, 84%)",
        Lightblue: "hsl(206, 94%, 87%)",
        Strawberryred: " hsl(354, 84%, 57%)",

        // ### Neutral

        Coolgray: "hsl(231, 11%, 63%)",
        Lightgray: "hsl(229, 24%, 87%)",
        Magnolia: "hsl(217, 100%, 97%)",
        Alabaster: "hsl(231, 100%, 99%)",
        White: "hsl(0, 0%, 100%)",
      },

      backgroundImage: {
        desktop: "url('/images/bg-sidebar-desktop.svg')",
        mobile: "url('/images/bg-sidebar-mobile.svg')",
      },

      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
});
