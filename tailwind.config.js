// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/@heroui/theme/dist/components/(tabs|popover).js",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
};