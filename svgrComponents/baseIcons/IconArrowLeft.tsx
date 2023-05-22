import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M22.999 11H3.413l4.293-4.293a.999.999 0 1 0-1.414-1.414l-6 6a1.001 1.001 0 0 0 0 1.416l6 5.998a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L3.413 13h19.586a1 1 0 0 0 0-2"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconArrowLeft;
