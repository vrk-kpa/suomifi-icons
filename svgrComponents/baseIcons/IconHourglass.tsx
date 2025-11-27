import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconHourglass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 0a1 1 0 1 1 0 2h-2v3.288a7 7 0 0 1-3.858 6.256l-.818.41-.098.046.098.046.818.41A7 7 0 0 1 18 18.712V22h2a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h2v-3.33a7 7 0 0 1 3.986-6.318l.7-.333.04-.019-.04-.019-.7-.333A7 7 0 0 1 6 5.329V2H4a1 1 0 0 1 0-2h16Zm-7.574 13.833a1 1 0 0 0-.88-.009l-.698.334A5 5 0 0 0 8 18.671V22h8v-3.288a5 5 0 0 0-2.756-4.468l-.818-.411ZM8 5.329a5 5 0 0 0 2.848 4.513l.699.334a1 1 0 0 0 .879-.009l.818-.411A5 5 0 0 0 16 5.288V2H8v3.33Z"
      fill="#222"
      clipRule="evenodd"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconHourglass;
