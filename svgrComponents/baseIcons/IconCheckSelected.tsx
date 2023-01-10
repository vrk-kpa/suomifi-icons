import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconCheckSelected = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M14 2a1 1 0 0 1 .117 1.993L14 4H2v18h18V10a1 1 0 0 1 .883-.993L21 9a1 1 0 0 1 .993.883L22 10v13a1 1 0 0 1-.883.993L21 24H1a1 1 0 0 1-.993-.883L0 23V3a1 1 0 0 1 .883-.993L1 2h13ZM23.65.24a1 1 0 0 1 .185 1.31l-.076.1-12 14a1 1 0 0 1-1.374.139l-.092-.082-5-5a1 1 0 0 1 1.32-1.497l.094.083 4.236 4.235L22.241.349a1 1 0 0 1 1.41-.108Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconCheckSelected;
