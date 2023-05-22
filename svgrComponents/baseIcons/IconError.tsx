import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconError = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0Zm0 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Zm.71 15.29c.18.19.29.44.29.71 0 .26-.11.52-.29.71-.19.18-.45.29-.71.29-.26 0-.521-.11-.71-.29-.181-.19-.29-.45-.29-.71 0-.27.109-.52.29-.71.37-.37 1.04-.37 1.42 0ZM12 5a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconError;
