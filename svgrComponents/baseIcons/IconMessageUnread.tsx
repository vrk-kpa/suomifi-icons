import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconMessageUnread = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="#222" className="fi-icon-base-fill">
      <path d="M14.387 6a1 1 0 0 1 0 2H3.56l6.954 5.717 6.369-5.003a1 1 0 0 1 1.236 1.573l-7.002 5.5c-.369.29-.89.283-1.253-.014L2 9.306v9.943c0 .427.338.75.728.75h15.545a.74.74 0 0 0 .727-.75v-7a1 1 0 1 1 2 0v7c0 1.506-1.209 2.75-2.727 2.75H2.728C1.209 22 0 20.756 0 19.25V8.75C0 7.244 1.209 6 2.728 6h11.659ZM23 8a1 1 0 1 1 0 2h-1a1 1 0 0 1 0-2h1ZM21.47 3.123a1 1 0 0 1 1.407 1.407l-.07.076-.6.601a1 1 0 1 1-1.414-1.414l.6-.6.077-.07ZM17 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Z" />
    </g>
  </svg>
);
export default SvgIconMessageUnread;
