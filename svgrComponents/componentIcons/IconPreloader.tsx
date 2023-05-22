import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconPreloader = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 40 40" width="1em" height="1em" {...props}>
    <path
      d="M20 0v3C10.611 3 3 10.611 3 20s7.611 17 17 17c9.28 0 16.825-7.437 16.997-16.677L37 20h3c0 11.046-8.954 20-20 20S0 31.046 0 20C0 9.07 8.769.187 19.656.003L20 0Z"
      fill="#00347A"
      className="fi-icon-component-brand-fill"
    />
  </svg>
);
export default SvgIconPreloader;
