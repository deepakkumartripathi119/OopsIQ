import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0E85F2",
        secondary: "#006CD0",
        error: "#FB3737",
        success: "#19DB7E",
        dark: "#222222",
        medium: "#555555",
        light: "#fdfcff",
        sunny: "#faf8f0",
      },
      fontFamily: {
        sans: ["'Alan Sans'", 'sans-serif'],
        mono: ["'Roboto Mono'", 'monospace'],
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
