import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconExpandableMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M23.25 0a.75.75 0 0 1 .75.75v22.5a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1-.75-.75V.75A.75.75 0 0 1 .75 0h22.5ZM22 2H2v20h20V2Zm-4.75 9c.414 0 .75.448.75 1s-.336 1-.75 1H6.75c-.414 0-.75-.448-.75-1s.336-1 .75-1h10.5Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconExpandableMinus;
