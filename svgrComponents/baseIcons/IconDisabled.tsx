import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconDisabled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M12 0c6.617 0 12 5.384 12 12 0 6.617-5.383 12-12 12S0 18.617 0 12C0 5.384 5.383 0 12 0ZM4.26 5.676A9.949 9.949 0 0 0 2 12c0 5.514 4.486 10 10 10 2.398 0 4.6-.85 6.325-2.261ZM12 2c-2.398 0-4.6.849-6.324 2.262l14.063 14.063A9.954 9.954 0 0 0 22 12C22 6.486 17.514 2 12 2Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconDisabled;
