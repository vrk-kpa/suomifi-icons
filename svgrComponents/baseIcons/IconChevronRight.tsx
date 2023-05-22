import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M15.61 11.01c.26.273.39.632.39.99s-.13.717-.39.99l-5.334 5.6a1.287 1.287 0 0 1-1.885 0 1.448 1.448 0 0 1 0-1.98l4.39-4.61-4.39-4.61a1.448 1.448 0 0 1 0-1.98 1.287 1.287 0 0 1 1.885 0l5.333 5.6Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconChevronRight;
