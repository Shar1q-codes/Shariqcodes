module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        wall: '#181924',
        glass: 'rgba(255,255,255,0.08)'
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        'radial-light-1': 'radial-gradient(circle at 20% 30%, #ff6ec4 0%, transparent 70%)',
        'radial-light-2': 'radial-gradient(circle at 80% 70%, #7873f5 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
}
