import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconMessage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M21 3c1.654 0 3 1.346 3 3v12c0 1.654-1.346 3-3 3H3c-1.654 0-3-1.346-3-3V6c0-1.654 1.346-3 3-3Zm1 3.203-9.372 7.575a.996.996 0 0 1-1.256 0L2 6.203V18c0 .551.449 1 1 1h18c.551 0 1-.449 1-1V6.203ZM20.307 5H3.693L12 11.714 20.307 5Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconMessage;
