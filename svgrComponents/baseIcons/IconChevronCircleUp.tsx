import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconChevronCircleUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0Zm0 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Zm-.707 6.293a.999.999 0 0 1 1.414 0l4 4a.999.999 0 1 1-1.414 1.414L12 10.414l-3.293 3.293a.999.999 0 1 1-1.414-1.414l4-4Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconChevronCircleUp;
