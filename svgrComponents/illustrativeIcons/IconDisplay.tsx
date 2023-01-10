import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconDisplay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M12 13c-1.103 0-2 .897-2 2v40c0 1.103.897 2 2 2h56c1.103 0 2-.897 2-2V15c0-1.103-.897-2-2-2H12Zm56 46H12c-2.206 0-4-1.794-4-4V15c0-2.206 1.794-4 4-4h56c2.206 0 4 1.794 4 4v40c0 2.206-1.794 4-4 4Z"
        fill="#A5ADB1"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        fill="#A5ADB1"
        d="m47.02 68.196-2-10 1.96-.392 2 10-1.96.392M32.98 68.196l-1.96-.392 2-10 1.96.392-2 10"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        fill="#A5ADB1"
        d="M27 69h26v-2H27zM39 55h2v-2h-2z"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        fill="#E97025"
        d="M39 45h2v-2h-2zM43 45h2v-2h-2zM47 45h2v-2h-2zM35 45h2v-2h-2zM31 45h2v-2h-2z"
        className="fi-icon-illustrative-highlight-fill"
      />
      <path
        d="M14 49h52V17H14v32Zm-2 2h56V15H12v36Z"
        fill="#A5ADB1"
        className="fi-icon-illustrative-base-fill"
      />
      <path d="M0 0h80v80H0z" />
    </g>
  </svg>
);
export default SvgIconDisplay;
