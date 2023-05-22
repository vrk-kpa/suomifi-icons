import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#E97025"
        d="M48 32h18v-2H48zM48 36h18v-2H48z"
        className="fi-icon-illustrative-highlight-fill"
      />
      <path
        fill="#A5ADB1"
        d="M20 32h2v-2h-2zM24 32h2v-2h-2zM28 32h2v-2h-2z"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        d="M15.463 64H70V26H16v36a3.97 3.97 0 0 1-.537 2ZM72 66H12c-2.206 0-4-1.794-4-4V14h19.414l4 4H68v4h-2v-2H30.586l-4-4H10v46c0 1.103.897 2 2 2s2-.897 2-2V24h58v42Z"
        fill="#A5ADB1"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        fill="#A5ADB1"
        d="M20 60h46v-2H20z"
        className="fi-icon-illustrative-base-fill"
      />
    </g>
  </svg>
);
export default SvgIconFolder;
