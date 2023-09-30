import * as React from 'react';
import { SVGProps } from 'react';
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={25}
    viewBox='0 0 24 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g opacity={0.4} clipPath='url(#clip0_64_2711)'>
      <path
        d='M3 3.65186H21C21.2652 3.65186 21.5196 3.75721 21.7071 3.94475C21.8946 4.13228 22 4.38664 22 4.65186V20.6519C22 20.9171 21.8946 21.1714 21.7071 21.359C21.5196 21.5465 21.2652 21.6519 21 21.6519H3C2.73478 21.6519 2.48043 21.5465 2.29289 21.359C2.10536 21.1714 2 20.9171 2 20.6519V4.65186C2 4.38664 2.10536 4.13228 2.29289 3.94475C2.48043 3.75721 2.73478 3.65186 3 3.65186ZM12 15.6519V17.6519H18V15.6519H12ZM8.414 12.6519L5.586 15.4799L7 16.8949L11.243 12.6519L7 8.40886L5.586 9.82386L8.414 12.6519Z'
        fill='#607B96'
      />
    </g>
    <defs>
      <clipPath id='clip0_64_2711'>
        <rect
          width={24}
          height={24}
          fill='white'
          transform='translate(0 0.651855)'
        />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;