
import React from 'react';
import { default as styled } from 'styled-components';
import classnames from 'classnames';
import { IconVerticalInvert as VerticalInvert } from '../../svgrComponents/logoIcons/';
import { logoIconStyles } from '../utils/styles';
import { LogoIconProps } from './iconInterface';
import { baseClassName, cursorPointerClassName } from '../utils/classes';
import { ariaFocusableNoLabel, ariaLabelOrHidden } from '../utils/aria';

const StyledIconVerticalInvert = styled((props: LogoIconProps) => {
  const { className, mousePointer, ariaLabel, color, fill, baseColor, highlightColor, ...passProps } =
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

const IconVerticalInvert = (props: LogoIconProps) => {
  return <StyledIconVerticalInvert {...props}/>
}

IconVerticalInvert.displayName = 'Icon';
export { IconVerticalInvert };
