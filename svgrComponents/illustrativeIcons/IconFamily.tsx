import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconFamily = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M40 10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4Zm0 10c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6Z"
        fill="#E97025"
        className="fi-icon-illustrative-highlight-fill"
      />
      <path
        fill="#A5ADB1"
        d="M58 72h2V54h-2zM59 18c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3Zm0 8c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5ZM54 72h-2V52h-2v-2h4v22"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        d="M66 72h-2V50h4V34c0-2.206-1.794-4-4-4H54v-2h10c3.309 0 6 2.691 6 6v18h-4v20"
        fill="#A5ADB1"
        className="fi-icon-illustrative-base-fill"
      />
      <g fill="#A5ADB1" className="fi-icon-illustrative-base-fill">
        <path d="M22 72h-2V60h2zM21 30c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3Zm0 8c2.757 0 5-2.243 5-5s-2.243-5-5-5-5 2.243-5 5 2.243 5 5 5ZM28 72V58h2v-2h-4v16" />
        <path d="M16 72V56h-4V46c0-2.206 1.794-4 4-4h10v-2H16c-3.309 0-6 2.691-6 6v12h4v14" />
      </g>
      <path
        d="M48 72h-2V46h4V29c0-2.757-2.243-5-5-5H35c-2.757 0-5 2.243-5 5v17h4v26h-2V48h-4V29c0-3.86 3.14-7 7-7h10c3.86 0 7 3.14 7 7v19h-4v24"
        fill="#E97025"
        className="fi-icon-illustrative-highlight-fill"
      />
      <path
        fill="#A5ADB1"
        d="M39 72h2V50h-2z"
        className="fi-icon-illustrative-base-fill"
      />
      <path d="M0 0h80v80H0z" />
    </g>
  </svg>
);
export default SvgIconFamily;
