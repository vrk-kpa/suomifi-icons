import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconChild = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M67 72h-2V59c0-6.624-6.464-9.767-10.316-11.051a1.002 1.002 0 0 1-.131-.054l-6-3C47.991 44.644 45 43.193 45 41v-4h2v4c0 .649 1.424 1.646 2.409 2.087l5.975 2.987C62.768 48.555 67 53.264 67 59v13M15 72h-2V59c0-5.736 4.232-10.445 11.616-12.926l5.937-2.969C31.729 42.574 33 41.589 33 41v-4h2v4c0 2.193-2.991 3.644-3.591 3.913l-5.962 2.982a1.002 1.002 0 0 1-.131.054C21.464 49.233 15 52.376 15 59v13M23 72h2v-8h-2zM55 72h2v-8h-2z"
        fill="#A5ADB1"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        d="M53 59v8l-4 1-4-1v-8h8Zm-2 2h-4l.002 4.5L49 66l2-.5V61Z"
        fill="#E97025"
        className="fi-icon-illustrative-highlight-fill"
      />
      <path
        d="M30.009 23.646C30.167 29.269 32.404 38 40 38c7.499 0 9.774-8.508 9.983-14.136-2.625-.402-8.492-1.503-12.055-3.738l-7.919 3.52ZM40 40c-8.289 0-12-8.538-12-17a1 1 0 0 1 .594-.914l7.581-3.369C35.439 17.922 35 17.02 35 16h2c0 2.845 8.264 5.227 14.132 6.009A1 1 0 0 1 52 23c0 8.462-3.711 17-12 17Z"
        fill="#A5ADB1"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        d="m51.707 26.707-1.414-1.414L52 23.586V19c0-4.962-4.037-9-9-9h-6c-4.963 0-9 4.038-9 9v4.586l1.707 1.707-1.414 1.414-2-2A.997.997 0 0 1 26 24v-5c0-6.065 4.935-11 11-11h6c6.065 0 11 4.935 11 11v5c0 .265-.105.52-.293.707l-2 2M40 54c-5.514 0-10-4.486-10-10h2c0 4.411 3.589 8 8 8s8-3.589 8-8h2c0 5.514-4.486 10-10 10"
        fill="#A5ADB1"
        className="fi-icon-illustrative-base-fill"
      />
      <path d="M0 0h80v80H0z" />
    </g>
  </svg>
);
export default SvgIconChild;
