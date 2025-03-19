import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="#222" className="fi-icon-base-fill">
      <path d="M19 8h-1V6c0-3.31-2.69-6-6-6S6 2.69 6 6v2H5c-1.65 0-3 1.35-3 3v10c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3V11c0-1.65-1.35-3-3-3ZM8 6c0-2.21 1.79-4 4-4s4 1.79 4 4v2H8V6Zm12 15c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V11c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10Z" />
      <path d="M12 12c-1.1 0-2 .9-2 2 0 .74.41 1.38 1 1.72V18c0 .55.45 1 1 1s1-.45 1-1v-2.28A2 2 0 0 0 14 14c0-1.1-.9-2-2-2Z" />
    </g>
  </svg>
);
export default SvgIconLock;
