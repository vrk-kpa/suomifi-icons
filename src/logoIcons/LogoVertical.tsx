
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconLogoVertical as LogoVertical } from '../../svgrComponents/logoIcons/';
import { logoIconStyles } from '../utils/styles';
import { LogoIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconLogoVertical = styled((props: LogoIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
    props;
  return (
    <LogoVertical
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

const IconLogoVertical = (props: LogoIconProps) => {
  return <StyledIconLogoVertical {...props}/>
}

IconLogoVertical.displayName = 'Icon';
export { IconLogoVertical };
