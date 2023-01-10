import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="m12.876 1.48 10.915 19.844a1 1 0 0 1-.771 1.637H1a1 1 0 0 1-.876-1.482l11-20c.35-.639 1.401-.639 1.752 0ZM12 4.035 2.691 20.961h18.617L12 4.036Zm.712 13.215c.18.19.29.45.29.71a1.009 1.009 0 0 1-1 1c-.27 0-.52-.11-.71-.29-.19-.19-.29-.45-.29-.71 0-.26.1-.52.29-.71.37-.37 1.05-.37 1.42 0ZM12 8.961a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconWarning;
