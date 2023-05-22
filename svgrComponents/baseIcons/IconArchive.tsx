import * as React from 'react';
import { SVGProps } from 'react';
const SvgIconArchive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M22.998 0A1 1 0 0 1 24 1.001V18.6c0 .248-.093.488-.26.672l-4 4.401c-.005.006-.013.008-.019.013a.96.96 0 0 1-.273.196c-.019.01-.035.028-.055.037A1.009 1.009 0 0 1 19 24H1a1 1 0 0 1-1-1V5c0-.008.005-.015.005-.024.002-.076.025-.146.044-.217.014-.055.017-.112.039-.163.022-.049.061-.088.09-.133.042-.064.079-.131.135-.184.006-.005.008-.013.014-.019l4.401-4A1 1 0 0 1 5.4 0ZM18 6H2v16h16V6Zm4-2.586-2 2v14.999l2-2.2V3.414ZM13 8a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2Zm-1.186-6H5.787l-2.2 2h6.026l2.201-2Zm8.772 0h-5.799l-2.2 2h5.999l2-2Z"
      fill="#222"
      fillRule="evenodd"
      className="fi-icon-base-fill"
    />
  </svg>
);
export default SvgIconArchive;
