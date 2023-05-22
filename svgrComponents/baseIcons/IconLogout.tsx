import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconLogout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M1.999 24A2.001 2.001 0 0 1 0 22V2C0 .897.896 0 1.999 0H14C15.104 0 16 .897 16 2v5a1 1 0 0 1-1.999 0V2H2v20H14v-5A1 1 0 0 1 16 17v5c0 1.103-.896 2-1.999 2H2ZM19 17a.999.999 0 0 1-.707-1.707L20.587 13H7a1 1 0 0 1 0-2h13.587l-2.293-2.293a.999.999 0 1 1 1.414-1.414l4 4a.999.999 0 0 1 .216 1.09.999.999 0 0 1-.216.324l-4 4a.997.997 0 0 1-.707.293Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconLogout;
