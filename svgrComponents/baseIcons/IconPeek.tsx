import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconPeek = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="#222" fillRule="evenodd" className="fi-icon-base-fill">
      <path d="M12 5C5.216 5 2 10.615 2 12c0 1.385 3.216 7 10 7s10-5.615 10-7c0-1.385-3.216-7-10-7m0 16c-7.795 0-12-6.388-12-9s4.205-9 12-9 12 6.388 12 9-4.205 9-12 9" />
      <path d="M12 9c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3m0 8c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5" />
    </g>
  </svg>
);
export default SvgIconPeek;
