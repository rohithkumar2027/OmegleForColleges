/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        surface: '#FFFFFF',
        primary: '#0D9488',
        primaryhover: '#0F766E',
        secondary: '#1E293B',
        'accent-mint': '#F0FDF4',
        'accent-lilac': '#F5F3FF',
        'accent-yellow': '#FEFCE8',
        'text-primary': '#1E293B',
        'text-secondary': '#64748B',
        'text-muted': '#94A3B8',
        border: '#E2E8F0',
        'border-dark': '#CBD5E1',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)',
        'soft-lg': '0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -1px rgba(0,0,0,0.04)',
        'soft-xl': '0 10px 15px -3px rgba(0,0,0,0.06), 0 4px 6px -2px rgba(0,0,0,0.04)',
        'soft-2xl': '0 25px 50px -12px rgba(0,0,0,0.15)',
      }
    },
  },
  plugins: [],
}
