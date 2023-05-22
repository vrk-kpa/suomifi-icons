import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M18.708 16.291a1 1 0 0 0-1.414 0L13 20.585V1a1 1 0 1 0-2 0v19.585l-4.293-4.294a1 1 0 0 0-1.414 1.414l5.999 6.001a1.001 1.001 0 0 0 1.416 0l5.999-6.001a.999.999 0 0 0 0-1.414"
      fill="#222"
      fillRule="nonzero"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconArrowDown;
