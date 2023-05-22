import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconToggle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 37 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <rect
        className="fi-icon-toggle-base"
        x={0.5}
        y={3.5}
        width={36}
        height={13}
        rx={6.5}
      />
      <circle className="fi-icon-toggle-knob" cx={27} cy={10} r={10} />
      <path
        className="fi-icon-toggle-checkmark"
        d="M31.724 7.692 26 13.71a.91.91 0 0 1-1.333 0l-2.391-2.512a1.03 1.03 0 0 1 0-1.403.911.911 0 0 1 1.333 0l1.724 1.813 5.057-5.316a.91.91 0 0 1 1.334 0 1.026 1.026 0 0 1 0 1.401"
      />
    </g>
  </svg>
);
export default SvgIconToggle;
