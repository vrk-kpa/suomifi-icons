import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconTrain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <g strokeLinejoin="round" strokeWidth={2}>
        <path
          d="M33 52.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 33 52.5ZM52 52.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 52 52.5Z"
          stroke="#A5ADB1"
          strokeLinecap="round"
          className="fi-icon-illustrative-base-stroke"
        />
        <path
          stroke="#A5ADB1"
          strokeLinecap="square"
          d="m51 61.517 8 5.715M22 67.231l8-5.715"
          className="fi-icon-illustrative-base-stroke"
        />
        <path
          d="M51.601 61H29.4C25.314 61 22 57.642 22 53.504V23.496C22 19.358 25.314 16 29.399 16H51.6C55.688 16 59 19.358 59 23.496v30.008C59 57.642 55.688 61 51.601 61ZM23 43.5h36M23 26.5h36"
          stroke="#E97025"
          strokeLinecap="round"
          className="fi-icon-illustrative-highlight-stroke"
        />
        <path
          stroke="#A5ADB1"
          strokeLinecap="square"
          d="M32 8.5h17"
          className="fi-icon-illustrative-base-stroke"
        />
      </g>
      <path d="M0 0h80v80H0z" />
    </g>
  </svg>
);
export default SvgIconTrain;
