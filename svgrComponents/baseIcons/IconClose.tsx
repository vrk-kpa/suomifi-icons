import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M4.75 3.3 12 10.55l7.25-7.25a1.026 1.026 0 0 1 1.45 1.45L13.45 12l7.25 7.25a1.026 1.026 0 0 1-1.45 1.45L12 13.45 4.75 20.7a1.026 1.026 0 0 1-1.45-1.45L10.55 12 3.3 4.75A1.026 1.026 0 0 1 4.75 3.3Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconClose;
