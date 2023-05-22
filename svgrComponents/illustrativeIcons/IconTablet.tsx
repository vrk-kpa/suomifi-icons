import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconTablet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#A5ADB1"
        d="M18 18h44v-2H18zM18 64h44v-2H18z"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        d="M23 10c-2.206 0-4 1.794-4 4v52c0 2.206 1.794 4 4 4h34c2.206 0 4-1.794 4-4V14c0-2.206-1.794-4-4-4H23Zm34 62H23c-3.309 0-6-2.691-6-6V14c0-3.309 2.691-6 6-6h34c3.309 0 6 2.691 6 6v52c0 3.309-2.691 6-6 6Z"
        fill="#A5ADB1"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        fill="#E97025"
        d="M34 14h12v-2H34zM38 68h4v-2h-4z"
        className="fi-icon-illustrative-highlight-fill"
      />
      <path d="M0 0h80v80H0z" />
    </g>
  </svg>
);
export default SvgIconTablet;
