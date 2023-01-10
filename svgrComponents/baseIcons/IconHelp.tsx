import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconHelp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0Zm0 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Zm.165 14.986c.544.094.914.583.82 1.127l-.01.057a1 1 0 0 1-1.97-.34c.094-.544.612-.939 1.16-.844ZM12 4.944c2.205 0 4 1.842 4 4.107 0 1.375-.497 2.39-1.61 3.293-1.284 1.038-1.389 2.174-1.394 2.46v.055l.001.012a1.007 1.007 0 0 1-1 1.064.991.991 0 0 1-.998-1.023v-.12c.013-.647.23-2.463 2.131-4.003.642-.52.87-.974.87-1.738 0-1.162-.897-2.107-2-2.107-1.14 0-2 .859-2 2a1 1 0 0 1-2 0c0-2.243 1.757-4 4-4Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconHelp;
