module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        DMSans: "'DM Sans', sans-serif",
      },
      keyframes: {
        dash: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        dashCheck: {
          '0%': { strokeDashoffset: '-100' },
          '100%': { strokeDashoffset: '900' },
        },
      },
    },
  },
  plugins: [],
};
