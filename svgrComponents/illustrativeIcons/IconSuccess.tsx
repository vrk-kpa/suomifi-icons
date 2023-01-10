import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconSuccess = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M25.414 39 37 50.586 54.586 33 51 29.414 37.707 42.707a.999.999 0 0 1-1.414 0L29 35.414 25.414 39ZM37 53a.997.997 0 0 1-.707-.293l-13-13a.999.999 0 0 1 0-1.414l5-5a.999.999 0 0 1 1.414 0L37 40.586l13.293-13.293a.999.999 0 0 1 1.414 0l5 5a.999.999 0 0 1 0 1.414l-19 19A.997.997 0 0 1 37 53Z"
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
export default SvgIconSuccess;
