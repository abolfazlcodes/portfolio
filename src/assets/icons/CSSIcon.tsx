import * as React from 'react';
import { SVGProps } from 'react';
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={21}
    viewBox='0 0 25 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g opacity={0.4} clipPath='url(#clip0_3256_813)'>
      <path
        d='M5.81158 3.28027L5.16158 6.62027H18.7516L18.3116 8.78027H4.73158L4.07158 12.1103H17.6616L16.9016 15.9203L11.4216 17.7303L6.67158 15.9203L7.00158 14.2803H3.66158L2.87158 18.2803L10.7216 21.2803L19.7716 18.2803L20.9716 12.2503L21.2116 11.0403L22.7516 3.28027H5.81158Z'
        fill='#607B96'
      />
    </g>
    <defs>
      <clipPath id='clip0_3256_813'>
        <rect
          width={24}
          height={24}
          fill='white'
          transform='translate(0.811523 0.280273)'
        />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;
