
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconLogoVerticalInvert as LogoVerticalInvert } from '../../svgrComponents/logoIcons/';
import { logoIconStyles } from '../utils/styles';
import { LogoIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconLogoVerticalInvert = styled((props: LogoIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <LogoVerticalInvert
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

const IconLogoVerticalInvert = (props: LogoIconProps) => {
  return <StyledIconLogoVerticalInvert {...props}/>
}

IconLogoVerticalInvert.displayName = 'Icon';
export { IconLogoVerticalInvert };
