import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconLinkExternal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M12 4a1 1 0 0 1 0 2H2v16h16V12a1 1 0 0 1 2 0v10c0 1.103-.897 2-2 2H2c-1.103 0-2-.897-2-2V6c0-1.103.897-2 2-2h10Zm11-4a1 1 0 0 1 1 1v6.657a1 1 0 0 1-2 0l-.001-4.242-9.792 9.792a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L20.586 2h-4.243a1 1 0 0 1 0-2H23Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconLinkExternal;
