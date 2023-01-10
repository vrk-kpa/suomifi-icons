import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="#222" fillRule="evenodd" className="fi-icon-base-fill">
      <path d="M20.353 20H3.648c-.616 0-1.136-.269-1.425-.737-.29-.468-.298-1.053-.022-1.605l2.93-5.153a1.001 1.001 0 0 1 1.74.99L4.305 18h15.39l-2.565-4.505a1 1 0 0 1 1.74-.99l2.904 5.106c.301.599.293 1.184.003 1.652-.289.468-.809.737-1.425.737" />
      <path d="M11.999 24c-2.206 0-4-1.794-4-4a1 1 0 0 1 2 0A2.002 2.002 0 0 0 14 20a1 1 0 0 1 2 0c0 2.206-1.795 4-4.002 4M18 8a1 1 0 0 1-1-1C17 4.243 14.758 2 12 2A5.005 5.005 0 0 0 7 7a1 1 0 0 1-2 0c0-3.86 3.139-7 6.998-7C15.859 0 19 3.14 19 7a1 1 0 0 1-1 1" />
      <path d="M6 14a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1M18 14a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1" />
    </g>
  </svg>
);
export default SvgIconAlert;
