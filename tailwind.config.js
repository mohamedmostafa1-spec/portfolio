/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Design system theme tokens
        surface: {
          light: '#FFFFFF',
          'light-subtle': '#F8FAFC',
          dark: '#0B1120',
          'dark-subtle': '#111827',
        },
        content: {
          light: '#0F172A',
          'light-muted': '#475569',
          dark: '#F1F5F9',
          'dark-muted': '#94A3B8',
        },
        border: {
          light: '#E2E8F0',
          dark: '#1E293B',
        },
        accent: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          dark: '#60A5FA',
          'dark-hover': '#93C5FD',
          subtle: '#EFF6FF',
          'dark-subtle': 'rgba(37, 99, 235, 0.12)',
        },
      },
      borderRadius: {
        btn: '8px',
        card: '12px',
      },
      maxWidth: {
        container: '1100px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      lineHeight: {
        body: '1.6',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 8px 20px -4px rgba(0, 0, 0, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'card-hover-dark': '0 8px 20px -4px rgba(0, 0, 0, 0.35), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
