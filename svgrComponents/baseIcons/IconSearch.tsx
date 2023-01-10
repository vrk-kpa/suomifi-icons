import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M9 0c4.962 0 9 4.038 9 9.001a8.955 8.955 0 0 1-1.971 5.614l7.678 7.678a.999.999 0 1 1-1.414 1.414l-7.678-7.678A8.957 8.957 0 0 1 9 18c-4.962 0-9-4.037-9-8.999C0 4.038 4.038 0 9 0Zm0 2C5.14 2 2 5.141 2 9.001 2 12.86 5.14 16 9 16s7-3.14 7-6.999C16 5.141 12.86 2 9 2Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconSearch;
