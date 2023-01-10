import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconLaptop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M13.414 61h53.172L70 57.586V57H47.414l-2 2H34.586l-2-2H10v.586L13.414 61Zm54 2H12.586L8 58.414V55h25.414l2 2h9.172l2-2H72v3.414L67.414 63ZM68 53h-2V21c0-1.103-.897-2-2-2H16c-1.103 0-2 .897-2 2v32h-2V21c0-2.206 1.794-4 4-4h48c2.206 0 4 1.794 4 4v32"
        fill="#A5ADB1"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        fill="#E97025"
        d="M35 51h2v-2h-2zM31 51h2v-2h-2zM39 51h2v-2h-2zM43 51h2v-2h-2zM47 51h2v-2h-2z"
        className="fi-icon-illustrative-highlight-fill"
      />
      <path
        fill="#A5ADB1"
        d="M64 51H51v-2h11V23H18v26h11v2H16V21h48v30"
        className="fi-icon-illustrative-base-fill"
      />
    </g>
  </svg>
);
export default SvgIconLaptop;
