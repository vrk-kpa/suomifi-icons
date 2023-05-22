import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M12 0a1 1 0 0 1 1 1v10h10a1 1 0 0 1 0 2H13v10a1 1 0 0 1-2 0V13H1a1 1 0 0 1 0-2h10V1a1 1 0 0 1 1-1Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconPlus;
