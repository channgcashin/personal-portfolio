module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
		colors: {
		  primary: {
			DEFAULT: '#FFD700', // Gold
			light: '#FFECB3', // Light Gold
			dark: '#B8860B', // Dark Gold
		  },
		  secondary: {
			DEFAULT: '#1E293B', // Zinc-800
			light: '#334155', // Zinc-700
			dark: '#0F172A', // Zinc-900
		  },
		  accent: {
			DEFAULT: '#FACC15', // Yellow-500
			hover: '#F59E0B', // Yellow-400
			active: '#D97706', // Yellow-600
		  },
		  neutral: {
			DEFAULT: '#F3F4F6', // Gray-100
			dark: '#1F2937', // Gray-800
		  },
		},
		borderRadius: {
		  DEFAULT: '0.375rem', // Default rounded-md
		  lg: '0.5rem',
		  full: '9999px',
		},
	},
  },
  plugins: [require("tailwindcss-animate")],
}