import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'game-board':
          'linear-gradient(150deg, rgba(23, 85, 83, 0.7), rgba(67, 217, 173, 0.09))',
      },
      height: {
        'full-dvh': '100dvh',
        18: '4.5rem',
      },
      screens: {
        md: '640px',
        lg: '950px',
      },
      fontSize: {
        '4.2': '4.2rem',
      },
      boxShadow: {
        'game-box-shadow':
          '0px 2px 0px 0px rgba(255, 255, 255, 0.3) inset',
      },
    },
  },
  plugins: [],
};
export default config;
