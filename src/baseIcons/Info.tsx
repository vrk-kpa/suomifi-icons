
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import Info from '../../assets/baseIcons/icon-info.svg';
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

const IconInfo = styled((props: SuomifiIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, ...passProps } =
    props;
  return (
    <Info
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

IconInfo.displayName = 'Icon';
export default IconInfo;
