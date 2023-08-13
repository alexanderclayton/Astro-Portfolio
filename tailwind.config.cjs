/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#8fb3ff",
        "primary-purple": "#690f9a",
        "secondary-blue": "#002761",
        "secondary-purple": "#b854ee",

        "light-blue": "#e5eeff",
      },
      gridTemplateColumns: {
        // 15 column grid
        15: "repeat(15, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
