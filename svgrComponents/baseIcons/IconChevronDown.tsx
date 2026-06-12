import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.707 8.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 1.414-1.414L12 13.586l5.293-5.293a1 1 0 0 1 1.414 0Z"
      fill="#212121"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconChevronDown;
