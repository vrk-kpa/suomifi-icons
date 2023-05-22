import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconLinkList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M8.713 7.23a1.01 1.01 0 0 1-.01-1.418l.107-.107a.993.993 0 0 1 1.41.003l5.073 5.084a1 1 0 0 1 0 1.416l-5.073 5.084a1.001 1.001 0 0 1-1.41.003l-.106-.107a.998.998 0 0 1 .009-1.419l4.26-4.269-4.26-4.27Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconLinkList;
