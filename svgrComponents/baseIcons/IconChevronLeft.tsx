import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M8.41 12.61a1.298 1.298 0 0 1-.41-.943c0-.342.137-.683.41-.943l5.6-5.333a1.448 1.448 0 0 1 1.98 0 1.287 1.287 0 0 1 0 1.885l-4.61 4.39 4.61 4.391a1.287 1.287 0 0 1 0 1.885 1.448 1.448 0 0 1-1.98 0l-5.6-5.333Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconChevronLeft;
