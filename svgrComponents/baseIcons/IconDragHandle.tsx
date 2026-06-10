import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconDragHandle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="#212121">
      <path d="M15.293 17.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L12 20.586l3.293-3.293ZM20.889 13c.613 0 1.111.448 1.111 1s-.498 1-1.111 1H3.11c-.613 0-1.11-.448-1.111-1 0-.552.498-1 1.111-1H20.89ZM20.889 9C21.502 9 22 9.448 22 10s-.498 1-1.111 1H3.11c-.613 0-1.11-.448-1.111-1 0-.552.498-1 1.111-1H20.89ZM11.293 1.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L12 3.414 8.707 6.707a1 1 0 0 1-1.414-1.414l4-4Z" />
    </g>
  </svg>
);
export default SvgIconDragHandle;
