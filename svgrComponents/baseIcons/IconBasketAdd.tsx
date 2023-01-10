import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconBasketAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M20 16a1 1 0 0 1 .994.884l.006.117V19h2a1 1 0 0 1 .117 1.994L23 21 21 21v2a1 1 0 0 1-1.993.117L19 23.001V21h-2a1 1 0 0 1-.116-1.993l.116-.006L19 19v-2a1 1 0 0 1 1-1ZM16.925.619l.038.11 1.773 6.273H23a1 1 0 0 1 .997 1.08l-.016.116-1 5a1 1 0 0 1-1.977-.277l.016-.115L21.78 9H2.251l2.482 11H13a1 1 0 0 1 .994.883l.006.117a1 1 0 0 1-.883.993L13 22H3.934a1 1 0 0 1-.943-.67l-.032-.11-2.934-13a1 1 0 0 1 .857-1.214L1 7.001h4.263L7.038.728a1 1 0 0 1 1.95.43l-.026.114-1.62 5.729h9.315l-1.619-5.729a1 1 0 0 1 1.837-.757l.05.103Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconBasketAdd;
