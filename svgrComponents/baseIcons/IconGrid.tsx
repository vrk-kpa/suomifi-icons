import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconGrid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.999 9H2V2h7.002l-.003 7Zm.003-9H2C.897 0 0 .897 0 2v7c0 1.103.897 2 2 2h7.002c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2Zm12.995 9H15V2h7l-.003 7ZM22 0h-7c-1.103 0-2 .897-2 2v7c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2ZM9 22H2v-7h7.002l-.003 7Zm.003-9H2c-1.103 0-2 .897-2 2v7c0 1.103.897 2 2 2h7.002c1.103 0 2-.897 2-2v-7c0-1.103-.897-2-2-2Zm12.995 9H15v-7h7l-.003 7ZM22 13h-7c-1.103 0-2 .897-2 2v7c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2v-7c0-1.103-.897-2-2-2Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconGrid;
