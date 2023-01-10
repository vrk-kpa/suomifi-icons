import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M12.99 8.39A1.433 1.433 0 0 0 12 8c-.358 0-.717.13-.99.39l-5.6 5.334a1.287 1.287 0 0 0 0 1.885 1.448 1.448 0 0 0 1.98 0l4.61-4.39 4.61 4.39a1.448 1.448 0 0 0 1.98 0 1.287 1.287 0 0 0 0-1.885l-5.6-5.333Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconChevronUp;
