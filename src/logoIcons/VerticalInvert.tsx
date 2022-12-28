
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { ReactComponent as VerticalInvert } from '../../assets/logoIcons/icon-vertical-invert.svg';
import { logoIconStyles } from '../utils/styles';
import { LogoIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const IconVerticalInvert = styled((props: LogoIconProps) => {
  const { className, mousePointer, ariaLabel, ...passProps } =
    props;
  return (
    <VerticalInvert
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

IconVerticalInvert.displayName = 'Icon';
export { IconVerticalInvert };
