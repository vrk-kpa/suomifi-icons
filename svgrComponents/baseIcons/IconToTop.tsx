import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconToTop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="#212121">
      <path d="M11.293 10.293a1 1 0 0 1 1.414 0l6 6a1 1 0 1 1-1.414 1.414L12 12.414l-5.293 5.293a1 1 0 1 1-1.414-1.414l6-6ZM18.889 6c.613 0 1.11.448 1.111 1 0 .552-.498 1-1.111 1H5.11C4.498 8 4.001 7.552 4 7c0-.552.498-1 1.111-1H18.89Z" />
    </g>
  </svg>
);
export default SvgIconToTop;
