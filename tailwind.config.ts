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
      keyframes: {
        titleLoad: {
          '0%': { width: '0', left: '0' },
          '50%': { width: '100%', left: '0' },
          '100%': { width: '0', left: '100%' },
        },
        roleLoad: {
          '0%': { width: '0', left: '0' },
          '50%': { width: '100%', left: '0' },
          '100%': { width: '0', left: '100%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        secFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '.5' },
        },
        fadeLoader: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'load-title':
          'titleLoad 3.5s cubic-bezier(.41,.09,.11,.94) forwards',
        'load-role':
          'roleLoad 3.5s 2s cubic-bezier(.41,.09,.11,.94) forwards',
        'fadeIn-title': 'fadeIn 2s 1.6s forwards',
        'fadeIn-role': 'secFadeIn 2s 3.2s forwards',
        'fadeout-loader': 'fadeLoader 2s 6.2s forwards',
      },
    },
  },
  plugins: [],
};
export default config;
