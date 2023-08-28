import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconBold = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.066 22H6V12h6.876c.052.009.1.031.155.031 3.262 0 4.969 2.5 4.969 4.969 0 2.408-1.544 5-4.934 5M17 6c0 2.28-1.72 4-4 4H6V2h7.066C15.345 2 17 3.682 17 6m-.504 4.9C18.019 9.822 19 8.048 19 6c0-3.42-2.551-6-5.934-6H5a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h8.066C17.084 24 20 21.056 20 17c0-2.693-1.38-4.934-3.504-6.1"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconBold;
