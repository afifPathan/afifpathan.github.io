/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: 'var(--bg-base)',
          surface: 'var(--bg-surface)',
          surfaceElevated: 'var(--bg-surface-elevated)',
          border: 'var(--border-subtle)',
          borderHover: 'var(--border-glow)',
          text: 'var(--text-primary)',
          textMuted: 'var(--text-secondary)',
          textDim: 'var(--text-muted)',
        },
        primary: {
          DEFAULT: 'var(--primary, #5B8CFF)',
          hover: 'var(--primary-hover, #4A7BE8)',
          light: '#7DA4FF',
          glow: 'var(--border-glow, rgba(91, 140, 255, 0.25))',
        },
        accent: {
          cyan: 'var(--accent-cyan, #22D3EE)',
          violet: 'var(--accent-violet, #A78BFA)',
          amber: 'var(--highlight-amber, #F59E0B)',
        },
        brand: {
          bg: '#0A0B14',
          surface: '#111320',
          surfaceHover: '#171A2C',
          card: '#111320',
          border: 'rgba(255, 255, 255, 0.08)',
          borderSubtle: 'rgba(255, 255, 255, 0.04)',
          borderActive: 'rgba(91, 140, 255, 0.4)',
          cyan: '#22D3EE',
          electric: '#5B8CFF',
          violet: '#8B5CF6',
          purple: '#8B5CF6',
          emerald: '#10B981',
          amber: '#F59E0B',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #5B8CFF 0%, #8B5CF6 55%, #22D3EE 100%)',
        'glass-radial': 'radial-gradient(circle at 50% 0%, rgba(91, 140, 255, 0.12), transparent 70%)',
      },
      boxShadow: {
        glass: '0 20px 40px -15px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'glass-hover': '0 25px 50px -12px rgba(91, 140, 255, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.16)',
        'glow-primary': '0 0 35px -5px rgba(91, 140, 255, 0.35)',
        'glow-cyan': '0 0 35px -5px rgba(34, 211, 238, 0.35)',
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
