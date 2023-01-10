import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconCatalog = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M62 70H18a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h11v2H19v56h42V12H51v-2h11a1 1 0 0 1 1 1v58a1 1 0 0 1-1 1"
        fill="#A5ADB1"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        fill="#E97025"
        d="M28 31h2v-2h-2zM28 26h2v-2h-2zM28 36h2v-2h-2zM28 41h2v-2h-2zM28 46h2v-2h-2zM28 51h2v-2h-2zM28 56h2v-2h-2zM32 31h20v-2H32zM32 26h20v-2H32z"
        className="fi-icon-illustrative-highlight-fill"
      />
      <path
        fill="#A5ADB1"
        d="M29 12h22v-2H29z"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        fill="#E97025"
        d="M32 36h20v-2H32zM32 41h20v-2H32zM32 46h20v-2H32zM32 51h20v-2H32zM32 56h20v-2H32z"
        className="fi-icon-illustrative-highlight-fill"
      />
      <path d="M0 0h80v80H0z" />
    </g>
  </svg>
);
export default SvgIconCatalog;
