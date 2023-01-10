import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconSubDirectory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M1 6a1 1 0 0 1 1 1v4h18.585l-3.292-3.293a.999.999 0 1 1 1.414-1.414l4.991 4.992c.032.03.062.063.09.098l-.081-.09a1.005 1.005 0 0 1 .293.674v.066l-.003.052L24 12a1.007 1.007 0 0 1-.302.715l-4.991 4.992a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L20.585 13H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconSubDirectory;
