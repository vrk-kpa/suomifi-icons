import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconMapLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M12 0c4.963 0 9 4.057 9 9.043 0 7.461-8.008 14.423-8.349 14.716a1 1 0 0 1-1.302 0C11.008 23.466 3 16.504 3 9.043 3 4.057 7.037 0 12 0Zm0 2C8.141 2 5 5.16 5 9.043c0 5.402 5.148 10.823 6.999 12.597C13.85 19.864 19 14.435 19 9.043 19 5.16 15.859 2 12 2Zm0 3.074c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4Zm0 2c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconMapLocation;
