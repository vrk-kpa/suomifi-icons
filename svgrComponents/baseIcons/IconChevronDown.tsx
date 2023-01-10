import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M12.99 15.61c-.273.26-.632.39-.99.39s-.717-.13-.99-.39l-5.6-5.334a1.287 1.287 0 0 1 0-1.885 1.448 1.448 0 0 1 1.98 0l4.61 4.39 4.61-4.39a1.448 1.448 0 0 1 1.98 0c.547.52.547 1.365 0 1.885l-5.6 5.333Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconChevronDown;
