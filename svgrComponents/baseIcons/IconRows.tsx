import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconRows = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="#222" fillRule="evenodd" className="fi-icon-base-fill">
      <path d="M2 4h20V2H2v2Zm21 2H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1ZM2 13h20v-2H2v2Zm21 2H1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1ZM2 22h20v-2H2v2Zm21 2H1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1Z" />
    </g>
  </svg>
);
export default SvgIconRows;
