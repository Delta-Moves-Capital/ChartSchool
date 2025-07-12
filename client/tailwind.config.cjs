/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',     // Blue-800
        secondary: '#9333ea',   // Purple-600
        accent: '#f59e0b'       // Amber-500
      },
      boxShadow: {
        'glow': '0 0 15px rgba(99, 102, 241, 0.7)'  // Custom glow effect
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 6s linear infinite'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
};
