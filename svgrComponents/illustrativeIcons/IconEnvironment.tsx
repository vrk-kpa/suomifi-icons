import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconEnvironment = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <path
          d="M72 72.1H8V48h1.3C29 48 47.6 59 54.1 69.3h15.2V42.8c-7.1.1-9.4.8-10.1 1.2L58 41.6c2-1 6.2-1.5 12.6-1.5H72v32Zm-61.3-2.8h40.2c-6.1-8.2-22-18.2-40.2-18.6v18.6Z"
          fill="#A5ADB1"
          className="fi-icon-illustrative-base-fill"
        />
        <path
          d="M32.9 54.3 31 52.4c5.1-5.1 14-8.4 16.9-8.4v2.7c-2.1.1-10.3 2.9-15 7.6Z"
          fill="#A5ADB1"
          className="fi-icon-illustrative-base-fill"
        />
        <path
          d="M25.3 29.3a6.7 6.7 0 0 1 0-13.4C29 16 32 19 32 22.7c0 3.7-3 6.6-6.7 6.6Zm0-10.5c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4ZM53.3 52c-4.7 0-6.7-1.9-6.7-6.7 0-4.6 4.9-14.2 5.5-15.3l1.2-2.3 1.2 2.3c.6 1.1 5.5 10.7 5.5 15.3 0 4.8-1.9 6.7-6.7 6.7Zm0-18.2c-1.7 3.6-4 9-4 11.7 0 3.3.7 4 4 4s4-.7 4-4c0-2.7-2.3-8.3-4-11.7Z"
          fill="#E97025"
          className="fi-icon-illustrative-highlight-fill"
        />
        <path
          fill="#E97025"
          d="M52 44h2.7v13.3H52z"
          className="fi-icon-illustrative-highlight-fill"
        />
      </g>
      <path d="M0 0h80v80H0z" />
    </g>
  </svg>
);
export default SvgIconEnvironment;
