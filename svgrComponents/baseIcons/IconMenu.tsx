import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M23 18a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h22Zm0-7a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h22Zm0-7a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2h22Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconMenu;
