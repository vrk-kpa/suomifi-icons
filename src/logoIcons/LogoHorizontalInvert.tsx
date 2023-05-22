
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconLogoHorizontalInvert as LogoHorizontalInvert } from '../../svgrComponents/logoIcons/';
import { logoIconStyles } from '../utils/styles';
import { LogoIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconLogoHorizontalInvert = styled((props: LogoIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <LogoHorizontalInvert
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

const IconLogoHorizontalInvert = (props: LogoIconProps) => {
  return <StyledIconLogoHorizontalInvert {...props}/>
}

IconLogoHorizontalInvert.displayName = 'Icon';
export { IconLogoHorizontalInvert };
