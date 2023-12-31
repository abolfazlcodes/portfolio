import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '38': 'repeat(38, minmax(0, 1fr))',
      },
      gridTemplateColumns: {
        '20': 'repeat(20, minmax(0, 1fr))',
      },
      backgroundImage: {
        'game-board':
          'linear-gradient(150deg, rgba(23, 85, 83, 0.7), rgba(67, 217, 173, 0.09))',
      },
      height: {
        'full-dvh': '100dvh',
        18: '4.5rem',
        106: '26rem',
      },
      width: {
        'full-dvw': '100dvw',
        112: '30rem',
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
        'game-panel':
          '1px 5px 11px 0px rgba(2, 18, 27, 0.71) inset',
        'game-canvas':
          '1px 5px 11px 0px rgba(2, 18, 27, 0.71) inset;',
        'game-over': '1px 5rem 11px 0px #02121b inset',
        'input-shadow':
          '0px 0px 0px 2px rgba(96, 123, 150, 0.30);',
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
          'titleLoad 3s cubic-bezier(.41,.09,.11,.94) forwards',
        'load-role':
          'roleLoad 3s 2s cubic-bezier(.41,.09,.11,.94) forwards',
        'fadeIn-title': 'fadeIn 2s 1.6s forwards',
        'fadeIn-role': 'secFadeIn 2s 3.2s forwards',
        'fadeout-loader': 'fadeLoader 2s 5s forwards',
      },
      flex: {
        '2': '2 2 0%',
      },
    },
  },
  plugins: [],
};
export default config;
