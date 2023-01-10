import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconCalendarChecked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M17 0a1 1 0 0 1 .993.883L18 1v1h4c1.052 0 1.918.818 1.995 1.851L24 4v18a2.003 2.003 0 0 1-1.851 1.995L22 24H2a2.003 2.003 0 0 1-1.995-1.851L0 22V4c0-1.052.818-1.918 1.851-1.995L2 2h4V1A1 1 0 0 1 7.993.883L8 1v1h8V1a1 1 0 0 1 1-1ZM6 4H2v18h20V4h-4v1a1 1 0 0 1-1.993.117L16 5V4H8v1a1 1 0 0 1-1.993.117L6 5V4Zm10.652 6.242a1 1 0 0 1 .182 1.31l-.076.1-5.155 6a1 1 0 0 1-1.394.12l-.091-.086-2.845-3.016a1 1 0 0 1 1.363-1.458l.091.086 2.083 2.207 4.432-5.157a1 1 0 0 1 1.41-.106Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconCalendarChecked;
