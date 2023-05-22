import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M9 3c.021 0 .039.011.061.012a1 1 0 0 1 .265.054c.032.011.064.019.094.034.102.047.2.108.284.191l.002.001 5.892 5.892a.997.997 0 0 1 .422.816l-.009.05-.011.049V22a2.002 2.002 0 0 1-1.85 1.995L14 24H2a2.002 2.002 0 0 1-1.995-1.85L0 22V5c0-1.053.817-1.918 1.85-1.995L2 3h7ZM8 5H2v17h12V11H9a1 1 0 0 1-.993-.883L8 10V5Zm9-5c.022 0 .04.011.062.013a.96.96 0 0 1 .264.053c.032.011.064.019.094.034.103.047.2.108.284.191l.002.001 5.892 5.892A.997.997 0 0 1 24.02 7l-.009.05-.011.049V19a2.002 2.002 0 0 1-1.85 1.995L22 21h-4a1 1 0 0 1-.117-1.993L18 19h4V8h-5a1 1 0 0 1-.993-.883L16 7V2H9A1 1 0 0 1 8.883.007L9 0h8Zm-7 6.414V9h2.586L10 6.414Zm8-3V6h2.586L18 3.414Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconCopy;
