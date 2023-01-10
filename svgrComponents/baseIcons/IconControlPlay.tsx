import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconControlPlay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0Zm0 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2ZM9.447 7.105l8 4a1.001 1.001 0 0 1 0 1.79l-8 4a.992.992 0 0 1-.973-.045A1 1 0 0 1 8 16V8a1.001 1.001 0 0 1 1.447-.895ZM10 9.618v4.764L14.764 12 10 9.618Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconControlPlay;
