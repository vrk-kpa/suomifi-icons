import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconArrowheadUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 10 10"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="#222"
      d="M5 2 1 8h8z"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconArrowheadUp;
