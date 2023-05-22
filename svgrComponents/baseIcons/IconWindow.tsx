import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 1c1.103 0 2 .897 2 2v18c0 1.102-.897 2-2 2H2c-1.103 0-2-.898-2-2V3c0-1.103.897-2 2-2h20Zm-.001 6H2v14h19.997l.002-14ZM22 3H2v2h20V3Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconWindow;
