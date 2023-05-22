import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconFullscreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.707 8.293 3.414 2H6a1 1 0 0 0 0-2H1a1.003 1.003 0 0 0-1 1v5a1 1 0 0 0 2 0V3.414l6.293 6.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414M23.923.618a.998.998 0 0 0-.541-.54A.992.992 0 0 0 23 0h-5a1 1 0 0 0 0 2h2.586l-6.293 6.293a.999.999 0 1 0 1.414 1.414L22 3.414V6a1 1 0 1 0 2 0V1a.992.992 0 0 0-.077-.382m0 22.764A.992.992 0 0 0 24 23V18a1 1 0 1 0-2 0v2.586l-6.293-6.293a.999.999 0 1 0-1.414 1.414L20.586 22H18a1 1 0 1 0 0 2h5c.13 0 .26-.027.382-.078a.998.998 0 0 0 .54-.54M9.708 14.293a.999.999 0 0 0-1.414 0L2 20.586V18a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2H3.414l6.293-6.293a.999.999 0 0 0 0-1.414"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconFullscreen;
