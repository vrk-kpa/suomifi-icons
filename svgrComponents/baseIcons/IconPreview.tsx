import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconPreview = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="m12.707.295 7 7.002a.98.98 0 0 1 .294.656L20 8.004v3.998a1 1 0 1 1-2 0V9.004h-6a1 1 0 0 1-1-1V2.002H4v20h7a1 1 0 0 1 0 2H4c-1.101 0-2-.898-2-2v-20c0-1.102.899-2 2-2h7.942a.978.978 0 0 1 .765.293Zm4.294 14.707a4.002 4.002 0 0 1 3.446 6.03l1.26 1.263a1 1 0 0 1-1.414 1.414l-1.262-1.26a4 4 0 1 1-2.03-7.447Zm0 2a2 2 0 1 0 1.403 3.424l.01-.01.01-.01A2.002 2.002 0 0 0 17 17.002ZM13 3.417v3.587h3.586L13 3.417Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconPreview;
