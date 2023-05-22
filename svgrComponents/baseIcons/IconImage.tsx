import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M22 2c1.103 0 2 .897 2 2v16c0 1.103-.897 2-2 2H2c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2h20ZM7.947 10.362 2 15.458V20h19.997l-.001-1.642-4.156-4.988-3.24 2.43a1 1 0 0 1-1.307-.093l-5.345-5.345ZM22 4H2v8.825l5.35-4.584a1 1 0 0 1 1.357.052l5.386 5.387L17.4 11.2a1.001 1.001 0 0 1 1.37.16l3.228 3.874L22 4Zm-5.498 2a1.501 1.501 0 0 1 0 3A1.502 1.502 0 0 1 15 7.5c0-.827.674-1.5 1.502-1.5Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconImage;
