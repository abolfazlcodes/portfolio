import * as React from 'react';
import { SVGProps } from 'react';
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={14}
    viewBox='0 0 17 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M0.811096 0.548828H15.4108C15.6259 0.548828 15.8322 0.634283 15.9844 0.786393C16.1365 0.938503 16.2219 1.14481 16.2219 1.35992V14.3375C16.2219 14.5526 16.1365 14.7589 15.9844 14.911C15.8322 15.0631 15.6259 15.1486 15.4108 15.1486H0.811096C0.59598 15.1486 0.389675 15.0631 0.237565 14.911C0.0854545 14.7589 0 14.5526 0 14.3375V1.35992C0 1.14481 0.0854545 0.938503 0.237565 0.786393C0.389675 0.634283 0.59598 0.548828 0.811096 0.548828ZM8.15963 7.59158L2.95888 3.17516L1.90851 4.41127L8.17017 9.728L14.3191 4.40721L13.2582 3.18002L8.16044 7.59158H8.15963Z'
      fill='#607B96'
    />
  </svg>
);
export default SVGComponent;
