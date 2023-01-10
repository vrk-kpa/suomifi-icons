import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconUpload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M23 15.01a1 1 0 0 1 1 1v6c0 1.103-.897 2-2 2H2c-1.103 0-2-.897-2-2v-6a1 1 0 1 1 2 0v6h20v-6a1 1 0 0 1 1-1ZM12 0c.317 0 .6.147.783.377l4.923 4.915a.999.999 0 1 1-1.412 1.416L13 3.42V17a1 1 0 1 1-2 0V3.42L7.706 6.708a1 1 0 0 1-1.32.081l-.094-.083a.999.999 0 0 1 .002-1.414L11.214.38A.998.998 0 0 1 12 0Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconUpload;
