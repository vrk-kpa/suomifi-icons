import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconLinkBreadcrumb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      fill="#222"
      d="M6 18v-2.12l5.902-2.328 3.748-1.492v-.12l-3.748-1.492L6 8.119V6l12 5.015v1.97z"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconLinkBreadcrumb;
