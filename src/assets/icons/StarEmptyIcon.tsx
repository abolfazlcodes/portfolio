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
    <g clipPath='url(#clip0_64_2754)'>
      <path
        d='M9.06073 14.1795L3.77098 17.1405L4.95223 11.1945L0.500977 7.0785L6.52123 6.3645L9.06073 0.859497L11.6002 6.3645L17.6205 7.0785L13.1692 11.1945L14.3505 17.1405L9.06073 14.1795ZM9.06073 12.4605L12.246 14.2432L11.5342 10.6635L14.214 8.18475L10.5892 7.755L9.06073 4.44075L7.53223 7.75575L3.90748 8.18475L6.58723 10.6635L5.87548 14.2432L9.06073 12.4605Z'
        fill='#607B96'
      />
    </g>
    <defs>
      <clipPath id='clip0_64_2754'>
        <rect
          width={18}
          height={18}
          fill='white'
          transform='translate(0.0605469)'
        />
      </clipPath>
    </defs>
  </svg>
);
export default SVGComponent;
