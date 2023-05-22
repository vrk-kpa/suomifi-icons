import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconMailbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M32 54h-2V25c0-3.859-3.141-7-7-7s-7 3.141-7 7h-2c0-4.963 4.037-9 9-9s9 4.037 9 9v29"
        fill="#A5ADB1"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        d="M72 55H14v-4h2v2h54V25c0-3.859-3.141-7-7-7H53v-2h10c4.963 0 9 4.037 9 9v30M23 18h12v-2H23z"
        fill="#A5ADB1"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        fill="#A5ADB1"
        d="M37 70h2V54h-2zM49 70h2V54h-2zM37 27h2V10h-2z"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        fill="#A5ADB1"
        d="M51 20H38v-2h11v-6H38v-2h13v10M38 27c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2Zm0 6c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4Z"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        fill="#E97025"
        d="M28 49H8V27h20v2H10v18h18v2"
        className="fi-icon-illustrative-highlight-fill"
      />
      <path
        fill="#E97025"
        d="M28 35H14.586l-6.293-6.293 1.414-1.414L15.414 33H28v2"
        className="fi-icon-illustrative-highlight-fill"
      />
      <path
        fill="#A5ADB1"
        d="M38 59h12v-2H38zM34 49h34v-2H34z"
        className="fi-icon-illustrative-base-fill"
      />
      <path d="M0 0h80v80H0z" />
    </g>
  </svg>
);
export default SvgIconMailbox;
