import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconPerson = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.15 13.407C6.692 12.327 5 9.882 5 7c0-3.9 3.1-7 7-7s7 3.1 7 7c0 2.882-1.692 5.327-4.15 6.407C18.924 14.59 22 18.212 22 22.3v.7c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1v-.7c0-4.088 3.076-7.709 7.15-8.893ZM7 7c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5Zm5 8c4.2 0 7.8 3.2 8 7H4c.2-3.8 3.8-7 8-7Z"
      fill="#222"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconPerson;
