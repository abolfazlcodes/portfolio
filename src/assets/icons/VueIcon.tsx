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
    <g clipPath='url(#clip0_3256_894)'>
      <path
        d='M1.81152 2.92041H5.81152L12.8115 14.9204L19.8115 2.92041H23.8115L12.8115 21.9204L1.81152 2.92041ZM10.4785 2.92041L12.8115 6.92041L15.1445 2.92041H19.1795L12.8115 13.9204L6.44352 2.92041H10.4785Z'
        fill='#607B96'
      />
    </g>
    <defs>
      <clipPath id='clip0_3256_894'>
        <rect
          width={24}
          height={24}
          fill='white'
          transform='translate(0.811523 0.42041)'
        />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;
