import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconFileGeneric = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M18 13c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1s.4-1 1-1h9c.6 0 1 .4 1 1zm-4 5H8c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1zm3-3H8c-.6 0-1 .4-1 1s.4 1 1 1h9c.6 0 1-.4 1-1s-.4-1-1-1zm4.5-6.4v13.9c0 1.1-.9 2-2 2h-14c-1.1 0-2-.9-2-2v-20c0-1.1.9-2 2-2h8.1c.1 0 .2 0 .3.1h.1c.1 0 .2.1.3.2l6.9 6.9c.1.2.3.5.3.9 0-.1 0 0 0 0zm-7-1.1h3.6l-3.6-3.6v3.6zm5 15v-13h-6c-.6 0-1-.4-1-1v-6h-7v20h14z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconFileGeneric;
