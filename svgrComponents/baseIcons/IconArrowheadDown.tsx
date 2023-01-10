import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconArrowheadDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 10 10"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="#222"
      d="m5 8 4-6H1z"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconArrowheadDown;
