/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /bg-(yellow|green|red)-100/,
    },
  ],
  plugins: [require("daisyui")],
};
