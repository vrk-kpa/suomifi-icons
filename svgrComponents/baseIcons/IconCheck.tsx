import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M19.447 5.384 8 17.42a1.82 1.82 0 0 1-2.667 0L.552 12.394a2.059 2.059 0 0 1 0-2.805 1.822 1.822 0 0 1 2.666 0l3.449 3.625L16.78 2.581a1.82 1.82 0 0 1 2.666 0 2.053 2.053 0 0 1 0 2.803"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconCheck;
