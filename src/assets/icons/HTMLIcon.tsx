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
    <g opacity={0.4} clipPath='url(#clip0_3256_876)'>
      <path
        d='M12.8115 18.3181L17.4315 17.0621L18.0545 10.2841H9.83752L9.63352 8.03014H18.2595L18.4865 5.81914H7.13652L7.77252 12.4971H15.5925L15.3315 15.3631L12.8115 16.0301L10.2915 15.3631L10.1335 13.5191H7.86352L8.19252 17.0631L12.8115 18.3181ZM3.81152 2.14014H21.8115L20.1885 20.1401L12.8115 22.1401L5.43452 20.1401L3.81152 2.14014Z'
        fill='#607B96'
      />
    </g>
    <defs>
      <clipPath id='clip0_3256_876'>
        <rect
          width={24}
          height={24}
          fill='white'
          transform='translate(0.811523 0.140137)'
        />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;
