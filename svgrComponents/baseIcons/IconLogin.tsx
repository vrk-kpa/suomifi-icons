import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconLogin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M22.01 0c1.103 0 2 .897 2 2v20c0 1.103-.897 2-2 2H10c-1.103 0-2-.897-2-2v-5a1 1 0 0 1 2 0v5h12.01V2H10v5a1 1 0 0 1-2 0V2c0-1.103.897-2 2-2h12.01Zm-9.717 7.293a.999.999 0 0 1 1.414 0l4 4a.999.999 0 0 1 .216 1.089.999.999 0 0 1-.216.325l-4 4a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L14.586 13H1a1 1 0 0 1 0-2h13.586l-2.293-2.293a.999.999 0 0 1 0-1.414Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconLogin;
