/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        psg: {
          red:    '#E03A3E',
          blue:   '#0075BF',
          green:  '#ADC32B',
          black:  '#1A1A1A',
          navy:   '#003060',
          light:  '#F0F7FD',
          border: '#D6E8F5',
        },
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'sans-serif',
        ],
      },
      fontSize: {
        'display': ['3.75rem', { lineHeight: '1.12', fontWeight: '700', letterSpacing: '-0.02em' }],
        'display-sm': ['2.75rem', { lineHeight: '1.15', fontWeight: '700', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0,0,0,.06), 0 1px 2px -1px rgba(0,0,0,.06)',
        'card-hover': '0 10px 30px -5px rgba(0,117,191,.15)',
        'section': '0 25px 50px -12px rgba(0,48,96,.10)',
      },
      backgroundImage: {
        'psg-gradient': 'linear-gradient(135deg, #003060 0%, #0075BF 100%)',
        'hero-gradient': 'linear-gradient(to right, rgba(0,48,96,0.95) 0%, rgba(0,117,191,0.85) 60%, rgba(0,117,191,0.5) 100%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
