import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconChartPie = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M38 72C21.458 72 8 58.542 8 42s13.458-30 30-30v2c-15.439 0-28 12.561-28 28s12.561 28 28 28 28-12.561 28-28h2c0 16.542-13.458 30-30 30"
        fill="#A5ADB1"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        d="M43 37h26.982C69.466 22.354 57.646 10.534 43 10.018V37Zm28 2H42a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1c16.542 0 30 13.458 30 30a1 1 0 0 1-1 1Z"
        fill="#E97025"
        className="fi-icon-illustrative-highlight-fill"
      />
      <path
        fill="#E97025"
        d="M47 33h2v-2h-2zM51 33h2v-2h-2zM55 33h2v-2h-2z"
        className="fi-icon-illustrative-highlight-fill"
      />
      <path
        d="M57.293 62.707 37.586 43H9v-2h29c.266 0 .52.105.707.293l20 20-1.414 1.414"
        fill="#A5ADB1"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        fill="#A5ADB1"
        d="m18.707 62.707-1.414-1.414 20-20 1.414 1.414-20 20"
        className="fi-icon-illustrative-base-fill"
      />
    </g>
  </svg>
);
export default SvgIconChartPie;
