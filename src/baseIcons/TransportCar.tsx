
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import TransportCar from '../../assets/baseIcons/icon-transport-car.svg';
import { iconStyles } from '../utils/styles';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const baseClassName = 'fi-icon';
const cursorPointerClassName = `${baseClassName}--cursor-pointer`;

interface SuomifiIconProps {
  /** Custom classname to extend or customize */
  className?: string;
  /** Aria-label for SVG, undefined hides SVG from screen reader
   * @default undefined
   */
  ariaLabel?: string;
  /** Show mouse cursor as hand-pointer */
  mousePointer?: boolean;
  /** Custom fill color */
  color?: string;
  /** Custom fill color, takes precedence over color if both are provided */
  fill?: string;
  testId?: string;
  // Allow passing unsupported custom props to SVG without providing an API
  [key: string]: any;
}

const IconTransportCar = styled((props: SuomifiIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, ...passProps } =
    props;
  return (
    <TransportCar
      className={classnames(baseClassName, className, {
        [cursorPointerClassName]: !!mousePointer
      })}
      {...passProps}
      {...ariaLabelOrHidden(ariaLabel)}
      {...ariaFocusableNoLabel(ariaLabel)}
    />
  );
})`
  ${({ color, fill }) => iconStyles({ color, fill })}
`;

IconTransportCar.displayName = 'Icon';
export default IconTransportCar;
