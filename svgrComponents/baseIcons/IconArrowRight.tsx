import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M23.923 11.617a.999.999 0 0 0-.216-.325l-6-6a1 1 0 0 0-1.414 1.415l4.293 4.292H1a1 1 0 0 0 0 2h19.586l-4.293 4.293a.999.999 0 1 0 1.414 1.414l6-5.998a1.004 1.004 0 0 0 .216-1.09"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconArrowRight;
