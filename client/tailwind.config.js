module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : { 
        'regal-blue' : '#0b1e40',
      },
      zIndex: {
        '-1': '-1',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      writingMode: {
        'vertical-rl': 'vertical-rl', // Da direita para a esquerda
        'writing-vertical-rl': 'vertical-lr', // Da esquerda para a direita
      },
    },
  },
  plugins: [],
}