import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconArrowUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M12.707.294a.998.998 0 0 0-1.415 0l-6 6a1.001 1.001 0 0 0 1.415 1.414L11 3.415V23a1 1 0 1 0 2 0V3.415l4.293 4.293a1 1 0 1 0 1.415-1.414l-6-6Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconArrowUp;
