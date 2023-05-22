import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconCheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0Zm0 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Zm5.65 6.24a1 1 0 0 1 .11 1.41l-6 7a1 1 0 0 1-1.467.057l-3-3a1 1 0 0 1 1.414-1.414l2.237 2.236 5.297-6.18a1 1 0 0 1 1.41-.108Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconCheckCircle;
