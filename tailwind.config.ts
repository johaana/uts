import type {Config} from 'tailwindcss';
import {fontFamily} from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
        headline: ['var(--font-headline)', 'serif'],
        display: ['var(--font-display)', 'serif'],
      },
      colors: {
        ink: 'hsl(var(--ink))',
        panel: 'hsl(var(--panel))',
        'panel-2': 'hsl(var(--panel-2))',
        paper: 'hsl(var(--paper))',
        gold: 'hsl(var(--gold))',
        'gold-soft': 'hsl(var(--gold-soft))',
        teal: 'hsl(var(--teal))',
        muted: 'hsl(var(--muted))',
        'muted-dim': 'hsl(var(--muted-dim))',
        terracotta: 'hsl(var(--terracotta))',
        'terracotta-soft': 'hsl(var(--terracotta-soft))',
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};

export default config;
