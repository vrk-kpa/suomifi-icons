import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.293 15.707a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0l6 6a1 1 0 1 1-1.414 1.414L12 10.414l-5.293 5.293a1 1 0 0 1-1.414 0Z"
      fill="#212121"
    />
  </svg>
);
export default SvgIconChevronUp;
