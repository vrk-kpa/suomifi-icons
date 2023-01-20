
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconLogoHorizontal as LogoHorizontal } from '../../svgrComponents/logoIcons/';
import { logoIconStyles } from '../utils/styles';
import { LogoIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconLogoHorizontal = styled((props: LogoIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <LogoHorizontal
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

const IconLogoHorizontal = (props: LogoIconProps) => {
  return <StyledIconLogoHorizontal {...props}/>
}

IconLogoHorizontal.displayName = 'Icon';
export { IconLogoHorizontal };
