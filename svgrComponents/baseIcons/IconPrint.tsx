import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconPrint = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M19 0a1 1 0 0 1 1 1v5h2c1.103 0 2 .897 2 2v10c0 1.103-.897 2-2 2h-2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3H2c-1.103 0-2-.897-2-2V8c0-1.103.897-2 2-2h2V1a1 1 0 0 1 1-1Zm-1 15H6v7h12v-7Zm4-7H2v10h2v-4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h2V8Zm-4-6H6v4h12V2Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconPrint;
