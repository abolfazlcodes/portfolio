import * as React from 'react';
import { SVGProps } from 'react';
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    viewBox='0 0 19 19'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_64_2766)'>
      <path
        d='M9.06073 14.5627L3.77098 17.5237L4.95223 11.5777L0.500977 7.46168L6.52123 6.74768L9.06073 1.24268L11.6002 6.74768L17.6205 7.46168L13.1692 11.5777L14.3505 17.5237L9.06073 14.5627Z'
        fill='#607B96'
      />
    </g>
    <defs>
      <clipPath id='clip0_64_2766'>
        <rect
          width={18}
          height={18}
          fill='white'
          transform='translate(0.0605469 0.867676)'
        />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;
