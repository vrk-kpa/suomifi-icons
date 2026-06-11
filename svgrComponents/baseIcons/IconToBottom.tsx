import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconToBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="#212121" className="fi-icon-base-fill">
      <path d="M18.889 16c.613 0 1.11.448 1.111 1 0 .552-.498 1-1.111 1H5.11c-.613 0-1.11-.448-1.111-1 0-.552.498-1 1.111-1H18.89ZM17.293 6.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 1.414-1.414L12 11.586l5.293-5.293Z" />
    </g>
  </svg>
);
export default SvgIconToBottom;
