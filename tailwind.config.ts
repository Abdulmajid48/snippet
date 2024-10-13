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
        name: "#ccd6f6",
      },
      fontFamily: {
        "ubuntu-mono": ['"Ubuntu Mono"', "monospace"],
        roboto: ["Roboto", "sans-serif"],
        sans: ["var(--font-roboto)", "sans-serif"],
      },
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "upper-roman",
        greek: "lower-greek",
      },
    },
  },
  plugins: [],
};
export default config;
