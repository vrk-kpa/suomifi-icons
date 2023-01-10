import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconMap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M6 15a1 1 0 1 1 0 2H4.66l-2.143 5h18.966l-2.142-5h-1.34a1 1 0 1 1 0-2h2c.4 0 .761.238.918.606l3 7A.997.997 0 0 1 23 24H1a1.001 1.001 0 0 1-.919-1.394l3-7a.999.999 0 0 1 .92-.606h2Zm6-14c3.86 0 7 3.073 7 6.85 0 5.56-6.1 10.702-6.36 10.919a1 1 0 0 1-1.28 0C11.101 18.552 5 13.41 5 7.85 5 4.073 8.141 1 12 1Zm0 2C9.243 3 7 5.175 7 7.85c0 3.669 3.522 7.398 5 8.801 1.478-1.403 5-5.132 5-8.801C17 5.175 14.757 3 12 3Zm0 3c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconMap;
