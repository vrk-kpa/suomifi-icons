import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconRadioButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <circle className="fi-icon-radio-base" cx={9} cy={9} r={8.5} />
      <circle className="fi-icon-radio-checked" cx={9} cy={9} r={4} />
    </g>
  </svg>
);
export default SvgIconRadioButton;
