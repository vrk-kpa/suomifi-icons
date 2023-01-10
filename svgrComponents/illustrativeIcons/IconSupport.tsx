import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconSupport = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="M44 55v-2c4.963 0 9-4.037 9-9h2c0 6.065-4.935 11-11 11M36 55c-6.065 0-11-4.935-11-11h2c0 4.963 4.037 9 9 9v2M27 36h-2c0-6.065 4.935-11 11-11v2c-4.963 0-9 4.037-9 9M55 36h-2c0-4.963-4.037-9-9-9v-2c6.065 0 11 4.935 11 11M44 70v-2c13.233 0 24-10.767 24-24h2c0 14.337-11.663 26-26 26M70 36h-2c0-13.233-10.767-24-24-24v-2c14.337 0 26 11.663 26 26M36 70c-14.337 0-26-11.663-26-26h2c0 13.233 10.767 24 24 24v2M12 36h-2c0-14.337 11.663-26 26-26v2c-13.233 0-24 10.767-24 24"
        fill="#A5ADB1"
        className="fi-icon-illustrative-base-fill"
      />
      <path
        d="M37 10v16h6.002L43 10h-6Zm6 18h-6c-1.103 0-2-.897-2-2V10c0-1.103.897-2 2-2h6c1.103 0 2 .897 2 2v16c0 1.103-.897 2-2 2ZM37 54v16h6.002L43 54h-6Zm6 18h-6c-1.103 0-2-.897-2-2V54c0-1.103.897-2 2-2h6c1.103 0 2 .897 2 2v16c0 1.103-.897 2-2 2ZM54 37v6h16.002L70 37H54Zm16 8H54c-1.103 0-2-.897-2-2v-6c0-1.103.897-2 2-2h16c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2ZM10 37v6h16.002L26 37H10Zm16 8H10c-1.103 0-2-.897-2-2v-6c0-1.103.897-2 2-2h16c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2Z"
        fill="#E97025"
        className="fi-icon-illustrative-highlight-fill"
      />
      <path
        fill="#E97025"
        d="M39 24h2v-2h-2zM56 41h2v-2h-2zM39 58h2v-2h-2zM22 41h2v-2h-2z"
        className="fi-icon-illustrative-highlight-fill"
      />
      <path d="M0 0h80v80H0z" />
    </g>
  </svg>
);
export default SvgIconSupport;
