import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconSwapVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M17 0a1 1 0 0 1 1 1v19.586l2.293-2.293a.999.999 0 1 1 1.414 1.414l-4 3.999a.996.996 0 0 1-1.089.217 1.011 1.011 0 0 1-.326-.217l-3.999-3.999a.999.999 0 1 1 1.414-1.414L16 20.586V1a1 1 0 0 1 1-1ZM6.618.077a1.001 1.001 0 0 1 1.09.217l4 3.999a.999.999 0 1 1-1.415 1.414L8 3.414V23a1 1 0 0 1-2 0V3.414L3.707 5.707a.999.999 0 1 1-1.414-1.414l4-3.999a1 1 0 0 1 .325-.217Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconSwapVertical;
