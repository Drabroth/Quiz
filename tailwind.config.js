/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'nero': '#1D1A1A',
      },
      width: {
        '30': '15rem',
        '30.1': '20rem',
        '31': '30rem',
        '35': '42rem',
      },
      height: {
        '30': '15rem',
        '31': '32.5rem',
      },
      padding: {
        '2.2': '0.530rem',
      },
      margin: {
        '20.5': '5.20rem',
        '22.5': '12.40rem',
      },
      boxShadow: {
        "orange": "0 0.4rem 1.4rem 0 rgba(255, 165, 0, 0.8)",
        "blue": "0 0.4rem 1.4rem 0 rgba(0, 114, 244, 0.6)",
        "yellow": "0 0.4rem 1.4rem 0 rgba(255, 255, 0, 0.5)",
        "red": "0 0.4rem 1.4rem 0 rgba(255, 0, 0, 0.8)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

