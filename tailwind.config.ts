import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        foreground: 'rgb(var(--foreground-rgb))',
        background: {
          start: 'rgb(var(--background-start-rgb))',
          end: 'rgb(var(--background-end-rgb))',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      ringColor: {
        'indigo': {
          500: '#6366f1',
        },
      },
    },
  },
  plugins: [],
}

export default config
