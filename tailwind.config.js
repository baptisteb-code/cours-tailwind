/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        public: ['"Public Sans"', 'sans-serif'],
      },
      fontSize: {
        // TAILWIND du menu : 40px, interligne 20px, lettres espacées de 4px
        logo: ['2.5rem', { lineHeight: '1.25rem', letterSpacing: '0.25rem' }],
        // My Catalogs : 24px, interligne 32px
        h3: ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.009rem' }],
      },
      spacing: {
        '7.5': '1.875rem',   // 30px
        '9.5': '2.375rem',   // 38px
        '18': '4.5rem',      // 72px
        '42.5': '10.625rem', // 170px
        '79.5': '19.875rem', // 318px
      },
      colors: {
        primary: '#463ADD',
        secondary: '#EEF1FF',
        accent: '#FF00FB',
        page: '#FCFDFF',
        ink: '#1E1F24',
        muted: '#81828C',
        badge: '#F9F9FB',
        line: {
          DEFAULT: '#F0F0F3',
          card: '#E7E8EC',
          strong: '#E0E1E6',
          badge: '#CDCED6',
        },
      },
    },
  },
  plugins: [],
}
