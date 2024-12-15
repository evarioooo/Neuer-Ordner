/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./tpl/evarioo.php"],
  theme: {
    extend: {
      colors: {
        primary: "#0f131a",
        primarylight: "#161b22",
        midnightblue: "#0b2d4e",
        borderprimary: "#31353b",
      },
    },
  },
  plugins: [],
};
