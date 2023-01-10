import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconRadioButtonLarge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <circle className="fi-icon-radio-base" cx={15} cy={15} r={14.5} />
      <circle className="fi-icon-radio-checked" cx={15} cy={15} r={8} />
    </g>
  </svg>
);
export default SvgIconRadioButtonLarge;
