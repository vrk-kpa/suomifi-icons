
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { ReactComponent as HorizontalInvert } from '../../assets/logoIcons/icon-horizontal-invert.svg';
import { logoIconStyles } from '../utils/styles';
import { LogoIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconHorizontalInvert = styled((props: LogoIconProps) => {
  const { className, mousePointer, ariaLabel, ...passProps } =
    props;
  return (
    <HorizontalInvert
      className={classnames(baseClassName, className, {
        [cursorPointerClassName]: !!mousePointer
      })}
      {...passProps}
      {...ariaLabelOrHidden(ariaLabel)}
      {...ariaFocusableNoLabel(ariaLabel)}
    />
  );
})`
  ${logoIconStyles}
`;

IconHorizontalInvert.displayName = 'Icon';
export { IconHorizontalInvert };
