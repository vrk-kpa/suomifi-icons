import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconFailure = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M40 44c.256 0 .512.098.707.293L47 50.586 50.586 47l-6.293-6.293a.999.999 0 0 1 0-1.414L50.586 33 47 29.414l-6.293 6.293a.999.999 0 0 1-1.414 0L33 29.414 29.414 33l6.293 6.293a.999.999 0 0 1 0 1.414L29.414 47 33 50.586l6.293-6.293A.997.997 0 0 1 40 44Zm7 9a.997.997 0 0 1-.707-.293L40 46.414l-6.293 6.293a.999.999 0 0 1-1.414 0l-5-5a.999.999 0 0 1 0-1.414L33.586 40l-6.293-6.293a.999.999 0 0 1 0-1.414l5-5a.999.999 0 0 1 1.414 0L40 33.586l6.293-6.293a.999.999 0 0 1 1.414 0l5 5a.999.999 0 0 1 0 1.414L46.414 40l6.293 6.293a.999.999 0 0 1 0 1.414l-5 5A.997.997 0 0 1 47 53Z"
        fill="#E97025"
        className="fi-icon-illustrative-highlight-fill"
      />
      <path
        fill="#A5ADB1"
        d="M39 66h2v-2h-2zM39 16h2v-2h-2zM14 41h2v-2h-2zM64 41h2v-2h-2z"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        d="M40 10c-16.542 0-30 13.458-30 30s13.458 30 30 30 30-13.458 30-30-13.458-30-30-30Zm0 62C22.355 72 8 57.645 8 40S22.355 8 40 8s32 14.355 32 32-14.355 32-32 32Z"
        fill="#A5ADB1"
        className="fi-icon-illustrative-base-fill"
      />
      <path d="M0 0h80v80H0z" />
    </g>
  </svg>
);
export default SvgIconFailure;
