import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M13 0c1.654 0 3 1.346 3 3v1h5a1 1 0 0 1 0 2h-1.091l-1.804 16.117A2.143 2.143 0 0 1 16 24H8a2.141 2.141 0 0 1-2.104-1.885L4.119 6H3a1 1 0 0 1 0-2h5V3c0-1.654 1.346-3 3-3h2Zm4.898 6H6.132l1.753 15.896c.004.04.075.104.115.104h8c.041 0 .113-.065.118-.105L17.898 6ZM13 2h-2c-.551 0-1 .448-1 1v1h4V3c0-.552-.449-1-1-1Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconRemove;
