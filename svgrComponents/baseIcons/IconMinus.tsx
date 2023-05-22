import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M1 13a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2H1Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconMinus;
