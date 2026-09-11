import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        serif: ["var(--font-headline)", "Fraunces", "serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "monospace"],
      },
      colors: {
        ink: "hsl(var(--ink))",
        panel: "hsl(var(--panel))",
        "panel-2": "hsl(var(--panel-2))",
        paper: "hsl(var(--paper))",
        muted: "hsl(var(--muted))",
        "muted-dim": "hsl(var(--muted-dim))",
        gold: {
          DEFAULT: "hsl(var(--gold))",
          soft: "hsl(var(--gold-soft))",
        },
        teal: "hsl(var(--teal))",
        terracotta: {
          DEFAULT: "hsl(var(--terracotta))",
          soft: "hsl(var(--terracotta-soft))",
        },
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}

export default config;