import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M23 15.01a1 1 0 0 1 1 1v6c0 1.103-.897 2-2 2H2c-1.103 0-2-.897-2-2v-6a1 1 0 1 1 2 0v6h20v-6a1 1 0 0 1 1-1ZM12 0a1 1 0 0 1 1 1v13.589l3.294-3.287a.999.999 0 1 1 1.412 1.416l-4.999 4.99c-.03.03-.062.058-.096.084l.095-.084a1 1 0 0 1-.203.157l-.02.011a.925.925 0 0 1-.088.043l-.033.014a.891.891 0 0 1-.118.037.994.994 0 0 1-.606-.037l-.033-.014a.926.926 0 0 1-.088-.043l-.02-.011a.937.937 0 0 1-.087-.057l-.02-.016a.957.957 0 0 1-.106-.093l-4.99-4.981a.999.999 0 1 1 1.412-1.416L11 14.589V1a1 1 0 0 1 1-1Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconDownload;
