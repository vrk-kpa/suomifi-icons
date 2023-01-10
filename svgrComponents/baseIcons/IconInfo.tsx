import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconInfo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0Zm0 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Zm.003 8a1 1 0 0 1 1 1v6h1a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2h1v-5h-1a1 1 0 0 1 0-2h2.003Zm-.501-5a1.5 1.5 0 0 1 .145 2.994L11.502 8H11.5a1.5 1.5 0 1 1 0-3h.002Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconInfo;
