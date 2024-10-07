import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        fullbg: "#0a192f ",
        lightgreen: "#64ffda",
        article: "#8892b0",
      },
      fontFamily: {
        "ubuntu-mono": ['"Ubuntu Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
