import * as React from 'react';
import { SVGProps } from 'react';
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={19}
    height={18}
    viewBox='0 0 19 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_64_2751)'>
      <path
        d='M4.19676 14.3032C3.49928 13.6076 2.94616 12.7809 2.56917 11.8708C2.19218 10.9607 1.99875 9.9851 2.00001 9C2.00001 4.85775 5.35776 1.5 9.50001 1.5C13.6423 1.5 17 4.85775 17 9C17 13.1423 13.6423 16.5 9.50001 16.5H2.00001L4.19676 14.3032ZM6.50001 9.75C6.50001 10.5456 6.81608 11.3087 7.37869 11.8713C7.94129 12.4339 8.70436 12.75 9.50001 12.75C10.2957 12.75 11.0587 12.4339 11.6213 11.8713C12.1839 11.3087 12.5 10.5456 12.5 9.75H6.50001Z'
        fill='#607B96'
      />
    </g>
    <defs>
      <clipPath id='clip0_64_2751'>
        <rect
          width={18}
          height={18}
          fill='white'
          transform='translate(0.5)'
        />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;
