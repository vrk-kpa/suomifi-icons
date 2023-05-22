import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconMessages = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M5 56a1 1 0 0 1-1-1V23a1 1 0 0 1 1-1h46a1 1 0 0 1 1 1v3h-2v-2H6v30h2v2H5Z"
        fill="#A5ADB1"
        className="fi-icon-illustrative-base-fill"
      />
      <g fill="#E97025" className="fi-icon-illustrative-highlight-fill">
        <path d="M11 57h44V29H11v28Zm45 2H10a1 1 0 0 1-1-1V28a1 1 0 0 1 1-1h46a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1Z" />
        <path d="M33 50a.996.996 0 0 1-.674-.262l-23-21 1.348-1.476L33 47.646l22.326-20.384 1.348 1.476-23 21A.996.996 0 0 1 33 50M10.707 58.707l-1.414-1.414 13-13 1.414 1.414-13 13M55.293 58.707l-13-13 1.414-1.414 13 13-1.414 1.414" />
      </g>
      <g fill="#A5ADB1" className="fi-icon-illustrative-base-fill">
        <path d="M62 38h14v-2H62" />
        <path d="m71.293 34 3.292 3.293-3.292 3.293L72.707 42l4-4a1 1 0 0 0 0-1.414l-4-4L71.293 34M77 48H63v-2h14" />
        <path d="m67.707 44-3.292 3.293 3.292 3.293L66.293 52l-4-4a1 1 0 0 1 0-1.414l4-4L67.707 44" />
      </g>
      <g fill="#A5ADB1" className="fi-icon-illustrative-base-fill">
        <path d="M28 35h2v-2h-2zM32 35h2v-2h-2zM36 35h2v-2h-2z" />
      </g>
      <path d="M0 0h80v80H0z" />
    </g>
  </svg>
);
export default SvgIconMessages;
