import * as React from 'react';
import { SVGProps } from 'react';
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={19}
    height={19}
    viewBox='0 0 19 19'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_64_2763)'>
      <path
        d='M4.19676 15.1709C3.49928 14.4753 2.94616 13.6486 2.56917 12.7385C2.19218 11.8284 1.99875 10.8528 2.00001 9.86768C2.00001 5.72543 5.35776 2.36768 9.50001 2.36768C13.6423 2.36768 17 5.72543 17 9.86768C17 14.0099 13.6423 17.3677 9.50001 17.3677H2.00001L4.19676 15.1709ZM6.50001 10.6177C6.50001 11.4133 6.81608 12.1764 7.37869 12.739C7.94129 13.3016 8.70436 13.6177 9.50001 13.6177C10.2957 13.6177 11.0587 13.3016 11.6213 12.739C12.1839 12.1764 12.5 11.4133 12.5 10.6177H6.50001Z'
        fill='#607B96'
      />
    </g>
    <defs>
      <clipPath id='clip0_64_2763'>
        <rect
          width={18}
          height={18}
          fill='white'
          transform='translate(0.5 0.867676)'
        />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;
