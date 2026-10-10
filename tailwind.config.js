/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#07090e',
          surface: '#0d111a',
          surfaceHover: '#131926',
          card: '#0f1422',
          border: 'rgba(255, 255, 255, 0.08)',
          borderSubtle: 'rgba(255, 255, 255, 0.04)',
          borderActive: 'rgba(56, 189, 248, 0.4)',
          cyan: '#38bdf8',
          electric: '#0ea5e9',
          violet: '#818cf8',
          purple: '#a855f7',
          emerald: '#10b981',
          amber: '#f59e0b',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Cascadia Code',
          'monospace',
        ],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 4s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(30px)' },
          '100%': { opacity: '0.7', filter: 'blur(45px)' },
        },
      },
    },
  },
  plugins: [],
};
