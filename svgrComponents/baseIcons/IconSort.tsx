import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconSort = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#222"
      className="fi-icon-base-fill"
    >
      <path d="M7.293 15.293a1 1 0 0 1 1.414 0L12 18.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414ZM16.707 8.707a1 1 0 0 1-1.414 0L12 5.414 8.707 8.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414Z" />
    </g>
  </svg>
);
export default SvgIconSort;
