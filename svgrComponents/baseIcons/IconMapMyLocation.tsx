import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconMapMyLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M12 0a1 1 0 0 1 1 1v1.05c4.718.47 8.48 4.233 8.95 8.95H23a1 1 0 1 1 0 2h-1.05c-.47 4.717-4.233 8.48-8.95 8.95V23a1 1 0 1 1-2 0v-1.05c-4.717-.47-8.48-4.232-8.95-8.95H1a1 1 0 1 1 0-2h1.05C2.52 6.283 6.283 2.52 11 2.05V1a1 1 0 0 1 1-1Zm0 4c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8Zm0 3c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5Zm0 2c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconMapMyLocation;
