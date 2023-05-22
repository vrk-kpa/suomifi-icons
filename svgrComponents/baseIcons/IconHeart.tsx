import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconHeart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M17.3 2c1.715 0 3.43.667 4.731 2.001 2.603 2.668 2.603 7.033 0 9.701l-8.608 8.822a1.992 1.992 0 0 1-1.432.604 1.99 1.99 0 0 1-1.43-.604l-8.609-8.822c-2.603-2.668-2.603-7.033 0-9.7A6.593 6.593 0 0 1 6.684 2c1.716 0 3.43.667 4.732 2.001l.574.588.575-.588a6.59 6.59 0 0 1 4.733-2Zm0 2c-1.25 0-2.423.497-3.303 1.397l-.574.59-1.432 1.466-1.43-1.467-.575-.589A4.58 4.58 0 0 0 6.686 4c-1.25 0-2.423.497-3.303 1.398-1.857 1.904-1.857 5.003.001 6.907l8.607 8.823 8.61-8.823c1.857-1.904 1.857-5.003 0-6.907A4.58 4.58 0 0 0 17.298 4Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconHeart;
