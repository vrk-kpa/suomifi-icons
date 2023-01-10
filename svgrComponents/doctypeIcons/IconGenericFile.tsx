import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconGenericFile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <g fillRule="nonzero" fill="none">
      <path
        d="M2 1.333C2 .597 2.599 0 3.327 0h12.006L22 6.667v16.002c0 .735-.599 1.331-1.328 1.331H3.328A1.328 1.328 0 0 1 2 22.667V1.333Z"
        fill="#ECEDEE"
      />
      <path
        d="M2 22h20v.67A1.33 1.33 0 0 1 20.67 24H3.33A1.33 1.33 0 0 1 2 22.67V22Z"
        fill="#00347A"
      />
      <path
        d="M15.333 0v5.334a1.33 1.33 0 0 0 1.333 1.333H22L15.333 0Z"
        fill="#C8CDD0"
      />
      <path
        d="M5.344 10.9a.4.4 0 1 1 0-.8h10.335a.4.4 0 1 1 0 .8H5.344ZM5.344 12.9a.4.4 0 1 1 0-.8h10.335a.4.4 0 1 1 0 .8H5.344ZM5.344 14.9a.4.4 0 1 1 0-.8h10.335a.4.4 0 1 1 0 .8H5.344ZM5.318 16.9a.4.4 0 1 1 0-.8h6.364a.4.4 0 1 1 0 .8H5.318Z"
        fill="#00347A"
      />
    </g>
  </svg>
);
export default SvgIconGenericFile;
