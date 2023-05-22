import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconBasket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="m16.924 1.617.038.11L18.735 8 23 8a1 1 0 0 1 .995 1.103l-.02.117-2.933 13a1 1 0 0 1-.976.78H3.933a1 1 0 0 1-.975-.78l-2.933-13A1 1 0 0 1 1 8h4.264l1.774-6.272a1 1 0 0 1 1.95.43l-.026.114-1.619 5.727h9.313l-1.618-5.727a1 1 0 0 1 1.886-.655ZM21.748 10H2.25l2.482 11h14.534l2.482-11Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconBasket;
