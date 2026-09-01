/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a0e1a',
          800: '#0d1225',
          700: '#111833',
          600: '#162041',
        },
        blue: {
          400: '#4a9eff',
          500: '#2d7bff',
          600: '#1a5fd9',
          700: '#0f4ab8',
        },
        purple: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        green: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
        red: {
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
        },
        yellow: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
        gray: {
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
        }
      },
    },
  },
  plugins: [],
}
