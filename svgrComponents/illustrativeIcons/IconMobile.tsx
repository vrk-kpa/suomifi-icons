import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconMobile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M27 10c-2.206 0-4 1.794-4 4v52c0 2.206 1.794 4 4 4h26c2.206 0 4-1.794 4-4V14c0-2.206-1.794-4-4-4H27Zm26 62H27c-3.309 0-6-2.691-6-6V14c0-3.309 2.691-6 6-6h26c3.309 0 6 2.691 6 6v52c0 3.309-2.691 6-6 6Z"
        fill="#A5ADB1"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        d="M23 62h34V20H23v42Zm-2 2h38V18H21v46Z"
        fill="#A5ADB1"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        fill="#E97025"
        d="M38 68h4v-2h-4zM33 15h2v-2h-2zM37 15h10v-2H37z"
        className="fi-icon-illustrative-highlight-fill"
      />
      <path d="M0 0h80v80H0z" />
    </g>
  </svg>
);
export default SvgIconMobile;
